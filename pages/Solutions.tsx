
import React, { useLayoutEffect, useRef, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';

const gsap = (window as any).gsap;

const solutionsData = [
    {
        id: 'industrial',
        title: '工业制造智能体',
        subtitle: '工业制造',
        desc: '面向工业的智能助手，为工业生产提供智能化解决方案。',
        features: ['设备监测', '工单审核', '质量追溯', '能耗分析'],
        icon: 'fa-industry',
        color: 'blue',
        image: '/images/solution-industrial.jpg',
        metrics: ['提升产能', '提升人效', '优化成本']
    },
    {
        id: 'education',
        title: '科技教育平台',
        subtitle: '教育科技',
        desc: '一体化教研、教学、评测平台。',
        features: ['课程管理', '题库与评测', '班级协作', '教师培训'],
        icon: 'fa-graduation-cap',
        color: 'green',
        image: '/images/solution-education.jpg',
        metrics: ['提升参与度', '提高教学质量', '丰富教学成果']
    },
    {
        id: 'culture',
        title: 'AI文旅文化',
        subtitle: '文旅文化',
        desc: '面向景区与博物馆等文娱方向的数字化服务。',
        features: ['AI数字人', 'AI文旅视频', 'AI内容讲解', 'AI活动运营'],
        icon: 'fa-landmark',
        color: 'pink',
        image: '/images/solution-culture.jpg',
        metrics: ['提升到馆转化', '丰富体验', '数据化运营']
    },
    {
        id: 'cloud',
        title: '云引擎服务',
        subtitle: '云引擎服务',
        desc: '牵头火山引擎和华为提出并落地国内首套Hiagent基于昇腾裸金属服务器联合解决方案。',
        features: ['容器编排', '弹性扩缩容', '日志告警', '灰度发布'],
        icon: 'fa-cloud',
        color: 'cyan',
        image: '/images/solution-cloud.jpg',
        metrics: ['可靠上线', '弹性扩展', '观察与告警']
    },
    {
        id: 'marketing',
        title: '全域 AI 营销',
        subtitle: '全域 AI 营销',
        desc: '数据驱动的内容与投放协同。',
        features: ['素材生成', '智能分发', '效果评估', '数据整合'],
        icon: 'fa-bullseye',
        color: 'purple',
        image: '/images/solution-marketing.jpg',
        metrics: ['提升转化', '降低成本', '统一数据']
    },
    {
        id: 'hardware',
        title: 'AI 硬件定制',
        subtitle: 'AI 硬件定制',
        desc: '按需定制边缘计算硬件与固件。',
        features: ['AI鼠标', 'AI陪伴', 'AI学习机', 'AI开发套件'],
        icon: 'fa-microchip',
        color: 'orange',
        image: '/images/solution-hardware.jpg',
        metrics: ['快速落地', '自定义模具', '场景定制']
    }
];

const Solutions: React.FC = () => {
    const containerRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState<string>('全部');
    const [selected, setSelected] = useState<any>(null);
    const location = useLocation();

    const filters = useMemo(() => {
        const set = new Set<string>(['全部']);
        solutionsData.forEach(s => set.add(s.title));
        return Array.from(set);
    }, []);

    const filtered = useMemo(() => {
        if (activeFilter === '全部') return solutionsData;
        return solutionsData.filter(s => s.title === activeFilter);
    }, [activeFilter]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".anim-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 0);
            }
        }
    }, [location]);

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-950">
            <PageHeader title="全栈解决方案" subtitle="Solutions Matrix" />
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-wrap gap-3 mb-10">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-3 py-1 rounded-full text-xs font-mono border ${activeFilter === f ? 'bg-blue-500 text-white border-blue-500' : 'bg-white/5 text-blue-300 border-white/10 hover:bg-white/10'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="space-y-20">
                    {filtered.map((item, index) => (
                        <div key={item.id} id={item.id} className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center anim-item ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2">
                                <TiltCard className="h-[300px] md:h-[400px]">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className={`absolute inset-0 bg-gradient-to-t from-${item.color}-900/80 to-transparent mix-blend-multiply`}></div>
                                        <div className="absolute top-4 left-4 p-3 bg-slate-950/50 backdrop-blur-md rounded-lg border border-white/10">
                                            <i className={`fas ${item.icon} text-2xl text-${item.color}-400`}></i>
                                        </div>
                                    </div>
                                </TiltCard>
                            </div>

                            <div className="w-full md:w-1/2 space-y-6">
                                <div className={`text-${item.color}-400 font-bold tracking-widest text-sm`}>{item.title}</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">{item.title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>

                                <div className="flex flex-wrap gap-2">
                                    {item.metrics?.map((m: string, i: number) => (
                                        <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-slate-200 text-xs border border-white/10">{m}</span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    {item.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-${item.color}-500 shadow-[0_0_8px_currentColor]`}></div>
                                            <span className="text-sm font-medium text-gray-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <button onClick={() => setSelected(item)} className="mt-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600">了解更多</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div className="fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-black/60" onClick={() => setSelected(null)}></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="h-56 md:h-full">
                                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div className={`text-${selected.color}-400 font-bold tracking-widest text-sm`}>{selected.title}</div>
                                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs font-mono border border-white/10">方案详情</div>
                                </div>
                                <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{selected.desc}</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {selected.features.map((f: string, i: number) => (
                                        <div key={i} className="flex items-center gap-2 text-slate-200 text-sm">
                                            <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${selected.color}-500`}></span>
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {selected.metrics?.map((m: string, i: number) => (
                                        <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-slate-200 text-xs border border-white/10">{m}</span>
                                    ))}
                                </div>
                                <div className="mt-2 flex justify-end">
                                    <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-lg bg-white/10 text-slate-200 text-sm border border-white/20 hover:bg-white/20">关闭</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="h-20"></div>
        </div>
    );
};

export default Solutions;
