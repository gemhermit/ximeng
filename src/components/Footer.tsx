import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';
import { translate } from '@/lib/translations';

const string = (language: 'zh' | 'en', path: string) => translate(language, path) as string;

const Footer: React.FC = () => {
  const { language, route } = useLanguage();
  const t = (path: string) => string(language, path);
  const addressLines = t('footer.address').split('\n');

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 z-10 relative">
      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
               <h4 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                  <div className="w-2 h-6 bg-blue-600"></div> {t('footer.brand')}
               </h4>
               <p className="text-gray-500 text-sm leading-relaxed">{t('footer.desc')}</p>
               <div className="flex gap-4">
                  {['twitter', 'linkedin-in', 'github'].map(icon => (
                      <a key={icon} href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-gray-400 hover:text-white hoverable">
                          <i className={`fab fa-${icon}`}></i>
                      </a>
                  ))}
               </div>
            </div>

            <div>
               <h5 className="text-white font-bold mb-6">{t('footer.quickLinks')}</h5>
               <ul className="space-y-3 text-sm text-gray-500">
                  <li><Link to={route('/')} className="hover:text-blue-400 transition-colors hoverable">{t('common.home')}</Link></li>
                  <li><Link to={route('/solutions')} className="hover:text-blue-400 transition-colors hoverable">{t('common.solutions')}</Link></li>
                  <li><Link to={route('/cases')} className="hover:text-blue-400 transition-colors hoverable">{t('common.cases')}</Link></li>
                  <li><Link to={route('/careers')} className="hover:text-blue-400 transition-colors hoverable">{t('common.careers')}</Link></li>
               </ul>
            </div>

            <div>
               <h5 className="text-white font-bold mb-6">{t('footer.contact')}</h5>
               <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start gap-3"><i className="fas fa-map-marker-alt text-blue-500 mt-1"></i> <span>{addressLines.map((line, i) => (<React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>))}</span></li>
                  <li className="flex items-center gap-3"><i className="fas fa-envelope text-blue-500"></i> echo@ximengtech.cn</li>
                  <li className="flex items-center gap-3"><i className="fas fa-phone text-blue-500"></i> +86 173 1432 4752</li>
               </ul>
            </div>

            <div>
               <h5 className="text-white font-bold mb-6">{t('footer.subscribe')}</h5>
               <p className="text-xs text-gray-500 mb-4">{t('footer.subscribeDesc')}</p>
               <div className="flex">
                  <input type="email" placeholder={t('footer.emailPlaceholder')} className="bg-white/5 border border-white/10 rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500 transition-colors text-white" />
                  <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-colors hoverable">
                      <i className="fas fa-paper-plane"></i>
                  </button>
               </div>
            </div>
         </div>

         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2025 {t('footer.copyright')}</p>
            <div className="space-x-6 mt-4 md:mt-0">
               <Link to={route('/privacy')} className="hover:text-gray-300 transition-colors hoverable">{t('footer.privacy')}</Link>
               <Link to={route('/terms')} className="hover:text-gray-300 transition-colors hoverable">{t('footer.terms')}</Link>
               <Link to={route('/sitemap')} className="hover:text-gray-300 transition-colors hoverable">{t('footer.sitemap')}</Link>
            </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
