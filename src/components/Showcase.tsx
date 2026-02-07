import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const slides = [
  { id: 1, title: '工业制造', sub: 'INDUSTRIAL MANUFACTURING', desc: '产线自动化与预测维护，提升生产效率 35%，降低设备故障率 40%。', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', color: 'blue' },
  { id: 2, title: '教育科技', sub: 'EDUCATION TECHNOLOGY', desc: '知识图谱与沉浸式教学，提升学生学习兴趣 60%，记忆留存率提高 50%。', img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop', color: 'green' },
  { id: 3, title: '文化旅游', sub: 'CULTURAL TOURISM', desc: '元宇宙景区复刻，打造沉浸式旅游体验，游客满意度提升 70%。', img: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=2070&auto=format&fit=crop', color: 'pink' },
  { id: 4, title: '云引擎服务', sub: 'CLOUD ENGINE SERVICE', desc: '弹性算力底座，支持海量并发请求，服务可用性达到 99.99%。', img: '/images/solution-cloud.jpg', color: 'cyan' },
  { id: 5, title: '全域 AI 营销', sub: 'GLOBAL AI MARKETING', desc: '数据驱动精准获客，营销转化率提升 80%，获客成本降低 40%。', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2080&auto=format&fit=crop', color: 'purple' },
  { id: 6, title: 'AI 硬件定制', sub: 'AI HARDWARE CUSTOMIZATION', desc: '端侧算力芯片开发，为客户提供高性能、低功耗的 AI 硬件解决方案。', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop', color: 'orange' },
];

const Showcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".showcase-slide");
      
      const scrollTween = gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (slides.length - 1),
          end: "+=3500", // Adjust scrolling length
          onUpdate: (self: any) => {
             gsap.to("#showcase-progress", { width: Math.round(self.progress * 100) + "%", duration: 0.1, ease: "none" });
          }
        }
      });

      // Parallax for images
      slides.forEach((slide: any) => {
        const img = slide.querySelector(".showcase-img");
        if (img) {
            gsap.to(img, {
                backgroundPosition: "100% center",
                ease: "none",
                scrollTrigger: {
                    trigger: slide,
                    containerAnimation: scrollTween,
                    start: "left center",
                    end: "right center",
                    scrub: true
                }
            });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="showcase" ref={containerRef} className="relative bg-slate-950 overflow-hidden h-screen z-20">
       {/* Gradient Mask */}
       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950/90 to-transparent z-10 pointer-events-none"></div>

       {/* Static Title - Moved Down to top-32 to clear Navbar */}
       <div className="absolute top-32 left-6 md:left-20 z-10 pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
             创新案例 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">实验室</span>
          </h2>
          <p className="text-gray-400 mt-2 text-lg">向下滑动，探索未来形态 <i className="fas fa-arrow-down ml-2 animate-bounce"></i></p>
       </div>

       {/* Progress Bar */}
       <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
          <div id="showcase-progress" className="h-full bg-blue-500 w-0"></div>
       </div>

       {/* Horizontal Container */}
       <div ref={wrapperRef} className="flex flex-nowrap h-full" style={{ width: `${slides.length * 100}%` }}>
          {slides.map((slide, index) => (
             <div key={slide.id} className="showcase-slide w-screen h-full relative flex-shrink-0 border-r border-white/5 overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center showcase-img scale-110" 
                  style={{ backgroundImage: `url('${slide.img}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
                
                {/* Content Card */}
                <div className={`absolute bottom-20 left-6 md:left-20 max-w-xl bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border-l-4 border-${slide.color}-500 transform translate-y-10 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 hoverable`}>
                   <div className="text-6xl font-bold text-white/10 absolute -top-10 -right-4 select-none">{`0${index + 1}`}</div>
                   <div className={`text-${slide.color}-400 text-sm font-bold tracking-widest mb-2`}>{slide.sub}</div>
                   <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                   <p className="text-gray-200 mb-6 leading-relaxed">{slide.desc}</p>
                   <Link
                     to={`/cases?focus=${[1,5,0,3,6,4][index]}`}
                     className={`px-6 py-2 bg-white/10 hover:bg-${slide.color}-600 text-white rounded border border-white/20 transition-all hoverable`}
                   >
                      查看详情
                   </Link>
                </div>
             </div>
          ))}
       </div>
    </section>
  );
};

export default Showcase;
