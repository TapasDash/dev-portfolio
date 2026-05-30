import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { GoogleGenAI } from '@google/genai';

const resend = new Resend(process.env.RESEND_API_KEY);
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Pure functional summarization logic
const summarizeProblem = async (workflow: string): Promise<string> => {
  const prompt = `Summarize the following workflow description into a concise problem statement.
Output ONLY the summary statement.

Workflow:
"${workflow}"`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });

  return (response.text || workflow).trim().replace(/^"|"$/g, '');
};

export async function POST(req: Request) {
  try {
    const { name, email, workflow } = await req.json();

    if (!workflow || !email || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const summarized_problem = await summarizeProblem(workflow);

    const emailBody = `${name}, Your workflow audit request is logged. You stated your primary bottleneck is: '${summarized_problem}'. I am mapping this constraint now. I will send you a 90-second Loom teardown within 24 hours detailing exactly how a stateless Node.js pipeline replaces this manual process. Tapas Dash.`;

    // 1. Send the auto-reply to the Prospect
    const autoReplyEmail = resend.emails.send({
      from: 'Tapas Dash <onboarding@resend.dev>', // MUST BE VERIFIED DOMAIN IN PROD
      to: [email],
      subject: `Architecture Audit Initiated // ${name}`,
      text: emailBody,
    });

    // 2. Send the internal notification to the Architect
    const internalEmail = resend.emails.send({
      from: 'System <onboarding@resend.dev>', // Needs a verified domain in prod
      to: ['tapasdash017@gmail.com'],
      subject: `SYS.AUDIT_REQUEST: New Lead from ${name}`,
      text: `New Lead: ${name} (${email})\n\nWorkflow:\n${workflow}\n\nSummary:\n${summarized_problem}`,
    });

    await Promise.all([internalEmail, autoReplyEmail]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
