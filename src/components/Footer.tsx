import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';

const Footer: React.FC = () => {
  const { isEnglish, route } = useLanguage();
  const text = isEnglish ? {
    brand: 'Ximeng Tech',
    desc: 'We help companies turn advanced technology into practical digital transformation services and connect new possibilities across industries.',
    quickLinks: 'Quick Links',
    home: 'Home',
    solutions: 'Solutions',
    cases: 'Cases',
    careers: 'Careers',
    contact: 'Contact',
    address: <>180 Longtai Road, Xuhui District<br/>Mosu Space Innovation Community<br/>Shanghai, China</>,
    subscribe: 'Subscribe',
    subscribeDesc: 'Get industry insights and technical white papers.',
    emailPlaceholder: 'Your email address',
    copyright: 'Ximeng Tech Inc. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    sitemap: 'Sitemap',
  } : {
    brand: '羲梦科技',
    desc: '我们致力于通过前沿技术，为企业提供全方位的数字化转型服务，连接无限可能。',
    quickLinks: '快速链接',
    home: '首页',
    solutions: '解决方案',
    cases: '创新案例',
    careers: '加入我们',
    contact: '联系方式',
    address: <>上海市徐汇区龙台路180号<br/>“模速空间”创新生态社区</>,
    subscribe: '订阅动态',
    subscribeDesc: '获取最新的行业洞察与技术白皮书。',
    emailPlaceholder: '您的邮箱地址',
    copyright: '羲梦科技 Inc. All rights reserved.',
    privacy: '隐私政策',
    terms: '服务条款',
    sitemap: '网站地图',
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 z-10 relative">
      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
               <h4 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                  <div className="w-2 h-6 bg-blue-600"></div> {text.brand}
               </h4>
               <p className="text-gray-500 text-sm leading-relaxed">{text.desc}</p>
               <div className="flex gap-4">
                  {['twitter', 'linkedin-in', 'github'].map(icon => (
                      <a key={icon} href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-gray-400 hover:text-white hoverable">
                          <i className={`fab fa-${icon}`}></i>
                      </a>
                  ))}
               </div>
            </div>
            
            <div>
               <h5 className="text-white font-bold mb-6">{text.quickLinks}</h5>
               <ul className="space-y-3 text-sm text-gray-500">
                  <li><Link to={route('/')} className="hover:text-blue-400 transition-colors hoverable">{text.home}</Link></li>
                  <li><Link to={route('/solutions')} className="hover:text-blue-400 transition-colors hoverable">{text.solutions}</Link></li>
                  <li><Link to={route('/cases')} className="hover:text-blue-400 transition-colors hoverable">{text.cases}</Link></li>
                  <li><Link to={route('/careers')} className="hover:text-blue-400 transition-colors hoverable">{text.careers}</Link></li>
               </ul>
            </div>
            
            <div>
               <h5 className="text-white font-bold mb-6">{text.contact}</h5>
               <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start gap-3"><i className="fas fa-map-marker-alt text-blue-500 mt-1"></i> <span>{text.address}</span></li>
                  <li className="flex items-center gap-3"><i className="fas fa-envelope text-blue-500"></i> echo@ximengtech.cn</li>
                  <li className="flex items-center gap-3"><i className="fas fa-phone text-blue-500"></i> +86 173 1432 4752</li>
               </ul>
            </div>
            
            <div>
               <h5 className="text-white font-bold mb-6">{text.subscribe}</h5>
               <p className="text-xs text-gray-500 mb-4">{text.subscribeDesc}</p>
               <div className="flex">
                  <input type="email" placeholder={text.emailPlaceholder} className="bg-white/5 border border-white/10 rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500 transition-colors text-white" />
                  <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-colors hoverable">
                      <i className="fas fa-paper-plane"></i>
                  </button>
               </div>
            </div>
         </div>
         
         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2025 {text.copyright}</p>
            <div className="space-x-6 mt-4 md:mt-0">
               <Link to={route('/privacy')} className="hover:text-gray-300 transition-colors hoverable">{text.privacy}</Link>
               <Link to={route('/terms')} className="hover:text-gray-300 transition-colors hoverable">{text.terms}</Link>
               <Link to={route('/sitemap')} className="hover:text-gray-300 transition-colors hoverable">{text.sitemap}</Link>
            </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
