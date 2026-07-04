import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'


import CircularGallery from './components/CircularGallery'
import { SparklesText } from './components/ui/sparkles-text'
import { motion } from 'framer-motion'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'
import { TestimonialsColumn } from './components/ui/testimonials-columns-1'
import { OrbitalServices as Services } from './components/InteractiveServices'
import { PremiumICPSection as ICPSection } from './components/PremiumICPSection'
import RotatingText from './components/RotatingText'
import TestimonialSlider from './components/ui/testimonial-slider'
import { AnimatedButton } from './components/ui/animated-button'
import './components/ui/animated-link-button.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { CircleDollarSign, TrendingUp, Target, Trophy, MapPin, Search } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const A = '#C41E3A'          // primary accent – crimson red
const AL = '#C41E3A15'       // accent light tint
const AB = '#a01530'         // accent dark (hover)

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
    <p className="flex items-start text-xs font-semibold uppercase mb-5 md:mb-6" style={{ color: A, letterSpacing: '0.12em' }}>
      <span className="dot-pulse rounded-full flex-shrink-0 mr-2 mt-[4px]" style={{ backgroundColor: A, width: '6px', height: '6px' }} />
      <span>{children}</span>
    </p>
  )
}

// ─── Primary button ────────────────────────────────────────────────────────────
function BtnPrimary({ href, children, className = "", ...props }) {
  return (
    <AnimatedButton href={href} className={className} {...props}>
      {children}
    </AnimatedButton>
  )
}
// ─── Ghost button ──────────────────────────────────────────────────────────────
function BtnGhost({ href, children }) {
  return (
    <a href={href} className="animated-link-button">
      <p data-text={children}>{children}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
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
        <BtnPrimary href="https://calendly.com/growzzymedia" target="_blank" rel="noopener noreferrer" className="!py-2 md:!py-2.5 !px-3 md:!px-6 !text-xs md:!text-sm whitespace-nowrap">
          <span className="hidden sm:inline">Get a Free Audit</span>
          <span className="sm:hidden">Get Audit</span>
        </BtnPrimary>
      </div>
    </div>
  )
}



// ═══════════════════════════════════════════════════════════════════════════════
// HERO  — video bg, cream left overlay, text on left (matches reference layout)
// ═══════════════════════════════════════════════════════════════════════════════
const HR = '#C41E3A'   // hero crimson red

function Hero() {
  return (
    <section id="home" className="relative w-full md:min-h-screen flex items-center overflow-hidden bg-[#faf8f5]">

      {/* ── Desktop Full-bleed video ── */}
      <div className="absolute inset-0 hidden md:block">
        <video
          src="/video.mp4"
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right 20%' }}
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* ── Mobile Video Background (Scaled down to fit face on the right) ── */}
      <div
        className="absolute bottom-0 right-0 w-full md:hidden z-0 pointer-events-none"
        style={{ height: '70%', transform: 'translateY(-19%)' }}
      >
        <video
          src="/video.mp4"
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: '58% center' }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#faf8f5] to-transparent" />
        <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/80 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center pt-28 pb-20 md:py-0 min-h-[100svh] md:min-h-screen">

        {/* Text Block */}
        <div className="w-full md:w-1/2 md:pr-10 lg:pr-12">

          {/* Eyebrow */}
          <p className="flex items-center text-xs font-semibold uppercase mb-5 md:mb-6" style={{ color: HR, letterSpacing: '0.12em' }}>
            <span className="dot-pulse rounded-full flex-shrink-0 mr-2" style={{ backgroundColor: HR, width: '6px', height: '6px', display: 'inline-block' }} />
            Marketing for Medspas &amp; Cosmetic Clinics
          </p>

          {/* Headline */}
          <h1
            className="font-playfair font-bold text-stone-900 leading-[1.05] mb-6 max-w-[700px]"
            style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 4.5rem)' }}
          >
            Your Scalpel Is Precise.<br />
            <span className="italic" style={{ color: HR }}>
              Your{' '}
              <span
                className="inline-block relative align-middle mx-1 md:mx-2"
                style={{
                  background: 'transparent',
                  width: '5.2em',
                  height: '1.25em',
                  overflow: 'hidden',
                  transform: 'translateY(-2px)'
                }}
              >
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
                    style={{ color: HR, fontSize: 'inherit', lineHeight: '1' }}
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
            <BtnPrimary href="https://calendly.com/growzzymedia" target="_blank" rel="noopener noreferrer" className="!tracking-[0.01em]">Get a Free Growth Audit</BtnPrimary>
            <BtnGhost href="#services">Learn More</BtnGhost>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide font-semibold text-stone-400">
            <span>200+ Clinics</span>
            <span className="border-l border-gray-300 pl-3">3x Avg. Bookings</span>
            <span className="border-l border-gray-300 pl-3">Delhi · Mumbai · Bangalore</span>
          </div>

        </div>

      </div>
    </section>
  )
}


