import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Pure functional translation logic
const rewriteToTechnicalConstraint = async (rawInput: string): Promise<string> => {
  const prompt = `Rewrite the following workflow description into a highly concise, 1-sentence technical problem statement focusing on infrastructure and data pipelines. 
Example Input: "I spend hours looking at resumes."
Example Output: "Manual evaluation of inbound candidate data pipelines."
Output ONLY the 1-sentence rewrite.

Input:
"${rawInput}"`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });

  return (response.text || rawInput).trim().replace(/^"|"$/g, '');
};

export async function POST(req: Request) {
  try {
    const { workflow } = await req.json();

    if (!workflow) {
      return NextResponse.json({ error: 'Missing workflow data' }, { status: 400 });
    }

    const technicalStatement = await rewriteToTechnicalConstraint(workflow);

    return NextResponse.json({ enhancedText: technicalStatement });
  } catch (error) {
    console.error('Enhance AI error:', error);
    return NextResponse.json(
      { error: 'Failed to process technical constraint' },
      { status: 500 }
    );
  }
}
