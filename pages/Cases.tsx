
import React, { useLayoutEffect, useRef, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const gsap = (window as any).gsap;

const cases = [
    {
        title: '城市大脑 v3.0',
        cat: 'SMART CITY',
        img: '/images/case-city.jpg',
        stats: '拥堵率 -25%',
        desc: '以交通、安防、环保为核心的城市级数据中枢，驱动实时调度与决策。',
        highlights: ['多源数据融合', '毫秒级事件响应', '可视化指挥驾驶舱']
    },
    {
        title: '柔性生产协作臂',
        cat: 'INDUSTRY 4.0',
        img: '/images/case-arm.jpg',
        stats: '效率 +40%',
        desc: '通过人机协作与动态工艺规划，实现柔性产线快速切换与节拍优化。',
        highlights: ['安全域感知', '低延迟力控', '无代码工艺编排']
    },
    {
        title: 'AI 蛋白质折叠',
        cat: 'BIOTECH',
        img: '/images/case-bio.jpg',
        stats: '研发周期 -60%',
        desc: '深度学习预测结构与结合位点，显著缩短药物先导筛选周期。',
        highlights: ['结构预测', '分子对接', '高通量筛选']
    },
    {
        title: '零碳液冷数据中心',
        cat: 'GREEN TECH',
        img: '/images/case-data.jpg',
        stats: 'PUE 1.09',
        desc: '全液冷与能耗智能调度，助力绿色算力与低碳运维。',
        highlights: ['浸没式液冷', '能效调度', '碳排追踪']
    },
    {
        title: '“曦光” NPU 芯片',
        cat: 'HARDWARE',
        img: '/images/case-chip.jpg',
        stats: '20 TOPS/W',
        desc: '针对边缘推理优化的新一代神经网络处理器，兼顾性能与能效。',
        highlights: ['稀疏计算', '片上互联', 'AI 指令集']
    },
    {
        title: '元宇宙历史课堂',
        cat: 'EDUCATION',
        img: '/images/case-edu.jpg',
        stats: '互动率 +80%',
        desc: '沉浸式多角色课堂，提升历史学习的参与度与知识记忆。',
        highlights: ['沉浸交互', '实时协作', '教学分析']
    },
    {
        title: '无人驾驶物流车',
        cat: 'LOGISTICS',
        img: '/images/case-car.jpg',
        stats: '成本 -45%',
        desc: '园区级 L4 场景落地，闭环运营与调度，显著降低人力与能耗。',
        highlights: ['多车协同', '高精地图', '任务编排']
    },
    {
        title: '深海探测机器人',
        cat: 'OCEAN',
        img: '/images/case-ocean.jpg',
        stats: '深度 10000m',
        desc: '耐高压自适应推进与声学勘测，支持极端海洋环境长期任务。',
        highlights: ['耐压机身', '自主航行', '声呐成像']
    }
];

const Cases: React.FC = () => {
    const containerRef = useRef(null);
    const [activeCat, setActiveCat] = useState<string>('ALL');
    const [selected, setSelected] = useState<any>(null);
    const location = useLocation();

    const cats = useMemo(() => {
        const set = new Set<string>(['ALL']);
        cases.forEach(c => set.add(c.cat));
        return Array.from(set);
    }, []);

    const filtered = useMemo(() => {
        if (activeCat === 'ALL') return cases;
        return cases.filter(c => c.cat === activeCat);
    }, [activeCat]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".case-card", {
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
        const params = new URLSearchParams(location.search);
        const focus = params.get('focus');
        if (focus) {
            const idx = parseInt(focus, 10);
            if (!Number.isNaN(idx) && cases[idx]) {
                setSelected(cases[idx]);
            }
        } else if (location.hash) {
            const cat = location.hash.replace('#','');
            if (cats.includes(cat)) {
                setActiveCat(cat);
            }
        }
    }, [location, cats]);

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-950">
            <PageHeader title="创新案例实验室" subtitle="Innovation Lab" gradient="from-purple-400 via-pink-400 to-red-400" />
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-wrap gap-3 mb-10">
                    {cats.map(c => (
                        <button
                            key={c}
                            onClick={() => setActiveCat(c)}
                            className={`px-3 py-1 rounded-full text-xs font-mono border ${activeCat === c ? 'bg-blue-500 text-white border-blue-500' : 'bg-white/5 text-blue-300 border-white/10 hover:bg-white/10'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filtered.map((item, idx) => (
                        <div key={idx} className="case-card">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
                                <div className="grid grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-2 h-56 md:h-full">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="md:col-span-3 p-6 flex flex-col gap-3">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-blue-400 font-bold tracking-widest">{item.cat}</div>
                                            <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs font-mono border border-white/10">{item.stats}</div>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                                        <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.highlights.map((h: string, i: number) => (
                                                <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-slate-200 text-xs border border-white/10">{h}</span>
                                            ))}
                                        </div>
                                        <div className="mt-2">
                                            <button onClick={() => setSelected(item)} className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600">查看详情</button>
                                        </div>
                                    </div>
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
                                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-blue-400 font-bold tracking-widest">{selected.cat}</div>
                                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs font-mono border border-white/10">{selected.stats}</div>
                                </div>
                                <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{selected.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {selected.highlights.map((h: string, i: number) => (
                                        <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-slate-200 text-xs border border-white/10">{h}</span>
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

export default Cases;
