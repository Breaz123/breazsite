import { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { BookOpen, Pen, Video, Image } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contentcreatief & Storytelling | Breaz Marketing',
  description: 'Creëer boeiende content en verhalen die je merk tot leven brengen en je doelgroep betrekken.',
}

export default function ContentStorytellingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#0F1629] to-[#0B1120]">
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-10 w-10 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Contentcreatief & Storytelling
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12">
            Vertel je verhaal op een manier die resoneert, inspireert en converteert.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Pen className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Contentstrategie</h3>
              <p className="text-gray-300">
                Ontwikkel een contentstrategie die aansluit bij je doelen en resoneert met je doelgroep.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <BookOpen className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Brand Storytelling</h3>
              <p className="text-gray-300">
                Creëer authentieke verhalen die emotionele connecties maken met je publiek.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Video className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Video Content</h3>
              <p className="text-gray-300">
                Produceer impactvolle video content die je boodschap visueel tot leven brengt.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Image className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Visuele Content</h3>
              <p className="text-gray-300">
                Ontwerp visueel aantrekkelijke content die opvalt en blijft hangen.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">De kracht van storytelling</h2>
            <p className="text-gray-300 mb-4">
              In een wereld vol informatie is het essentieel om op te vallen. Storytelling helpt je om 
              emotionele connecties te maken met je doelgroep, je boodschap memorabel te maken, en 
              vertrouwen op te bouwen.
            </p>
            <p className="text-gray-300">
              Wij helpen je om je merkverhaal te vertellen op een manier die authentiek, boeiend en 
              effectief is. Van contentstrategie tot executie, we zorgen ervoor dat elk stukje content 
              bijdraagt aan je merkdoelen.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

