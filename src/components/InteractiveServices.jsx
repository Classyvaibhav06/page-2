import React from 'react'
import { motion } from 'framer-motion'
import { Target, Zap, Shield, TrendingUp, Star, Users } from 'lucide-react'

const A = '#C41E3A'

const servicesData = [
  {
    id: 1,
    title: 'Patient Acquisition',
    desc: 'Hyper-targeted Meta & Google campaigns built exclusively for aesthetic procedures. Every rupee goes toward patients researching your treatments.',
    icon: Target,
  },
  {
    id: 2,
    title: 'Conversion Systems',
    desc: 'High-trust landing pages, WhatsApp automations, and multi-step follow-up sequences that turn enquiries into booked consultations automatically.',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Authority & Content',
    desc: 'Educational content strategies, automated review generation, and social proof systems that make your clinic the undisputed expert patients trust.',
    icon: Shield,
  },
  {
    id: 4,
    title: 'Growth Analytics',
    desc: 'A real-time performance dashboard connecting your ad spend directly to booked procedures. Track CPL, ROAS, and revenue — all in one place.',
    icon: TrendingUp,
  },
  {
    id: 5,
    title: 'Brand Positioning',
    desc: 'Strategic positioning that commands premium pricing. We craft the story, visual identity, and messaging that makes you the obvious choice.',
    icon: Star,
  },
  {
    id: 6,
    title: 'Patient Retention',
    desc: 'Turn one-time visitors into lifetime patients with intelligent follow-up systems, loyalty programs, and personalised re-engagement campaigns.',
    icon: Users,
  },
]

export function OrbitalServices() {
  return (
    <section id="services" className="w-full py-14 md:py-20 bg-[#FAF9F6] relative overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${A} 0%, transparent 70%)` }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${A} 0%, transparent 70%)` }} />

      <div className="max-w-6xl mx-auto px-5 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: A }} />
            Our Expertise
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Everything Your Clinic<br />
            <span className="italic" style={{ color: A }}>Needs to Grow</span>
          </h2>
          <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto">
            Built exclusively for medspas & cosmetic clinics — every service drives real bookings.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group relative bg-white rounded-2xl border border-stone-200/70 p-6 md:p-7 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:border-[#C41E3A]/30 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${A}12`, color: A }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="font-playfair font-bold text-stone-900 text-lg leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-stone-500 text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>

                {/* Read more link */}
                <a
                  href="https://growzzymedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2"
                  style={{ color: A }}
                >
                  Read more
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(90deg, ${A}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
