'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FadeIn } from '@/components/fade-in'
import { 
  Target, 
  Users, 
  TrendingUp, 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Mail,
  Building2,
  Phone,
  Send
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    id: 'marketing',
    icon: Target,
    title: 'Marketing',
    description: 'Merkstrategie, content, SEO en campagnes',
    color: 'from-blue-500 to-cyan-500',
    features: ['Merkstrategie & positionering', 'Content & storytelling', 'Online zichtbaarheid & SEO', 'Campagnes & social media']
  },
  {
    id: 'sales',
    icon: Users,
    title: 'Sales',
    description: 'Salescoaching, CRM en conversieoptimalisatie',
    color: 'from-purple-500 to-pink-500',
    features: ['Salescoaching & training', 'Funnel optimalisatie', 'CRM ondersteuning', 'Marketing-sales alignment']
  },
  {
    id: 'business-development',
    icon: TrendingUp,
    title: 'Business Development',
    description: 'Strategische groei en partnerships',
    color: 'from-orange-500 to-red-500',
    features: ['Groeiplan & roadmap', 'Marktanalyse', 'Partnerschappen', 'Innovatie & diversificatie']
  },
  {
    id: 'webdevelopment',
    icon: Code,
    title: 'Webdevelopment',
    description: 'Websites en webapplicaties op maat',
    color: 'from-green-500 to-emerald-500',
    features: ['React / Next.js', 'WordPress', 'Custom development', 'Shopify']
  },
]

const timelines = [
  { id: 'urgent', label: 'Zo snel mogelijk', icon: '🚀' },
  { id: '1-month', label: 'Binnen 1 maand', icon: '📅' },
  { id: '1-3-months', label: '1-3 maanden', icon: '📊' },
  { id: 'flexible', label: 'Flexibel / nog niet zeker', icon: '💭' },
]

const budgetRanges = [
  { value: 250, label: '€250', color: 'from-green-500 to-emerald-500' },
  { value: 1000, label: '€1.000', color: 'from-green-500 to-emerald-500' },
  { value: 2500, label: '€2.500', color: 'from-blue-500 to-cyan-500' },
  { value: 5000, label: '€5.000', color: 'from-blue-500 to-cyan-500' },
  { value: 10000, label: '€10.000', color: 'from-purple-500 to-pink-500' },
  { value: 15000, label: '€15.000', color: 'from-purple-500 to-pink-500' },
  { value: 20000, label: '€20.000+', color: 'from-orange-500 to-red-500' },
  { value: -1, label: 'Nog niet zeker', color: 'from-slate-500 to-slate-600' },
]

