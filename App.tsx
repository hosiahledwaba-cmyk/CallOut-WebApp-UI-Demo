import React, { useState, useEffect } from 'react';
import { AppRoute, User } from './types';
import { CURRENT_USER_ORG } from './constants';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import OrgSignupPage from './pages/OrgSignupPage';
import DashboardLayout from './components/DashboardLayout';
import DashboardFeed from './pages/dashboard/DashboardFeed';
import DashboardCreate from './pages/dashboard/DashboardCreate';
import DashboardResources from './pages/dashboard/DashboardResources';
import DashboardCommunities from './pages/dashboard/DashboardCommunities';
import DashboardProfile from './pages/dashboard/DashboardProfile';
import Navbar from './components/Navbar';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [route, setRoute] = useState<AppRoute>(AppRoute.LANDING);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleLogin = (userType: 'user' | 'org') => {
    // Mock login
    if (userType === 'org') {
      setCurrentUser(CURRENT_USER_ORG);
      setRoute(AppRoute.DASHBOARD_FEED);
    } else {
      // For demo, regular user login just goes to landing for now as scope focused on org dashboard
      alert("Regular user dashboard is under construction. Please try Org login.");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setRoute(AppRoute.LANDING);
  };

  // Router Logic
  const renderContent = () => {
    switch (route) {
      case AppRoute.LANDING:
        return <LandingPage onNavigate={setRoute} />;
      case AppRoute.LOGIN:
        return <LoginPage onNavigate={setRoute} onLogin={handleLogin} />;
      case AppRoute.SIGNUP_ORG:
        return <OrgSignupPage onNavigate={setRoute} onComplete={() => handleLogin('org')} />;
      
      // Dashboard Routes
      case AppRoute.DASHBOARD_FEED:
      case AppRoute.DASHBOARD_CREATE:
      case AppRoute.DASHBOARD_RESOURCES:
      case AppRoute.DASHBOARD_COMMUNITIES:
      case AppRoute.DASHBOARD_PROFILE:
        return (
          <DashboardLayout 
            currentRoute={route} 
            onNavigate={setRoute} 
            user={currentUser || CURRENT_USER_ORG}
            onLogout={handleLogout}
          >
             {route === AppRoute.DASHBOARD_FEED && <DashboardFeed />}
             {route === AppRoute.DASHBOARD_CREATE && <DashboardCreate onNavigate={setRoute} />}
             {route === AppRoute.DASHBOARD_RESOURCES && <DashboardResources />}
             {route === AppRoute.DASHBOARD_COMMUNITIES && <DashboardCommunities />}
             {route === AppRoute.DASHBOARD_PROFILE && <DashboardProfile user={currentUser || CURRENT_USER_ORG} />}
          </DashboardLayout>
        );
      default:
        return <LandingPage onNavigate={setRoute} />;
    }
  };

  const isDashboard = route.startsWith('DASHBOARD');

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Global Theme Toggle (Absolute for landing, integrated for dashboard usually but kept handy) */}
      {!isDashboard && (
        <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setRoute(AppRoute.LANDING)}
          >
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30">C</div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Callout</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {route === AppRoute.LANDING && (
               <button 
               onClick={() => setRoute(AppRoute.LOGIN)}
               className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
             >
               Sign In
             </button>
            )}
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className={`flex-grow ${!isDashboard ? 'pt-16' : ''}`}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;