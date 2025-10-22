import { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Search, TrendingUp, MapPin, BarChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Online Zichtbaarheid & GEO/SEO | Breaz Marketing',
  description: 'Verhoog je online vindbaarheid met strategische SEO en lokale zichtbaarheid door GEO-optimalisatie.',
}

export default function OnlineZichtbaarheidSEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#0F1629] to-[#0B1120]">
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Search className="h-10 w-10 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Online Zichtbaarheid & GEO/SEO
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12">
            Word gevonden door je ideale klanten met strategische SEO en lokale zichtbaarheid.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Search className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">SEO Optimalisatie</h3>
              <p className="text-gray-300">
                Verbeter je ranking in zoekmachines en trek organisch verkeer aan naar je website.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <MapPin className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Local SEO (GEO)</h3>
              <p className="text-gray-300">
                Domineer lokale zoekresultaten en trek klanten uit je regio aan met GEO-optimalisatie.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <TrendingUp className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Keyword Research</h3>
              <p className="text-gray-300">
                Identificeer de juiste zoektermen waar je doelgroep op zoekt en optimaliseer ervoor.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <BarChart className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Analytics & Rapportage</h3>
              <p className="text-gray-300">
                Monitor je prestaties en krijg inzicht in wat werkt en waar kansen liggen.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Waarom online zichtbaarheid cruciaal is</h2>
            <p className="text-gray-300 mb-4">
              In de digitale wereld van vandaag begint bijna elke klantreis met een zoekopdracht. 
              Als je niet zichtbaar bent in zoekmachines, mis je waardevolle kansen. SEO en GEO-optimalisatie 
              helpen je om gevonden te worden door klanten die actief op zoek zijn naar je diensten.
            </p>
            <p className="text-gray-300">
              Onze aanpak combineert technische optimalisatie, contentstrategie en lokale zichtbaarheid 
              om duurzame resultaten te behalen. We zorgen ervoor dat je niet alleen gevonden wordt, 
              maar ook de juiste bezoekers aantrekt die converteren.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

