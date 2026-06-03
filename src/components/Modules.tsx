
import React from 'react';
import { Link } from 'react-router-dom';
import TiltCard from './TiltCard';
import { getSolutionsData } from '@/data/solutions';
import { useLanguage } from '@/lib/i18n';

const Modules: React.FC = () => {
  const { isEnglish, language, route } = useLanguage();
  const modules = getSolutionsData(language);
  const text = isEnglish ? {
    title: 'Full-Stack Solutions',
    desc: 'Six core engines powering all-scenario digital transformation. We deliver not only technology, but the operational capability to grow into the future.',
    more: 'Learn More',
  } : {
    title: '全栈解决方案',
    desc: '六大核心引擎，驱动企业全场景数字化转型。我们不仅提供技术，更提供面向未来的生存能力。',
    more: '了解更多',
  };

  return (
    <section id="modules" className="py-24 md:py-32 relative bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{text.title}</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            {text.desc}
          </p>
        </div>
        
        {/* Adjusted Grid: grid-cols-1 on mobile (important fix), grid-cols-2 on tablet, grid-cols-3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {modules.map((mod) => (
            <TiltCard key={mod.id} className="h-auto min-h-[380px] md:h-[420px]">
              <div className={`relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm`}>
                {/* Gradient Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${mod.color}-900 via-${mod.color}-800 to-${mod.color}-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-out z-0`}></div>
                
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-${mod.color}-400 group-hover:bg-white group-hover:text-${mod.color}-600 transition-colors shadow-lg`}>
                      <i className={`fas ${mod.icon} text-2xl`}></i>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">{mod.title}</h3>
                  <p className={`text-gray-400 text-sm group-hover:text-${mod.color}-100 transition-colors mb-4`}>{mod.desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/10 group-hover:border-white/20">
                    <p className={`text-sm text-${mod.color}-50/80 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bottom-12 left-6 right-6 md:static md:opacity-100 md:block hidden md:group-hover:text-white`}>
                        {mod.overview}
                    </p>
                    {/* Mobile Only Summary (always visible) */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 md:hidden block group-hover:text-white/90">
                        {mod.overview}
                    </p>

                    <Link
                      to={route(`/solutions/${mod.id}`)}
                      className="flex items-center text-white font-bold text-sm tracking-wide mt-2 hoverable"
                    >
                      {text.more} <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
