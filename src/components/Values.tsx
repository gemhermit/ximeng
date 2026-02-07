import React, { useEffect } from 'react';
import TiltCard from './TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Values: React.FC = () => {
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
                <h2 className="text-4xl font-bold mb-6">以技术<br/><span className="text-blue-500">赋能万物</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8">我们的愿景是成为全球值得信赖的数字化架构师。无论是在工厂、学校还是景区，我们致力于通过前沿技术解决最复杂的挑战。</p>
                <button className="text-white hover:text-blue-400 hover:underline transition-colors hoverable flex items-center gap-2">

                </button>
             </div>
             
             <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                   { icon: 'fa-lightbulb', color: 'yellow', title: '极致创新', desc: '不满足于微小的改进，我们追求颠覆性的突破。', bg: 'amber' },
                   { icon: 'fa-users', color: 'blue', title: '客户成就', desc: '客户的成功是我们唯一的 KPI，其余都是空谈。', bg: 'blue' },
                   { icon: 'fa-leaf', color: 'green', title: '绿色计算', desc: '算力服务将使用绿色清洁能源', bg: 'emerald' },
                   { icon: 'fa-hand-holding-heart', color: 'red', title: '开源精神', desc: '拥抱开源社区，贡献核心代码，促进技术普惠。', bg: 'rose' }
                ].map((item, idx) => (
                   <TiltCard key={idx} className="h-[250px]">
                      <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                         <div className={`absolute inset-0 bg-gradient-to-br from-${item.bg}-600 via-${item.bg}-700 to-${item.bg}-800 opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-out z-0`}></div>
                         <div className="relative z-10 p-8 h-full flex flex-col justify-center transition-transform duration-500 group-hover:-translate-y-2">
                            <i className={`fas ${item.icon} text-4xl text-${item.color}-400 mb-6 group-hover:text-white transition-colors`}></i>
                            <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                            <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">{item.desc}</p>
                         </div>
                      </div>
                   </TiltCard>
                ))}
                
                <div className="col-span-1 sm:col-span-2 glass-panel border border-white/10 bg-white/5 p-8 rounded-xl mt-4 flex justify-between items-center text-center">
                    <div>
                        <div className="text-3xl font-bold font-mono counter" data-target="100">0</div>
                        <div className="text-xs text-gray-500 mt-1">累计案例</div>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div>
                        <div className="text-3xl font-bold font-mono counter" data-target="15">0</div>
                        <div className="text-xs text-gray-500 mt-1">服务企业</div>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div>
                        <div className="text-3xl font-bold font-mono">500</div>
                        <div className="text-xs text-gray-500 mt-1">合作伙伴</div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Values;