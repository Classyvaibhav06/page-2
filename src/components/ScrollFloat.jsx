import React, { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    let text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block" key={index} style={{ willChange: 'opacity, transform' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll('span');
    if (!charElements.length) return;

    const animation = gsap.fromTo(
      charElements,
      {
        opacity: 0,
        y: '100%',
        rotationX: -50,
      },
      {
        opacity: 1,
        y: '0%',
        rotationX: 0,
        stagger: stagger,
        duration: animationDuration,
        ease: ease,
        scrollTrigger: {
          trigger: el,
          scroller: scrollContainerRef?.current || window,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <span ref={containerRef} className={`inline-block ${containerClassName}`}>
      <span
        className={`inline-block overflow-hidden flex flex-wrap ${textClassName}`}
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        {splitText}
      </span>
    </span>
  );
};

export default ScrollFloat;
