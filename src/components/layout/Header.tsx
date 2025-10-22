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
            className="md:hidden relative w-12 h-12 flex flex-col justify-center items-center group overflow-hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Animated background grid pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_1px,_transparent_1px)] bg-[length:8px_8px]" />
            </div>
            
            {/* Tech-inspired animated hamburger lines */}
            <div className="relative w-6 h-4 flex flex-col justify-between z-10">
              <span 
                className={`block w-full h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2 w-8 shadow-[0_0_12px_rgba(168,85,247,0.7)]' : 'w-6'
                }`}
                style={{
                  background: isMobileMenuOpen 
                    ? 'linear-gradient(90deg, #3b82f6, #06b6d4, #a855f7)' 
                    : 'linear-gradient(90deg, #60a5fa, #67e8f9, #c084fc)'
                }}
              />
              <span 
                className={`block w-full h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span 
                className={`block w-full h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2 w-8 shadow-[0_0_12px_rgba(168,85,247,0.7)]' : 'w-6'
                }`}
                style={{
                  background: isMobileMenuOpen 
                    ? 'linear-gradient(90deg, #3b82f6, #06b6d4, #a855f7)' 
                    : 'linear-gradient(90deg, #60a5fa, #67e8f9, #c084fc)'
                }}
              />
            </div>
            
            {/* Pulsing glow effect */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isMobileMenuOpen 
                ? 'bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 scale-125 shadow-[0_0_20px_rgba(59,130,246,0.4)] animate-pulse' 
                : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 scale-100'
            }`} />
            
            {/* Rotating border effect */}
            <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-700 ${
              isMobileMenuOpen 
                ? 'border-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-spin' 
                : 'border-transparent'
            }`} 
            style={{
              background: isMobileMenuOpen 
                ? 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #a855f7, #3b82f6)' 
                : 'transparent'
            }}
            />
            
            {/* Hover effect with tech glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
            
            {/* Click ripple effect */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 scale-150 opacity-0' 
                : ''
            }`} />
          </button>

          <Button variant="primary" className="hidden md:inline-flex">
            Contact
          </Button>
        </div>
      </div>

      {/* Enhanced Tech Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 bg-gradient-to-br from-slate-900/95 via-blue-900/10 to-purple-900/10 backdrop-blur-xl md:hidden relative overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(59,130,246,0.1)_1px,_transparent_1px),_linear-gradient(rgba(59,130,246,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]" />
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${2 + i * 0.3}s`
                }}
              />
            ))}
          </div>

          <nav className="container relative z-10 flex flex-col gap-2 py-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-cyan-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:scale-[1.02] border border-transparent hover:border-blue-500/20"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInFromLeft 0.5s ease-out forwards'
                }}
              >
                {/* Animated indicator dot */}
                <div className="relative w-3 h-3 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-20" />
                </div>
                
                {/* Menu item icon */}
                <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
                </div>
                
                {/* Menu item text */}
                <span className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-300 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {item.label}
                </span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tech scan line effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            
            {/* Enhanced CTA Button */}
            <div className="mt-4 pt-4 border-t border-gradient-to-r from-blue-500/20 to-purple-500/20">
              <Link
                href="/contact"
                className="group relative block w-full"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animationDelay: `${navItems.length * 100}ms`,
                  animation: 'slideInFromLeft 0.5s ease-out forwards'
                }}
              >
                <div className="relative px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_50%,_transparent_75%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 group-hover:animate-[slide_1s_linear_infinite]" />
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start je project
                    <div className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </span>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </div>
          </nav>
          
          {/* Bottom tech accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-60" />
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

