
import React from 'react';
import { Link } from 'react-router-dom';
import TiltCard from './TiltCard';

const modules = [
  {
    id: 'module-1',
    icon: 'fa-industry',
    color: 'blue',
    title: '工业制造 Agent',
    desc: '面向产线的智能助手，连接设备与业务。',
    detail: '支持设备监测、工单流转、质量追溯与能耗分析，帮助工厂提升产能、降低停机、优化成本。',
    anchor: 'industrial'
  },
  {
    id: 'module-2',
    icon: 'fa-graduation-cap',
    color: 'green',
    title: '科技教育平台',
    desc: '一体化教研、教学、评测平台。',
    detail: '提供课程管理、题库与评测、班级协作与家校沟通，支持多端使用，助力学校数字化教改。',
    anchor: 'education'
  },
  {
    id: 'module-3',
    icon: 'fa-landmark',
    color: 'pink',
    title: '文旅文化',
    desc: '面向景区与博物馆的数字化运营。',
    detail: '提供导览、预约与入园、内容讲解与活动运营，提升到馆转化与体验满意度。',
    anchor: 'culture'
  },
  {
    id: 'module-4',
    icon: 'fa-cloud',
    color: 'cyan',
    title: '云引擎服务',
    desc: '稳定、可扩展的应用托管与运维。',
    detail: '涵盖容器编排、弹性扩缩容、日志与告警、灰度发布与回滚，帮助业务安全可靠上线。',
    anchor: 'cloud'
  },
  {
    id: 'module-5',
    icon: 'fa-bullseye',
    color: 'purple',
    title: '全域 AI 营销',
    desc: '数据驱动的内容与投放协同。',
    detail: '整合用户数据与渠道数据，生成素材、智能分发与效果评估，提升转化并降低获客成本。',
    anchor: 'marketing'
  },
  {
    id: 'module-6',
    icon: 'fa-microchip',
    color: 'orange',
    title: 'AI 硬件定制',
    desc: '按需定制边缘计算硬件与固件。',
    detail: '围绕视觉与语音等场景，提供板卡选型、算法适配与低功耗优化，快速落地端侧智能。',
    anchor: 'hardware'
  },
];

const Modules: React.FC = () => {
  return (
    <section id="modules" className="py-24 md:py-32 relative bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">全栈解决方案</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            六大核心引擎，驱动企业全场景数字化转型。我们不仅提供技术，更提供面向未来的生存能力。
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
                        {mod.detail}
                    </p>
                    {/* Mobile Only Summary (always visible) */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 md:hidden block group-hover:text-white/90">
                        {mod.detail}
                    </p>

                    <Link
                      to={`/solutions#${mod.anchor}`}
                      className="flex items-center text-white font-bold text-sm tracking-wide mt-2 hoverable"
                    >
                      了解更多 <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
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
