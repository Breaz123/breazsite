import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Wind, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <Wind className="h-24 w-24 text-primary relative" />
            </div>
          </div>

          <h1 className="text-6xl sm:text-8xl font-bold mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pagina niet gevonden
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, de pagina die je zoekt bestaat niet of is verplaatst.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Naar homepage
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ga terug
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

