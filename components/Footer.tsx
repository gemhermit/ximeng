import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 z-10 relative">
      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
               <h4 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                  <div className="w-2 h-6 bg-blue-600"></div> 羲梦科技
               </h4>
               <p className="text-gray-500 text-sm leading-relaxed">我们致力于通过前沿技术，为企业提供全方位的数字化转型服务，连接无限可能。</p>
               <div className="flex gap-4">
                  {['twitter', 'linkedin-in', 'github'].map(icon => (
                      <a key={icon} href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-gray-400 hover:text-white hoverable">
                          <i className={`fab fa-${icon}`}></i>
                      </a>
                  ))}
               </div>
            </div>
            
            <div>
               <h5 className="text-white font-bold mb-6">快速链接</h5>
               <ul className="space-y-3 text-sm text-gray-500">
                  <li><Link to="/" className="hover:text-blue-400 transition-colors hoverable">首页</Link></li>
                  <li><Link to="/solutions" className="hover:text-blue-400 transition-colors hoverable">解决方案</Link></li>
                  <li><Link to="/cases" className="hover:text-blue-400 transition-colors hoverable">创新案例</Link></li>
                  <li><Link to="/careers" className="hover:text-blue-400 transition-colors hoverable">加入我们</Link></li>
               </ul>
            </div>
            
            <div>
               <h5 className="text-white font-bold mb-6">联系方式</h5>
               <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start gap-3"><i className="fas fa-map-marker-alt text-blue-500 mt-1"></i> <span>上海市徐汇区龙台路180号<br/>“模速空间”创新生态社区</span></li>
                  <li className="flex items-center gap-3"><i className="fas fa-envelope text-blue-500"></i> echo@ximengtech.cn</li>
                  <li className="flex items-center gap-3"><i className="fas fa-phone text-blue-500"></i> +86 173 1432 4752</li>
               </ul>
            </div>
            
            <div>
               <h5 className="text-white font-bold mb-6">订阅动态</h5>
               <p className="text-xs text-gray-500 mb-4">获取最新的行业洞察与技术白皮书。</p>
               <div className="flex">
                  <input type="email" placeholder="您的邮箱地址" className="bg-white/5 border border-white/10 rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500 transition-colors text-white" />
                  <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-colors hoverable">
                      <i className="fas fa-paper-plane"></i>
                  </button>
               </div>
            </div>
         </div>
         
         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2025 羲梦科技 Inc. All rights reserved.</p>
            <div className="space-x-6 mt-4 md:mt-0">
               <Link to="/privacy" className="hover:text-gray-300 transition-colors hoverable">隐私政策</Link>
               <Link to="/terms" className="hover:text-gray-300 transition-colors hoverable">服务条款</Link>
               <Link to="/sitemap" className="hover:text-gray-300 transition-colors hoverable">网站地图</Link>
            </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;