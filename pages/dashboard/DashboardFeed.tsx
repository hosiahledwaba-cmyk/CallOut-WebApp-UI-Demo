import React from 'react';
import { MOCK_POSTS } from '../../constants';
import { MessageCircle, Heart, Share2, MoreHorizontal, AlertTriangle, CheckCircle2 } from 'lucide-react';

const DashboardFeed: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Community Feed</h1>
        <p className="text-slate-500 dark:text-slate-400">Latest updates from the community and other organizations.</p>
      </header>

      <div className="space-y-6">
        {MOCK_POSTS.map((post) => (
          <div key={post.id} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300">
            {/* Post Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white">{post.author.name}</span>
                    {post.author.verified && <CheckCircle2 size={16} className="text-primary-500" />}
                    {post.author.role === 'organization' && (
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-500 uppercase tracking-wide">Org</span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500">{post.timestamp}</span>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Warning Banner if applicable */}
            {post.warning && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
                <AlertTriangle size={16} />
                <span className="font-semibold">{post.warning}</span>
              </div>
            )}

            {/* Content */}
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 whitespace-pre-line">
              {post.content}
            </p>

            {/* Tags */}
            <div className="flex gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">#{tag}</span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors group">
                <Heart size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-slate-500 hover:text-primary-500 transition-colors group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">{post.comments.length}</span>
              </button>
              <button className="flex items-center gap-2 text-slate-500 hover:text-primary-500 transition-colors ml-auto">
                <Share2 size={20} />
              </button>
            </div>
            
            {/* Comments Preview */}
            {post.comments.length > 0 && (
              <div className="mt-4 pt-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4">
                {post.comments.map(comment => (
                  <div key={comment.id} className="flex gap-3 text-sm">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{comment.author}:</span>
                    <span className="text-slate-600 dark:text-slate-400">{comment.content}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardFeed;