import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, Image as ImageIcon, Lock, CalendarDays, BadgeCheck } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const A = '#8B3A3A';

const journeyPoints = [
  {
    icon: ShieldCheck,
    title: 'High Trust Barrier',
    desc: "Patients aren't buying a product — they're choosing someone to alter their appearance. Trust is built over weeks of research, not a single ad click.",
  },
  {
    icon: Search,
    title: 'Long Research Phase',
    desc: 'The average cosmetic patient takes 2–6 months from first search to first booking. We build nurture systems that stay with your patient through the entire journey.',
  },
  {
    icon: ImageIcon,
    title: 'Visual Decision-Making',
    desc: 'Before/after content converts better than any copy. Patients make decisions based on what they see. Our strategy relies on real clinical results.',
  },
  {
    icon: Lock,
    title: 'Privacy-Sensitive Leads',
    desc: "Cosmetic procedures carry social stigma. Patients won't fill out a public form. We design low-friction, discreet funnels — WhatsApp-first, soft CTAs.",
  },
  {
    icon: CalendarDays,
    title: 'Seasonal Demand Cycles',
    desc: 'Wedding season. Summer body prep. Festive glow-ups. We plan campaigns 6–8 weeks ahead of every predictable seasonal spike to capture peak demand.',
  },
  {
    icon: BadgeCheck,
    title: 'Credibility Checking',
    desc: 'Before booking, patients Google your doctor and compare you to competitors. We manage your online authority — reviews, bios, case studies.',
  },
];

export function PremiumICPSection() {
  return (
    <section id="icp" className="py-32 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-stone-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B3A3A]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
             <div className="flex gap-1">
               <span className="w-3 h-3 rounded-full" style={{ backgroundColor: A }} />
               <span className="w-3 h-3 rounded-full bg-stone-300" />
             </div>
             <p className="text-stone-500 font-semibold tracking-widest text-xs uppercase">Why Medspas Specifically</p>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
            We Don't Do Generic Marketing.<br />
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              textClassName="italic text-[#8B3A3A]"
            >
              We Do Aesthetic Growth.
            </ScrollFloat>
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl">
            We've spent years inside this industry. We understand things about your patient that a generalist agency never will. Here's why cosmetic marketing is fundamentally different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeyPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: '#d6d3d1' }}
              className="bg-white rounded-[32px] p-8 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${A}0A`, color: A }}
              >
                <point.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-stone-900 font-bold text-xl mb-3">{point.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
