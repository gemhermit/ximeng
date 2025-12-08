
import React from 'react';
import TiltCard from './TiltCard';

const Partners: React.FC = () => {
  const logos = [
     { name: '字节跳动', icon: 'fab fa-tiktok', color: 'white' },
     { name: '智谱清言', color: 'blue' },
     { name: '文心一言', icon: 'fas fa-robot', color: 'blue-400' },
     { name: '华为云', icon: 'fas fa-fan', color: 'red-500' },
     { name: '百度云', icon: 'fas fa-cloud', color: 'blue-400' },
     { name: 'AWS', icon: 'fab fa-aws', color: 'orange-400' },
     { name: 'Azure', icon: 'fab fa-microsoft', color: 'blue-400' },
     { name: '清华大学', icon: 'fas fa-university', color: 'purple-400' },
     { name: '中国科学院', icon: 'fas fa-atom', color: 'cyan-400' },
     { name: '上海交通大学', icon: 'fas fa-book-reader', color: 'red-400' },
     { name: '中国电信', icon: 'fas fa-signal', color: 'blue-500' },
     { name: '中国建筑', icon: 'fas fa-hard-hat', color: 'blue-400' }
  ];

  return (
    <section id="partners" className="py-24 md:py-32 relative bg-slate-950 border-t border-white/5">
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
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
             {logos.map((logo, i) => (
                <TiltCard key={i} className="h-24">
                   <div className="w-full h-full rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                      {logo.icon ? (
                          <i className={`${logo.icon} text-${logo.color} text-xl`}></i>
                      ) : (
                          <div className={`w-2 h-2 rounded-full bg-${logo.color}-500`}></div>
                      )}
                      <span className="font-bold text-sm tracking-wide">{logo.name}</span>
                   </div>
                </TiltCard>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Partners;
