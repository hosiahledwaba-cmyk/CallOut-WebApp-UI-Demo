import React, { useState } from 'react';
import { AppRoute, NavItem, User } from '../types';
import { 
  Home, PlusCircle, BookOpen, Users, User as UserIcon, LogOut, Menu, X, Sun, Moon 
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  user: User;
  onLogout: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Feed', icon: Home, route: AppRoute.DASHBOARD_FEED },
  { label: 'Create Post', icon: PlusCircle, route: AppRoute.DASHBOARD_CREATE },
  { label: 'Resources', icon: BookOpen, route: AppRoute.DASHBOARD_RESOURCES },
  { label: 'Communities', icon: Users, route: AppRoute.DASHBOARD_COMMUNITIES },
  { label: 'Profile', icon: UserIcon, route: AppRoute.DASHBOARD_PROFILE },
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, currentRoute, onNavigate, user, onLogout 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    setIsDarkMode(isDark);
  };

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/30">C</div>
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Callout</span>
      </div>

      <div className="flex-1 px-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = currentRoute === item.route;
          return (
            <button
              key={item.route}
              onClick={() => {
                onNavigate(item.route);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <item.icon size={20} className={`${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 dark:text-slate-500 group-hover:scale-110 transition-transform'}`} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
        <button 
           onClick={toggleTheme}
           className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
        >
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>

      <div className="p-4 flex items-center gap-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.name}</p>
          <p className="text-xs text-slate-500 truncate capitalize">{user.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-card-light dark:bg-card-dark border-r border-slate-200 dark:border-slate-800 h-full">
        <NavContent />
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full z-20 bg-card-light dark:bg-card-dark border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/30">C</div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Callout</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 dark:text-slate-300">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-3/4 max-w-xs h-full bg-card-light dark:bg-card-dark shadow-2xl" onClick={e => e.stopPropagation()}>
            <NavContent />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pt-16 lg:pt-0 scroll-smooth">
        <div className="max-w-5xl mx-auto p-4 md:p-8">
           {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;