// ═══════════════════════════════════════════════════════════════════════════════
// PAIN SECTION
// ═══════════════════════════════════════════════════════════════════════════════

const generateParticles = () => {
  const p = [];
  let id = 0;
  const rand = (min, max) => Math.random() * (max - min) + min;

  // Helper to generate a curved path for particles
  const getCurve = (startX, exitX, leakY) => {
    return {
      cx: [startX, startX + (exitX - startX) * 0.1, startX + (exitX - startX) * 0.4, exitX],
      cy: [-10, -10 + (leakY + 10) * 0.4, -10 + (leakY + 10) * 0.8, leakY]
    };
  };

  // Stage 1 leaks (80% lost) - Lots of particles
  for(let i=0; i<18; i++) {
    const isLeft = i % 2 === 0;
    const startX = isLeft ? rand(80, 190) : rand(230, 340);
    const exitX = isLeft ? 52 : 368;
    const path = getCurve(startX, exitX, 87);
    p.push({
      id: id++,
      cx: path.cx,
      cy: path.cy,
      opacity: [0, 0.7, 0.7, 0],
      times: [0, 0.2, 0.8, 1],
      duration: rand(2.5, 3.5),
      delay: rand(0, 4)
    });
  }

  // Stage 2 leaks (90% lost) - Medium amount
  for(let i=0; i<10; i++) {
    const isLeft = i % 2 === 0;
    const startX = isLeft ? rand(110, 190) : rand(230, 310);
    const exitX = isLeft ? 94 : 326;
    const path = getCurve(startX, exitX, 179);
    p.push({
      id: id++,
      cx: path.cx,
      cy: path.cy,
      opacity: [0, 0.7, 0.7, 0],
      times: [0, 0.2, 0.8, 1],
      duration: rand(3.5, 4.5),
      delay: rand(0, 4.5)
    });
  }

  // Stage 3 leaks (75% lost) - Few
  for(let i=0; i<5; i++) {
    const isLeft = i % 2 === 0;
    const startX = isLeft ? rand(140, 190) : rand(230, 280);
    const exitX = isLeft ? 132 : 288;
    const path = getCurve(startX, exitX, 271);
    p.push({
      id: id++,
      cx: path.cx,
      cy: path.cy,
      opacity: [0, 0.7, 0.7, 0],
      times: [0, 0.2, 0.8, 1],
      duration: rand(4.5, 5.5),
      delay: rand(0, 5)
    });
  }

  // Converted (5 patients) - Very few
  for(let i=0; i<3; i++) {
    const startX = rand(190, 230);
    p.push({
      id: id++,
      cx: [startX, startX, startX, startX],
      cy: [-10, 120, 250, 380], // falls straight down
      opacity: [0, 0.8, 0.8, 0],
      times: [0, 0.2, 0.8, 1],
      duration: rand(5.5, 6.5),
      delay: rand(0, 6)
    });
  }

  return p;
};

