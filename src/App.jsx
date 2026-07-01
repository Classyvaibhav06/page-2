import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'


import CircularGallery from './components/CircularGallery'
import { SparklesText } from './components/ui/sparkles-text'
import { motion } from 'framer-motion'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'
import { TestimonialsColumn } from './components/ui/testimonials-columns-1'
import { OrbitalServices as Services } from './components/InteractiveServices'
import { PremiumICPSection as ICPSection } from './components/PremiumICPSection'
import { GlobalReach } from './components/GlobalReach'
import RotatingText from './components/RotatingText'
import { Feature108 } from './components/blocks/feature108'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { CircleDollarSign, TrendingUp, Target, Trophy, MapPin, Search } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const A = '#1a7a78'          // primary accent – deep teal
const AL = '#1a7a7815'       // accent light tint
const AB = '#0d5250'         // accent dark (hover)

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
// LOGO
// ═══════════════════════════════════════════════════════════════════════════════
function GrowzzyLogo() {
  return (
    <a href="#home" className="flex-shrink-0 flex items-center group" aria-label="Growzzy Media">
      {/* Full PNG Logo with padding cropped out */}
      <div className="relative overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105" style={{ width: '180px', height: '36px' }}>
        <img
          src="/12.png"
          alt="Growzzy Media"
          className="absolute max-w-none"
          style={{
            height: '150px', // Scaled down to make the logo fit the 36px height container
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Centers the image perfectly, cropping out the 500x500 whitespace
          }}
        />
      </div>
    </a>
  )
}