export default function StartProjectClient() {
  const [step, setStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [timeline, setTimeline] = useState('')
  const [budget, setBudget] = useState(250)
  const [customBudget, setCustomBudget] = useState('')
  const [useCustomBudget, setUseCustomBudget] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [showDebugPanel, setShowDebugPanel] = useState(false)

  const totalSteps = 4

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const handleNext = () => {
    console.log('handleNext called, current step:', step, 'totalSteps:', totalSteps)
    if (step < totalSteps) {
      console.log('Setting step to:', step + 1)
      setStep(step + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      console.log('Step is already at max')
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          timeline,
          budget: budget === -1 ? 'Nog niet zeker' : useCustomBudget ? `€${customBudget}` : `€${budget.toLocaleString()}`,
          subject: 'Start je project formulier'
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Geweldig! We hebben je aanvraag ontvangen en nemen binnen 24 uur contact met je op.',
        })
        // Go to success state immediately
        setStep(totalSteps + 1)
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Er is iets misgegaan. Probeer het opnieuw.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Er is een fout opgetreden. Probeer het later opnieuw.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const canProceedStep1 = selectedServices.length > 0
  const canProceedStep2 = timeline !== ''
  const canProceedStep3 = budget >= 250 || budget === -1

  // Debug logging
  console.log('Render - Current step:', step, 'canProceedStep1:', canProceedStep1)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Debug toggle button - only in development */}
      {process.env.NODE_ENV === 'development' && !showDebugPanel && (
        <button
          onClick={() => setShowDebugPanel(true)}
          className="fixed top-4 right-4 z-40 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          title="Open Debug Panel"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      )}

      {/* Debug panel - only show when toggled */}
      {process.env.NODE_ENV === 'development' && showDebugPanel && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none bg-black/50">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur-sm pointer-events-auto max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-white font-semibold text-sm">Debug Panel</h3>
              </div>
              <button
                onClick={() => setShowDebugPanel(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                title="Close Debug Panel"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-400 text-xs mb-1">Current Step</div>
                <div className="text-white font-mono text-lg">{step}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-400 text-xs mb-1">Total Steps</div>
                <div className="text-white font-mono text-lg">{totalSteps}</div>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
              <div className="text-slate-400 text-xs mb-1">Success Status</div>
              <div className={`font-semibold ${step > totalSteps ? 'text-green-400' : 'text-red-400'}`}>
                {step > totalSteps ? '✓ SHOWING SUCCESS' : '✗ NOT SHOWING'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-400 text-xs mb-1">Services</div>
                <div className="text-white font-mono">{selectedServices.length}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-400 text-xs mb-1">Timeline</div>
                <div className="text-white text-sm">{timeline || 'not set'}</div>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
              <div className="text-slate-400 text-xs mb-1">Budget</div>
              <div className="text-white font-mono">
                {budget === -1 ? 'Not sure' : useCustomBudget ? `€${customBudget}` : `€${budget.toLocaleString()}`}
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => setStep(5)} 
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Test Success
              </button>
              <button 
                onClick={() => setStep(1)} 
                className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Reset Form
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-8 border border-primary/30">
                <Sparkles className="h-4 w-4" />
                <span>Gratis intakegesprek & offerte op maat</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white">
                Start je project met{' '}
                <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Breaz
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Vertel ons over je uitdaging en ontdek hoe we je kunnen helpen groeien.<br />
                <span className="text-primary font-semibold">We nemen binnen 24 uur contact met je op.</span>
              </p>
            </FadeIn>
            
            {/* Progress Bar */}
            <FadeIn delay={0.3}>
              <div className="max-w-lg mx-auto">
                <div className="flex items-center justify-between mb-3 text-sm text-slate-300">
                  <span className="font-medium">Stap {Math.min(step, totalSteps)} van {totalSteps}</span>
                  <span className="text-primary font-semibold">{Math.round((Math.min(step, totalSteps) / totalSteps) * 100)}% compleet</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(Math.min(step, totalSteps) / totalSteps) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 bg-slate-900 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="relative min-h-[600px]">
            {step === 1 && (
              <div className="w-full opacity-100">
                <Card className="border-2 border-slate-700 bg-slate-800 shadow-2xl">
                  <CardHeader className="text-center pb-10 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t-lg">
                    <CardTitle className="text-4xl mb-4 text-white font-bold">
                      Welke diensten interesseren je?
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-300">
                      Selecteer één of meerdere diensten. Je kunt later altijd nog aanpassingen maken.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-slate-800 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {services.map((service) => {
                        const Icon = service.icon
                        const isSelected = selectedServices.includes(service.id)
                        
                        return (
                          <motion.button
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={cn(
                              'relative p-8 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-xl group',
                              isSelected
                                ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                                : 'border-slate-600 bg-slate-700 hover:border-primary/50 hover:bg-slate-600'
                            )}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {/* Checkmark */}
                            <div className={cn(
                              'absolute top-6 right-6 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all',
                              isSelected
                                ? 'border-primary bg-primary shadow-lg'
                                : 'border-slate-500'
                            )}>
                              {isSelected && <CheckCircle2 className="h-5 w-5 text-white" />}
                            </div>

                            {/* Icon */}
                            <div className={cn(
                              'w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br shadow-lg',
                              service.color
                            )}>
                              <Icon className="h-8 w-8 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-300 mb-6 text-base">
                              {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-center text-sm text-slate-400">
                                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </motion.button>
                        )
                      })}
                    </div>

                    <div className="flex justify-between items-center pt-8 border-t border-slate-600">
                      <p className="text-base text-slate-300">
                        {selectedServices.length > 0 
                          ? `${selectedServices.length} ${selectedServices.length === 1 ? 'dienst' : 'diensten'} geselecteerd`
                          : 'Selecteer minstens één dienst om verder te gaan'
                        }
                      </p>
                      <Button
                        size="lg"
                        onClick={handleNext}
                        disabled={!canProceedStep1}
                        className="gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Volgende stap
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 2 && (
              <div className="w-full opacity-100">
                  <Card className="border-2 border-slate-700 bg-slate-800 shadow-2xl">
                  <CardHeader className="text-center pb-10 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t-lg">
                    <CardTitle className="text-4xl mb-4 text-white font-bold">
                      Wat is je gewenste tijdlijn?
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-300">
                      Dit helpt ons om de juiste planning en aanpak voor te stellen.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-slate-800 p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                      {timelines.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => setTimeline(item.id)}
                          className={cn(
                            'relative p-8 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-xl group',
                            timeline === item.id
                              ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                              : 'border-slate-600 bg-slate-700 hover:border-primary/50 hover:bg-slate-600'
                          )}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Checkmark */}
                          <div className={cn(
                            'absolute top-6 right-6 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all',
                            timeline === item.id
                              ? 'border-primary bg-primary shadow-lg'
                              : 'border-slate-500'
                          )}>
                            {timeline === item.id && <CheckCircle2 className="h-5 w-5 text-white" />}
                          </div>

                          <div className="text-6xl mb-4">{item.icon}</div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.label}</h3>
                        </motion.button>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-8 border-t border-slate-600">
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        className="gap-3 px-6 py-3 text-base border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      >
                        <ArrowLeft className="h-5 w-5" />
                        Vorige stap
                      </Button>
                      <Button
                        size="lg"
                        onClick={handleNext}
                        disabled={!canProceedStep2}
                        className="gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Volgende stap
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 3 && (
              <div className="w-full opacity-100">
                  <Card className="border-2 border-slate-700 bg-slate-800 shadow-2xl">
                  <CardHeader className="text-center pb-10 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t-lg">
                    <CardTitle className="text-4xl mb-4 text-white font-bold">
                      Wat is je indicatief budget?
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-300">
                      Een budgetindicatie helpt ons om een passend voorstel te maken. Dit is niet bindend.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-slate-800 p-8">
                    {/* Budget Slider */}
                    <div className="mb-12">
                      <div className="relative">
                        {/* Slider Track */}
                        <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 via-blue-500 via-purple-500 via-orange-500 to-red-500 rounded-full transition-all duration-300"
                            style={{ width: `${((budget - 250) / (20000 - 250)) * 100}%` }}
                          />
                        </div>
                        
                        {/* Slider Handle */}
                        <div className="relative mt-6">
                          <input
                            type="range"
                            min="250"
                            max="20000"
                            step="250"
                            value={budget}
                            onChange={(e) => {
                              setBudget(parseInt(e.target.value))
                              setUseCustomBudget(false)
                            }}
                            className="w-full h-2 bg-transparent appearance-none cursor-pointer slider"
                            style={{
                              background: `linear-gradient(to right, 
                                #10b981 0%, 
                                #3b82f6 20%, 
                                #8b5cf6 40%, 
                                #f59e0b 60%, 
                                #ef4444 100%)`
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Budget Labels */}
                      <div className="flex justify-between mt-8">
                        {budgetRanges.slice(0, -1).map((range, index) => (
                          <div
                            key={index}
                            className={cn(
                              'text-center cursor-pointer transition-all duration-300',
                              budget === range.value ? 'scale-110' : 'scale-100'
                            )}
                            onClick={() => {
                              setBudget(range.value)
                              setUseCustomBudget(false)
                            }}
                          >
                            <div className={cn(
                              'w-4 h-4 rounded-full mx-auto mb-2 transition-all duration-300',
                              budget === range.value 
                                ? 'bg-white shadow-lg' 
                                : 'bg-slate-500'
                            )} />
                            <div className={cn(
                              'text-sm font-medium transition-colors duration-300',
                              budget === range.value ? 'text-white' : 'text-slate-400'
                            )}>
                              {range.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Budget Input */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-1">
                          <label htmlFor="customBudget" className="block text-sm font-medium text-slate-300 mb-2">
                            Of voer een specifiek bedrag in:
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              id="customBudget"
                              min="250"
                              max="100000"
                              step="250"
                              value={customBudget}
                              onChange={(e) => {
                                setCustomBudget(e.target.value)
                                if (e.target.value) {
                                  setUseCustomBudget(true)
                                  setBudget(parseInt(e.target.value))
                                }
                              }}
                              className="w-full px-4 py-3 pl-10 border border-slate-600 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              placeholder="Bijv. 7500"
                            />
                            <span className="absolute left-3 top-3.5 text-slate-400">€</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="notSure"
                            checked={budget === -1}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setBudget(-1)
                                setUseCustomBudget(false)
                                setCustomBudget('')
                              }
                            }}
                            className="w-4 h-4 text-primary bg-slate-700 border-slate-600 rounded focus:ring-primary focus:ring-2"
                          />
                          <label htmlFor="notSure" className="text-sm text-slate-300">
                            Nog niet zeker
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Selected Budget Display */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-700 rounded-xl border border-slate-600">
                        <div className={cn(
                          'w-3 h-3 rounded-full bg-gradient-to-r',
                          budget === -1 ? 'from-slate-500 to-slate-600' : 'from-green-500 via-blue-500 via-purple-500 via-orange-500 to-red-500'
                        )} />
                        <span className="text-lg font-semibold text-white">
                          Geselecteerd: {budget === -1 ? 'Nog niet zeker' : useCustomBudget ? `€${customBudget}` : `€${budget.toLocaleString()}`}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-8 border-t border-slate-600">
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        className="gap-3 px-6 py-3 text-base border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      >
                        <ArrowLeft className="h-5 w-5" />
                        Vorige stap
                      </Button>
                      <Button
                        size="lg"
                        onClick={handleNext}
                        disabled={!canProceedStep3}
                        className="gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Volgende stap
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 4 && (
              <div className="w-full opacity-100">
                  <Card className="border-2 border-slate-700 bg-slate-800 shadow-2xl">
                  <CardHeader className="text-center pb-10 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t-lg">
                    <CardTitle className="text-4xl mb-4 text-white font-bold">
                      Laatste stap: jouw contactgegevens
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-300">
                      We nemen binnen 24 uur contact met je op voor een vrijblijvend intakegesprek.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-slate-800 p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Selected Services Summary */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl p-6 mb-8 border border-primary/20"
                      >
                        <h4 className="font-semibold mb-4 flex items-center gap-3 text-white text-lg">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-white" />
                          </div>
                          Je project overzicht
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div className="bg-slate-700/50 rounded-lg p-4">
                            <span className="text-slate-400 block mb-2">Diensten:</span>
                            <div className="font-medium text-white">
                              {selectedServices.map(id => 
                                services.find(s => s.id === id)?.title
                              ).join(', ')}
                            </div>
                          </div>
                          <div className="bg-slate-700/50 rounded-lg p-4">
                            <span className="text-slate-400 block mb-2">Tijdlijn:</span>
                            <div className="font-medium text-white">
                              {timelines.find(t => t.id === timeline)?.label}
                            </div>
                          </div>
                          <div className="sm:col-span-2 bg-slate-700/50 rounded-lg p-4">
                            <span className="text-slate-400 block mb-2">Budget:</span>
                            <div className="font-medium text-white">
                              {budget === -1 ? 'Nog niet zeker' : useCustomBudget ? `€${customBudget}` : `€${budget.toLocaleString()}`}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                            Naam *
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-4 pl-12 border-2 border-slate-600 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:border-slate-500"
                              placeholder="Je volledige naam"
                            />
                            <Users className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                            E-mail *
                          </label>
                          <div className="relative group">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-4 pl-12 border-2 border-slate-600 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:border-slate-500"
                              placeholder="je@email.nl"
                            />
                            <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <label htmlFor="company" className="block text-sm font-medium text-slate-300">
                            Bedrijf
                          </label>
                          <div className="relative group">
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-4 pl-12 border-2 border-slate-600 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:border-slate-500"
                              placeholder="Je bedrijfsnaam"
                            />
                            <Building2 className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
                            Telefoonnummer
                          </label>
                          <div className="relative group">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-4 pl-12 border-2 border-slate-600 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:border-slate-500"
                              placeholder="+32 472 50 07 62"
                            />
                            <Phone className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-2"
                      >
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                          Vertel ons over je project (optioneel)
                        </label>
                        <div className="relative group">
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-4 pl-12 border-2 border-slate-600 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none group-hover:border-slate-500"
                            placeholder="Beschrijf je uitdaging, doelen of specifieke vragen..."
                          />
                          <div className="absolute left-4 top-4">
                            <div className="w-5 h-5 rounded-full bg-slate-600 flex items-center justify-center">
                              <span className="text-xs text-slate-400">💬</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {submitStatus.type && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={cn(
                            'p-6 rounded-xl border-2 flex items-center gap-3',
                            submitStatus.type === 'success'
                              ? 'bg-green-500/10 text-green-300 border-green-500/30'
                              : 'bg-red-500/10 text-red-300 border-red-500/30'
                          )}
                        >
                          <div className={cn(
                            'w-6 h-6 rounded-full flex items-center justify-center',
                            submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                          )}>
                            {submitStatus.type === 'success' ? (
                              <CheckCircle2 className="h-4 w-4 text-white" />
                            ) : (
                              <span className="text-white text-sm">!</span>
                            )}
                          </div>
                          {submitStatus.message}
                        </motion.div>
                      )}

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-between items-center pt-8 border-t border-slate-600"
                      >
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleBack}
                          className="gap-3 px-6 py-3 text-base border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all duration-300"
                        >
                          <ArrowLeft className="h-5 w-5" />
                          Vorige stap
                        </Button>
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="gap-3 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              Versturen...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              Verstuur aanvraag
                            </>
                          )}
                        </Button>
                      </motion.div>

                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xs text-center text-slate-400 pt-4"
                      >
                        Door dit formulier in te dienen, ga je akkoord met onze{' '}
                        <a href="/privacy" className="underline hover:text-primary transition-colors">privacyverklaring</a>.
                      </motion.p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}

            {step > totalSteps && (
              <div className="w-full opacity-100">
                  <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-50/90 via-emerald-50/80 to-teal-50/90 shadow-2xl backdrop-blur-sm">
                  <CardContent className="text-center py-20 px-6 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5"></div>
                    <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-500/10 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-500/10 rounded-full animate-pulse delay-500"></div>
                    
                    <div className="relative z-10">
                      {/* Success Icon with Animation */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 0.3, 
                          type: 'spring', 
                          stiffness: 200,
                          damping: 15
                        }}
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/30"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
                        >
                          <CheckCircle2 className="h-14 w-14 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Confetti Animation */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ 
                              opacity: 0, 
                              scale: 0,
                              x: Math.random() * 400 - 200,
                              y: -50
                            }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              y: [0, 300],
                              rotate: [0, 360]
                            }}
                            transition={{ 
                              delay: 0.5 + i * 0.1,
                              duration: 2,
                              ease: "easeOut"
                            }}
                            className="absolute w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'][i % 5],
                              left: `${Math.random() * 100}%`
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Main Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          Geweldig! 🎉
                        </h2>
                        <p className="text-xl text-slate-700 mb-2 font-semibold">
                          Je project-aanvraag is succesvol verzonden
                        </p>
                        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                          We hebben je aanvraag ontvangen en waarderen je vertrouwen in Breaz.
                          Een van onze experts neemt binnen 24 uur contact met je op om je project te bespreken.
                        </p>
                      </motion.div>

                      {/* Process Steps */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
                      >
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.4, duration: 0.4 }}
                          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-lg font-semibold text-slate-800 mb-2">Check je inbox</div>
                          <div className="text-sm text-slate-600">
                            Je ontvangt een bevestigingsmail met alle details
                          </div>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.6, duration: 0.4 }}
                          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-lg font-semibold text-slate-800 mb-2">We bellen je op</div>
                          <div className="text-sm text-slate-600">
                            Binnen 24 uur nemen we contact op voor een intakegesprek
                          </div>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.8, duration: 0.4 }}
                          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-lg font-semibold text-slate-800 mb-2">Start je project</div>
                          <div className="text-sm text-slate-600">
                            En begin met groeien naar je doelen
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Action Buttons */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.0, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                      >
                        <Button 
                          asChild 
                          size="lg" 
                          variant="outline"
                          className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <a href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-5 w-5" />
                            Terug naar home
                          </a>
                        </Button>
                        <Button 
                          asChild 
                          size="lg"
                          className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <a href="/diensten" className="flex items-center gap-2">
                            <Target className="h-5 w-5" />
                            Bekijk onze diensten
                          </a>
                        </Button>
                      </motion.div>

                      {/* Additional Info */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2, duration: 0.6 }}
                        className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-green-200/30"
                      >
                        <div className="flex items-center justify-center gap-2 text-slate-600 mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium">Status: Aanvraag ontvangen</span>
                        </div>
                        <p className="text-xs text-slate-500">
                          Referentie: #{Date.now().toString().slice(-6)}
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      {step <= totalSteps && (
        <section className="py-12 bg-secondary/30 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">24u</div>
                <div className="text-sm text-muted-foreground">
                  Reactietijd voor eerste contact
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">
                  Vrijblijvend intakegesprek
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">Op maat</div>
                <div className="text-sm text-muted-foreground">
                  Persoonlijke begeleiding & aanpak
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

