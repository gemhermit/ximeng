import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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
            
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter hoverable z-50" onClick={closeMenu}>
               <img src="/images/logo.png" alt="羲梦科技" className="h-6 w-auto" />
               <span>羲梦科技</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
                <Link to="/" className={navLinkClasses}>首页<span className={underlineClasses}></span></Link>
                
                <div className="group relative h-full flex items-center">
                    <Link to="/solutions" className={navLinkClasses + " flex items-center gap-1"}>
                        核心业务 <i className="fas fa-chevron-down text-[10px] opacity-50 group-hover:rotate-180 transition-transform"></i>
                        <span className={underlineClasses}></span>
                    </Link>
                    
                    {/* Mega Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[90vw] max-w-5xl pointer-events-none group-hover:pointer-events-auto">
                        <div className="bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl grid grid-cols-3 gap-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"></div>
                            
                            <div className="space-y-4">
                                <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 实体产业</h4>
                                <Link to="/solutions#industrial" className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                    <div className="font-bold text-white group-hover/item:text-blue-400">工业制造</div>
                                    <p className="text-xs text-gray-500 mt-1">产线自动化与预测维护</p>
                                </Link>
                                <Link to="/solutions#education" className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                    <div className="font-bold text-white group-hover/item:text-green-400">教育科技</div>
                                    <p className="text-xs text-gray-500 mt-1">知识图谱与沉浸式教学</p>
                                </Link>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> 沉浸体验</h4>
                                <Link to="/solutions#culture" className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                    <div className="font-bold text-white group-hover/item:text-pink-400">文化旅游</div>
                                    <p className="text-xs text-gray-500 mt-1">元宇宙景区复刻</p>
                                </Link>
                                <Link to="/solutions#cloud" className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                    <div className="font-bold text-white group-hover/item:text-cyan-400">云引擎服务</div>
                                    <p className="text-xs text-gray-500 mt-1">弹性算力底座</p>
                                </Link>
                            </div>

                            <div className="space-y-4">
                                 <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> 智能营销</h4>
                                <Link to="/solutions#marketing" className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                    <div className="font-bold text-white group-hover/item:text-purple-400">全域 AI 营销</div>
                                    <p className="text-xs text-gray-500 mt-1">数据驱动精准获客</p>
                                </Link>
                                <Link to="/solutions#hardware" className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                    <div className="font-bold text-white group-hover/item:text-orange-400">AI 硬件定制</div>
                                    <p className="text-xs text-gray-500 mt-1">端侧算力芯片开发</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/cases" className={navLinkClasses}>创新案例<span className={underlineClasses}></span></Link>
                <Link to="/careers" className={navLinkClasses}>加入我们<span className={underlineClasses}></span></Link>
            </nav>

            <div className="hidden md:block">
               <Link to="/contact">
                    <button className={`px-6 py-2 rounded-full border transition-all duration-300 hover:scale-105 hoverable ${useSolidStyle ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700' : 'border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white'}`}>
                        立即咨询
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
                <Link to="/" onClick={closeMenu} className="block text-3xl font-bold hover:text-blue-500 transition-colors">首页</Link>
                <Link to="/solutions" onClick={closeMenu} className="block text-3xl font-bold hover:text-blue-500 transition-colors">核心解决方案</Link>
                <Link to="/cases" onClick={closeMenu} className="block text-3xl font-bold hover:text-blue-500 transition-colors">创新案例</Link>
                <Link to="/careers" onClick={closeMenu} className="block text-3xl font-bold hover:text-blue-500 transition-colors">加入我们</Link>
                
                <div className="pt-8 border-t border-white/10">
                    <Link to="/contact" onClick={closeMenu}>
                        <button className="w-full py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all">立即咨询</button>
                    </Link>
                </div>
             </div>
        </div>
    </>
  );
};

export default Navbar;
