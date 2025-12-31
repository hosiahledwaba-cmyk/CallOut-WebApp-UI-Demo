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
import WebNavbar from './components/WebNavbar';

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
      {/* Public Navbar (callout-web) */}
      {!isDashboard && (
        <WebNavbar onNavigate={setRoute} darkMode={darkMode} toggleTheme={toggleTheme} />
      )}

      {/* Main Content */}
      <main className={`flex-grow ${!isDashboard ? '' : ''}`}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;