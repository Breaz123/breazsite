'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Wind, Home, Code, Rocket, Users, Mail, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { 
    href: '/', 
    label: 'Home',
    icon: Home,
  },
  { 
    href: '/diensten', 
    label: 'Diensten',
    icon: Code,
  },
  { 
    href: '/aanpak', 
    label: 'Aanpak',
    icon: Rocket,
  },
  { 
    href: '/team', 
    label: 'Team',
    icon: Users,
  },
  { 
    href: '/contact', 
    label: 'Contact',
    icon: Mail,
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Logo Icon with Gradient */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 p-2 rounded-lg">
                  <Wind className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Breaz
              </span>
              <span className="text-[8px] text-gray-400 tracking-widest uppercase font-medium">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group flex items-center gap-2',
                    isActive
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  )}
                >
                  {/* Background on hover/active */}
                  <div className={cn(
                    'absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-200',
                    isActive ? 'opacity-100' : 'group-hover:opacity-100'
                  )} />
                  
                  {/* Status Circle Indicator - "On Button" Style */}
                  <div className="relative z-10 flex items-center justify-center w-2 h-2">
                    <div className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      isActive 
                        ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]' 
                        : 'bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.6)]'
                    )} />
                    {isActive && (
                      <motion.div
                        className="absolute w-2 h-2 rounded-full bg-green-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Icon */}
                  <Icon className={cn(
                    'h-4 w-4 transition-colors relative z-10',
                    isActive ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                  )} />
                  
                  {/* Label */}
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <motion.button
                className="relative px-6 py-2.5 rounded-lg font-semibold text-sm text-white overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  Start je project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-lg border border-white/20" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-2 border-t border-white/10">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                          isActive
                            ? 'text-white bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {/* Status Circle Indicator - "On Button" Style */}
                        <div className="relative flex items-center justify-center w-2.5 h-2.5">
                          <div className={cn(
                            'w-2.5 h-2.5 rounded-full transition-all duration-300',
                            isActive 
                              ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]' 
                              : 'bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]'
                          )} />
                          {isActive && (
                            <motion.div
                              className="absolute w-2.5 h-2.5 rounded-full bg-green-400"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                          )}
                        </div>
                        
                        <Icon className={cn(
                          'h-5 w-5',
                          isActive ? 'text-cyan-400' : 'text-gray-400'
                        )} />
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  )
                })}
                
                {/* CTA Button (Mobile) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1 }}
                  className="pt-4"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full relative px-6 py-3 rounded-lg font-semibold text-sm text-white overflow-hidden group">
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600" />
                      
                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Start je project
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                      
                      {/* Border */}
                      <div className="absolute inset-0 rounded-lg border border-white/20" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
