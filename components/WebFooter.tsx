import React from 'react';

const WebFooter: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-16 border-t border-slate-100 dark:border-slate-800">
      <div className="container max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">C</div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Callout</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Building safer communities through secure reporting and verified support networks.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Reporting</a></li>
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Communities</a></li>
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">For Organizations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Crisis Hotline</a></li>
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Safety Guide</a></li>
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Cookie Settings</a></li>
          </ul>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 text-sm">
        © 2024 Callout Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default WebFooter;