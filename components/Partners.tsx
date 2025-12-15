
import React, { useRef, useEffect, useMemo } from 'react';
import TiltCard from './TiltCard';

const Partners: React.FC = () => {
  const logosRow1 = [
    { name: '字节跳动', src: '/images/partners/bytedance.png' },
    { name: 'AWS', src: '/images/partners/aws.png' },
    { name: 'Azure', src: '/images/partners/azure.png' },
    { name: '华为云', src: '/images/partners/huawei.png' },
    { name: '百度云', src: '/images/partners/4.png' },
    { name: '清华大学', src: '/images/partners/5.png' },
    { name: '中国电信', src: '/images/partners/9.png' },
  ];

  const logosRow2 = [
    { name: '上海交通大学', src: '/images/partners/sjtu.png' },
    { name: '中国科学院', src: '/images/partners/7.png' },
    { name: '中国建筑', src: '/images/partners/12.png' },
    { name: '阿里云', src: '/images/partners/11.png' },
    { name: '腾讯云', src: '/images/partners/tencent.png' },
    { name: '科大讯飞', src: '/images/partners/2.png' },
    { name: '华中科技大学', src: '/images/partners/14.png' },
  ];

  const rowRef1 = useRef<HTMLDivElement>(null);
  const rowRef2 = useRef<HTMLDivElement>(null);

  const duplicated1 = useMemo(() => [...logosRow1, ...logosRow1], [logosRow1]);
  const duplicated2 = useMemo(() => [...logosRow2, ...logosRow2], [logosRow2]);

  return (
    <section id="partners" className="py-24 md:py-32 relative bg-slate-950 border-t border-white/5">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 -z-10"></div>
       
       <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">合作案例</h2>
             <div className="flex items-center justify-center gap-4 text-gray-400 text-sm md:text-lg">
                <span className="h-px w-8 bg-blue-500/50"></span>
                <span>共筑智慧新生态 共迎未来新机遇</span>
                <span className="h-px w-8 bg-blue-500/50"></span>
             </div>
          </div>
          <div className="space-y-8">
            <div ref={rowRef1} className="group overflow-hidden">
              <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
                {duplicated1.map((logo, i) => (
                  <TiltCard key={`r1-${i}`} className="w-[280px] h-40 shrink-0">
                    <div className="w-full h-full rounded-xl bg-white border border-gray-100 flex items-center justify-center transition-all p-6 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] duration-300">
                      <img src={logo.src || '/images/logo.svg'} alt={logo.name} className="w-full h-full object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
            <div ref={rowRef2} className="group overflow-hidden">
              <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' as any }}>
                {duplicated2.map((logo, i) => (
                  <TiltCard key={`r2-${i}`} className="w-[280px] h-40 shrink-0">
                    <div className="w-full h-full rounded-xl bg-white border border-gray-100 flex items-center justify-center transition-all p-6 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] duration-300">
                      <img src={logo.src || '/images/logo.svg'} alt={logo.name} className="w-full h-full object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};

export default Partners;
