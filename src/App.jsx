import React, { useState, useEffect } from 'react'


import CircularGallery from './components/CircularGallery'
import { SparklesText } from './components/ui/sparkles-text'
import { motion } from 'framer-motion'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'
import { TestimonialsColumn } from './components/ui/testimonials-columns-1'
import { InteractiveServices as Services } from './components/InteractiveServices'
import { PremiumICPSection as ICPSection } from './components/PremiumICPSection'
import { PremiumGallery as Gallery } from './components/PremiumGallery'
import { GlobalReach } from './components/GlobalReach'
import RotatingText from './components/RotatingText'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const A = '#8B3A3A'          // primary accent – deep rose / maroon
const AL = '#8B3A3A15'       // accent light tint
const AB = '#6d2e2e'         // accent dark (hover)

// ─── Reusable icon components ─────────────────────────────────────────────────
const Chevron = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)
const Check = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)
const Star = () => (
  <svg className="w-4 h-4" fill={A} viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

// ─── Eyebrow label ─────────────────────────────────────────────────────────────
function Eyebrow({ children }) {
  return (
    <p className="inline-flex items-center text-xs font-semibold uppercase mb-5 md:mb-6" style={{ color: A, letterSpacing: '0.12em' }}>
      <span className="dot-pulse rounded-full inline-block mr-2" style={{ backgroundColor: A, width: '6px', height: '6px' }} />
      {children}
    </p>
  )
}

// ─── Primary button ────────────────────────────────────────────────────────────
function BtnPrimary({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${className}`}
      style={{ backgroundColor: A, boxShadow: `0 4px 20px ${A}35` }}
    >
      {children}
    </a>
  )
}
// ─── Ghost button ──────────────────────────────────────────────────────────────
function BtnGhost({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group"
      style={{ color: A }}
    >
      <span className="flex items-center leading-none">{children}</span>
      <span className="group-hover:translate-x-1 transition-transform duration-200 flex items-center justify-center"><Chevron /></span>
    </a>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════════════════
function Navbar() {
  const logoUrl = "https://growzzymedia.com/lovable-uploads/5b22c906-da6f-4a74-93b1-443537c5a5f4.png";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Results',  href: '#results'  },
    { label: 'Process',  href: '#process'  },
    { label: 'About',    href: '#about'    },
  ]

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex-shrink-0">
          <img src={logoUrl} alt="Growzzy Media Logo" className="h-10 md:h-11 w-auto object-contain" />
        </a>

        {/* LINKS */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              style={{ color: scrolled ? '#44403c' : '#292524' }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: A }}></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <BtnPrimary href="#contact" className="!py-2.5 !px-6 !text-sm">
          Get a Free Audit
        </BtnPrimary>
      </div>
    </div>
  )
}


// ═══════════════════════════════════════════════════════════════════════════════
// HERO  — video bg, cream left overlay, text on left (matches reference layout)
// ═══════════════════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section id="home" className="relative w-full md:min-h-screen flex items-center overflow-hidden bg-[#faf8f5]">

      {/* ── Full-bleed video (Desktop) ── */}
      <div className="absolute inset-0 hidden md:block">
        <video
          src="/video.mp4"
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right 20%' }}
        />
        {/* Cream gradient — opaque left, transparent right */}
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center pt-32 pb-16 md:py-0 min-h-screen md:min-h-0">
        
        {/* Text Block */}
        <div className="w-full md:w-1/2 md:pr-10 lg:pr-12">
          {/* Eyebrow */}
          <Eyebrow>Marketing for Medspas &amp; Cosmetic Clinics</Eyebrow>

          {/* Headline */}
          <h1 
            className="font-playfair font-bold text-stone-900 leading-[1.05] mb-6 max-w-[650px]"
            style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 4.5rem)' }}
          >
            Your Scalpel Is Precise.<br />
            <span className="italic inline-flex items-baseline gap-3 flex-wrap" style={{ color: A }}>
              Your{' '}
              <span
                className="inline-flex items-center rounded-xl px-4 py-1"
                style={{
                  background: `${A}14`,
                  border: `1.5px solid ${A}30`,
                  minWidth: '220px',
                  overflow: 'hidden',
                }}
              >
                <RotatingText
                  texts={['Marketing', 'Ads', 'Funnels', 'Content', 'Growth']}
                  mainClassName="font-playfair font-bold italic"
                  elementLevelClassName="text-inherit"
                  splitBy="characters"
                  staggerDuration={0.025}
                  staggerFrom="first"
                  rotationInterval={2400}
                  transition={{ type: 'spring', damping: 20, stiffness: 260 }}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-110%', opacity: 0 }}
                  style={{ color: A, fontSize: 'inherit', lineHeight: 'inherit' }}
                />
              </span>{' '}
              Isn't.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-500 text-lg leading-[1.6] max-w-[480px] mt-5 mb-8">
            AI-powered ads, content, and conversion systems that fill medspa and cosmetic clinic calendars with ready-to-book patients.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-6 mb-12 md:mb-0">
            <BtnPrimary href="#contact" className="!tracking-[0.01em]">Get a Free Growth Audit</BtnPrimary>
            <BtnGhost href="#results">See Our Results</BtnGhost>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide font-semibold text-stone-400">
            <span>200+ Clinics</span>
            <span className="border-l border-gray-300 pl-3">3x Avg. Bookings</span>
            <span className="border-l border-gray-300 pl-3">Delhi · Mumbai · Bangalore</span>
          </div>
        </div>

        {/* Mobile Video/Image */}
        <div className="w-full md:hidden mt-12 rounded-2xl overflow-hidden shadow-xl relative h-[400px]">
          <video
            src="/video.mp4"
            autoPlay loop muted playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>

      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAIN SECTION
// ═══════════════════════════════════════════════════════════════════════════════
function PainSection() {
  const pains = [
    {
      num: '01',
      bold: 'Your ads are getting clicks.',
      rest: ' But your consultation calendar is still empty. Traffic without conversion is just expensive vanity. Every unbooked click is money you\'ll never recover.',
    },
    {
      num: '02',
      bold: "Generic agencies don't understand the cosmetic patient journey.",
      rest: " One wrong before/after post or a tone-deaf ad can cost you $10,000+ in reputation damage overnight.",
    },
    {
      num: '03',
      bold: 'You\u2019re spending $1,000\u2013$5,000/month on ads',
      rest: ' with no system to nurture leads into lifetime patients. Every unconverted lead is revenue lost \u2014 forever.',
    },
  ]

  const A_LOCAL = '#8B3A3A'

  const stages = [
    { points: '30,0 390,0 348,82 72,82',       label: '1,000 Clicks',      sub: 'Ad Impressions',    fill: `${A_LOCAL}0D`, cy: 34  },
    { points: '72,92 348,92 306,174 114,174',   label: '200 Leads',         sub: 'Enquiries Received', fill: `${A_LOCAL}18`, cy: 126 },
    { points: '114,184 306,184 270,266 150,266', label: '20 Consultations', sub: 'Booked Meetings',   fill: `${A_LOCAL}26`, cy: 218 },
    { points: '150,276 270,276 246,348 174,348', label: '5 Patients',       sub: 'Converted',         fill: `${A_LOCAL}3A`, cy: 305 },
  ]

  const leaks = [
    { lx: 52,  rx: 368, y: 87,  pct: '80% lost here' },
    { lx: 94,  rx: 326, y: 179, pct: '90% lost here' },
    { lx: 132, rx: 288, y: 271, pct: '75% lost here' },
  ]

  // Viewport trigger settings
  const vp = { once: true, amount: 0.3 }

  return (
    <section id="pain" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* 1. Header block */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {/* Eyebrow */}
          <motion.p 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4" 
            style={{ color: A_LOCAL }}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
          >
            <motion.span 
              className="h-1.5 w-1.5 rounded-full inline-block" 
              style={{ backgroundColor: A_LOCAL }}
              variants={{
                hidden: { scale: 1 },
                visible: { scale: [1, 1.3, 1], transition: { duration: 0.4, delay: 0.1 } }
              }}
            />
            THE PROBLEM
          </motion.p>
          
          {/* Headline */}
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
            <motion.span
              className="block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
              }}
            >
              Why Most MedSpa<br />
            </motion.span>
            <motion.span 
              className="italic block relative overflow-hidden" 
              style={{ color: A_LOCAL, paddingRight: '0.1em' }}
              variants={{
                hidden: { opacity: 0, y: 20, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                  transition: { duration: 0.5, delay: 0.25, ease: "easeOut" } 
                }
              }}
            >
              Marketing Fails
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: numbered pain points */}
          <motion.div 
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
            }}
          >
            {pains.map((p, i) => (
              <motion.div 
                key={i} 
                className="flex gap-6 group"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
                }}
              >
                <div className="flex-shrink-0 w-10 pt-0.5">
                  <motion.span 
                    className="font-playfair text-3xl font-bold leading-none select-none block origin-center" 
                    style={{ color: `${A_LOCAL}40` }}
                    variants={{
                      hidden: { scale: 0.8 },
                      visible: { scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
                    }}
                  >
                    {p.num}
                  </motion.span>
                </div>
                <div className="relative pl-6">
                  {/* Vertical line animated */}
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-[2px]"
                    style={{ backgroundColor: `${A_LOCAL}25`, originY: 0 }}
                    variants={{
                      hidden: { scaleY: 0 },
                      visible: { scaleY: 1, transition: { duration: 0.4 } }
                    }}
                  />
                  <p className="text-stone-900 text-base md:text-lg leading-snug mb-2">
                    <motion.strong
                      variants={{
                        hidden: { textShadow: "0px 0px 0px rgba(0,0,0,0)" },
                        visible: { 
                          textShadow: ["0px 0px 8px rgba(139,58,58,0.4)", "0px 0px 0px rgba(139,58,58,0)"], 
                          transition: { duration: 0.6 } 
                        }
                      }}
                    >
                      {p.bold}
                    </motion.strong>
                    <span className="text-stone-500 font-normal">{p.rest}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: SVG funnel */}
          <motion.div 
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <svg
              viewBox="0 0 420 395"
              className="w-full max-w-[420px]"
              style={{ filter: 'drop-shadow(0 8px 40px rgba(139,58,58,0.12))' }}
            >
              {/* Funnel trapezoids */}
              {stages.map((s, i) => {
                const isFinal = i === stages.length - 1;
                return (
                  <motion.g 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scaleY: 0.7, originY: "0px" },
                      visible: { 
                        opacity: 1, 
                        scaleY: 1, 
                        transition: { duration: 0.5, delay: 0.5 + (i * 0.3), ease: "easeOut" } 
                      }
                    }}
                  >
                    <motion.polygon
                      points={s.points}
                      fill={s.fill}
                      stroke={A_LOCAL}
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      variants={isFinal ? {
                        hidden: {},
                        visible: { 
                          fill: [s.fill, `${A_LOCAL}55`, s.fill], 
                          transition: { duration: 0.6, delay: 0.5 + (i * 0.3) + 0.5 } 
                        }
                      } : {}}
                      className="transition-colors duration-300 hover:opacity-80"
                    />
                    <text x="210" y={s.cy - 2} textAnchor="middle"
                      fill={A_LOCAL} fontSize="11.5" fontWeight="700"
                      fontFamily="Inter, sans-serif" letterSpacing="0.3">
                      {s.label}
                    </text>
                    <text x="210" y={s.cy + 13} textAnchor="middle"
                      fill="#78716c" fontSize="9" fontWeight="400"
                      fontFamily="Inter, sans-serif">
                      {s.sub}
                    </text>
                  </motion.g>
                )
              })}

              {/* Leak indicators */}
              {leaks.map((l, i) => (
                <motion.g 
                  key={`leak-${i}`}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.3, delay: 0.5 + (i * 0.3) + 0.4 } }
                  }}
                >
                  {/* Left dashed line drawing (Circle -> Funnel) */}
                  <motion.line x1={l.lx + 10} y1={l.y} x2={l.lx + 28} y2={l.y}
                    stroke={A_LOCAL} strokeWidth="1" strokeDasharray="3 3" opacity="0.45"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: { pathLength: 1, transition: { duration: 0.4 } }
                    }}
                  />
                  {/* Left circle + ! */}
                  <motion.g
                    variants={{
                      hidden: { scale: 0 },
                      visible: { 
                        scale: [0, 1.2, 1], 
                        transition: { duration: 0.4 } 
                      }
                    }}
                    style={{ originX: `${l.lx}px`, originY: `${l.y}px` }}
                  >
                    <motion.circle cx={l.lx} cy={l.y} r="10" fill="white" stroke={A_LOCAL} strokeWidth="1.5" 
                      animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 + (i * 0.3) + 0.4 }}
                    />
                    <text x={l.lx} y={l.y + 4.5} textAnchor="middle" fontSize="11" fill={A_LOCAL} fontWeight="800" fontFamily="Inter, sans-serif">!</text>
                  </motion.g>

                  {/* Right dashed line drawing (Funnel -> Circle) */}
                  <motion.line x1={l.rx - 28} y1={l.y} x2={l.rx - 10} y2={l.y}
                    stroke={A_LOCAL} strokeWidth="1" strokeDasharray="3 3" opacity="0.45"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: { pathLength: 1, transition: { duration: 0.4 } }
                    }}
                  />
                  {/* Right circle + ! */}
                  <motion.g
                    variants={{
                      hidden: { scale: 0 },
                      visible: { 
                        scale: [0, 1.2, 1], 
                        transition: { duration: 0.4 } 
                      }
                    }}
                    style={{ originX: `${l.rx}px`, originY: `${l.y}px` }}
                  >
                    <motion.circle cx={l.rx} cy={l.y} r="10" fill="white" stroke={A_LOCAL} strokeWidth="1.5" 
                      animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 + (i * 0.3) + 0.4 }}
                    />
                    <text x={l.rx} y={l.y + 4.5} textAnchor="middle" fontSize="11" fill={A_LOCAL} fontWeight="800" fontFamily="Inter, sans-serif">!</text>
                  </motion.g>

                  {/* Centre drop-off label */}
                  <text x="210" y={l.y + 4} textAnchor="middle"
                    fontSize="8.5" fill="#a8a29e" fontFamily="Inter, sans-serif">
                    {l.pct}
                  </text>
                </motion.g>
              ))}

              {/* Bottom caption and arrow */}
              <motion.g
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.4, delay: 0.5 + (3 * 0.3) + 0.3 } } // After last segment finishes
                }}
              >
                {/* Arrow below funnel */}
                <motion.line x1="210" y1="352" x2="210" y2="370"
                  stroke={A_LOCAL} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"
                  style={{ originY: "352px", originX: "210px" }}
                  variants={{
                    hidden: { scaleY: 0 },
                    visible: { scaleY: 1, transition: { duration: 0.3 } }
                  }}
                />
                <polygon points="204,370 216,370 210,380" fill={A_LOCAL} opacity="0.4" />

                {/* Bottom caption */}
                <text x="210" y="392" textAnchor="middle"
                  fontSize="9.5" fill="#a8a29e" fontFamily="Inter, sans-serif">
                  Typical clinic without a growth system
                </text>
              </motion.g>

            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  )
}













// ═══════════════════════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════════════════════
const testimonials = [
  {
    text: "Growzzy transformed our patient acquisition. We went from a trickle of inquiries to a consistently full calendar within 60 days.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop",
    name: "Dr. Priya Sharma",
    role: "Founder, LuxeAesthetics · Delhi",
  },
  {
    text: "We'd burned money on two other agencies before. Growzzy was different — they actually understood the aesthetic industry and built ads that converted.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    name: "Dr. Arjun Mehta",
    role: "Director, Aesthetica Clinic · Mumbai",
  },
  {
    text: "The transparency is what I appreciate most. I can see exactly what every rupee is doing. They gave us our first predictable patient pipeline in five years.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop",
    name: "Dr. Riya Nair",
    role: "Head of Dermatology, GlowMed · Bangalore",
  },
  {
    text: "The leads we get now are highly qualified. Patients walk in already knowing about the treatments and ready to book their procedure.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop",
    name: "Dr. Sameer Khan",
    role: "Lead Surgeon, Elite Cosmetic · Pune",
  },
  {
    text: "Our hair transplant bookings skyrocketed by 300% after Growzzy took over. Their ad creatives are unmatched in this industry.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop",
    name: "Dr. Neha Gupta",
    role: "Founder, Hair & Skin Clinic · Delhi",
  },
  {
    text: "They don't just run ads; they built our entire conversion funnel. Our front desk is now closing 40% more consultations than before.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    name: "Anjali Desai",
    role: "Clinic Manager, DermaCare · Mumbai",
  },
  {
    text: "Switching to Growzzy was the best decision for our medspa. We opened a second location entirely funded by the new revenue they generated.",
    image: "https://images.unsplash.com/photo-1537368910025-7028b9095173?w=150&h=150&fit=crop",
    name: "Dr. Vikram Singh",
    role: "CEO, Radiance MedSpa · Bangalore",
  },
  {
    text: "Finally, a marketing partner that speaks our language. They understand patient psychology for elective procedures perfectly.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    name: "Dr. Sana Sheikh",
    role: "Chief Aesthetician, SkinGlow · Hyderabad",
  },
  {
    text: "Their reporting dashboard is incredible. For the first time, I know my exact cost to acquire a booked Botox patient.",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=150&h=150&fit=crop",
    name: "Rahul Verma",
    role: "Operations Head, FaceCraft · Chennai",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-50 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mb-16 relative z-10"
        >
          <Eyebrow>Client Stories</Eyebrow>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 mb-5">
            What Clinic Owners Say
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            See how we've helped aesthetic practices scale their consultation bookings and grow their revenue.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[650px]">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════════════════════════════════════════
function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>About Growzzy</Eyebrow>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
            We Speak Both<br />
            <span className="italic" style={{ color: A }}>Marketing & Medicine</span>
          </h2>
          <p className="text-stone-500 text-base leading-relaxed mb-5">
            Growzzy Media was founded with one belief: great clinics shouldn't lose patients to inferior ones just because of better marketing. We bridge that gap — combining AI-driven ad technology with deep expertise in the aesthetic and cosmetic surgery industry.
          </p>
          <p className="text-stone-500 text-base leading-relaxed mb-10">
            Our team includes media buyers, content strategists, CRM specialists, and growth analysts — all focused exclusively on the beauty and wellness sector. We don't serve restaurants or e-commerce brands. Clinics are all we do.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              'Exclusively aesthetic & cosmetic industry focus',
              'AI-powered audience targeting & optimisation',
              'Transparent, ROI-first reporting — always',
              'Dedicated clinic growth strategist per account',
              'Full-funnel ownership from ad to appointment',
              '60+ clinics scaled across India',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-stone-700">
                <span style={{ color: A }}><Check /></span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Visual dashboard card */}
        <div className="relative">
          <div className="rounded-2xl border border-stone-100 bg-stone-50 p-8 shadow-sm">
            <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-5">Live Performance Dashboard</p>

            {/* Bar chart */}
            <div className="flex items-end gap-2 h-28 mb-5">
              {[40, 55, 45, 70, 60, 85, 75, 95, 80, 100, 90, 112].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i >= 8 ? A : '#e7e5e4',
                  }}
                />
              ))}
            </div>
            <p className="text-stone-400 text-xs text-center mb-7">Consultations booked — last 12 months</p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { v: '$3.80', l: 'Avg CPL' },
                { v: '8.4×', l: 'ROAS'    },
                { v: '91%',  l: 'Fill Rate'},
              ].map((s, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-white border border-stone-100 shadow-sm">
                  <p className="font-bold text-xl text-stone-900 mb-0.5" style={{ color: A }}>{s.v}</p>
                  <p className="text-stone-400 text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accent frame */}
          <div
            className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl -z-10 border-2"
            style={{ borderColor: `${A}25` }}
          />
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTACT / CTA
// ═══════════════════════════════════════════════════════════════════════════════
function Contact() {
  const [form, setForm] = useState({ name: '', clinic: '', city: '', phone: '', email: '', revenue: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', clinic: '', city: '', phone: '', email: '', revenue: '' })
  }

  const inputClass = "w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors bg-white"

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* Left info */}
        <div>
          <Eyebrow>Get Started</Eyebrow>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
            Claim Your Free<br />
            <span className="italic" style={{ color: A }}>Growth Audit</span>
          </h2>
          <p className="text-stone-500 text-base leading-relaxed mb-10">
            Tell us about your clinic. We'll audit your digital presence, analyse your local competition, and build a custom 90-day growth roadmap — completely free, no strings attached.
          </p>
          <div className="space-y-4">
            {[
              { icon: '🔍', title: 'Digital Presence Audit', desc: 'Google, Instagram, Meta Ads, Reviews' },
              { icon: '🎯', title: 'Competitor Analysis',    desc: "Who's eating your market share and how" },
              { icon: '📈', title: '90-Day Growth Roadmap', desc: 'Exactly what we\'d do for your clinic'  },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-100 shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-stone-900 font-semibold text-sm">{item.title}</p>
                  <p className="text-stone-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: AL }}>
                <svg className="w-8 h-8" style={{ color: A }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-stone-900 mb-2">We'll Be in Touch!</h3>
              <p className="text-stone-500 text-sm">Your audit request is received. Expect a call within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-stone-900 font-bold text-xl mb-5">Get Your Free Growth Audit</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">Your Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Dr. Priya Sharma" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">Clinic Name</label>
                  <input type="text" required value={form.clinic} onChange={e => setForm(f => ({ ...f, clinic: e.target.value }))} placeholder="Your Clinic" className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">City</label>
                  <input type="text" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} placeholder="Delhi / Mumbai / Bangalore" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">Phone / WhatsApp</label>
                  <input type="tel" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+1 (555) 000-0000" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">Email</label>
                <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@yourclinic.com" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">Monthly Revenue Range</label>
                <select value={form.revenue} onChange={e => setForm(f => ({ ...f, revenue: e.target.value }))} className={inputClass + ' cursor-pointer'}>
                  <option value="">Select range...</option>
                  <option>Below $10,000/month</option>
                  <option>$10,000–$30,000/month</option>
                  <option>$30,000–$100,000/month</option>
                  <option>$100,000+ /month</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:scale-[1.01] shadow-md hover:shadow-lg mt-1"
                style={{ backgroundColor: A }}
              >
                Claim My Free Growth Audit →
              </button>
              <p className="text-center text-xs text-stone-400">No commitment. No credit card. Just clarity.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: A }}>
                Gz
              </div>
              <span className="text-white font-bold text-lg">Growzzy<span style={{ color: A }}>.</span></span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-6">
              Growth marketing built exclusively for medspas, cosmetic surgery clinics, and aesthetic practices across India.
            </p>
            <div className="flex gap-3">
              {['In', 'Ig', 'Tw'].map(s => (
                <a key={s} href="#" className="h-9 w-9 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-stone-500 hover:text-stone-200 text-xs font-bold transition-colors duration-200">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4">Services</p>
            {['Meta & Google Ads', 'Consultation Funnels', 'Content & SEO', 'Reputation Management', 'Growth Analytics'].map(l => (
              <a key={l} href="#services" className="block text-sm text-stone-400 hover:text-stone-200 mb-2.5 transition-colors">{l}</a>
            ))}
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4">Contact</p>
            <div className="space-y-3 text-sm text-stone-400">
              <p>info@growzzymedia.com</p>
              <p>+91 98765 43210</p>
              <p>Delhi · Mumbai · Bangalore</p>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-600">
          <p>© 2026 Growzzy Media. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

    // 2. Hero entrance animations (no scroll trigger needed, triggers immediately)
    const heroTl = gsap.timeline()
    heroTl.fromTo('#home p', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 })
          .fromTo('#home h1', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
          .fromTo('#home p:nth-of-type(2)', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5')
          .fromTo('#home .flex-wrap', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
          .fromTo('#home .mt-12', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')

    // 3. Section scroll animations
    const sections = ['#pain', '#icp', '#services', '#gallery', '#about', '#contact']
    sections.forEach(secId => {
      const sec = document.querySelector(secId)
      if (!sec) return

      // Animate Section Heading
      const eyebrow = sec.querySelector('p')
      const heading = sec.querySelector('h2')
      const desc = sec.querySelector('p:nth-of-type(2)')

      const headTl = gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      if (eyebrow) headTl.fromTo(eyebrow, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
      if (heading) headTl.fromTo(heading, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.35')
      if (desc && desc !== eyebrow) headTl.fromTo(desc, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.35')

      // Animate Grid Cards/Items
      const items = sec.querySelectorAll('.grid > div, .card-hover, .grid > motion.div')
      if (items.length > 0) {
        gsap.fromTo(items, 
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: items[0],
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    })

    // 4. Bar chart animation in About section
    const bars = document.querySelectorAll('#about .flex-1.rounded-t')
    if (bars.length > 0) {
      gsap.fromTo(bars, 
        { scaleY: 0, transformOrigin: 'bottom' },
        { 
          scaleY: 1, 
          duration: 1, 
          stagger: 0.05, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#about',
            start: 'top 65%'
          }
        }
      )
    }

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <PainSection />
      <ICPSection />
      <Services />
      <Testimonials />
      <Gallery />
      <GlobalReach />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
