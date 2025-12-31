import React from 'react';
import { AppRoute } from '../types';
import { LANDING_CONTENT } from '../constants';
import ScrollAnimation from '../components/ScrollAnimation';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import WebNavbar from '../components/WebNavbar';
import WebFooter from '../components/WebFooter';

interface LandingProps {
  onNavigate: (route: AppRoute) => void;
}

const LandingPage: React.FC<LandingProps> = ({ onNavigate }) => {
  const { hero, features, stats, trust } = LANDING_CONTENT;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        
        {/* Cinematic Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-500/10 dark:bg-fuchsia-900/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollAnimation>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">Secure & Encrypted</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {hero.headline.split(' ').slice(0, -1).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">{hero.headline.split(' ').slice(-1)}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                {hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button 
                  onClick={() => onNavigate(AppRoute.LOGIN)}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {hero.primaryCta} <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => onNavigate(AppRoute.SIGNUP_ORG)}
                  className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  {hero.secondaryCta}
                </button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-slate-200 dark:border-slate-800 py-12 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="container max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-8">Trusted By Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {trust.map((org, idx) => (
              <span key={idx} className="text-xl font-bold text-slate-400 dark:text-slate-500">{org}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Built for <span className="text-primary-600">Trust</span>. <br/>Designed for <span className="text-secondary-600">Action</span>.</h2>
               <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                 We've reimagined the reporting process to prioritize survivor autonomy and data security above all else.
               </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <ScrollAnimation key={idx} delay={idx * 100}>
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-primary-500/30 transition-colors h-full">
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Frame */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="container max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 dark:bg-slate-900 px-6 py-20 text-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-slate-900 z-0"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
               <ShieldCheck size={48} className="mx-auto text-primary-400 mb-6" />
               <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Ready to reclaim your voice?</h2>
               <p className="text-lg text-slate-300">Join thousands of others taking a stand for safer communities today.</p>
               <button 
                  onClick={() => onNavigate(AppRoute.LOGIN)}
                  className="px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105"
                >
                  Start Secure Report
                </button>
            </div>
          </div>
        </div>
      </section>

      <WebFooter />
    </div>
  );
};

export default LandingPage;