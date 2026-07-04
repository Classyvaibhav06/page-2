import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Link, Zap, Target, Shield, TrendingUp, Users, Star, BarChart2 } from 'lucide-react'
import { AnimatedButton } from '@/components/ui/animated-button'

const A = '#C41E3A'
const AB = '#a01530'

const servicesData = [
  {
    id: 1,
    title: 'Patient Acquisition',
    subtitle: 'Fill your calendar with ready-to-book patients',
    content: 'Hyper-targeted Meta & Google campaigns built exclusively for aesthetic procedures. We engineer campaigns around procedure intent so every rupee goes toward patients already researching your treatments.',
    icon: Target,
    relatedIds: [2, 4],
    bullets: [
      'Procedure-specific creative & copy',
      'WhatsApp & DM lead capture funnels',
      'A/B tested landing pages',
      'Daily budget optimisation',
    ],
    stat: { value: '3.2×', label: 'Avg. Booking Lift' },
    energy: 92,
  },
  {
    id: 2,
    title: 'Conversion Systems',
    subtitle: 'Turn enquiries into booked consultations — automatically',
    content: 'High-trust landing pages, WhatsApp automations, and multi-step follow-up sequences that nurture leads over weeks without you lifting a finger.',
    icon: Zap,
    relatedIds: [1, 3],
    bullets: [
      'Custom landing pages per procedure',
      'Automated WhatsApp nurture sequences',
      'CRM integration & lead scoring',
      'Retargeting for warm leads',
    ],
    stat: { value: '40%', label: 'More Closures' },
    energy: 85,
  },
  {
    id: 3,
    title: 'Authority & Content',
    subtitle: 'Become the most trusted name in your city',
    content: 'Educational content strategies, automated review generation, and social proof systems that position your clinic as the undisputed expert patients trust.',
    icon: Shield,
    relatedIds: [2, 4],
    bullets: [
      'Before/after content strategy',
      'Automated Google & Practo reviews',
      'Doctor bio & credentials optimisation',
      'Instagram & YouTube playbooks',
    ],
    stat: { value: '94%', label: 'Retention Rate' },
    energy: 78,
  },
  {
    id: 4,
    title: 'Growth Analytics',
    subtitle: 'Know your exact cost-per-patient, every day',
    content: 'A real-time performance dashboard that connects your ad spend directly to booked procedures. Track CPL, ROAS, and revenue — all in one place.',
    icon: TrendingUp,
    relatedIds: [1, 3],
    bullets: [
      'Real-time revenue attribution',
      'Procedure-level CPL & ROAS tracking',
      'Weekly growth reports & strategy calls',
      'Competitor benchmark analysis',
    ],
    stat: { value: '$3.80', label: 'Avg. CPL' },
    energy: 88,
  },
  {
    id: 5,
    title: 'Brand Positioning',
    subtitle: 'Own the premium tier in your market',
    content: 'Strategic brand positioning that commands premium pricing. We craft the story, visual identity, and messaging that makes you the obvious choice for high-value aesthetic patients.',
    icon: Star,
    relatedIds: [3, 6],
    bullets: [
      'Premium brand identity audits',
      'Competitive positioning strategy',
      'Visual & messaging consistency',
      'PR & authority placements',
    ],
    stat: { value: '2.1×', label: 'Revenue per Patient' },
    energy: 80,
  },
  {
    id: 6,
    title: 'Patient Retention',
    subtitle: 'Maximise lifetime value of every patient',
    content: 'Turn one-time visitors into lifetime patients with intelligent follow-up systems, loyalty programs, and personalised re-engagement campaigns built around your procedures.',
    icon: Users,
    relatedIds: [2, 5],
    bullets: [
      'Post-procedure follow-up automation',
      'Loyalty & referral program setup',
      'Personalised re-engagement campaigns',
      'Seasonal promotion calendars',
    ],
    stat: { value: '68%', label: 'Repeat Rate' },
    energy: 74,
  },
]