const FUNNEL_PARTICLES = generateParticles();

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

  const A_LOCAL = '#C41E3A' // Crimson Red
  const LEAK_COLOR = '#d97706' // Amber-600

  const stages = [
    { points: '30,0 390,0 348,82 72,82',       label: '1,000 Clicks',      sub: 'Ad Impressions',    fill: `${A_LOCAL}10`, strokeW: "1", cy: 34  },
    { points: '72,92 348,92 306,174 114,174',   label: '200 Leads',         sub: 'Enquiries Received', fill: `${A_LOCAL}25`, strokeW: "1.25", cy: 126 },
    { points: '114,184 306,184 270,266 150,266', label: '20 Consultations', sub: 'Booked Meetings',   fill: `${A_LOCAL}45`, strokeW: "1.5", cy: 218 },
    { points: '150,276 270,276 246,348 174,348', label: '5 Patients',       sub: 'Converted',         fill: `${A_LOCAL}65`, strokeW: "1.75", cy: 305 },
  ]

  const leaks = [
    { lx: 52,  rx: 368, y: 87,  pct: '80% lost here' },
    { lx: 94,  rx: 326, y: 179, pct: '90% lost here' },
    { lx: 132, rx: 288, y: 271, pct: '75% lost here' },
  ]



  // Viewport trigger settings
  const vp = { once: true, amount: 0.3 }

  return (
    <section id="pain" className="py-14 md:py-16 bg-[#faf8f5] overflow-hidden">
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
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-[0.9]">
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
              className="italic block relative overflow-hidden text-[1.15em]" 
              style={{ color: '#a01530', paddingRight: '0.1em' }}
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
            className="flex flex-col gap-10 lg:gap-12"
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
                    style={{ color: `${A_LOCAL}66` }}
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
                    style={{ backgroundColor: `${A_LOCAL}4D`, originY: 0 }}
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
                          textShadow: ["0px 0px 8px rgba(196,30,58,0.4)", "0px 0px 0px rgba(196,30,58,0)"], 
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
            className="flex justify-center w-full max-w-[360px] lg:max-w-[420px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <svg
              viewBox="0 0 420 395"
              className="w-full h-auto overflow-visible"
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
                      strokeWidth={s.strokeW}
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

              {/* Falling Particles Animation */}
              {FUNNEL_PARTICLES.map((particle) => (
                <motion.circle
                  key={`particle-${particle.id}`}
                  r="2.5"
                  fill={A_LOCAL}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      cx: particle.cx,
                      cy: particle.cy,
                      opacity: particle.opacity,
                      transition: { 
                        duration: particle.duration, 
                        repeat: Infinity, 
                        delay: particle.delay,
                        ease: "linear",
                        times: particle.times
                      }
                    }
                  }}
                />
              ))}

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
                  <motion.line x1={l.lx + 12} y1={l.y} x2={l.lx + 28} y2={l.y}
                    stroke={LEAK_COLOR} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"
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
                    <motion.circle cx={l.lx} cy={l.y} r="12" fill="white" stroke={LEAK_COLOR} strokeWidth="2" 
                      animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 + (i * 0.3) + 0.4 }}
                    />
                    <text x={l.lx} y={l.y + 5} textAnchor="middle" fontSize="13" fill={LEAK_COLOR} fontWeight="800" fontFamily="Inter, sans-serif">!</text>
                  </motion.g>

                  {/* Right dashed line drawing (Funnel -> Circle) */}
                  <motion.line x1={l.rx - 28} y1={l.y} x2={l.rx - 12} y2={l.y}
                    stroke={LEAK_COLOR} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"
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
                    <motion.circle cx={l.rx} cy={l.y} r="12" fill="white" stroke={LEAK_COLOR} strokeWidth="2" 
                      animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 + (i * 0.3) + 0.4 }}
                    />
                    <text x={l.rx} y={l.y + 5} textAnchor="middle" fontSize="13" fill={LEAK_COLOR} fontWeight="800" fontFamily="Inter, sans-serif">!</text>
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
                  stroke={A_LOCAL} strokeWidth="2" strokeDasharray="4 3" opacity="0.8"
                  style={{ originY: "352px", originX: "210px" }}
                  variants={{
                    hidden: { scaleY: 0 },
                    visible: { scaleY: 1, transition: { duration: 0.3 } }
                  }}
                />
                <polygon points="204,370 216,370 210,380" fill={A_LOCAL} opacity="0.8" />
                {/* Animated drip dot */}
                <motion.circle cx="210" cy="352" r="3" fill={A_LOCAL}
                  animate={{ cy: [352, 375], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 2.5 }}
                />

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
function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 bg-[#faf8f5]">
      <TestimonialSlider />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════════════════════════════════════════

const chartData = [
  { name: 'United States', contributed: 15, pledged: 10.5 },
  { name: 'United Kingdom', contributed: 0, pledged: 19 },
  { name: 'European Commission', contributed: 13.5, pledged: 0 },
  { name: 'Canada', contributed: 10, pledged: 0 },
  { name: 'Russian Federation', contributed: 5, pledged: 0 },
  { name: 'Germany', contributed: 4.8, pledged: 0 },
  { name: 'Japan', contributed: 4.8, pledged: 0 },
  { name: 'Sweden', contributed: 3.5, pledged: 0 },
  { name: 'Denmark', contributed: 1.8, pledged: 0 },
  { name: 'Netherlands', contributed: 1.8, pledged: 0 },
  { name: 'Funds by UN Agencies', contributed: 1.5, pledged: 0 },
  { name: 'Finland', contributed: 1.2, pledged: 0 },
  { name: 'Switzerland', contributed: 1.2, pledged: 0 },
  { name: 'Norway', contributed: 1, pledged: 0 },
  { name: 'Estonia', contributed: 0.5, pledged: 0 },
  { name: 'Belgium', contributed: 0.5, pledged: 0 },
  { name: 'Private Donations', contributed: 0.3, pledged: 0 },
  { name: 'Czech Republic', contributed: 0.2, pledged: 0 },
  { name: 'Italy', contributed: 0.1, pledged: 0 },
  { name: 'Austria', contributed: 0.1, pledged: 0 },
];
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
    <section id="about" ref={sectionRef} className="py-10 md:py-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAFAF8 0%, #F5F0EB 100%)' }}>

      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3 pointer-events-none"
        style={{ background: `${A}18` }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 translate-x-1/4 translate-y-1/4 pointer-events-none"
        style={{ background: '#d6d3d140' }} />

      <div className="max-w-[1440px] mx-auto px-6">

        {/* ── Two-column body ──────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* LEFT — heading + copy + checklist */}
          <div>
            {/* Eyebrow + headline (now inside the left column) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: A }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: A }} />
                About Growzzy
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-900 leading-[1.1] mb-2">
                We Speak Both<br />
                <span className="italic" style={{ color: A }}>Marketing &amp; Medicine</span>
              </h2>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed">
                Founded on one belief: great clinics shouldn't lose patients to inferior ones just because of better marketing.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
              className="text-stone-600 text-sm md:text-base leading-relaxed mb-4"
            >
              We combine AI-driven ad tech with deep expertise in cosmetic surgery. We don't serve restaurants or e-commerce brands—<strong className="font-semibold text-stone-800">clinics are all we do.</strong>
            </motion.p>

            {/* Animated checklist */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-x-4 gap-y-2.5"
            >
              {perks.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-2 group"
                >
                  <span
                    className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mt-0.5"
                    style={{ background: `${A}18` }}
                  >
                    <svg className="w-2 h-2" fill="none" viewBox="0 0 10 8" stroke="currentColor" strokeWidth="2.5" style={{ color: A }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l3 3 5-6" />
                    </svg>
                  </span>
                  <span className="text-xs text-stone-700 font-medium leading-tight">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
              className="mt-6"
            >
              <a
                href="https://calendly.com/growzzymedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(196,30,58,0.35)]"
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
            <div className="relative rounded-[28px] border border-stone-200/70 bg-[#f8faf9] shadow-[0_24px_80px_rgba(0,0,0,0.07)] overflow-hidden">
              <div className="p-6">
              {/* Contributions Chart Banner & Legend */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                {/* Slanted Title Banner */}
                <div 
                  className="bg-[#C41E3A] text-white pl-5 pr-10 py-2.5 font-bold uppercase tracking-wider text-xs sm:text-sm"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
                >
                  CONTRIBUTIONS
                </div>
                {/* Legend */}
                <div className="flex items-center gap-4 text-[10px] sm:text-xs font-bold text-[#C41E3A]/80 self-end sm:self-auto">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <span className="w-3.5 h-3.5 bg-[#C41E3A] inline-block rounded-sm" />
                    <span>CONTRIBUTED</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold">
                    <span className="w-3.5 h-3.5 bg-[#fca5a5] inline-block rounded-sm" />
                    <span>PLEDGED</span>
                  </div>
                </div>
              </div>

              {/* Chart Body */}
              <div className="relative flex h-[240px] select-none pb-16">
                {/* Y-Axis Labels */}
                <div className="flex flex-col justify-between text-[10px] text-stone-400 font-semibold w-8 h-[140px] text-right pr-2">
                  <span>30</span>
                  <span>25</span>
                  <span>20</span>
                  <span>15</span>
                  <span>10</span>
                  <span>5</span>
                  <span>0</span>
                </div>

                {/* Chart Area */}
                <div className="relative flex-1 h-[140px] border-b border-stone-300">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[...Array(6)].map((_, idx) => (
                      <div key={idx} className="w-full border-t border-stone-200/60" />
                    ))}
                  </div>

                  {/* Bars Container */}
                  <div className="absolute inset-x-2 bottom-0 top-0 flex items-end justify-between">
                    {chartData.map((item, idx) => {
                      const total = item.contributed + item.pledged;
                      const contributedPct = (item.contributed / 30) * 100;
                      const pledgedPct = (item.pledged / 30) * 100;
                      
                      return (
                        <div key={idx} className="flex flex-col items-center flex-1 group relative h-full justify-end px-[1px]">
                          {/* Stacked Bar */}
                          <div className="w-1.5 sm:w-2.5 flex flex-col justify-end h-full origin-bottom">
                            {/* Pledged Part */}
                            {item.pledged > 0 && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={barsVisible ? { height: `${pledgedPct}%` } : {}}
                                transition={{ duration: 0.6, delay: idx * 0.03 }}
                                className="bg-[#fca5a5] rounded-t-[1px]"
                                style={{ width: '100%' }}
                              />
                            )}
                            {/* Contributed Part */}
                            {item.contributed > 0 && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={barsVisible ? { height: `${contributedPct}%` } : {}}
                                transition={{ duration: 0.6, delay: idx * 0.03 }}
                                className="bg-[#C41E3A] rounded-t-[1px]"
                                style={{ width: '100%' }}
                              />
                            )}
                          </div>

                          {/* Label (Rotated) */}
                          <div className="absolute top-[144px] origin-center -rotate-90 whitespace-nowrap text-[8px] font-semibold text-stone-500 tracking-tight translate-y-5">
                            {item.name}
                          </div>

                          {/* Tooltip */}
                          <div className="absolute bottom-full mb-1 bg-stone-800 text-white text-[9px] rounded px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30 shadow-md">
                            <span className="font-bold">{item.name}</span><br />
                            {item.contributed > 0 && `Contributed: $${item.contributed}M`}<br />
                            {item.pledged > 0 && `Pledged: $${item.pledged}M`}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

                {/* Metric chips */}
                <div className="grid grid-cols-3 gap-3">
                  {metrics.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.88 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ duration: 0.55, delay: 0.7 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                      whileHover={{ y: -3, boxShadow: '0 10px 24px rgba(196,30,58,0.12)', transition: { duration: 0.25 } }}
                      className="text-center py-3 px-1 sm:py-5 sm:px-3 rounded-2xl border border-stone-100 bg-stone-50 cursor-default"
                    >
                      <div className="flex justify-center mb-1">{s.icon}</div>
                      <p className="font-playfair font-bold text-lg sm:text-xl mb-0.5" style={{ color: A }}>{s.v}</p>
                      <p className="text-stone-400 text-[9px] sm:text-[10px] font-medium uppercase tracking-wider">{s.l}</p>
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
              className="absolute -top-4 right-0 sm:-right-4 bg-white border border-stone-200 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 z-10"
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
              className="absolute -bottom-4 left-0 sm:-left-4 bg-white border border-stone-200 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 z-10"
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
// FOOTER
// ═══════════════════════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer id="contact" className="bg-[#071917] text-[#a5bdbc] pt-12 pb-8 border-t border-[#C41E3A]/25 relative overflow-hidden">
      {/* Decorative gradient light glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C41E3A]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C41E3A]/3 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            {/* White-rendered logo branding */}
            <a href="#home" className="flex items-center group mb-5" aria-label="Growzzy Media">
              <div className="relative overflow-hidden flex items-center justify-start transition-transform duration-300 group-hover:scale-105" style={{ width: '180px', height: '36px' }}>
                <img
                  src="/12.png"
                  alt="Growzzy Media"
                  className="absolute max-w-none brightness-0 invert"
                  style={{
                    height: '150px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>
            </a>
            <p className="text-[#a5bdbc]/90 text-sm leading-relaxed max-w-sm mb-6">
              Premium growth marketing systems built exclusively for medspas, cosmetic surgery clinics, and aesthetic practices. Scaling bookings with ROI-first technology.
            </p>
            {/* Themed Social Links */}
            <div className="flex gap-3">
              {[
                {
                  name: 'LinkedIn',
                  href: '#',
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ),
                },
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/growzzy_media/',
                  svg: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                },
                {
                  name: 'WhatsApp',
                  href: 'https://wa.me/919259737609',
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.739-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.859.002-2.637-1.019-5.114-2.876-6.973-1.857-1.859-4.335-2.88-6.97-2.882-5.437 0-9.863 4.42-9.867 9.86-.001 1.774.475 3.503 1.378 5.027L1.93 21.025l5.228-1.378-.511-.493zm11.536-7.078c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-1.02-.515-1.74-.775-2.425-1.425-.567-.538-.857-1.127-1.057-1.427-.2-.3-.022-.462.128-.612.135-.135.301-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.519-.174-.009-.374-.01-.574-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52 1.42.615 2.235.69 3.035.57.8-.12 1.78-.727 2.03-1.43.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
                    </svg>
                  ),
                },
                {
                  name: 'Twitter',
                  href: '#',
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  ),
                },
              ].map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="h-10 w-10 rounded-full border border-[#C41E3A]/30 flex items-center justify-center text-[#a5bdbc] hover:border-[#C41E3A] hover:bg-[#C41E3A]/10 hover:text-white transition-all duration-300"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Quick Links</p>
            {['Home', 'Services', 'About', 'Testimonials'].map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block text-sm text-[#a5bdbc] hover:text-white mb-3 transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
          <div>
            <p className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact Us</p>
            <div className="space-y-4 text-sm text-[#a5bdbc]">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#C41E3A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:growzzymedia@gmail.com" className="hover:text-white transition-colors duration-200">growzzymedia@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#C41E3A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919259737609" className="hover:text-white transition-colors duration-200">+91-9259737609</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#C41E3A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Delhi · Mumbai · Bangalore</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#C41E3A]/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#a5bdbc]/60">
          <p>© 2026 Growzzy Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
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

      <About />
      <Footer />
    </div>
  )
}
