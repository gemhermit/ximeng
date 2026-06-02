import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { stripLanguagePrefix, useLanguage } from '@/lib/i18n';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isEnglish, route, switchTo } = useLanguage();
  const isHome = stripLanguagePrefix(location.pathname) === '/';
  const lang = isEnglish ? 'en' : 'zh';
  const text = {
    zh: {
      brand: '羲梦科技',
      home: '首页',
      solutions: '核心业务',
      cases: '创新案例',
      careers: '加入我们',
      contact: '立即咨询',
      mobileSolutions: '核心解决方案',
      language: 'EN',
      mega: [
        {
          title: '实体产业',
          dot: 'bg-blue-500',
          items: [
            { href: '/solutions#industrial', color: 'blue', title: '工业制造', desc: '产线自动化与预测维护' },
            { href: '/solutions#education', color: 'green', title: '教育科技', desc: '知识图谱与沉浸式教学' },
          ],
        },
        {
          title: '沉浸体验',
          dot: 'bg-cyan-500',
          items: [
            { href: '/solutions#culture', color: 'pink', title: '文化旅游', desc: '元宇宙景区复刻' },
            { href: '/solutions#cloud', color: 'cyan', title: '云引擎服务', desc: '弹性算力底座' },
          ],
        },
        {
          title: '智能营销',
          dot: 'bg-purple-500',
          items: [
            { href: '/solutions#marketing', color: 'purple', title: '全域 AI 营销', desc: '数据驱动精准获客' },
            { href: '/solutions#hardware', color: 'orange', title: 'AI 硬件定制', desc: '端侧算力芯片开发' },
          ],
        },
      ],
    },
    en: {
      brand: 'Ximeng Tech',
      home: 'Home',
      solutions: 'Solutions',
      cases: 'Cases',
      careers: 'Careers',
      contact: 'Contact',
      mobileSolutions: 'Core Solutions',
      language: '中文',
      mega: [
        {
          title: 'Real Economy',
          dot: 'bg-blue-500',
          items: [
            { href: '/solutions#industrial', color: 'blue', title: 'Industrial Manufacturing', desc: 'Production automation and predictive maintenance' },
            { href: '/solutions#education', color: 'green', title: 'Education Technology', desc: 'Knowledge graphs and immersive learning' },
          ],
        },
        {
          title: 'Immersive Experience',
          dot: 'bg-cyan-500',
          items: [
            { href: '/solutions#culture', color: 'pink', title: 'Cultural Tourism', desc: 'Digital venues and visitor experiences' },
            { href: '/solutions#cloud', color: 'cyan', title: 'Cloud Engine Services', desc: 'Elastic computing foundation' },
          ],
        },
        {
          title: 'Intelligent Marketing',
          dot: 'bg-purple-500',
          items: [
            { href: '/solutions#marketing', color: 'purple', title: 'Omnichannel AI Marketing', desc: 'Data-driven customer acquisition' },
            { href: '/solutions#hardware', color: 'orange', title: 'Custom AI Hardware', desc: 'Edge AI product engineering' },
          ],
        },
      ],
    },
  }[lang];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Determine navbar style: 
  // On Home: Transparent at top, Pill-shape when scrolled.
  // On Sub-pages: Always Pill-shape (Solid) to avoid overlapping content issues.
  const useSolidStyle = isScrolled || !isHome;

  const containerClasses = `
    fixed z-50 transition-all duration-500 ease-in-out
    ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}
    ${useSolidStyle
      ? 'top-2 left-2 right-2 md:top-4 md:left-1/2 md:-translate-x-1/2 md:w-3/4 max-w-5xl rounded-2xl md:rounded-full bg-slate-950/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
      : 'top-0 left-0 w-full bg-transparent border-b border-white/5'}
  `;

  const navLinkClasses = "relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2 group hoverable";
  const underlineClasses = "absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 group-hover:w-full";

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
        <header className={containerClasses}>
        <div className={`px-4 md:px-8 ${useSolidStyle ? 'h-16' : 'h-20'} flex justify-between items-center transition-all duration-300`}>
            
            <Link to={route('/')} className="flex items-center gap-2 text-xl font-bold tracking-tighter hoverable z-50" onClick={closeMenu}>
               <img src="/images/logo.png" alt={text.brand} className="h-6 w-auto" />
               <span>{text.brand}</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
                <Link to={route('/')} className={navLinkClasses}>{text.home}<span className={underlineClasses}></span></Link>
                
                <div className="group relative h-full flex items-center">
                    <Link to={route('/solutions')} className={navLinkClasses + " flex items-center gap-1"}>
                        {text.solutions} <i className="fas fa-chevron-down text-[10px] opacity-50 group-hover:rotate-180 transition-transform"></i>
                        <span className={underlineClasses}></span>
                    </Link>
                    
                    {/* Mega Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[90vw] max-w-5xl pointer-events-none group-hover:pointer-events-auto">
                        <div className="bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl grid grid-cols-3 gap-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"></div>
                            
                            {text.mega.map((column) => (
                              <div key={column.title} className="space-y-4">
                                  <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2 flex items-center gap-2"><span className={`w-1.5 h-1.5 ${column.dot} rounded-full`}></span> {column.title}</h4>
                                  {column.items.map((item) => (
                                    <Link key={item.href} to={route(item.href)} className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                        <div className={`font-bold text-white group-hover/item:text-${item.color}-400`}>{item.title}</div>
                                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                    </Link>
                                  ))}
                              </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Link to={route('/cases')} className={navLinkClasses}>{text.cases}<span className={underlineClasses}></span></Link>
                <Link to={route('/careers')} className={navLinkClasses}>{text.careers}<span className={underlineClasses}></span></Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
               <Link
                 to={switchTo(isEnglish ? 'zh' : 'en')}
                 className="px-3 py-2 rounded-full border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-colors hoverable"
               >
                 {text.language}
               </Link>
               <Link to={route('/contact')}>
                    <button className={`px-6 py-2 rounded-full border transition-all duration-300 hover:scale-105 hoverable ${useSolidStyle ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700' : 'border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white'}`}>
                        {text.contact}
                    </button>
               </Link>
            </div>

            <button 
                className="md:hidden text-white text-xl hoverable z-50 p-2 relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </div>
        </header>

        <div className={`fixed inset-0 bg-slate-950/98 backdrop-blur-lg z-40 flex flex-col justify-center px-8 transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
             <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-900/20 blur-[80px] rounded-full"></div>
             
             <div className="space-y-6 relative z-10">
                <Link to={route('/')} onClick={closeMenu} className="block text-3xl font-bold hover:text-blue-500 transition-colors">{text.home}</Link>
                <Link to={route('/solutions')} onClick={closeMenu} className="block text-3xl font-bold hover:text-blue-500 transition-colors">{text.mobileSolutions}</Link>
                <Link to={route('/cases')} onClick={closeMenu} className="block text-3xl font-bold hover:text-blue-500 transition-colors">{text.cases}</Link>
                <Link to={route('/careers')} onClick={closeMenu} className="block text-3xl font-bold hover:text-blue-500 transition-colors">{text.careers}</Link>
                
                <div className="pt-8 border-t border-white/10">
                    <Link to={route('/contact')} onClick={closeMenu}>
                        <button className="w-full py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all">{text.contact}</button>
                    </Link>
                    <Link
                      to={switchTo(isEnglish ? 'zh' : 'en')}
                      onClick={closeMenu}
                      className="mt-4 block w-full text-center py-3 rounded-full border border-white/10 text-gray-300 font-bold hover:bg-white/10 transition-colors"
                    >
                      {text.language}
                    </Link>
                </div>
             </div>
        </div>
    </>
  );
};

export default Navbar;
