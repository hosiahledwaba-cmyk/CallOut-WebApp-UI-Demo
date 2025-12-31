import React, { useState } from 'react';
import { AppRoute } from '../types';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

interface SignupProps {
  onNavigate: (route: AppRoute) => void;
  onComplete: () => void;
}

const OrgSignupPage: React.FC<SignupProps> = ({ onNavigate, onComplete }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onComplete();
      }, 1500); // Mock API delay
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onNavigate(AppRoute.LANDING);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Organization Registration</h1>
          <p className="text-slate-600 dark:text-slate-400">Join Callout to support your community.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-10"></div>
          {[1, 2, 3].map((s) => (
            <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
              step >= s ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-110' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
            }`}>
              {step > s ? <Check size={16} /> : s}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          
          {loading && (
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
              <p className="font-semibold text-slate-700 dark:text-slate-300">Verifying Details...</p>
            </div>
          )}

          <form onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Organization Details</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Organization Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white transition-all" placeholder="e.g. SafeHarbor Initiative" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Registration / Tax ID</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white transition-all" placeholder="Required for verification" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Website</label>
                  <input type="url" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white transition-all" placeholder="https://" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Person</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                    </div>
                 </div>
                 <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" placeholder="name@organization.org" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Verification</h3>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-xl text-sm text-amber-800 dark:text-amber-200">
                  <p><strong>Note:</strong> We manually verify all organization accounts to ensure the safety of our users. You will need to upload proof of identity or organizational status.</p>
                </div>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                   <div className="text-slate-500 dark:text-slate-400 font-medium">Click to upload documents</div>
                   <div className="text-xs text-slate-400 mt-2">PDF, JPG, PNG (Max 5MB)</div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <button 
                onClick={handleBack}
                className="px-6 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 font-medium"
              >
                <ArrowLeft size={16} /> {step === 1 ? 'Cancel' : 'Back'}
              </button>
              <button 
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/30 transition-all transform active:scale-95 flex items-center gap-2 font-medium"
              >
                {step === 3 ? 'Complete Registration' : 'Next Step'} <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrgSignupPage;