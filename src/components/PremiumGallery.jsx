import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const A = '#8B3A3A';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    category: 'Skin & Aesthetics',
    tag: 'Most Popular',
    span: 'col-span-2 row-span-2',
  },
  {
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    category: 'Clinical Excellence',
    tag: null,
    span: 'col-span-1 row-span-1',
  },
  {
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    category: 'Facial Rejuvenation',
    tag: 'Trending',
    span: 'col-span-1 row-span-1',
  },
  {
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop',
    category: 'Wellness & Spa',
    tag: null,
    span: 'col-span-1 row-span-2',
  },
  {
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    category: 'Advanced Care',
    tag: null,
    span: 'col-span-1 row-span-1',
  },
];

const stats = [
  { value: '320+', label: 'Clinics Grown' },
  { value: '$4.2M', label: 'Revenue Generated' },
  { value: '94%', label: 'Client Retention' },
];

export function PremiumGallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-1">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: A }} />
                <span className="w-3 h-3 rounded-full bg-stone-300" />
              </div>
              <p className="text-stone-500 font-semibold tracking-widest text-xs uppercase">Results Gallery</p>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              Clinics We've Helped<br />
              <span className="italic" style={{ color: A }}>Transform & Grow.</span>
            </h2>
          </div>
          <div className="flex gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-playfair text-3xl md:text-4xl font-bold text-stone-900">{stat.value}</div>
                <div className="text-stone-500 text-xs font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[600px] md:h-[680px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-[28px] cursor-pointer ${item.span}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover"
                animate={{ scale: hovered === i ? 1.08 : 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />

              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                }}
                animate={{ opacity: hovered === i ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              />

              {/* Tag */}
              {item.tag && (
                <div
                  className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: A }}
                >
                  {item.tag}
                </div>
              )}

              {/* Category label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <motion.div
                  animate={{ y: hovered === i ? 0 : 4, opacity: hovered === i ? 1 : 0.85 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white font-bold text-lg leading-tight">{item.category}</p>
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-white/70 text-sm mt-1"
                      >
                        Aesthetic clinic results →
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
