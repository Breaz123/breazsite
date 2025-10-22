import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="Breaz Logo" 
                width={40} 
                height={40}
                className="h-10 w-10"
                unoptimized
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron tracking-wider">
                Breaz
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Innovatieve digitale oplossingen voor moderne bedrijven. Wij
              transformeren uw ideeën in krachtige digitale producten.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Snelle Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Diensten</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@breaz-it.be"
                  className="transition-colors hover:text-foreground"
                >
                  info@breaz-it.be
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+32472500762"
                  className="transition-colors hover:text-foreground"
                >
                  +32/472.500.762
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Brydenbachlaan 13, 2275 Wechelderzande</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Breaz. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="/algemene-voorwaarden"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Algemene Voorwaarden
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const quickLinks = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Diensten", href: "/diensten" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Carrière", href: "/carriere" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Webontwikkeling", href: "/diensten/webontwikkeling" },
  { label: "Cloud & DevOps", href: "/diensten/cloud-devops" },
  { label: "Digitale Strategie", href: "/diensten/digitale-strategie" },
  { label: "Maatwerk Oplossingen", href: "/diensten/maatwerk" },
];

