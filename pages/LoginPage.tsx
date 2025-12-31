import React from 'react';
import { AppRoute } from '../types';
import { User, Building2, ArrowLeft } from 'lucide-react';

interface LoginProps {
  onNavigate: (route: AppRoute) => void;
  onLogin: (type: 'user' | 'org') => void;
}

const LoginPage: React.FC<LoginProps> = ({ onNavigate, onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-6">
      <div className="w-full max-w-4xl bg-card-light dark:bg-card-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-800">
        
        {/* Left Side: Visual */}
        <div className="md:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-white flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div>
             <button 
              onClick={() => onNavigate(AppRoute.LANDING)}
              className="flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-8"
             >
               <ArrowLeft size={16} /> Back
             </button>
             <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
             <p className="text-primary-100">Log in to access your dashboard, connect with your community, or manage your organization resources.</p>
           </div>
           <div className="text-sm text-primary-300">
             Your safety and privacy are our top priority.
           </div>
        </div>

        {/* Right Side: Options */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Choose Account Type</h3>
          
          <div className="space-y-4">
            <button 
              onClick={() => onLogin('user')}
              className="w-full p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 bg-white dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-slate-700/50 transition-all duration-300 group text-left flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors">
                <User className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600" />
              </div>
              <div>
                <span className="block font-bold text-slate-900 dark:text-white text-lg">Regular User</span>
                <span className="block text-sm text-slate-500 dark:text-slate-400">Report, seek help, and join communities</span>
              </div>
            </button>

            <button 
              onClick={() => onLogin('org')}
              className="w-full p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 bg-white dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-slate-700/50 transition-all duration-300 group text-left flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors">
                <Building2 className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600" />
              </div>
              <div>
                <span className="block font-bold text-slate-900 dark:text-white text-lg">Organization</span>
                <span className="block text-sm text-slate-500 dark:text-slate-400">Manage resources, verified posts, and support</span>
              </div>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an organization account? <button onClick={() => onNavigate(AppRoute.SIGNUP_ORG)} className="text-primary-600 font-semibold hover:underline">Register here</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;