export function OrbitalServices() {
  const [expandedId, setExpandedId] = useState(null)
  const [rotationAngle, setRotationAngle] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [pulseEffect, setPulseEffect] = useState({})
  const [scale, setScale] = useState(1)
  const containerRef = useRef(null)
  const orbitRef = useRef(null)
  const nodeRefs = useRef({})

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 380) setScale(0.55)
      else if (width < 450) setScale(0.65)
      else if (width < 640) setScale(0.75)
      else if (width < 800) setScale(0.85)
      else setScale(1)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let timer
    if (autoRotate) {
      timer = setInterval(() => {
        setRotationAngle(prev => Number(((prev + 0.25) % 360).toFixed(3)))
      }, 50)
    }
    return () => clearInterval(timer)
  }, [autoRotate])

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360
    const radius = 220
    const radian = (angle * Math.PI) / 180
    const x = radius * Math.cos(radian)
    const y = radius * Math.sin(radian)
    const zIndex = Math.round(100 + 50 * Math.cos(radian))
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)))
    return { x, y, angle, zIndex, opacity }
  }

  const getRelatedIds = (id) => {
    const item = servicesData.find(s => s.id === id)
    return item ? item.relatedIds : []
  }

  const isRelated = (id) => {
    if (!expandedId) return false
    return getRelatedIds(expandedId).includes(id)
  }

  const toggleItem = (id) => {
    if (expandedId === id) {
      setExpandedId(null)
      setAutoRotate(true)
      setPulseEffect({})
    } else {
      setExpandedId(id)
      setAutoRotate(false)
      const related = getRelatedIds(id)
      const pulse = {}
      related.forEach(r => { pulse[r] = true })
      setPulseEffect(pulse)

      // center the node
      const nodeIndex = servicesData.findIndex(s => s.id === id)
      const targetAngle = (nodeIndex / servicesData.length) * 360
      setRotationAngle(270 - targetAngle)
    }
  }

  const handleBgClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedId(null)
      setAutoRotate(true)
      setPulseEffect({})
    }
  }

  // Close on scroll or click outside
  useEffect(() => {
    if (!expandedId) return

    const handleScroll = () => {
      setExpandedId(null)
      setAutoRotate(true)
      setPulseEffect({})
    }

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setExpandedId(null)
        setAutoRotate(true)
        setPulseEffect({})
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [expandedId])

  const expandedItem = servicesData.find(s => s.id === expandedId)

  return (
    <section id="services" className="w-full py-4 md:py-6 relative overflow-hidden bg-[#FAF9F6]">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: `radial-gradient(circle, ${A} 0%, transparent 70%)` }} />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)' }} />
        <div className="absolute bottom-[15%] left-[10%] w-[250px] h-[250px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }} />
      </div>

      {/* Section header */}
      <div className="relative z-10 pt-4 pb-0 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: A }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: A }} />
          Our Expertise
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
          Boost Your Clinic<br />
          <span className="italic" style={{ color: A }}>with Our Expertise</span>
        </h2>
        <p className="text-stone-400 mt-4 text-sm">Click any service node to explore · Related services pulse when selected</p>
      </div>

      {/* Orbital canvas */}
      <div
        ref={containerRef}
        className="w-full flex items-center justify-center cursor-default py-0"
        onClick={handleBgClick}
      >
        <div
          ref={orbitRef}
          className="relative flex items-center justify-center transition-all duration-300"
          style={{ width: `${600 * scale}px`, height: `${600 * scale}px` }}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
            {/* Orbit rings */}
          <div className="absolute rounded-full border border-stone-200 pointer-events-none"
            style={{ width: '480px', height: '480px' }} />
          <div className="absolute rounded-full border border-stone-100 pointer-events-none"
            style={{ width: '380px', height: '380px' }} />

          {/* Center orb */}
          <div className="absolute w-20 h-20 rounded-full flex items-center justify-center z-10 pointer-events-none"
            style={{ background: `radial-gradient(circle, ${A}, ${AB})`, boxShadow: `0 0 50px ${A}30` }}>
            <div className="absolute w-24 h-24 rounded-full border animate-ping opacity-20" style={{ borderColor: A }} />
            <div className="absolute w-28 h-28 rounded-full border animate-ping opacity-10" style={{ borderColor: A, animationDelay: '0.6s' }} />
            <BarChart2 className="w-8 h-8 text-white/90" />
          </div>

          {/* Center label */}
          <div className="absolute z-20 pointer-events-none text-center" style={{ top: '52%' }}>
            <p className="text-stone-400 text-[10px] font-semibold uppercase tracking-widest mt-12">
              {expandedItem ? expandedItem.title : 'MedSpa Growth'}
            </p>
          </div>

          {/* Nodes */}
          {servicesData.map((item, index) => {
            const pos = calculateNodePosition(index, servicesData.length)
            const isOpen = expandedId === item.id
            const related = isRelated(item.id)
            const isPulsing = pulseEffect[item.id]
            const Icon = item.icon

            return (
              <div
                key={item.id}
                ref={el => nodeRefs.current[item.id] = el}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  zIndex: isOpen ? 200 : pos.zIndex,
                  opacity: isOpen ? 1 : pos.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id) }}
              >
                {/* Glow halo */}
                <div
                  className={`absolute rounded-full pointer-events-none ${isPulsing ? 'animate-pulse' : ''}`}
                  style={{
                    width: `${item.energy * 0.5 + 44}px`,
                    height: `${item.energy * 0.5 + 44}px`,
                    left: `-${(item.energy * 0.5 + 44 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 44 - 40) / 2}px`,
                    background: `radial-gradient(circle, ${isOpen ? A + '20' : 'rgba(0,0,0,0.04)'} 0%, transparent 70%)`,
                  }}
                />

                {/* Node button */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isOpen ? 'scale-150' : related ? 'scale-110 animate-pulse' : 'scale-100'}`}
                  style={{
                    background: isOpen ? A : related ? `${A}15` : 'white',
                    borderColor: isOpen ? A : related ? A : '#e7e5e4',
                    boxShadow: isOpen ? `0 0 30px ${A}40` : related ? `0 0 16px ${A}30` : '0 2px 12px rgba(0,0,0,0.08)',
                  }}
                >
                  <Icon size={16} style={{ color: isOpen ? 'white' : related ? A : '#78716c' }} />
                </div>

                {/* Label */}
                <div
                  className={`absolute whitespace-nowrap text-[11px] font-bold tracking-wider transition-all duration-300 ${isOpen ? 'scale-125' : ''}`}
                  style={{
                    top: '48px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: isOpen ? A : '#78716c',
                  }}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isOpen && (
                  <div
                    className="absolute w-72 rounded-2xl overflow-hidden"
                    style={{
                      top: '72px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'white',
                      border: `1px solid ${A}25`,
                      boxShadow: `0 20px 60px rgba(0,0,0,0.12), 0 0 30px ${A}10`,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Connector line */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4" style={{ background: `${A}60` }} />

                    {/* Card header */}
                    <div className="px-5 pt-4 pb-3 border-b border-stone-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                          style={{ background: `${A}12`, color: A, border: `1px solid ${A}30` }}>
                          {item.stat.value} {item.stat.label}
                        </span>
                        <Icon size={14} className="text-stone-300" />
                      </div>
                      <h4 className="text-stone-900 text-sm font-bold font-playfair">{item.title}</h4>
                      <p className="text-xs mt-0.5" style={{ color: A }}>{item.subtitle}</p>
                    </div>

                    {/* Card body */}
                    <div className="px-5 py-3">
                      <p className="text-stone-500 text-xs leading-relaxed mb-3">{item.content}</p>
                      <ul className="space-y-1.5 mb-4">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-stone-500">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: A }} />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* Energy bar */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] text-stone-400 flex items-center gap-1">
                            <Zap size={9} /> Performance Score
                          </span>
                          <span className="text-[10px] font-mono text-stone-400">{item.energy}%</span>
                        </div>
                        <div className="w-full h-0.5 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${item.energy}%`, background: `linear-gradient(to right, ${A}, #f87171)` }} />
                        </div>
                      </div>

                      {/* Related nodes */}
                      {item.relatedIds.length > 0 && (
                        <div className="border-t border-stone-100 pt-3">
                          <div className="flex items-center gap-1 mb-2">
                            <Link size={9} className="text-stone-400" />
                            <span className="text-[10px] uppercase tracking-widest text-stone-400">Connected Services</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.relatedIds.map(relId => {
                              const rel = servicesData.find(s => s.id === relId)
                              return (
                                <button
                                  key={relId}
                                  className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full transition-all border"
                                  style={{
                                    borderColor: `${A}30`,
                                    color: A,
                                    background: `${A}08`,
                                  }}
                                  onMouseEnter={e => e.currentTarget.style.background = `${A}18`}
                                  onMouseLeave={e => e.currentTarget.style.background = `${A}08`}
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relId) }}
                                >
                                  {rel?.title} <ArrowRight size={8} />
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 pb-2 flex justify-center text-center">
        <AnimatedButton href="https://calendly.com/growzzymedia" target="_blank" rel="noopener noreferrer" className="shadow-[0_8px_30px_#C41E3A35]">
          Get a Free Growth Audit
        </AnimatedButton>
      </div>
    </section>
  )
}
