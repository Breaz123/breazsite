import { Wind } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="text-center">
        <div className="inline-block animate-spin mb-4">
          <Wind className="h-12 w-12 text-primary" />
        </div>
        <p className="text-muted-foreground">Laden...</p>
      </div>
    </div>
  )
}

