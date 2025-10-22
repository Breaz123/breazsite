'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Code, Rocket, Users, Mail, ArrowRight, ChevronDown, Target, TrendingUp, Megaphone, BookOpen, Search, Pen, Zap, Globe, Smartphone, Sparkles } from 'lucide-react'
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
    submenu: [
      {
        href: '/diensten/marketing',
        label: 'Marketing',
        icon: Target,
        submenu: [
          {
            href: '/diensten/marketing/merkstrategie-positionering',
            label: 'Merkstrategie & Positionering',
            icon: Target,
          },
          {
            href: '/diensten/marketing/content-storytelling',
            label: 'Contentcreatief & Storytelling',
            icon: Pen,
          },
          {
            href: '/diensten/marketing/online-zichtbaarheid-seo',
            label: 'Online Zichtbaarheid & GEO/SEO',
            icon: Search,
          },
          {
            href: '/diensten/marketing/campagnes-social-media',
            label: 'Campagnes & Social Media',
            icon: Megaphone,
          },
        ]
      },
      {
        href: '/diensten/business-development',
        label: 'Business Development',
        icon: TrendingUp,
      },
      {
        href: '/diensten/sales',
        label: 'Sales',
        icon: Users,
      },
      {
        href: '/diensten/webdevelopment',
        label: 'Webdevelopment',
        icon: Code,
        submenu: [
          {
            href: '/diensten/webdevelopment/tailwind-react-nextjs',
            label: 'React / Next.js / Tailwind CSS',
            icon: Zap,
          },
          {
            href: '/diensten/webdevelopment/wordpress-development',
            label: 'WordPress Development',
            icon: Globe,
          },
          {
            href: '/diensten/webdevelopment/custom-made',
            label: 'Custom Webdevelopment',
            icon: Sparkles,
          },
          {
            href: '/diensten/webdevelopment/shopify',
            label: 'Shopify Development',
            icon: Smartphone,
          },
        ]
      },
    ]
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
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [openNestedDropdown, setOpenNestedDropdown] = React.useState<string | null>(null)
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
    setOpenDropdown(null)
    setOpenNestedDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-[#0B1120]/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      )}
      style={{
        backdropFilter: isScrolled ? 'blur(10px) saturate(150%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px) saturate(150%)' : 'none',
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
                <Image 
                  src="/logo.png" 
                  alt="Breaz Logo" 
                  width={48} 
                  height={48}
                  className="h-12 w-12 object-contain p-1"
                  priority
                  unoptimized
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron tracking-wider">
                Breaz
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.submenu && item.submenu.some(sub => 
                pathname === sub.href || (sub.submenu && sub.submenu.some(nested => pathname === nested.href))
              ))
              const hasSubmenu = item.submenu && item.submenu.length > 0
              
              if (hasSubmenu) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
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
                      
                      {/* Status Circle Indicator */}
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
                      
                      {/* Dropdown indicator */}
                      <ChevronDown className={cn(
                        'h-3 w-3 transition-transform relative z-10',
                        openDropdown === item.href ? 'rotate-180' : '',
                        isActive ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                      )} />
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {openDropdown === item.href && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          className="absolute top-full left-0 pt-2 w-72"
                        >
                          {/* Invisible bridge to prevent flickering */}
                          <div className="h-2 -mt-2" />
                          
                          <div className="relative rounded-xl">
                            {/* Animated border glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50 rounded-xl blur-sm" />
                            
                            {/* Main dropdown container */}
                            <div className="relative bg-[#0B1120]/98 backdrop-blur-2xl rounded-xl border border-white/20 shadow-2xl shadow-black/50">
                              {/* Subtle grid pattern overlay */}
                              <div className="absolute inset-0 opacity-5" style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                backgroundSize: '20px 20px'
                              }} />
                              
                              <div className="relative p-2 space-y-1">
                              {item.submenu!.map((subItem, subIndex) => {
                                const SubIcon = subItem.icon
                                const isSubActive = pathname === subItem.href || (subItem.submenu && subItem.submenu.some(nestedItem => pathname === nestedItem.href))
                                const hasNestedSubmenu = subItem.submenu && subItem.submenu.length > 0
                                const isNestedOpen = openNestedDropdown === subItem.href
                                
                                return (
                                  <motion.div
                                    key={subItem.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.05 }}
                                  >
                                    <div
                                      className="relative"
                                      onMouseEnter={() => hasNestedSubmenu && setOpenNestedDropdown(subItem.href)}
                                      onMouseLeave={() => hasNestedSubmenu && setOpenNestedDropdown(null)}
                                    >
                                      <Link
                                        href={subItem.href}
                                        className={cn(
                                          'relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group overflow-hidden',
                                          isSubActive
                                            ? 'text-white'
                                            : 'text-gray-300 hover:text-white'
                                        )}
                                      >
                                        {/* Animated background gradient */}
                                        <div className={cn(
                                          'absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 transition-opacity duration-200',
                                          isSubActive ? 'opacity-100' : 'group-hover:opacity-100'
                                        )} />
                                        
                                        {/* Animated border on left */}
                                        <motion.div
                                          className={cn(
                                            'absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400',
                                            isSubActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                          )}
                                          initial={false}
                                          animate={{
                                            opacity: isSubActive ? 1 : 0,
                                          }}
                                          transition={{ duration: 0.2 }}
                                        />
                                        
                                        {/* Status indicator dot */}
                                        <div className="relative z-10 flex items-center justify-center w-1.5 h-1.5">
                                          <div className={cn(
                                            'w-1.5 h-1.5 rounded-full transition-all duration-300',
                                            isSubActive 
                                              ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' 
                                              : 'bg-blue-400/50 shadow-[0_0_4px_rgba(96,165,250,0.4)] group-hover:bg-cyan-400/70 group-hover:shadow-[0_0_6px_rgba(34,211,238,0.6)]'
                                          )} />
                                          {isSubActive && (
                                            <motion.div
                                              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                                              animate={{
                                                scale: [1, 2, 1],
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
                                        
                                        {/* Icon with glow effect */}
                                        <div className="relative z-10">
                                          <SubIcon className={cn(
                                            'h-4 w-4 transition-all duration-200',
                                            isSubActive 
                                              ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                                              : 'text-gray-400 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]'
                                          )} />
                                        </div>
                                        
                                        {/* Label */}
                                        <span className="relative z-10 flex-1">{subItem.label}</span>
                                        
                                        {/* Arrow or chevron indicator */}
                                        {hasNestedSubmenu ? (
                                          <ChevronDown className={cn(
                                            'h-3.5 w-3.5 transition-all duration-200 relative z-10 -rotate-90',
                                            isSubActive
                                              ? 'text-cyan-400 opacity-100'
                                              : 'text-gray-400 opacity-70 group-hover:opacity-100 group-hover:text-cyan-400'
                                          )} />
                                        ) : (
                                          <ArrowRight className={cn(
                                            'h-3.5 w-3.5 transition-all duration-200 relative z-10',
                                            isSubActive
                                              ? 'text-cyan-400 opacity-100 translate-x-0'
                                              : 'text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-cyan-400'
                                          )} />
                                        )}
                                      </Link>

                                      {/* Nested Submenu */}
                                      {hasNestedSubmenu && (
                                        <AnimatePresence>
                                          {isNestedOpen && (
                                            <motion.div
                                              initial={{ opacity: 0, x: -10, scale: 0.95 }}
                                              animate={{ opacity: 1, x: 0, scale: 1 }}
                                              exit={{ opacity: 0, x: -10, scale: 0.95 }}
                                              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                              className="absolute left-full top-0 ml-2 w-72 rounded-xl"
                                            >
                                              {/* Animated border glow */}
                                              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-cyan-500/50 rounded-xl opacity-75 blur-sm" />
                                              
                                              {/* Nested dropdown container */}
                                              <div className="relative bg-[#0B1120]/[0.99] backdrop-blur-3xl rounded-xl border border-white/20 shadow-2xl shadow-black/50 overflow-hidden" style={{ backdropFilter: 'blur(40px) saturate(180%)', WebkitBackdropFilter: 'blur(40px) saturate(180%)' }}>
                                                <div className="absolute inset-0 opacity-5" style={{
                                                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                                  backgroundSize: '20px 20px'
                                                }} />
                                                
                                                <div className="relative p-2 space-y-1">
                                                  {subItem.submenu!.map((nestedItem, nestedIndex) => {
                                                    const NestedIcon = nestedItem.icon
                                                    const isNestedActive = pathname === nestedItem.href
                                                    
                                                    return (
                                                      <motion.div
                                                        key={nestedItem.href}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: nestedIndex * 0.03 }}
                                                      >
                                                        <Link
                                                          href={nestedItem.href}
                                                          className={cn(
                                                            'relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 group overflow-hidden',
                                                            isNestedActive
                                                              ? 'text-white'
                                                              : 'text-gray-300 hover:text-white'
                                                          )}
                                                        >
                                                          {/* Background gradient */}
                                                          <div className={cn(
                                                            'absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-200',
                                                            isNestedActive ? 'opacity-100' : 'group-hover:opacity-100'
                                                          )} />
                                                          
                                                          {/* Left border accent */}
                                                          <div className={cn(
                                                            'absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 transition-opacity duration-200',
                                                            isNestedActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                                          )} />
                                                          
                                                          {/* Status indicator dot */}
                                                          <div className="relative z-10 flex items-center justify-center w-1 h-1">
                                                            <div className={cn(
                                                              'w-1 h-1 rounded-full transition-all duration-300',
                                                              isNestedActive 
                                                                ? 'bg-pink-400 shadow-[0_0_6px_rgba(244,114,182,0.8)]' 
                                                                : 'bg-purple-400/50 shadow-[0_0_3px_rgba(192,132,252,0.4)] group-hover:bg-pink-400/70'
                                                            )} />
                                                          </div>
                                                          
                                                          {/* Icon with glow */}
                                                          <NestedIcon className={cn(
                                                            'h-3.5 w-3.5 relative z-10 transition-all duration-200',
                                                            isNestedActive 
                                                              ? 'text-pink-400 drop-shadow-[0_0_6px_rgba(244,114,182,0.6)]' 
                                                              : 'text-gray-400 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_4px_rgba(244,114,182,0.4)]'
                                                          )} />
                                                          
                                                          {/* Label */}
                                                          <span className="relative z-10 flex-1 text-xs">{nestedItem.label}</span>
                                                          
                                                          {/* Arrow indicator */}
                                                          <ArrowRight className={cn(
                                                            'h-3 w-3 transition-all duration-200 relative z-10',
                                                            isNestedActive
                                                              ? 'text-pink-400 opacity-100'
                                                              : 'text-gray-400 opacity-0 group-hover:opacity-70 group-hover:text-pink-400'
                                                          )} />
                                                        </Link>
                                                      </motion.div>
                                                    )
                                                  })}
                                                </div>
                                                
                                                {/* Bottom accent line */}
                                                <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
                                              </div>
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      )}
                                    </div>
                                  </motion.div>
                                )
                              })}
                              </div>
                              
                              {/* Bottom accent line */}
                              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              
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
                  const isActive = pathname === item.href || (item.submenu && item.submenu.some(sub => 
                    pathname === sub.href || (sub.submenu && sub.submenu.some(nested => pathname === nested.href))
                  ))
                  const hasSubmenu = item.submenu && item.submenu.length > 0
                  const isSubmenuOpen = openDropdown === item.href
                  
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <div className="space-y-1">
                        {hasSubmenu ? (
                          <>
                            <button
                              onClick={() => setOpenDropdown(isSubmenuOpen ? null : item.href)}
                              className={cn(
                                'flex items-center justify-between w-full gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                                isActive
                                  ? 'text-white bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 border border-cyan-500/30'
                                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                              )}
                            >
                              <div className="flex items-center gap-3">
                                {/* Status Circle Indicator */}
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
                              </div>
                              <ChevronDown className={cn(
                                'h-4 w-4 transition-transform duration-200',
                                isSubmenuOpen ? 'rotate-180' : ''
                              )} />
                            </button>
                            
                            {/* Submenu items */}
                            <AnimatePresence>
                              {isSubmenuOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 space-y-1 overflow-hidden"
                                >
                                  {/* Subtle divider line */}
                                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-2" />
                                  
                                  {item.submenu!.map((subItem, subIndex) => {
                                    const SubIcon = subItem.icon
                                    const isSubActive = pathname === subItem.href || (subItem.submenu && subItem.submenu.some(nestedItem => pathname === nestedItem.href))
                                    const hasNestedSubmenu = subItem.submenu && subItem.submenu.length > 0
                                    const isNestedOpen = openNestedDropdown === subItem.href
                                    
                                    return (
                                      <motion.div
                                        key={subItem.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: subIndex * 0.05 }}
                                      >
                                        <div className="space-y-1">
                                          {hasNestedSubmenu ? (
                                            <>
                                              <button
                                                onClick={() => setOpenNestedDropdown(isNestedOpen ? null : subItem.href)}
                                                className={cn(
                                                  'relative flex items-center justify-between w-full gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 group overflow-hidden',
                                                  isSubActive
                                                    ? 'text-white'
                                                    : 'text-gray-400 hover:text-white'
                                                )}
                                              >
                                                {/* Background gradient */}
                                                <div className={cn(
                                                  'absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 transition-opacity duration-200',
                                                  isSubActive ? 'opacity-100' : 'group-hover:opacity-100'
                                                )} />
                                                
                                                {/* Left border accent */}
                                                <div className={cn(
                                                  'absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400 transition-opacity duration-200',
                                                  isSubActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                                )} />
                                                
                                                <div className="flex items-center gap-3">
                                                  {/* Status indicator dot */}
                                                  <div className="relative z-10 flex items-center justify-center w-1.5 h-1.5">
                                                    <div className={cn(
                                                      'w-1.5 h-1.5 rounded-full transition-all duration-300',
                                                      isSubActive 
                                                        ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' 
                                                        : 'bg-blue-400/50 shadow-[0_0_4px_rgba(96,165,250,0.4)] group-hover:bg-cyan-400/70'
                                                    )} />
                                                    {isSubActive && (
                                                      <motion.div
                                                        className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                                                        animate={{
                                                          scale: [1, 2, 1],
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
                                                  
                                                  {/* Icon with glow */}
                                                  <SubIcon className={cn(
                                                    'h-4 w-4 relative z-10 transition-all duration-200',
                                                    isSubActive 
                                                      ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                                                      : 'text-gray-400 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]'
                                                  )} />
                                                  
                                                  {/* Label */}
                                                  <span className="relative z-10">{subItem.label}</span>
                                                </div>
                                                
                                                <ChevronDown className={cn(
                                                  'h-3 w-3 transition-transform duration-200 relative z-10',
                                                  isNestedOpen ? 'rotate-180' : '',
                                                  isSubActive ? 'text-cyan-400' : 'text-gray-400'
                                                )} />
                                              </button>
                                              
                                              {/* Nested submenu items */}
                                              <AnimatePresence>
                                                {isNestedOpen && (
                                                  <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="ml-4 space-y-1 overflow-hidden"
                                                  >
                                                    {/* Subtle divider line */}
                                                    <div className="h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent mb-2" />
                                                    
                                                    {subItem.submenu!.map((nestedItem, nestedIndex) => {
                                                      const NestedIcon = nestedItem.icon
                                                      const isNestedActive = pathname === nestedItem.href
                                                      
                                                      return (
                                                        <motion.div
                                                          key={nestedItem.href}
                                                          initial={{ opacity: 0, x: -10 }}
                                                          animate={{ opacity: 1, x: 0 }}
                                                          transition={{ delay: nestedIndex * 0.03 }}
                                                        >
                                                          <Link
                                                            href={nestedItem.href}
                                                            className={cn(
                                                              'relative flex items-center gap-3 px-4 py-2 rounded-lg text-xs transition-all duration-200 group overflow-hidden',
                                                              isNestedActive
                                                                ? 'text-white'
                                                                : 'text-gray-400 hover:text-white'
                                                            )}
                                                            onClick={() => {
                                                              setIsOpen(false)
                                                              setOpenNestedDropdown(null)
                                                            }}
                                                          >
                                                            {/* Background gradient */}
                                                            <div className={cn(
                                                              'absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-200',
                                                              isNestedActive ? 'opacity-100' : 'group-hover:opacity-100'
                                                            )} />
                                                            
                                                            {/* Left border accent */}
                                                            <div className={cn(
                                                              'absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 transition-opacity duration-200',
                                                              isNestedActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                                            )} />
                                                            
                                                            {/* Status indicator dot */}
                                                            <div className="relative z-10 flex items-center justify-center w-1 h-1">
                                                              <div className={cn(
                                                                'w-1 h-1 rounded-full transition-all duration-300',
                                                                isNestedActive 
                                                                  ? 'bg-pink-400 shadow-[0_0_6px_rgba(244,114,182,0.8)]' 
                                                                  : 'bg-purple-400/50 shadow-[0_0_3px_rgba(192,132,252,0.4)] group-hover:bg-pink-400/70'
                                                              )} />
                                                            </div>
                                                            
                                                            {/* Icon with glow */}
                                                            <NestedIcon className={cn(
                                                              'h-3.5 w-3.5 relative z-10 transition-all duration-200',
                                                              isNestedActive 
                                                                ? 'text-pink-400 drop-shadow-[0_0_6px_rgba(244,114,182,0.6)]' 
                                                                : 'text-gray-400 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_4px_rgba(244,114,182,0.4)]'
                                                            )} />
                                                            
                                                            {/* Label */}
                                                            <span className="relative z-10 flex-1">{nestedItem.label}</span>
                                                            
                                                            {/* Arrow indicator */}
                                                            <ArrowRight className={cn(
                                                              'h-3 w-3 transition-all duration-200 relative z-10',
                                                              isNestedActive
                                                                ? 'text-pink-400 opacity-100'
                                                                : 'text-gray-400 opacity-0 group-hover:opacity-70 group-hover:text-pink-400'
                                                            )} />
                                                          </Link>
                                                        </motion.div>
                                                      )
                                                    })}
                                                  </motion.div>
                                                )}
                                              </AnimatePresence>
                                            </>
                                          ) : (
                                            <Link
                                              href={subItem.href}
                                              className={cn(
                                                'relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 group overflow-hidden',
                                                isSubActive
                                                  ? 'text-white'
                                                  : 'text-gray-400 hover:text-white'
                                              )}
                                              onClick={() => setIsOpen(false)}
                                            >
                                              {/* Background gradient */}
                                              <div className={cn(
                                                'absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 transition-opacity duration-200',
                                                isSubActive ? 'opacity-100' : 'group-hover:opacity-100'
                                              )} />
                                              
                                              {/* Left border accent */}
                                              <div className={cn(
                                                'absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400 transition-opacity duration-200',
                                                isSubActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                              )} />
                                              
                                              {/* Status indicator dot */}
                                              <div className="relative z-10 flex items-center justify-center w-1.5 h-1.5">
                                                <div className={cn(
                                                  'w-1.5 h-1.5 rounded-full transition-all duration-300',
                                                  isSubActive 
                                                    ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' 
                                                    : 'bg-blue-400/50 shadow-[0_0_4px_rgba(96,165,250,0.4)] group-hover:bg-cyan-400/70'
                                                )} />
                                                {isSubActive && (
                                                  <motion.div
                                                    className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                                                    animate={{
                                                      scale: [1, 2, 1],
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
                                              
                                              {/* Icon with glow */}
                                              <SubIcon className={cn(
                                                'h-4 w-4 relative z-10 transition-all duration-200',
                                                isSubActive 
                                                  ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                                                  : 'text-gray-400 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]'
                                              )} />
                                              
                                              {/* Label */}
                                              <span className="relative z-10 flex-1">{subItem.label}</span>
                                              
                                              {/* Arrow indicator */}
                                              <ArrowRight className={cn(
                                                'h-3.5 w-3.5 transition-all duration-200 relative z-10',
                                                isSubActive
                                                  ? 'text-cyan-400 opacity-100'
                                                  : 'text-gray-400 opacity-0 group-hover:opacity-70 group-hover:text-cyan-400'
                                              )} />
                                            </Link>
                                          )}
                                        </div>
                                      </motion.div>
                                    )
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
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
                            {/* Status Circle Indicator */}
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
                        )}
                      </div>
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
