import React from 'react';
import { User } from '../../types';
import { CheckCircle2, MapPin, Globe, Mail } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface Props {
    user: User;
}

const data = [
  { name: 'Mon', engagement: 400 },
  { name: 'Tue', engagement: 300 },
  { name: 'Wed', engagement: 600 },
  { name: 'Thu', engagement: 800 },
  { name: 'Fri', engagement: 500 },
  { name: 'Sat', engagement: 900 },
  { name: 'Sun', engagement: 700 },
];

const DashboardProfile: React.FC<Props> = ({ user }) => {
  return (
    <div className="space-y-6 animate-fade-in-up">
       <div className="bg-card-light dark:bg-card-dark rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
           {/* Cover Image */}
           <div className="h-48 bg-gradient-to-r from-primary-600 to-secondary-500"></div>
           
           <div className="px-8 pb-8 relative">
                {/* Avatar */}
               <div className="absolute -top-16 left-8 p-1.5 bg-card-light dark:bg-card-dark rounded-full">
                   <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full object-cover" />
               </div>
               
               <div className="pt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                   <div>
                       <div className="flex items-center gap-2 mb-1">
                           <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
                           {user.verified && <CheckCircle2 className="text-primary-500" size={24} />}
                       </div>
                       <p className="text-slate-500 dark:text-slate-400 max-w-lg">Dedicated to providing safe housing and legal aid for domestic violence survivors in the greater metro area.</p>
                       
                       <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600 dark:text-slate-400">
                           <div className="flex items-center gap-1"><MapPin size={16} /> New York, NY</div>
                           <div className="flex items-center gap-1"><Globe size={16} /> safeharbor.org</div>
                           <div className="flex items-center gap-1"><Mail size={16} /> contact@safeharbor.org</div>
                       </div>
                   </div>
                   
                   <button className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                       Edit Profile
                   </button>
               </div>
           </div>
       </div>

       <div className="grid md:grid-cols-3 gap-6">
           <div className="md:col-span-2 bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
               <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Weekly Community Impact</h3>
               <div className="h-64 w-full">
                   <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={data}>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                           <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                           <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                           <Tooltip 
                                cursor={{fill: 'transparent'}}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                           />
                           <Bar dataKey="engagement" radius={[6, 6, 0, 0]} barSize={40}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#9333ea' : '#d946ef'} />
                                ))}
                           </Bar>
                       </BarChart>
                   </ResponsiveContainer>
               </div>
           </div>

           <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Verification Status</h3>
                <div className="flex flex-col items-center justify-center h-48 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                        <CheckCircle2 size={32} />
                    </div>
                    <div>
                        <div className="font-bold text-slate-900 dark:text-white">Fully Verified</div>
                        <div className="text-sm text-slate-500">Your organization badge is active.</div>
                    </div>
                </div>
           </div>
       </div>
    </div>
  );
};

export default DashboardProfile;