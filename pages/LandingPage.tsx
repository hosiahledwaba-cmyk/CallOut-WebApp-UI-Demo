import React from 'react';
import { AppRoute } from '../types';
import { Shield, Lock, Heart, Users, ArrowRight, MessageCircle, Info } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

interface LandingProps {
  onNavigate: (route: AppRoute) => void;
}

const LandingPage: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 z-0"></div>
        {/* Abstract animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/30 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center lg:text-left lg:items-start lg:grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Your Voice Matters. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                Your Safety Comes First.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl">
              Callout is a safe space to report abuse, share experiences, and protect communities — anonymously or openly. We are here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => onNavigate(AppRoute.LOGIN)} // Demo flow
              >
                Explore Callout
                <ArrowRight size={20} />
              </button>
              <button 
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transform hover:scale-105 active:scale-95 transition-all duration-300"
                onClick={() => onNavigate(AppRoute.SIGNUP_ORG)}
              >
                For Organizations
              </button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
             {/* Abstract illustration representation */}
             <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-secondary-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl transform rotate-3 shadow-2xl"></div>
                <div className="absolute inset-0 bg-card-light dark:bg-card-dark rounded-3xl transform -rotate-3 shadow-xl border border-slate-100 dark:border-slate-700 p-8 flex flex-col justify-between">
                   <div className="space-y-4">
                      <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                      <div className="h-2 w-5/6 bg-slate-100 dark:bg-slate-800 rounded"></div>
                      <div className="h-2 w-4/6 bg-slate-100 dark:bg-slate-800 rounded"></div>
                   </div>
                   <div className="flex gap-4 items-center">
                     <div className="w-10 h-10 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-600">
                        <Shield size={20} />
                     </div>
                     <div className="text-sm text-slate-500">Verified Safe Space</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
             <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 dark:text-white">Why Callout Exists</h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Safe Reporting', desc: 'Securely report incidents with option for complete anonymity.', color: 'text-primary-600' },
              { icon: Lock, title: 'Private & Secure', desc: 'Your data is encrypted. We prioritize your privacy above all else.', color: 'text-teal-600' },
              { icon: Users, title: 'Community Support', desc: 'Connect with survivors and allies in moderated, safe groups.', color: 'text-purple-600' },
              { icon: Info, title: 'Verified Resources', desc: 'Access legal, medical, and shelter resources vetted by experts.', color: 'text-blue-600' },
              { icon: MessageCircle, title: 'Anonymous Whistleblowing', desc: 'Speak truth to power without revealing your identity.', color: 'text-orange-600' },
              { icon: Heart, title: 'Healing First', desc: 'A platform designed with trauma-informed principles at its core.', color: 'text-pink-600' },
            ].map((feature, idx) => (
              <ScrollAnimation key={idx} delay={idx * 100}>
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                  <feature.icon className={`w-10 h-10 mb-4 ${feature.color}`} />
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 dark:text-white">How It Works</h2>
          </ScrollAnimation>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: 1, title: 'Share', desc: 'Report incident or share story.' },
                { step: 2, title: 'Engage', desc: 'Join supportive communities.' },
                { step: 3, title: 'Access', desc: 'Find verified local help.' },
                { step: 4, title: 'Connect', desc: 'Orgs respond & support.' }
              ].map((item, idx) => (
                <ScrollAnimation key={idx} delay={idx * 200}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-primary-100 dark:border-primary-900 flex items-center justify-center text-xl font-bold text-primary-600 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-slate-900"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Callout exists so no one has to stay silent.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
               <button 
                onClick={() => onNavigate(AppRoute.LOGIN)}
                className="px-10 py-4 bg-primary-600 hover:bg-primary-500 rounded-xl font-bold text-lg shadow-xl shadow-primary-900/50 transform hover:scale-105 transition-all duration-300"
              >
                Continue to Login
              </button>
              <button 
                onClick={() => onNavigate(AppRoute.SIGNUP_ORG)}
                className="px-10 py-4 bg-transparent border-2 border-slate-700 hover:border-slate-500 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all duration-300"
              >
                Organization Sign Up
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;