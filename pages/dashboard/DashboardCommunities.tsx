import React from 'react';
import { MOCK_COMMUNITIES } from '../../constants';
import { Users, ShieldCheck, Settings } from 'lucide-react';

const DashboardCommunities: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in-up">
       <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Your Communities</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage support groups and discussion circles.</p>
      </header>

      <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                      <th className="px-6 py-4 font-semibold text-sm text-slate-500 uppercase tracking-wider">Community Name</th>
                      <th className="px-6 py-4 font-semibold text-sm text-slate-500 uppercase tracking-wider">Members</th>
                      <th className="px-6 py-4 font-semibold text-sm text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 font-semibold text-sm text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {MOCK_COMMUNITIES.map(comm => (
                      <tr key={comm.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4">
                              <div className="font-semibold text-slate-900 dark:text-white">{comm.name}</div>
                              <div className="text-sm text-slate-500">{comm.description}</div>
                          </td>
                          <td className="px-6 py-4">
                              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                  <Users size={16} />
                                  {comm.members.toLocaleString()}
                              </div>
                          </td>
                          <td className="px-6 py-4">
                              {comm.isModerated ? (
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold uppercase">
                                      <ShieldCheck size={12} /> Moderated
                                  </span>
                              ) : (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold uppercase">
                                      Open
                                  </span>
                              )}
                          </td>
                          <td className="px-6 py-4 text-right">
                              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                  <Settings size={20} />
                              </button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  );
};

export default DashboardCommunities;