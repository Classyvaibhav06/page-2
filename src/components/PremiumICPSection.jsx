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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-12 pb-16">
          {journeyPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative flex flex-col items-center text-center rounded-[30px] border-2 border-stone-100 bg-white px-8 py-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:bg-[#8B3A3A] hover:border-transparent hover:shadow-[0_20px_40px_rgba(139,58,58,0.15)] group select-none"
              >
                {/* Floating Icon Circle */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 bg-[#8B3A3A12] text-[#8B3A3A] group-hover:bg-white group-hover:text-[#8B3A3A]"
                >
                  <Icon size={24} strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="text-stone-900 font-bold text-xl mb-3 mt-2 font-playfair transition-colors duration-300 group-hover:text-white leading-snug">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-stone-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-stone-200">
                  {point.desc}
                </p>

                {/* Floating Bottom Button */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 inline-flex items-center justify-center h-8 px-6 rounded-full border transition-all duration-300 bg-white border-[#8B3A3A] group-hover:border-white shadow-sm hover:shadow-[0_6px_15px_rgba(139,58,58,0.25)]"
                >
                  <svg className="w-4 h-4 text-[#8B3A3A] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 19 18" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinejoin="round" strokeLinecap="round" d="M3.51141 2.78405L14.9344 6.95805C15.4154 7.13405 15.4014 7.81905 14.9134 7.97605L9.68541 9.64905L8.01241 14.8771C7.85641 15.3651 7.17041 15.3791 6.99441 14.8981L2.82141 3.47405C2.66441 3.04405 3.08141 2.62705 3.51141 2.78405Z" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
