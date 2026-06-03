
import React, { useLayoutEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema, buildOrganizationSchema, getSiteMeta } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';
import gsap from 'gsap';

const Contact: React.FC = () => {
    const containerRef = useRef(null);
    const { isEnglish, language, route } = useLanguage();
    const site = getSiteMeta(language);
    const text = isEnglish ? {
        title: 'Contact Us',
        subtitle: 'Get In Touch',
        description: 'Contact Ximeng Tech for enterprise AI solutions, agent development, cloud engine services, omnichannel AI marketing, custom AI hardware, and digital transformation consulting.',
        keywords: ['contact Ximeng Tech', 'AI solution consulting', 'agent development consulting', 'digital transformation consulting'],
        home: 'Home',
        addressTitle: 'Headquarters',
        address: <>180 Longtai Road, Xuhui District<br />Mosu Space Innovation Community, Building B, 12F<br />Shanghai, China, 200232</>,
        contactTitle: 'Contact',
        follow: 'Follow Us',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        type: 'Inquiry Type',
        options: ['Business Partnership', 'Media Interview', 'Careers', 'Other'],
        message: 'Message',
        messagePlaceholder: 'Briefly describe your project needs...',
        submit: 'Send Message',
    } : {
        title: '联系我们',
        subtitle: 'Get In Touch',
        description: '联系羲梦科技，咨询企业 AI 解决方案、智能体搭建、云引擎服务、全域 AI 营销、AI 硬件定制和数字化转型服务。',
        keywords: ['联系羲梦科技', 'AI 解决方案咨询', '智能体搭建咨询', '数字化转型咨询'],
        home: '首页',
        addressTitle: '总部地址',
        address: <>上海市徐汇区龙台路180号<br />“模速空间”创新生态社区 B座 12F<br />China, 200232</>,
        contactTitle: '联络方式',
        follow: '关注我们',
        name: '姓名',
        namePlaceholder: '您的称呼',
        email: '邮箱',
        type: '咨询类型',
        options: ['业务合作', '媒体采访', '加入我们', '其他'],
        message: '需求描述',
        messagePlaceholder: '请简述您的项目需求...',
        submit: '发送消息',
    };

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
            <Seo
                title={text.title}
                description={text.description}
                path="/contact"
                keywords={text.keywords}
                structuredData={[
                    buildBreadcrumbSchema([
                        { name: text.home, path: route('/') },
                        { name: text.title, path: route('/contact') },
                    ]),
                    {
                        ...buildOrganizationSchema(language),
                        contactPoint: {
                            '@type': 'ContactPoint',
                            telephone: site.phone,
                            email: site.email,
                            contactType: 'sales',
                            availableLanguage: ['zh-CN', 'en'],
                        },
                    },
                ]}
            />
            <PageHeader title={text.title} subtitle={text.subtitle} gradient="from-blue-400 via-indigo-500 to-purple-500" />
            
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Info */}
                    <div className="contact-info lg:w-1/3 space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{text.addressTitle}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {text.address}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{text.contactTitle}</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-3"><i className="fas fa-envelope text-blue-500"></i> echo@ximengtech.cn</li>
                                <li className="flex items-center gap-3"><i className="fas fa-phone text-blue-500"></i> +86 173 1432 4752</li>
                            </ul>
                        </div>
                        <div className="pt-6 border-t border-white/10">
                            <h4 className="font-bold mb-4">{text.follow}</h4>
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
                                    <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">{text.name}</label>
                                    <input type="text" className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder={text.namePlaceholder} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">{text.email}</label>
                                    <input type="email" className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="name@company.com" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">{text.type}</label>
                                <select className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                                    {text.options.map((option) => (
                                        <option key={option} className="bg-slate-900">{option}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">{text.message}</label>
                                <textarea rows={4} className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder={text.messagePlaceholder}></textarea>
                            </div>

                            <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hoverable mt-4 shadow-lg shadow-blue-900/50">
                                {text.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
