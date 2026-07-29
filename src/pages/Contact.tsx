import React, { useLayoutEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema, buildOrganizationSchema, getSiteMeta } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';
import { translate } from '@/lib/translations';
import gsap from 'gsap';

const string = (language: 'zh' | 'en', path: string) => translate(language, path) as string;
const strings = (language: 'zh' | 'en', path: string) => translate(language, path) as string[];

const Contact: React.FC = () => {
    const containerRef = useRef(null);
    const { language, route } = useLanguage();
    const site = getSiteMeta(language);
    const t = (path: string) => string(language, path);
    const keywords = strings(language, 'contact.keywords');
    const options = strings(language, 'contact.options');
    const addressLines = t('contact.address').split('\n');

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
                title={t('contact.title')}
                description={t('contact.description')}
                path="/contact"
                keywords={keywords}
                structuredData={[
                    buildBreadcrumbSchema([
                        { name: t('contact.home'), path: route('/') },
                        { name: t('contact.title'), path: route('/contact') },
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
            <PageHeader title={t('contact.title')} subtitle={t('contact.subtitle')} gradient="from-blue-400 via-indigo-500 to-purple-500" />

            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Info */}
                    <div className="contact-info lg:w-1/3 space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{t('contact.addressTitle')}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {addressLines.map((line, i) => (
                                  <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
                                ))}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{t('contact.contactTitle')}</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-3"><i className="fas fa-envelope text-blue-500"></i> echo@ximengtech.cn</li>
                                <li className="flex items-center gap-3"><i className="fas fa-phone text-blue-500"></i> +86 173 1432 4752</li>
                            </ul>
                        </div>
                        <div className="pt-6 border-t border-white/10">
                            <h4 className="font-bold mb-4">{t('contact.follow')}</h4>
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
                                    <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">{t('contact.name')}</label>
                                    <input type="text" className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder={t('contact.namePlaceholder')} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">{t('contact.email')}</label>
                                    <input type="email" className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="name@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">{t('contact.type')}</label>
                                <select className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                                    {options.map((option) => (
                                        <option key={option} className="bg-slate-900">{option}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">{t('contact.message')}</label>
                                <textarea rows={4} className="w-full bg-black/20 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder={t('contact.messagePlaceholder')}></textarea>
                            </div>

                            <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hoverable mt-4 shadow-lg shadow-blue-900/50">
                                {t('contact.submit')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
