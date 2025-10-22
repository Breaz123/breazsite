'use client'

import Link from 'next/link'
import { Wind, Mail, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

const footerLinks = {
  company: [
    { label: 'Diensten', href: '/diensten' },
    { label: 'Aanpak', href: '/aanpak' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Marketing', href: '/diensten/marketing' },
    { label: 'Business Development', href: '/diensten/business-development' },
    { label: 'Sales', href: '/diensten/sales' },
    { label: 'Webdevelopment', href: '/diensten/webdevelopment' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Algemene Voorwaarden', href: '/voorwaarden' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setMessage('Voer een geldig email adres in')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setEmail('')
      } else {
        setMessage(data.error || 'Er is een fout opgetreden')
      }
    } catch (error) {
      setMessage('Er is een fout opgetreden bij het verzenden')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Wind className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Breaz
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Marketing & business development met een menselijke aanpak. 
              Wij helpen bedrijven groeien door échte connecties te maken.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/siemon-basstanie-a7397527b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@breaz-it.be"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/siemon-basstanie-a7397527b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>Connect op LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Juridisch</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-sm">Nieuwsbrief</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Schrijf je in voor onze nieuwsbrief
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="je@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed rounded-md transition-colors"
                >
                  {isSubmitting ? 'Bezig...' : 'Inschrijven'}
                </button>
                {message && (
                  <p className={`text-xs ${message.includes('succesvol') ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Breaz. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}

