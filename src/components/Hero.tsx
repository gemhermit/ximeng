
import React, { useEffect, useRef } from 'react';
import CosmicRing from './CosmicRing';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".reveal-bg", {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        delay: 0.5
      })
      .from(".reveal-heading", { 
        y: 100, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 1, 
        ease: "power3.out",
      }, "-=1.0")
      .from(".reveal-text", { 
        y: 20, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.8 
      }, "-=0.6");
      
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={comp}>
      
      {/* 1. Full Screen Interactive Background - No Boundaries */}
      <div className="absolute inset-0 z-0 reveal-bg">
         <CosmicRing />
         {/* Gradient Overlay to ensure text readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent pointer-events-none"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* Text Content */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left relative">
          

          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter mix-blend-lighten">
            <div className="overflow-hidden"><span className="block reveal-heading text-white">重塑</span></div>
            <div className="overflow-hidden">
                <span className="block reveal-heading bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text filter drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    行业边界
                </span>
            </div>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed reveal-text mx-auto lg:mx-0 font-light tracking-wide">
            在无界的数字宇宙中，我们构建底层的数字基础设施。<br/>
            打破物理与虚拟的隔阂，让想象力在千行百业落地生根。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 reveal-text justify-center lg:justify-start">
            <Link to="/solutions">
                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-all hoverable shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1 w-full sm:w-auto border border-blue-400/20">
                探索方案
                </button>
            </Link>
            <Link to="/cases">
                <button className="px-8 py-4 border border-white/20 text-white rounded hover:bg-white/10 transition-all hoverable flex items-center justify-center gap-3 group w-full sm:w-auto backdrop-blur-sm">
                <span>观看演示</span> 
                <i className="fas fa-play text-xs group-hover:translate-x-1 transition-transform text-blue-400"></i>
                </button>
            </Link>
          </div>

          {/* Decorative Stats */}
          <div className="pt-12 flex gap-8 justify-center lg:justify-start opacity-60 reveal-text">
             <div>
                <div className="text-2xl font-bold font-mono">1.2M+</div>
                <div className="text-xs uppercase tracking-widest">Nodes Connected</div>
             </div>
             <div className="w-px h-10 bg-white/20"></div>
             <div>
                <div className="text-2xl font-bold font-mono">0.02s</div>
                <div className="text-xs uppercase tracking-widest">Latency</div>
             </div>
          </div>
        </div>

        {/* Right side is now empty to let the background shine, or can be used for subtle floating elements */}
        <div className="hidden lg:block relative h-full">
            {/* Optional: Add floating data points if needed, but keeping it clean for the effect */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