// ═══════════════════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════════════════
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services',     href: '#services' },
    { label: 'About',        href: '#about'    },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us',   href: '#contact'  },
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
      <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <GrowzzyLogo />

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
            className="font-playfair font-bold text-stone-900 leading-[1.05] mb-6 max-w-[700px]"
            style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 4.5rem)' }}
          >
            Your Scalpel Is Precise.<br />
            <span className="italic inline-flex items-center gap-3 mt-1 flex-wrap" style={{ color: A }}>
              Your{' '}
              <span
                className="inline-block rounded-[20px] relative align-bottom"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff, #faf7f5)',
                  border: `1px solid ${A}40`,
                  boxShadow: `0 8px 30px -4px ${A}20, inset 0 2px 4px rgba(255,255,255,1)`,
                  minWidth: '280px', // slightly wider to ensure "Ad Strategy" fits perfectly
                  height: '1.25em',
                  overflow: 'hidden',
                  transform: 'translateY(-2px)'
                }}
              >
                {/* Absolutely position the text so its animation doesn't shift the baseline of the surrounding text */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <RotatingText
                    texts={['Marketing', 'Ad Strategy', 'Funnel', 'Content', 'Growth']}
                    mainClassName="font-playfair font-bold italic block"
                    elementLevelClassName="text-inherit"
                    splitBy="characters"
                    staggerDuration={0.025}
                    staggerFrom="first"
                    rotationInterval={2800}
                    transition={{ type: 'spring', damping: 20, stiffness: 260 }}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-110%', opacity: 0 }}
                    style={{ color: A, fontSize: 'inherit', lineHeight: '1' }}
                  />
                </span>
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
            <BtnGhost href="#services">Learn More</BtnGhost>
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

const barHeights = [32, 48, 40, 62, 54, 78, 68, 88, 74, 95, 84, 100]
const metrics = [
  { v: '$3.80', l: 'Avg CPL', icon: <CircleDollarSign className="w-5 h-5" style={{ color: A }} /> },
  { v: '8.4×',  l: 'ROAS',     icon: <TrendingUp className="w-5 h-5" style={{ color: A }} /> },
  { v: '91%',   l: 'Fill Rate', icon: <Target className="w-5 h-5" style={{ color: A }} /> },
]
const perks = [
  'Exclusively aesthetic & cosmetic industry focus',
  'AI-powered audience targeting & optimisation',
  'Transparent, ROI-first reporting — always',
  'Dedicated clinic growth strategist per account',
  'Full-funnel ownership from ad to appointment',
  '60+ clinics scaled across India',
]

function About() {
  const [barsVisible, setBarsVisible] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 })

  // trigger bar animation when section enters view
  useEffect(() => {
    if (isInView) setTimeout(() => setBarsVisible(true), 600)
  }, [isInView])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAFAF8 0%, #F5F0EB 100%)' }}>

      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3 pointer-events-none"
        style={{ background: `${A}18` }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 translate-x-1/4 translate-y-1/4 pointer-events-none"
        style={{ background: '#d6d3d140' }} />

      <div className="max-w-[1440px] mx-auto px-6">

        {/* ── Eyebrow + headline ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: A }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: A }} />
            About Growzzy
          </span>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-stone-900 leading-[1.05] mb-5">
            We Speak Both<br />
            <span className="italic" style={{ color: A }}>Marketing &amp; Medicine</span>
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Founded on one belief: great clinics shouldn't lose patients to inferior ones just because of better marketing.
          </p>
        </motion.div>

        {/* ── Two-column body ──────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — copy + checklist */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
              className="text-stone-600 text-base leading-relaxed mb-5"
            >
              We bridge the gap — combining AI-driven ad technology with deep expertise in aesthetic and cosmetic surgery. Our team of media buyers, CRM specialists, content strategists, and growth analysts work exclusively in the beauty and wellness space.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
              className="text-stone-600 text-base leading-relaxed mb-10"
            >
              We don't serve restaurants or e-commerce brands. <strong className="font-semibold text-stone-800">Clinics are all we do.</strong>
            </motion.p>

            {/* Animated checklist */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-3"
            >
              {perks.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${A}18` }}
                  >
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 8" stroke="currentColor" strokeWidth="2.5" style={{ color: A }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l3 3 5-6" />
                    </svg>
                  </span>
                  <span className="text-sm text-stone-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(139,58,58,0.35)]"
                style={{ background: A }}
              >
                Book a Free Growth Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* RIGHT — animated dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 6 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            {/* Main card */}
            <div className="relative rounded-[28px] border border-stone-200/70 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.07)] overflow-hidden">

              {/* Card top bar */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-stone-100">
                <div>
                  <p className="text-stone-800 text-xs font-bold uppercase tracking-widest">Live Performance Dashboard</p>
                  <p className="text-stone-400 text-[10px] mt-0.5">Growzzy Client Network · Updated live</p>
                </div>
                {/* Live indicator */}
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#22c55e' }} />
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium">LIVE</span>
                </div>
              </div>

              <div className="p-8">
                {/* Animated bar chart */}
                <div className="flex items-end gap-[5px] h-32 mb-3">
                  {barHeights.map((h, i) => {
                    const isHighlight = i >= 8
                    return (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-[3px] origin-bottom"
                        initial={{ scaleY: 0 }}
                        animate={barsVisible ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 0.7, delay: i * 0.045, ease: [0.34, 1.56, 0.64, 1] }}
                        style={{
                          height: `${h}%`,
                          background: isHighlight
                            ? `linear-gradient(to top, ${A}, #c45e5e)`
                            : '#e7e5e4',
                        }}
                        whileHover={{ scaleY: 1.06, transition: { duration: 0.2 } }}
                      />
                    )
                  })}
                </div>
                <div className="flex justify-between text-[10px] text-stone-300 mb-6 font-medium px-0.5">
                  <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
                </div>
                <p className="text-stone-400 text-[11px] text-center mb-8 tracking-wide">
                  Consultations booked — last 12 months
                </p>

                {/* Metric chips */}
                <div className="grid grid-cols-3 gap-3">
                  {metrics.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.88 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ duration: 0.55, delay: 0.7 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                      whileHover={{ y: -3, boxShadow: '0 10px 24px rgba(139,58,58,0.12)', transition: { duration: 0.25 } }}
                      className="text-center py-5 px-3 rounded-2xl border border-stone-100 bg-stone-50 cursor-default"
                    >
                      <div className="flex justify-center mb-1">{s.icon}</div>
                      <p className="font-playfair font-bold text-xl mb-0.5" style={{ color: A }}>{s.v}</p>
                      <p className="text-stone-400 text-[10px] font-medium uppercase tracking-wider">{s.l}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom accent strip */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${A}, transparent)` }} />
            </div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -top-4 -right-4 bg-white border border-stone-200 rounded-2xl px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2"
            >
              <Trophy className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-xs font-bold text-stone-800 leading-none">320+ Clinics</p>
                <p className="text-[10px] text-stone-400 mt-0.5">Served globally</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.05, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-4 -left-4 bg-white border border-stone-200 rounded-2xl px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2"
            >
              <MapPin className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-xs font-bold text-stone-800 leading-none">5 Countries</p>
                <p className="text-[10px] text-stone-400 mt-0.5">India · UAE · UK · USA · SG</p>
              </div>
            </motion.div>

            {/* Subtle offset glow frame */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] -z-10 border-2 pointer-events-none"
              style={{ borderColor: `${A}20` }} />
          </motion.div>
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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', clinic: '', city: '', phone: '', email: '', revenue: '' })
  }

  const inputClass = "w-full border border-stone-700/50 rounded-xl px-4 py-3.5 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-red-400/50 focus:bg-stone-800/80 transition-all duration-300 bg-stone-800/40 backdrop-blur-sm"
  const labelClass = "block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5 ml-1"

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden bg-stone-950">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20" style={{ background: A }} />
        <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-10" style={{ background: '#3b82f6' }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* Left info */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#ef4444' }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse bg-red-500" />
              Limited Availability
            </span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Claim Your Free<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">Growth Audit</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-12">
              Tell us about your clinic. We'll audit your digital presence, analyse your local competition, and build a custom 90-day growth roadmap — completely free.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
            }}
            className="space-y-6"
          >
            {[
              { icon: <Search className="w-5 h-5 text-blue-400" />, title: 'Digital Presence Audit', desc: 'Google, Instagram, Meta Ads, Reviews' },
              { icon: <Target className="w-5 h-5 text-rose-400" />, title: 'Competitor Analysis',    desc: "Who's eating your market share and how" },
              { icon: <TrendingUp className="w-5 h-5 text-emerald-400" />, title: '90-Day Growth Roadmap', desc: 'Exactly what we\'d do for your clinic'  },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                }}
                className="flex items-start gap-5 group cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-stone-700 shadow-lg">
                  {item.icon}
                </div>
                <div className="pt-1">
                  <p className="text-stone-200 font-semibold text-base mb-1 group-hover:text-white transition-colors">{item.title}</p>
                  <p className="text-stone-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Form Box */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-stone-900/60 backdrop-blur-xl rounded-[32px] p-8 sm:p-12 border border-stone-800 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]"
          >
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-[450px] text-center"
              >
                <div className="h-20 w-20 rounded-full flex items-center justify-center mb-6 bg-red-500/10 border border-red-500/20">
                  <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-white mb-3">Audit Requested!</h3>
                <p className="text-stone-400 text-base max-w-sm">We've received your details. One of our growth strategists will be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-8">
                  <h3 className="text-white font-bold text-2xl mb-2">Request Your Audit</h3>
                  <p className="text-stone-400 text-sm">Fill out the details below to get started.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Your Name</label>
                    <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Dr. Priya Sharma" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Clinic Name</label>
                    <input type="text" required value={form.clinic} onChange={e => setForm(f => ({ ...f, clinic: e.target.value }))} placeholder="Your Clinic Name" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>City</label>
                    <input type="text" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} placeholder="e.g. Mumbai" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone / WhatsApp</label>
                    <input type="tel" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+91 90000 00000" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@yourclinic.com" className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>Monthly Revenue Range</label>
                  <select value={form.revenue} onChange={e => setForm(f => ({ ...f, revenue: e.target.value }))} className={inputClass + ' cursor-pointer appearance-none'}>
                    <option value="" disabled className="text-stone-500">Select your current range...</option>
                    <option className="bg-stone-900">Below $10,000/month</option>
                    <option className="bg-stone-900">$10,000–$30,000/month</option>
                    <option className="bg-stone-900">$30,000–$100,000/month</option>
                    <option className="bg-stone-900">$100,000+ /month</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full py-4 rounded-xl text-sm font-bold text-white transition-all duration-300 overflow-hidden"
                    style={{ background: `linear-gradient(to right, ${AB}, ${A})` }}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative flex items-center justify-center gap-2">
                      Claim My Free Growth Audit
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                  <div className="mt-4 flex items-center justify-center gap-2 text-stone-500 text-xs font-medium">
                    <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    No commitment. No credit card. 100% Secure.
                  </div>
                </div>
              </form>
            )}
          </motion.div>
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
    // ─── 1. Lenis smooth scroll ────────────────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => { lenis.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)

    // ─── 2. Hero — cinematic entrance ─────────────────────────────────────────
    gsap.set('#home h1, #home p, #home .flex-wrap, #home .mt-12', { opacity: 0 })
    const heroTl = gsap.timeline({ delay: 0.1 })
    heroTl
      .fromTo('#home p:first-of-type',
        { opacity: 0, y: 20, letterSpacing: '0.3em' },
        { opacity: 1, y: 0, letterSpacing: '0.12em', duration: 0.9, ease: 'power3.out' })
      .fromTo('#home h1',
        { opacity: 0, y: 60, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1, ease: 'power4.out' }, '-=0.5')
      .fromTo('#home p:nth-of-type(2)',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6')
      .fromTo('#home .flex-wrap',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
      .fromTo('#home .mt-12',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')

    // ─── 3. Pain section ──────────────────────────────────────────────────────
    const painTl = gsap.timeline({
      scrollTrigger: { trigger: '#pain', start: 'top 75%', toggleActions: 'play none none none' }
    })
    painTl
      .fromTo('#pain .flex.items-center.gap-3',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' })
      .fromTo('#pain h2',
        { opacity: 0, y: 50, skewY: 1.5 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: 'power4.out' }, '-=0.3')
      .fromTo('#pain .text-stone-500.text-lg',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')

    // Pain cards stagger from left
    gsap.fromTo('#pain .space-y-6 > div',
      { opacity: 0, x: -60, rotateY: -8 },
      {
        opacity: 1, x: 0, rotateY: 0,
        duration: 0.8, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: '#pain .space-y-6', start: 'top 82%' }
      })

    // Pain funnel SVG reveal
    gsap.fromTo('#pain svg',
      { opacity: 0, scale: 0.88, y: 40 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '#pain svg', start: 'top 80%' }
      })

    // ─── 4. ICP cards — radiate from center ───────────────────────────────────
    const icpTl = gsap.timeline({
      scrollTrigger: { trigger: '#icp', start: 'top 75%', toggleActions: 'play none none none' }
    })
    icpTl
      .fromTo('#icp h2',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out' })
      .fromTo('#icp p.text-stone-500.text-lg',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')

    gsap.fromTo('#icp .grid > div',
      { opacity: 0, y: 70, scale: 0.92 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7, stagger: { each: 0.1, from: 'start' }, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '#icp .grid', start: 'top 82%' }
      })

    // ─── 5. Services section — slide in from bottom ───────────────────────────
    const servicesTl = gsap.timeline({
      scrollTrigger: { trigger: '#services', start: 'top 78%' }
    })
    servicesTl
      .fromTo('#services h2',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out' })
      .fromTo('#services button',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5')

    // ─── 6. Testimonials — fade from below with stagger ───────────────────────
    const testTl = gsap.timeline({
      scrollTrigger: { trigger: '#testimonials', start: 'top 80%' }
    })
    testTl
      .fromTo('#testimonials .flex.flex-col.items-center',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })

    gsap.fromTo('#testimonials .flex.justify-center > div',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '#testimonials .flex.justify-center', start: 'top 85%' }
      })

    // ─── 7. Global / Map section — dramatic entrance ──────────────────────────
    const globalTl = gsap.timeline({
      scrollTrigger: { trigger: '#global', start: 'top 78%' }
    })
    globalTl
      .fromTo('#global .text-center p:first-child',
        { opacity: 0, y: -20, letterSpacing: '0.3em' },
        { opacity: 1, y: 0, letterSpacing: '0.12em', duration: 0.7, ease: 'power2.out' })
      .fromTo('#global h2',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out' }, '-=0.4')
      .fromTo('#global .text-center p.text-stone-500',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')

    // Stat cards pop in
    gsap.fromTo('#global .grid > div',
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.6, stagger: 0.1, ease: 'back.out(1.6)',
        scrollTrigger: { trigger: '#global .grid', start: 'top 85%' }
      })

    // Map section reveal with clip-path wipe
    gsap.fromTo('#global .rounded-3xl',
      { opacity: 0, clipPath: 'inset(0 100% 0 0)', y: 40 },
      {
        opacity: 1, clipPath: 'inset(0 0% 0 0)', y: 0,
        duration: 1.2, ease: 'power3.inOut',
        scrollTrigger: { trigger: '#global .rounded-3xl', start: 'top 85%' }
      })

    // ─── 8. About — split layout entrance ────────────────────────────────────
    const aboutTl = gsap.timeline({
      scrollTrigger: { trigger: '#about', start: 'top 75%' }
    })
    aboutTl
      .fromTo('#about h2',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' })
      .fromTo('#about .text-stone-500.text-base',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1 }, '-=0.5')
      .fromTo('#about .grid.grid-cols-1 > div',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out' }, '-=0.4')

    // Dashboard card sweeps in from the right
    gsap.fromTo('#about .relative > div:first-child',
      { opacity: 0, x: 80, rotateY: 8 },
      {
        opacity: 1, x: 0, rotateY: 0,
        duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '#about .relative', start: 'top 82%' }
      })

    // Bar chart animates up after dashboard enters
    const bars = document.querySelectorAll('#about .flex-1.rounded-t')
    if (bars.length > 0) {
      gsap.fromTo(bars,
        { scaleY: 0, transformOrigin: 'bottom' },
        {
          scaleY: 1, duration: 1, stagger: 0.04, ease: 'power3.out',
          scrollTrigger: { trigger: '#about .relative', start: 'top 80%' }
        })
    }

    // Stat chips inside dashboard pop in
    gsap.fromTo('#about .grid.grid-cols-3 > div',
      { opacity: 0, y: 20, scale: 0.85 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.5, stagger: 0.1, ease: 'back.out(1.8)',
        scrollTrigger: { trigger: '#about .grid.grid-cols-3', start: 'top 85%' }
      })

    // ─── 9. Contact — form slides up, CTA fades in ────────────────────────────
    const contactTl = gsap.timeline({
      scrollTrigger: { trigger: '#contact', start: 'top 78%' }
    })
    contactTl
      .fromTo('#contact h2',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out' })
      .fromTo('#contact p.text-stone-500',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
      .fromTo('#contact form',
        { opacity: 0, y: 50, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' }, '-=0.4')
      .fromTo('#contact form input, #contact form select, #contact form button',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' }, '-=0.4')

    // ─── 10. Horizontal scroll parallax on section dividers ──────────────────
    gsap.utils.toArray('[data-parallax]').forEach(el => {
      gsap.to(el, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
      })
    })

    // ─── 11. Floating accent blobs — subtle parallax ──────────────────────────
    gsap.utils.toArray('.blur-3xl').forEach((blob, i) => {
      gsap.to(blob, {
        yPercent: i % 2 === 0 ? -20 : 20,
        xPercent: i % 2 === 0 ? 10 : -10,
        ease: 'none',
        scrollTrigger: { trigger: blob.parentElement, start: 'top bottom', end: 'bottom top', scrub: 2 }
      })
    })

    // ─── 12. Footer text — cascade up ────────────────────────────────────────
    gsap.fromTo('footer .grid > div',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: 'footer', start: 'top 90%' }
      })

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
      <GlobalReach />
      <Feature108 />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
