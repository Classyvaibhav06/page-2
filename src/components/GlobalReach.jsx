import React from 'react';
import { motion } from 'framer-motion';
import { WorldMap } from './ui/world-map';

const A = '#127369';

const stats = [
  { value: '320+', label: 'Clinics Served' },
  { value: '5', label: 'Countries' },
  { value: '$4.2M', label: 'Revenue Generated' },
  { value: '94%', label: 'Retention Rate' },
];

// ── Growzzy's 5 service markets ──────────────────────────────────────────────
// India (Mumbai + Delhi), UK (London), USA (New York), UAE (Dubai), Singapore
const mapDots = [
  // USA → UK
  {
    start: { lat: 40.7128, lng: -74.006,  label: 'New York' },
    end:   { lat: 51.5074, lng: -0.1278,  label: 'London' },
  },
  // UK → UAE
  {
    start: { lat: 51.5074, lng: -0.1278,  label: 'London' },
    end:   { lat: 25.2048, lng: 55.2708,  label: 'Dubai' },
  },
  // UAE → India
  {
    start: { lat: 25.2048, lng: 55.2708,  label: 'Dubai' },
    end:   { lat: 28.6139, lng: 77.2090,  label: 'New Delhi' },
  },
  // India (Delhi) → India (Mumbai)
  {
    start: { lat: 28.6139, lng: 77.2090,  label: 'New Delhi' },
    end:   { lat: 19.0760, lng: 72.8777,  label: 'Mumbai' },
  },
  // India → Singapore
  {
    start: { lat: 19.0760, lng: 72.8777,  label: 'Mumbai' },
    end:   { lat: 1.3521,  lng: 103.8198, label: 'Singapore' },
  },
  // Singapore → UAE (closes the loop)
  {
    start: { lat: 1.3521,  lng: 103.8198, label: 'Singapore' },
    end:   { lat: 25.2048, lng: 55.2708,  label: 'Dubai' },
  },
];

export function GlobalReach() {
  return (
    <section
      id="global"
      className="py-28 relative overflow-hidden"
      style={{ background: '#FAF9F6' }}
    >
      {/* Subtle background blobs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-30 -translate-y-1/3 translate-x-1/3 pointer-events-none"
        style={{ background: `${A}08` }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4 pointer-events-none"
        style={{ background: '#d6d3d130' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <p
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: A }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: A }}
            />
            Global Footprint
          </p>

          <h2
            className="font-playfair font-bold text-stone-900 leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.5rem)' }}
          >
            Aesthetic Growth,{' '}
            <span className="italic" style={{ color: A }}>
              Across Borders.
            </span>
          </h2>

          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
            From boutique medspas in Mumbai to luxury clinics in Dubai, London, New York, and Singapore —
            Growzzy's patient acquisition systems are live across <strong className="text-stone-700 font-semibold">India, UAE, UK, USA &amp; Singapore</strong>.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="text-center py-8 rounded-2xl border border-stone-200/70 bg-white shadow-[0_4px_24px_rgb(0,0,0,0.04)]"
            >
              <div
                className="font-playfair font-bold text-3xl md:text-4xl mb-1"
                style={{ color: A }}
              >
                {s.value}
              </div>
              <div className="text-stone-500 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="rounded-3xl overflow-hidden border border-stone-200/60 shadow-[0_20px_80px_rgb(0,0,0,0.06)]"
          style={{ background: '#FAF9F6' }}
        >
          <WorldMap
            dots={mapDots}
            lineColor={A}
            showLabels={true}
            animationDuration={2}
            loop={true}
          />
        </motion.div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-stone-400 text-sm mt-6 tracking-wide"
        >
          Active clinics across India · UAE · UK · USA · Singapore
        </motion.p>

      </div>
    </section>
  );
}
