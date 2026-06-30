import React from 'react';
import { ArrowRight, Target, Zap, Shield, TrendingUp, Star, Users } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const A = '#8B3A3A';
const AB = '#6d2e2e';

const servicesData = [
  {
    num: '01',
    title: 'Patient Acquisition',
    subtitle: 'Fill your calendar with ready-to-book patients',
    desc: 'Hyper-targeted Meta & Google campaigns built exclusively for aesthetic procedures. We engineer campaigns around procedure intent — not just generic traffic — so every rupee goes toward patients who are already researching your treatments.',
    bullets: [
      'Procedure-specific creative & copy',
      'WhatsApp & DM lead capture funnels',
      'A/B tested landing pages that convert',
      'Daily budget optimisation & reporting',
    ],
    icon: Target,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    stat: { value: '3.2×', label: 'Avg. Booking Lift' },
  },
  {
    num: '02',
    title: 'Conversion Systems',
    subtitle: 'Turn enquiries into booked consultations — automatically',
    desc: 'High-trust landing pages, WhatsApp automations, and multi-step follow-up sequences that nurture leads over weeks without you lifting a finger. We build the full patient pipeline, from first click to confirmed appointment.',
    bullets: [
      'Custom landing pages per procedure',
      'Automated WhatsApp nurture sequences',
      'CRM integration & lead scoring',
      'Retargeting campaigns for warm leads',
    ],
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
    stat: { value: '40%', label: 'More Closures' },
  },
  {
    num: '03',
    title: 'Authority & Content',
    subtitle: 'Become the most trusted name in your city',
    desc: 'Educational content strategies, automated review generation, and social proof systems that position your clinic as the undisputed expert. Patients research for months — we make sure every touchpoint they find confirms your authority.',
    bullets: [
      'Before/after content strategy',
      'Automated Google & Practo review systems',
      'Doctor bio & credentials optimisation',
      'Instagram & YouTube growth playbooks',
    ],
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop',
    stat: { value: '94%', label: 'Retention Rate' },
  },
  {
    num: '04',
    title: 'Growth Analytics',
    subtitle: 'Know your exact cost-per-patient, every day',
    desc: 'A real-time performance dashboard that connects your ad spend directly to booked procedures. Track CPL, ROAS, consultation-to-patient conversion rate, and revenue — all in one place. No more guessing what is working.',
    bullets: [
      'Real-time revenue attribution dashboard',
      'Procedure-level CPL & ROAS tracking',
      'Weekly growth reports & strategy calls',
      'Competitor benchmark analysis',
    ],
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    stat: { value: '$3.80', label: 'Avg. CPL' },
  },
];

export function InteractiveServices() {
  return (
    <section id="services" className="py-24 bg-[#FAF9F6] relative overflow-visible">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: A }} />
                <span className="w-3 h-3 rounded-full bg-stone-300" />
              </div>
              <p className="text-stone-500 font-semibold tracking-widest text-xs uppercase">Our Expertise</p>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
              Boost Your Clinic<br />
              <span className="italic" style={{ color: A }}>with Our Expertise</span>
            </h2>
          </div>
          <button
            className="self-start md:self-auto flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-all duration-200 hover:shadow-md bg-white border-stone-200 text-stone-900 hover:bg-stone-50"
          >
            View All Services <ArrowRight size={16} />
          </button>
        </div>

        {/* ScrollStack */}
        <div className="w-full relative">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={100}
            itemScale={0.03}
            itemStackDistance={20}
            stackPosition="100px"
            scaleEndPosition="60px"
            baseScale={0.90}
            rotationAmount={0}
            blurAmount={0}
          >
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollStackItem key={i} itemClassName="w-full">
                  <div
                    className="w-full rounded-[40px] overflow-hidden border border-stone-200/50"
                    style={{
                      background: '#FFFFFF',
                      boxShadow: '0 8px 60px rgba(0,0,0,0.07)',
                    }}
                  >
                    <div className="grid md:grid-cols-2 min-h-[480px]">

                      {/* Left — Content */}
                      <div className="flex flex-col justify-between p-10 md:p-14">
                        {/* Top */}
                        <div>
                          {/* Number + Icon row */}
                          <div className="flex items-center gap-4 mb-8">
                            <span
                              className="text-5xl font-playfair font-bold leading-none select-none"
                              style={{ color: `${A}20` }}
                            >
                              {service.num}
                            </span>
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center"
                              style={{ background: `${A}12`, color: A }}
                            >
                              <Icon size={22} strokeWidth={1.75} />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="font-playfair font-bold text-3xl md:text-4xl text-stone-900 mb-2 leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-sm font-semibold mb-5" style={{ color: A }}>
                            {service.subtitle}
                          </p>
                          <p className="text-stone-500 text-base leading-relaxed mb-8">
                            {service.desc}
                          </p>

                          {/* Bullets */}
                          <ul className="space-y-2.5">
                            {service.bullets.map((b, j) => (
                              <li key={j} className="flex items-start gap-3 text-stone-600 text-sm">
                                <span
                                  className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                                  style={{ background: `${A}15`, color: A }}
                                >
                                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Bottom row */}
                        <div className="flex items-center justify-between mt-10 pt-8 border-t border-stone-100">
                          {/* Stat */}
                          <div>
                            <div className="font-playfair font-bold text-3xl" style={{ color: A }}>
                              {service.stat.value}
                            </div>
                            <div className="text-stone-400 text-xs font-medium mt-0.5">{service.stat.label}</div>
                          </div>

                          {/* CTA */}
                          <button
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.03]"
                            style={{ background: `linear-gradient(135deg, ${A} 0%, ${AB} 100%)` }}
                          >
                            Learn More <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Right — Image */}
                      <div className="relative min-h-[280px] md:min-h-0 overflow-hidden">
                        {/* Gradient overlay for visual blend */}
                        <div
                          className="absolute inset-0 z-10 pointer-events-none"
                          style={{
                            background: 'linear-gradient(to right, white 0%, transparent 30%)',
                          }}
                        />
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Floating stat badge */}
                        <div
                          className="absolute bottom-8 right-8 z-20 rounded-2xl px-5 py-3 shadow-xl"
                          style={{
                            background: 'rgba(255,255,255,0.92)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.6)',
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <Star size={14} fill={A} stroke="none" />
                            <span className="text-stone-900 font-bold text-sm">
                              {service.stat.value}
                            </span>
                          </div>
                          <div className="text-stone-400 text-xs mt-0.5">{service.stat.label}</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
