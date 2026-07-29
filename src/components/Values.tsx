import React, { useEffect } from 'react';
import TiltCard from './TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/lib/i18n';
import { translate } from '@/lib/translations';

const string = (language: 'zh' | 'en', path: string) => translate(language, path) as string;
const strings = (language: 'zh' | 'en', path: string) => translate(language, path) as string[];

type ValueItem = { title: string; desc: string };

const valuesIcon = ['fa-lightbulb', 'fa-users', 'fa-leaf', 'fa-hand-holding-heart'];
const valuesColor = ['yellow', 'blue', 'green', 'red'];
const valuesBg = ['amber', 'blue', 'emerald', 'rose'];

const Values: React.FC = () => {
  const { language } = useLanguage();
  const t = (path: string) => string(language, path);
  const valueItems = strings(language, 'values.items') as unknown as ValueItem[];
  const statLabels = strings(language, 'values.stats');
  const valuesColorMap: Record<string, { gradient: string; text: string }> = {
    yellow: { gradient: 'from-amber-600 via-amber-700 to-amber-800', text: 'text-yellow-400' },
    blue: { gradient: 'from-blue-600 via-blue-700 to-blue-800', text: 'text-blue-400' },
    green: { gradient: 'from-emerald-600 via-emerald-700 to-emerald-800', text: 'text-green-400' },
    red: { gradient: 'from-rose-600 via-rose-700 to-rose-800', text: 'text-red-400' },
  };

  useEffect(() => {
    gsap.utils.toArray('.counter').forEach((counter: any) => {
      const target = parseFloat(counter.getAttribute('data-target'));
      gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        scrollTrigger: { trigger: counter, start: "top 85%" },
        snap: { innerHTML: 1 },
        onUpdate: function(this: any) {
            if(this.targets()[0]) this.targets()[0].innerHTML = Math.round(this.targets()[0].innerHTML);
        }
      });
    });
  }, []);

  return (
    <section id="values" className="py-32 relative border-t border-white/5 bg-slate-950">
       <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
             <div className="md:w-1/3 sticky top-32 self-start">
                <h2 className="text-4xl font-bold mb-6">{t('values.headingTop')}<br/><span className="text-blue-500">{t('values.headingAccent')}</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8">{t('values.desc')}</p>
                <button className="text-white hover:text-blue-400 hover:underline transition-colors hoverable flex items-center gap-2">

                </button>
             </div>

             <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {valueItems.map((item, idx) => {
                   const color = valuesColor[idx] ?? 'blue';
                   const bg = valuesBg[idx] ?? 'blue';
                   const vc = valuesColorMap[color] ?? valuesColorMap.blue;
                   return (
                   <TiltCard key={idx} className="h-[250px]">
                      <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                         <div className={`absolute inset-0 bg-gradient-to-br ${vc.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-out z-0`}></div>
                         <div className="relative z-10 p-8 h-full flex flex-col justify-center transition-transform duration-500 group-hover:-translate-y-2">
                            <i className={`fas ${valuesIcon[idx] ?? 'fa-lightbulb'} text-4xl ${vc.text} mb-6 group-hover:text-white transition-colors`}></i>
                            <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                            <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">{item.desc}</p>
                         </div>
                      </div>
                   </TiltCard>
                   );
                })}

                <div className="col-span-1 sm:col-span-2 glass-panel border border-white/10 bg-white/5 p-8 rounded-xl mt-4 flex justify-between items-center text-center">
                    <div>
                        <div className="text-3xl font-bold font-mono counter" data-target="128">0</div>
                        <div className="text-xs text-gray-500 mt-1">{statLabels[0]}</div>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div>
                        <div className="text-3xl font-bold font-mono counter" data-target="23">0</div>
                        <div className="text-xs text-gray-500 mt-1">{statLabels[1]}</div>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div>
                        <div className="text-3xl font-bold font-mono counter" data-target="537">0</div>
                        <div className="text-xs text-gray-500 mt-1">{statLabels[2]}</div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Values;
