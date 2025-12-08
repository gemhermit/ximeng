
import React, { useLayoutEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

const gsap = (window as any).gsap;

const Contact: React.FC = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });
            tl.from(".contact-info", {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(".contact-form", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-950">
            <PageHeader title="联系我们" subtitle="Get In Touch" gradient="from-blue-400 via-indigo-500 to-purple-500" />
            
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Info */}
                    <div className="contact-info lg:w-1/3 space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">总部地址</h3>
                            <p className="text-gray-400 leading-relaxed">
                                上海市徐汇区龙台路180号<br />
                                “模速空间”创新生态社区 B座 12F<br />
                                China, 200232
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">联络方式</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-3"><i className="fas fa-envelope text-blue-500"></i> a2829879830@gmail.com</li>
                                <li className="flex items-center gap-3"><i className="fas fa-phone text-blue-500"></i> +86 185 0355 6950</li>
                            </ul>
                        </div>
                        <div className="pt-6 border-t border-white/10">
                            <h4 className="font-bold mb-4">关注我们</h4>
                            <div className="flex gap-4">
                                {['twitter', 'linkedin-in', 'github', 'weixin'].map(icon => (
                                    <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-white hoverable">
                                        <i className={`fab fa-${icon}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="contact-form lg:w-2/3">
                        <form className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 space-y-8 backdrop-blur-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">姓名</label>
                                    <input type="text" className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="您的称呼" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">邮箱</label>
                                    <input type="email" className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="name@company.com" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">咨询类型</label>
                                <select className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                                    <option className="bg-slate-900">业务合作</option>
                                    <option className="bg-slate-900">媒体采访</option>
                                    <option className="bg-slate-900">加入我们</option>
                                    <option className="bg-slate-900">其他</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">需求描述</label>
                                <textarea rows={4} className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="请简述您的项目需求..."></textarea>
                            </div>

                            <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hoverable mt-4 shadow-lg shadow-blue-900/50">
                                发送消息
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
