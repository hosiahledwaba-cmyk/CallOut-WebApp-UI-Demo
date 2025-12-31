import React, { useState } from 'react';
import { AppRoute } from '../../types';
import { Image, Tag, AlertTriangle } from 'lucide-react';

interface Props {
    onNavigate: (route: AppRoute) => void;
}

const DashboardCreate: React.FC<Props> = ({ onNavigate }) => {
  const [content, setContent] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
       <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Create New Post</h1>
        <p className="text-slate-500 dark:text-slate-400">Share updates, resources, or alerts with the community.</p>
      </header>

      <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
         <div className="p-6">
            <textarea 
                className="w-full h-40 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-4 focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white resize-none transition-all"
                placeholder="What would you like to share today?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            
            <div className="flex flex-wrap gap-4 mt-4">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm">
                    <Image size={18} /> Add Image
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm">
                    <Tag size={18} /> Add Tags
                </button>
                 <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-sm ml-auto">
                    <AlertTriangle size={18} /> Add Content Warning
                </button>
            </div>
         </div>
         
         <div className="bg-slate-50 dark:bg-slate-900/50 p-6 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
             <div className="flex items-center gap-2">
                 <input 
                    type="checkbox" 
                    id="preview-toggle" 
                    className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                    checked={showPreview}
                    onChange={(e) => setShowPreview(e.target.checked)}
                 />
                 <label htmlFor="preview-toggle" className="text-sm text-slate-600 dark:text-slate-400 select-none cursor-pointer">Show Live Preview</label>
             </div>
             <div className="flex gap-4">
                <button 
                    onClick={() => onNavigate(AppRoute.DASHBOARD_FEED)}
                    className="px-6 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors font-medium"
                >
                    Cancel
                </button>
                <button 
                    onClick={() => {
                        // Logic to save
                        onNavigate(AppRoute.DASHBOARD_FEED);
                    }}
                    className="px-6 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/30 transition-all font-medium"
                    disabled={!content.trim()}
                >
                    Post Update
                </button>
             </div>
         </div>
      </div>

      {showPreview && content && (
          <div className="mt-8 animate-fade-in-up">
              <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Preview</h3>
              <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 opacity-75">
                 <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">{content}</p>
              </div>
          </div>
      )}
    </div>
  );
};

export default DashboardCreate;