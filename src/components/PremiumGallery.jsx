import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion, animate } from 'framer-motion';

const A = '#127369';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    category: 'Skin & Aesthetics',
    tag: 'Most Popular',
    span: 'col-span-2 row-span-2',
    type: 'hero',
  },
  {
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    category: 'Clinical Excellence',
    tag: null,
    span: 'col-span-1 row-span-1',
    type: 'top-right',
  },
  {
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    category: 'Facial Rejuvenation',
    tag: 'Trending',
    span: 'col-span-1 row-span-1',
    type: 'top-right',
  },
  {
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop',
    category: 'Wellness & Spa',
    tag: null,
    span: 'col-span-1 row-span-2',
    type: 'bottom-right',
  },
  {
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    category: 'Advanced Care',
    tag: null,
    span: 'col-span-1 row-span-1',
    type: 'bottom-right',
  },
];

const stats = [
  { value: '320+', label: 'Clinics Grown' },
  { value: '$4.2M', label: 'Revenue Generated' },
  { value: '94%', label: 'Client Retention' },
];

function CountUpNumber({ value, shouldAnimate, duration = 0.8, delay = 0.3 }) {
  const [displayValue, setDisplayValue] = useState(value);
  const shouldReduceMotion = useReducedMotion();
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || animatedRef.current) return;
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    const match = value.match(/^([^\d]*)([\d.]+)([^\d]*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const targetVal = parseFloat(match[2]);
    const suffix = match[3];
    const isDecimal = match[2].includes('.');

    animatedRef.current = true;

    const timer = setTimeout(() => {
      animate(0, targetVal, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (isDecimal) {
            setDisplayValue(`${prefix}${latest.toFixed(1)}${suffix}`);
          } else {
            setDisplayValue(`${prefix}${Math.floor(latest)}${suffix}`);
          }
        }
      });
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, shouldAnimate, shouldReduceMotion, duration, delay]);

  return <span>{displayValue}</span>;
}

