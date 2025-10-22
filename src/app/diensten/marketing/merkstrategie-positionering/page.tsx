import { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Target, TrendingUp, Users, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Merkstrategie & Positionering | Breaz Marketing',
  description: 'Ontwikkel een sterke merkidentiteit en positionering die resoneert met je doelgroep. Strategisch advies voor duurzame groei.',
}

export default function MerkstrategiePositioneringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#0F1629] to-[#0B1120]">
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-10 w-10 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Merkstrategie & Positionering
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12">
            Bouw een sterk merk dat zich onderscheidt in de markt en resonneert met je doelgroep.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <TrendingUp className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Merkidentiteit</h3>
              <p className="text-gray-300">
                Ontwikkel een unieke merkidentiteit die je bedrijf onderscheidt en waarde creëert voor je klanten.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Users className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Doelgroepanalyse</h3>
              <p className="text-gray-300">
                Krijg diepgaand inzicht in je doelgroep en hun behoeften voor effectieve positionering.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Lightbulb className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Propositieontwikkeling</h3>
              <p className="text-gray-300">
                Formuleer een krachtige waardepropositie die aansluit bij de behoeften van je markt.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Target className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Marktpositionering</h3>
              <p className="text-gray-300">
                Positioneer je merk strategisch in de markt voor maximale impact en groei.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Waarom merkstrategie belangrijk is</h2>
            <p className="text-gray-300 mb-4">
              Een sterke merkstrategie is de basis voor duurzaam succes. Het helpt je om je te onderscheiden 
              in een competitieve markt, loyaliteit op te bouwen bij klanten, en waarde te creëren die verder 
              gaat dan alleen je producten of diensten.
            </p>
            <p className="text-gray-300">
              Onze aanpak combineert marktonderzoek, concurrentieanalyse en strategische planning om een 
              merkstrategie te ontwikkelen die resoneert met je doelgroep en groei stimuleert.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

