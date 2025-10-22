import { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Megaphone, Share2, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Campagnes & Social Media | Breaz Marketing',
  description: 'Bereik en betrek je doelgroep met impactvolle campagnes en effectieve social media marketing.',
}

export default function CampagnesSocialMediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#0F1629] to-[#0B1120]">
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="h-10 w-10 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Campagnes & Social Media
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12">
            Bereik en betrek je doelgroep met strategische campagnes en effectieve social media marketing.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Megaphone className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Campagnestrategie</h3>
              <p className="text-gray-300">
                Ontwikkel doelgerichte campagnes die je boodschap effectief overbrengen en resultaten opleveren.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Share2 className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Social Media Management</h3>
              <p className="text-gray-300">
                Beheer je social media kanalen professioneel en bouw een betrokken community op.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Users className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Community Building</h3>
              <p className="text-gray-300">
                Creëer en onderhoud een loyale community die ambassadeur wordt van je merk.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <TrendingUp className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Paid Advertising</h3>
              <p className="text-gray-300">
                Maximaliseer je bereik met strategische betaalde advertenties op social media platforms.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">De kracht van social media</h2>
            <p className="text-gray-300 mb-4">
              Social media is meer dan alleen posts plaatsen. Het gaat om het opbouwen van relaties, 
              het creëren van merkbewustzijn, en het betrekken van je doelgroep in een authentieke dialoog. 
              Effectieve social media marketing combineert strategie, creativiteit en data-gedreven optimalisatie.
            </p>
            <p className="text-gray-300">
              Wij helpen je om je social media aanwezigheid te transformeren in een krachtig marketingkanaal. 
              Van strategieontwikkeling tot contentcreatie en community management, we zorgen voor een 
              consistente en impactvolle aanwezigheid die resultaten oplevert.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