export function PremiumGallery() {
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  // 1. Eyebrow animation
  const eyebrowVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      }
    }
  };

  const dot1Variants = {
    hidden: { scale: 1 },
    visible: {
      scale: shouldReduceMotion ? 1 : [1, 1.25, 1],
      transition: {
        duration: 0.4,
        delay: shouldReduceMotion ? 0 : 0.4,
        ease: 'easeOut'
      }
    }
  };

  const dot2Variants = {
    hidden: { scale: 1 },
    visible: {
      scale: shouldReduceMotion ? 1 : [1, 1.25, 1],
      transition: {
        duration: 0.4,
        delay: shouldReduceMotion ? 0 : 0.5,
        ease: 'easeOut'
      }
    }
  };

  // 2. Headline animations
  const headlineVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 18 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: 0.1,
        ease: 'easeOut',
      }
    }
  };

  const italicVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 18,
      clipPath: shouldReduceMotion ? 'none' : 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: shouldReduceMotion ? 'none' : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      transition: {
        duration: 0.45,
        delay: 0.2,
        ease: 'easeOut',
      }
    }
  };

  // 3. Stat trio animations
  const statsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const statItemVariants = {
    hidden: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : 12 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut'
      }
    }
  };

  // 4. Tile entrance and hover variants
  const getTileVariants = (type) => {
    let delay = 0.4;
    let duration = 0.6;
    let initialObj = { opacity: 0 };

    if (type === 'hero') {
      initialObj.scale = shouldReduceMotion ? 1 : 0.96;
    } else {
      initialObj.y = shouldReduceMotion ? 0 : 16;
      duration = 0.45;
      delay = type === 'top-right' ? 0.55 : 0.7;
    }

    return {
      hidden: initialObj,
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration,
          ease: 'easeOut',
          delay: shouldReduceMotion ? 0 : delay,
        }
      },
      hover: {
        boxShadow: shouldReduceMotion 
          ? 'none' 
          : '0 20px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)',
        y: shouldReduceMotion ? 0 : -2,
        transition: { duration: 0.3, ease: 'easeOut' }
      }
    };
  };

  const imageHoverVariants = {
    hidden: { scale: 1 },
    visible: { scale: 1 },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.05,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const getBadgeVariants = (settleTime) => ({
    hidden: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: shouldReduceMotion ? 'easeOut' : [0.34, 1.56, 0.64, 1],
        delay: shouldReduceMotion ? 0 : settleTime + 0.1
      }
    }
  });

  const getScrimAndCaptionVariants = (settleTime) => ({
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : settleTime + 0.2
      }
    }
  });

  const captionTextVariants = {
    hover: {
      y: shouldReduceMotion ? 0 : -4,
      transition: { duration: 0.25, ease: 'easeOut' }
    }
  };

  const arrowVariants = {
    hover: {
      x: shouldReduceMotion ? 0 : 4,
      transition: { duration: 0.25, ease: 'easeOut' }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="gallery" 
      className="py-24 bg-[#FAF9F6] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-5"
              variants={eyebrowVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="flex gap-1">
                <motion.span 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: A }} 
                  variants={dot1Variants}
                />
                <motion.span 
                  className="w-3 h-3 rounded-full bg-stone-300" 
                  variants={dot2Variants}
                />
              </div>
              <p className="text-stone-500 font-semibold tracking-widest text-xs uppercase">Results Gallery</p>
            </motion.div>

            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight overflow-hidden">
              <motion.span 
                className="block"
                variants={headlineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                Clinics We've Helped
              </motion.span>
              <motion.span 
                className="italic block relative overflow-hidden" 
                style={{ color: A, paddingRight: '0.1em' }}
                variants={italicVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                Transform & Grow.
              </motion.span>
            </h2>
          </div>

          {/* Stat Trio */}
          <motion.div 
            className="flex gap-8 md:gap-12"
            variants={statsContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center"
                variants={statItemVariants}
              >
                <div className="font-playfair text-3xl md:text-4xl font-bold text-stone-900">
                  <CountUpNumber 
                    value={stat.value} 
                    shouldAnimate={isInView} 
                    delay={0.3} 
                  />
                </div>
                <div className="text-stone-500 text-xs font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[600px] md:h-[680px]">
          {galleryItems.map((item, i) => {
            const tileVariants = getTileVariants(item.type);
            // Settle times for delays: Hero settles at 1.0s, Top-right at 1.0s, Bottom-right at 1.15s
            const settleTime = item.type === 'hero' ? 1.0 : item.type === 'top-right' ? 1.0 : 1.15;

            return (
              <motion.div
                key={i}
                className={`relative overflow-hidden rounded-[28px] cursor-pointer ${item.span} border border-stone-200/40`}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                variants={tileVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
              >
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover"
                  variants={imageHoverVariants}
                />

                {/* Gradient Scrim & Caption Container */}
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end"
                  variants={getScrimAndCaptionVariants(settleTime)}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {/* Scrim Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
                    }}
                  />

                  {/* Caption */}
                  <div className="relative z-10 p-6 md:p-8">
                    <motion.div
                      variants={captionTextVariants}
                    >
                      <p className="text-white font-bold text-lg md:text-xl leading-tight font-playfair">{item.category}</p>
                      <AnimatePresence>
                        {hovered === i && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 4 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="text-white/80 text-xs md:text-sm font-medium flex items-center gap-1.5"
                          >
                            <span>Aesthetic clinic results</span>
                            <motion.span
                              className="inline-block"
                              variants={arrowVariants}
                            >
                              →
                            </motion.span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Tag / Badge */}
                {item.tag && (
                  <motion.div
                    className="absolute top-4 left-4 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm z-20"
                    style={{ backgroundColor: A }}
                    variants={getBadgeVariants(settleTime)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {item.tag}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
