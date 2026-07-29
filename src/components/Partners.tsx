import React, { useRef, useMemo } from 'react';
import TiltCard from './TiltCard';
import { useLanguage } from '@/lib/i18n';
import { translate } from '@/lib/translations';

const string = (language: 'zh' | 'en', path: string) => translate(language, path) as string;

type PartnerLogo = { name: string; src: string };

const partnerKeys = [
  { id: 'bytedance', src: '/images/partners/bytedance.png' },
  { id: 'aws', src: '/images/partners/aws.png' },
  { id: 'azure', src: '/images/partners/azure.png' },
  { id: 'huawei', src: '/images/partners/huawei.png' },
  { id: 'baidu', src: '/images/partners/4.png' },
  { id: 'tsinghua', src: '/images/partners/5.png' },
  { id: 'telecom', src: '/images/partners/9.png' },
  { id: 'sjtu', src: '/images/partners/6.png' },
  { id: 'cas', src: '/images/partners/7.png' },
  { id: 'cscec', src: '/images/partners/12.png' },
  { id: 'aliyun', src: '/images/partners/11.png' },
  { id: 'tencent', src: '/images/partners/tencent.png' },
  { id: 'iflytek', src: '/images/partners/2.png' },
  { id: 'hust', src: '/images/partners/14.png' },
] as const;

const Partners: React.FC = () => {
  const { language } = useLanguage();
  const t = (path: string) => string(language, path);

  const logosRow1: PartnerLogo[] = useMemo(
    () => partnerKeys.slice(0, 7).map(({ id, src }) => ({ name: t(`partners.logos.${id}`), src })),
    [t],
  );
  const logosRow2: PartnerLogo[] = useMemo(
    () => partnerKeys.slice(7).map(({ id, src }) => ({ name: t(`partners.logos.${id}`), src })),
    [t],
  );

  const rowRef1 = useRef<HTMLDivElement>(null);
  const rowRef2 = useRef<HTMLDivElement>(null);

  const duplicated1 = useMemo(() => [...logosRow1, ...logosRow1], [logosRow1]);
  const duplicated2 = useMemo(() => [...logosRow2, ...logosRow2], [logosRow2]);

  return (
    <section id="partners" className="py-24 md:py-32 relative bg-slate-950 border-t border-white/5">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 -z-10"></div>

       <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('partners.title')}</h2>
             <div className="flex items-center justify-center gap-4 text-gray-400 text-sm md:text-lg">
                <span className="h-px w-8 bg-blue-500/50"></span>
                <span>{t('partners.subtitle')}</span>
                <span className="h-px w-8 bg-blue-500/50"></span>
             </div>
          </div>
          <div className="space-y-8">
            <div ref={rowRef1} className="group overflow-hidden">
              <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
                {duplicated1.map((logo, i) => (
                  <TiltCard key={`r1-${i}`} className="w-[280px] h-40 shrink-0">
                    <div className="w-full h-full rounded-xl bg-white border border-gray-100 flex items-center justify-center transition-all p-6 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] duration-300">
                      <img src={logo.src || '/images/logo.svg'} alt={logo.name} className="w-full h-full object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
            <div ref={rowRef2} className="group overflow-hidden">
              <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' as any }}>
                {duplicated2.map((logo, i) => (
                  <TiltCard key={`r2-${i}`} className="w-[280px] h-40 shrink-0">
                    <div className="w-full h-full rounded-xl bg-white border border-gray-100 flex items-center justify-center transition-all p-6 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] duration-300">
                      <img src={logo.src || '/images/logo.svg'} alt={logo.name} className="w-full h-full object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};

export default Partners;
