'use client';

import { useEffect, useState } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Backdrop blur */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 pointer-events-auto ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsVisible(false)}
      />
      
      {/* Cookie Banner */}
      <div 
        className={`fixed bottom-0 left-0 right-0 md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl pointer-events-auto transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="relative mx-4 mb-4 md:mb-0">
          {/* Tech border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-blue-500/50 to-cyan-500/50 rounded-2xl blur-xl opacity-30 animate-pulse" />
          
          {/* Main container */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-primary/30 shadow-2xl overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(217 91% 60% / 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(217 91% 60% / 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }} />
            </div>

            {/* Tech accent lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

            {/* Content */}
            <div className="relative p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
                aria-label="Sluiten"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Header with icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-xl border border-primary/30">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-orbitron">
                    Cookie Voorkeuren
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    Wij gebruiken cookies om jouw ervaring te verbeteren, analyses uit te voeren en relevante content te tonen. 
                    <Link 
                      href="/cookies" 
                      className="text-primary hover:text-cyan-400 underline ml-1 transition-colors"
                    >
                      Cookiebeleid
                    </Link>
                  </p>
                </div>
              </div>

              {/* Details section */}
              {showDetails && (
                <div className="mb-6 space-y-3 animate-in slide-in-from-top duration-300">
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      <h4 className="font-semibold text-white">Noodzakelijke Cookies</h4>
                      <span className="ml-auto text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Altijd actief</span>
                    </div>
                    <p className="text-sm text-slate-400">
                      Essentieel voor de werking van de website. Deze cookies kunnen niet worden uitgeschakeld.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Settings className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-white">Analytische Cookies</h4>
                    </div>
                    <p className="text-sm text-slate-400">
                      Helpen ons te begrijpen hoe bezoekers de website gebruiken via anonieme gegevens.
                    </p>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCustomize}
                  className="flex-1 px-6 py-3 text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {showDetails ? 'Verberg details' : 'Aanpassen'}
                </button>
                
                <button
                  onClick={handleReject}
                  className="flex-1 px-6 py-3 text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Weigeren
                </button>
                
                <button
                  onClick={handleAccept}
                  className="flex-1 px-6 py-3 text-white bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] relative overflow-hidden group"
                >
                  <span className="relative z-10">Alles accepteren</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {/* Tech accent dots */}
              <div className="absolute -bottom-1 -right-1 w-20 h-20 opacity-20">
                <div className="grid grid-cols-4 gap-2 p-2">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

