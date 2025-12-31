import React from 'react';
import { AppRoute } from '../types';
import { Moon, Sun } from 'lucide-react';

interface WebNavbarProps {
  onNavigate: (route: AppRoute) => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

const WebNavbar: React.FC<WebNavbarProps> = ({ onNavigate, darkMode, toggleTheme }) => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-800/50 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate(AppRoute.LANDING)}
        >
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30 group-hover:scale-105 transition-transform duration-300">
            C
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            Callout
          </span>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => onNavigate(AppRoute.LOGIN)}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white transition-colors"
            >
              Log In
            </button>
            <button 
              onClick={() => onNavigate(AppRoute.SIGNUP_ORG)}
              className="px-5 py-2.5 rounded-full font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default WebNavbar;