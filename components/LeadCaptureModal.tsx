'use client';

import { useState } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

type ModalState = 'details' | 'email' | 'success';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [step, setStep] = useState<ModalState>('details');
  const [name, setName] = useState('');
  const [workflow, setWorkflow] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleEnhance = async () => {
    if (!workflow.trim()) return;
    setIsEnhancing(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/enhance-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workflow })
      });
      if (res.ok) {
        const data = await res.json();
        setWorkflow(data.enhancedText);
      } else {
        const errData = await res.json().catch(() => ({}));
        setErrorMsg(errData.error || 'Failed to enhance text. Check server/API keys.');
      }
    } catch (err) {
      console.error('Failed to enhance:', err);
      setErrorMsg('Network error: Unable to contact enhancement service.');
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleSubmit = async () => {
    if (!email.trim() || !name.trim() || !workflow.trim()) return;
    
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, workflow, email })
      });

      if (res.ok) {
        setStep('success');
      } else {
        const errData = await res.json().catch(() => ({}));
        setErrorMsg(errData.error || 'Failed to submit lead. Check API keys/logs.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Network error: Unable to submit lead.');
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep('details');
      setName('');
      setWorkflow('');
      setEmail('');
      setIsSubmitting(false);
      setIsEnhancing(false);
      setErrorMsg('');
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm select-none">
      <div className="bg-[#050505] border border-outline w-full max-w-xl flex flex-col relative shadow-2xl">
        
        {/* Header */}
        <div className="border-b border-outline p-4 sm:px-8 flex justify-between items-center">
          <span className="text-xs font-sans font-semibold tracking-wider text-white uppercase">
            Audit Request
          </span>
          <button 
            onClick={resetAndClose}
            className="text-on-surface-variant hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-8">
          
          {step === 'details' && (
            <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-sans font-semibold text-neutral-400 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name / Alias"
                  className="w-full bg-transparent border border-outline focus:border-white outline-none p-3 text-base transition-all normal-case font-sans text-white placeholder:text-on-surface-variant/50"
                  autoFocus
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-sans font-semibold text-neutral-400 uppercase tracking-wider">
                  Workflow Bottleneck
                </label>
                <div className="relative flex flex-col">
                  <textarea
                    value={workflow}
                    onChange={(e) => setWorkflow(e.target.value)}
                    disabled={isEnhancing}
                    placeholder="Describe the bottlenecks or manual problems you face (e.g., 'We spend 15 hours a week manually copy-pasting candidate data from PDFs to Salesforce...')"
                    className="w-full bg-transparent border border-outline focus:border-white outline-none p-4 pb-14 min-h-[140px] text-base resize-none transition-all normal-case font-sans text-white placeholder:text-on-surface-variant/50 disabled:opacity-50 disabled:cursor-wait"
                  />
                  {workflow.trim() && (
                    <button 
                      onClick={handleEnhance}
                      disabled={isEnhancing}
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[11px] font-mono font-bold bg-white text-black hover:bg-neutral-200 px-2.5 py-1.5 border border-outline transition-all disabled:opacity-50 disabled:cursor-wait select-none"
                    >
                      <Sparkles className={`w-3.5 h-3.5 ${isEnhancing ? 'animate-spin' : ''}`} />
                      {isEnhancing ? 'ENHANCING...' : 'Enhance with AI'}
                    </button>
                  )}
                </div>
                {errorMsg && (
                  <span className="text-red-500 text-xs font-mono mt-1 block">
                    Error: {errorMsg}
                  </span>
                )}
              </div>

              <div className="flex justify-end mt-2">
                <button 
                  onClick={() => setStep('email')}
                  disabled={!workflow.trim() || !name.trim() || isEnhancing}
                  className="bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 text-sm transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-display"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 'email' && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-sans font-semibold text-neutral-400 uppercase tracking-wider">
                  Delivery Email
                </label>
                <p className="text-xl sm:text-2xl font-display font-semibold text-white leading-tight">
                  Where should I send the architectural teardown?
                </p>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@company.com"
                className="w-full bg-transparent border border-outline focus:border-white outline-none p-4 text-base transition-all normal-case font-sans text-white placeholder:text-on-surface-variant/50"
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              />
              {errorMsg && (
                <span className="text-red-500 text-xs font-mono">
                  Error: {errorMsg}
                </span>
              )}
              <div className="flex justify-between items-center mt-2">
                <button 
                  onClick={() => setStep('details')}
                  className="text-on-surface-variant hover:text-white text-sm font-medium transition-colors normal-case font-sans"
                >
                  Back
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={!email.trim() || isSubmitting}
                  className="bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 text-sm transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-display"
                >
                  {isSubmitting ? 'Processing...' : 'Initiate Audit'}
                </button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="flex flex-col gap-6 items-start justify-center py-6 animate-in zoom-in duration-300">
              <div className="w-12 h-12 border border-outline flex items-center justify-center text-white mb-2">
                <div className="w-4 h-4 bg-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">Audit initiated.</h3>
              <p className="text-base text-on-surface-variant max-w-sm font-sans normal-case leading-relaxed">
                The workflow data has been secured. A custom architectural teardown will be delivered to your inbox shortly.
              </p>
              <button 
                onClick={resetAndClose}
                className="mt-4 bg-transparent border border-outline hover:border-white text-white font-semibold px-6 py-3 text-sm transition-all font-display"
              >
                Close Window
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
