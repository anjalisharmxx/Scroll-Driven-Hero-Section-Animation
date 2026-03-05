import React, { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const HeroSection = () => {
  const comp = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLImageElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
 
      const letters = headlineRef.current?.querySelectorAll('.letter');
      
      if (letters && letters.length > 0) {
        gsap.fromTo(letters, 
          { 
            opacity: 0, 
            y: 100,
            rotateX: -90
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: "power4.out",
            delay: 0.2
          }
        );
      }

      const statItems = statsRef.current?.children;
      if (statItems && statItems.length > 0) {
        gsap.fromTo(statItems,
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 1.5 
          }
        );
      }

      if (visualRef.current) {
        gsap.to(visualRef.current, {
          scrollTrigger: {
            trigger: comp.current,
            start: "top top", 
            end: "+=100%", 
            scrub: 1,
            pin: true, 
            anticipatePin: 1,
          },
          xPercent: 50, 
          scale: 1.2,
          rotation: 2, 
          ease: "none" 
        });
      }

    }, comp);

    return () => ctx.revert();
  }, []);

  const headlineText = "WELCOME ITZ FIZZ";

  return (
    <div ref={comp} className="relative w-full h-screen overflow-hidden bg-neutral-900 text-white flex flex-col items-center justify-center">
      
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-neutral-900/50 to-black/80 z-0 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent_60%)] z-0 pointer-events-none"></div>

      
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <img 
          ref={visualRef}
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop" 
          alt="Luxury Sports Car"
          className="w-[80vw] max-w-5xl h-auto object-contain drop-shadow-2xl opacity-90"
          style={{ transform: 'translateX(-20%)' }} 
        />
      </div>

      
      <div className="relative z-20 text-center px-4">
        <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-[0.2em] uppercase leading-tight drop-shadow-lg perspective-[1000px]">
          {headlineText.split("").map((char, index) => (
            <span key={index} className="letter inline-block transform-style-3d">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

    
      <div ref={statsRef} className="absolute bottom-16 left-0 right-0 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 z-20 px-4">
        
       
        <div className="stat-card bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full max-w-xs md:w-64 text-center hover:bg-white/10 transition-colors duration-300">
          <h3 className="text-4xl font-bold text-indigo-400 mb-1">120%</h3>
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Growth</p>
        </div>

       
        <div className="stat-card bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full max-w-xs md:w-64 text-center hover:bg-white/10 transition-colors duration-300">
          <h3 className="text-4xl font-bold text-emerald-400 mb-1">85%</h3>
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Satisfaction</p>
        </div>

   
        <div className="stat-card bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full max-w-xs md:w-64 text-center hover:bg-white/10 transition-colors duration-300">
          <h3 className="text-4xl font-bold text-purple-400 mb-1">300K+</h3>
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Users</p>
        </div>

      </div>

   
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-60 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
      </div>

    </div>
  );
};

export default HeroSection;
