"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  username: string; // Used for "role"
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Growzzy transformed our patient acquisition. We went from a trickle of inquiries to a consistently full calendar within 60 days.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop",
    name: "Dr. Sarah Jenkins",
    username: "Founder, LuxeAesthetics · Los Angeles, CA",
  },
  {
    id: 2,
    quote: "We'd burned money on two other agencies before. Growzzy was different — they actually understood the aesthetic industry and built ads that converted.",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    name: "Dr. Robert Chen",
    username: "Director, Beverly Hills Clinique · Beverly Hills, CA",
  },
  {
    id: 3,
    quote: "The transparency is what I appreciate most. I can see exactly what every dollar is doing. They gave us our first predictable patient pipeline in five years.",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop",
    name: "Dr. Amanda Ross",
    username: "Head of Dermatology, Ross Skin & Laser · Miami, FL",
  },
  {
    id: 4,
    quote: "The leads we get now are highly qualified. Patients walk in already knowing about the treatments and ready to book their procedure.",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop",
    name: "Dr. Marcus Vance",
    username: "Lead Surgeon, Vance Plastic Surgery · Chicago, IL",
  },
  {
    id: 5,
    quote: "Our hair transplant bookings skyrocketed by 300% after Growzzy took over. Their ad creatives are unmatched in this industry.",
    avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop",
    name: "Dr. Evelyn Stone",
    username: "Founder, Stone MedSpa · New York, NY",
  },
  {
    id: 6,
    quote: "They don't just run ads; they built our entire conversion funnel. Our front desk is now closing 40% more consultations than before.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    name: "Jennifer Sterling",
    username: "Clinic Manager, Sterling Aesthetics · Dallas, TX",
  },
  {
    id: 7,
    quote: "Switching to Growzzy was the best decision for our medspa. We opened a second location entirely funded by the new revenue they generated.",
    avatar: "https://images.unsplash.com/photo-1537368910025-7028b9095173?w=150&h=150&fit=crop",
    name: "Dr. William Hayes",
    username: "CEO, Hayes Cosmetic Center · Houston, TX",
  },
  {
    id: 8,
    quote: "Finally, a marketing partner that speaks our language. They understand patient psychology for elective procedures perfectly.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    name: "Dr. Natalie Cross",
    username: "Chief Aesthetician, Elite Med Clinic · Denver, CO",
  },
];

// Duplicate list for seamless infinite marquee loop
const marqueeTestimonials = [...testimonials, ...testimonials];

const TestimonialSlider: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-[#faf8f5] overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-6 mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full inline-block bg-primary animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-primary">
            Client Stories
          </span>
        </div>
        <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
          What Clinic Owners Say
        </h3>
        <p className="text-stone-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-4">
          See how we've helped aesthetic practices scale their consultation bookings and grow their revenue.
        </p>
      </div>

      {/* Infinite Marquee Wrapper with faded edges */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] pointer-events-none">
        <motion.div
          className="flex gap-6 w-max py-4"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35, // speed of movement (lower = faster)
            repeat: Infinity,
          }}
        >
          {marqueeTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="w-[350px] sm:w-[400px] flex-shrink-0"
            >
              <div 
                className="relative overflow-hidden rounded-2xl p-6 md:p-8 h-full bg-white border border-stone-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
              >
                <div className="absolute top-4 right-4 opacity-[0.04]">
                  <Quote size={60} className="text-primary" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <p className="text-sm md:text-base text-stone-600 font-medium mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  
                  <div className="pt-5 border-t border-stone-100 flex items-center">
                    <div className="relative flex-shrink-0">
                      <img
                        width={40}
                        height={40}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border border-stone-100"
                      />
                    </div>
                    <div className="ml-3 text-left">
                      <h4 className="font-bold text-sm md:text-base text-stone-900 leading-none">{testimonial.name}</h4>
                      <p className="text-stone-400 text-xs md:text-sm mt-1">{testimonial.username}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
