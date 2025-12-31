import React from 'react';
import { MOCK_RESOURCES } from '../../constants';
import { Search, Plus, ExternalLink, Trash2, Edit2, CheckCircle2 } from 'lucide-react';

const DashboardResources: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in-up">
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Resource Library</h1>
            <p className="text-slate-500 dark:text-slate-400">Manage the verified resources displayed to users.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
              <Plus size={18} /> Add Resource
          </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              />
          </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_RESOURCES.map(resource => (
              <div key={resource.id} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col hover:border-primary-500 transition-colors group">
                  <div className="flex justify-between items-start mb-4">
                      <span className="px-2 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 text-xs font-bold rounded uppercase tracking-wider">
                          {resource.category}
                      </span>
                      {resource.verified && <CheckCircle2 size={18} className="text-primary-500" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{resource.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow">{resource.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                      <a href={resource.link} className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
                          Visit Link <ExternalLink size={14} />
                      </a>
                      <div className="flex gap-2">
                          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                              <Edit2 size={16} />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 size={16} />
                          </button>
                      </div>
                  </div>
              </div>
          ))}
          
          {/* Add New Placeholder */}
          <button className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center p-6 text-slate-400 hover:text-primary-500 hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all min-h-[200px]">
             <Plus size={32} className="mb-2" />
             <span className="font-medium">Add New Resource</span>
          </button>
      </div>
    </div>
  );
};

export default DashboardResources;