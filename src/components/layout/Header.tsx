"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b glass-morphism"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-10 w-10 rounded-lg overflow-hidden glass-morphism">
            <Image 
              src="/logo.png" 
              alt="Breaz Logo" 
              width={40} 
              height={40}
              className="h-10 w-10 object-contain p-0.5"
              priority
              unoptimized
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron tracking-wider">
            Breaz
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          <button
            className="md:hidden relative w-14 h-14 flex flex-col justify-center items-center group overflow-hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Animated background grid pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_1px,_transparent_1px)] bg-[length:8px_8px]" />
            </div>
            
            {/* Enhanced tech-inspired animated hamburger lines */}
            <div className="relative w-7 h-5 flex flex-col justify-between z-10">
              <span 
                className={`block w-full h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-2.5 w-9 shadow-[0_0_15px_rgba(168,85,247,0.8)] brightness-125' 
                    : 'w-7 rotate-0 translate-y-0'
                }`}
                style={{
                  background: isMobileMenuOpen 
                    ? 'linear-gradient(90deg, #3b82f6, #06b6d4, #a855f7)' 
                    : 'linear-gradient(90deg, #60a5fa, #67e8f9, #c084fc)'
                }}
              />
              <span 
                className={`block w-full h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-500 ease-in-out ${
                  isMobileMenuOpen 
                    ? 'opacity-0 scale-x-0 translate-x-4' 
                    : 'opacity-100 scale-x-100 translate-x-0'
                }`}
              />
              <span 
                className={`block w-full h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                  isMobileMenuOpen 
                    ? '-rotate-45 -translate-y-2.5 w-9 shadow-[0_0_15px_rgba(168,85,247,0.8)] brightness-125' 
                    : 'w-7 rotate-0 translate-y-0'
                }`}
                style={{
                  background: isMobileMenuOpen 
                    ? 'linear-gradient(90deg, #3b82f6, #06b6d4, #a855f7)' 
                    : 'linear-gradient(90deg, #60a5fa, #67e8f9, #c084fc)'
                }}
              />
            </div>
            
            {/* Enhanced pulsing glow effect */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-700 ${
              isMobileMenuOpen 
                ? 'bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-500/40 scale-130 shadow-[0_0_25px_rgba(59,130,246,0.5)] animate-pulse' 
                : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 scale-100 shadow-[0_0_5px_rgba(59,130,246,0.2)]'
            }`} />
            
            {/* Enhanced rotating border effect */}
            <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-1000 ${
              isMobileMenuOpen 
                ? 'border-transparent shadow-[0_0_20px_rgba(168,85,247,0.6)]' 
                : 'border-transparent'
            }`} 
            style={{
              background: isMobileMenuOpen 
                ? 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #a855f7, #3b82f6)' 
                : 'transparent'
            }}
            />
            
            {/* Enhanced technological scan lines */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isMobileMenuOpen 
                ? 'bg-[linear-gradient(90deg,_transparent_0%,_rgba(59,130,246,0.3)_50%,_transparent_100%)] animate-[scan_2s_linear_infinite]' 
                : 'opacity-0'
            }`} />
            
            {/* Enhanced hover effect with tech glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/8 via-cyan-500/8 to-purple-500/8 opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
            
            {/* Enhanced click ripple effect */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isMobileMenuOpen 
                ? 'bg-gradient-to-r from-blue-500/25 to-purple-500/25 scale-160 opacity-0' 
                : ''
            }`} />
            
            {/* Floating tech particles */}
            <div className={`absolute inset-0 transition-all duration-500 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${20 + i * 30}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '1.5s'
                  }}
                />
              ))}
            </div>
          </button>

          <Button variant="primary" className="hidden md:inline-flex">
            Contact
          </Button>
        </div>
      </div>

      {/* Enhanced Tech Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-blue-500/20 relative overflow-hidden">
          {/* Tech background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]" />
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>

          <nav className="container relative z-10 flex flex-col gap-3 py-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex items-center gap-4 px-4 py-3 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:bg-blue-500/10 hover:scale-[1.02] border border-transparent hover:border-blue-500/20"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInFromLeft 0.5s ease-out forwards'
                }}
              >
                {/* Indicator dot */}
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                
                {/* Menu item text */}
                <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-300 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <div className="mt-4 pt-4 border-t border-blue-500/20">
              <Link
                href="/contact"
                className="block w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                  Start je project →
                </div>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

const navItems = [
  { label: "Diensten", href: "/diensten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

