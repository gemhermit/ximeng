import React from 'react';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';

type TermsSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

const Terms: React.FC = () => {
  const { isEnglish, route } = useLanguage();
  const text = isEnglish ? {
    title: 'Terms of Service',
    subtitle: 'Terms of Service',
    description: 'Learn the terms for using the Ximeng Tech website, products, services, and content, including intellectual property, disclaimers, limitation of liability, and contact information.',
    keywords: ['Ximeng Tech terms of service', 'terms of service', 'website terms'],
    home: 'Home',
    version: 'Version: 1.0 | Effective Date: January 1, 2025',
    contactTitle: 'Contact Us',
    contactIntro: 'If you have any questions or concerns about these Terms of Service, please contact us through the following channels:',
    emailLabel: 'Email:',
    addressLabel: 'Address:',
    address: '180 Longtai Road, Xuhui District, Mosu Space Innovation Community, Shanghai, China',
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          'Welcome to the website and services of Ximeng Tech ("we", "us", or "our"). These Terms of Service ("Terms") set out the conditions for using our website, services, products, or content.',
          'Please read these Terms carefully. By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not access or use our website or services.',
        ],
      },
      {
        title: '1. Use of Services',
        paragraphs: [
          '1.1 We grant you a non-exclusive, non-transferable, limited license to access and use our website and services for your personal or business purposes.',
          '1.2 You agree not to use our website or services in any of the following ways:',
        ],
        list: [
          'Violate any applicable law, regulation, or regulatory requirement',
          'Infringe or violate the rights of others, including intellectual property, privacy, or publicity rights',
          'Distribute, upload, or transmit viruses, malware, or other harmful code',
          'Interfere with or disrupt the normal operation of the website or services',
          'Access or attempt to access any part of the website or services without authorization',
          'Collect or store personal information about others without explicit consent',
          'Engage in any activity that may harm our reputation or business',
        ],
      },
      {
        title: '2. Intellectual Property',
        paragraphs: [
          '2.1 Our website, services, and content, including text, images, graphics, logos, icons, videos, audio, software, and code, are protected by copyright, trademark, and other intellectual property laws.',
          '2.2 You agree not to copy, modify, distribute, sell, lease, reverse engineer, decompile, or create derivative works based on our website, services, or content unless expressly authorized by us in writing.',
          '2.3 Our trademarks, service marks, and logos, including "Ximeng Tech", are our proprietary property. You agree not to use these marks unless expressly authorized by us in writing.',
        ],
      },
      {
        title: '3. User Content',
        paragraphs: [
          '3.1 Our website or services may allow you to submit, upload, or share content such as comments, feedback, or other materials ("User Content").',
          '3.2 By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free, transferable, sublicensable license to use, copy, modify, distribute, display, and perform your User Content solely for providing, maintaining, and improving our website and services.',
          '3.3 You agree that your User Content will not violate applicable laws, regulations, or regulatory requirements, nor infringe or violate the rights of others.',
          '3.4 We reserve the right, but have no obligation, to remove any User Content at any time at our discretion without notice.',
        ],
      },
      {
        title: '4. Disclaimers',
        paragraphs: [
          '4.1 Our website and services are provided on an "as is" and "as available" basis without any express or implied warranties.',
          '4.2 We do not warrant that our website or services will be uninterrupted, error-free, or that defects will be corrected.',
          '4.3 We do not warrant that information on the website or services is accurate, complete, or current.',
          '4.4 To the maximum extent permitted by applicable law, we disclaim all express or implied warranties regarding the website or services, including warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        ],
      },
      {
        title: '5. Limitation of Liability',
        paragraphs: [
          '5.1 To the maximum extent permitted by applicable law, we will not be liable to you or any third party for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our website or services, even if we have been advised of the possibility of such damages.',
          '5.2 Our total liability to you, whether in contract, tort, or otherwise, will not exceed the amount you paid to us in the previous 12 months, if any.',
        ],
      },
      {
        title: '6. Termination',
        paragraphs: [
          '6.1 We may terminate or suspend your access to the website or services immediately, at any time and for any reason, without notice.',
          '6.2 Certain provisions of these Terms will survive termination, including intellectual property, disclaimers, limitation of liability, and dispute resolution provisions.',
        ],
      },
      {
        title: '7. Governing Law and Dispute Resolution',
        paragraphs: [
          '7.1 These Terms are governed by the laws of the People\'s Republic of China, without regard to conflict-of-law principles.',
          '7.2 Any dispute related to these Terms or our website or services should first be resolved through friendly negotiation. If negotiation fails, the dispute shall be submitted to the Shanghai Arbitration Commission under its then-effective arbitration rules.',
        ],
      },
      {
        title: '8. General Terms',
        paragraphs: [
          '8.1 These Terms constitute the entire agreement between you and us regarding use of the website and services and supersede any prior agreements or understandings.',
          '8.2 We may update these Terms at any time. Updated Terms will be posted on our website with the version and effective date updated. Your continued use of the website or services means you accept the updated Terms.',
          '8.3 If any part of these Terms is found invalid or unenforceable by a competent court, that part will be applied to the maximum extent valid and enforceable, and the remaining Terms will remain in full force.',
          '8.4 Our failure to exercise or enforce any right or provision under these Terms will not be deemed a waiver of that right or provision.',
        ],
      },
    ] as TermsSection[],
  } : {
    title: '服务条款',
    subtitle: 'Terms of Service',
    description: '了解羲梦科技官网、产品、服务和内容的使用条件、知识产权、免责声明、责任限制和联系方式。',
    keywords: ['羲梦科技服务条款', '服务条款', '网站使用条款'],
    home: '首页',
    version: '版本: 1.0 | 生效日期: 2025年1月1日',
    contactTitle: '联系我们',
    contactIntro: '如果您对本服务条款有任何问题或疑虑，请通过以下方式联系我们：',
    emailLabel: '电子邮件：',
    addressLabel: '地址：',
    address: '上海市徐汇区龙台路180号"模速空间"创新生态社区',
    sections: [
      {
        title: '引言',
        paragraphs: [
          '欢迎使用羲梦科技（以下简称"我们"）的网站和服务。本服务条款（以下简称"条款"）规定了您使用我们的网站、服务、产品或内容的条件。',
          '请仔细阅读本条款。通过访问或使用我们的网站或服务，您同意受本条款的约束。如果您不同意本条款的任何部分，请不要访问或使用我们的网站或服务。',
        ],
      },
      {
        title: '1. 服务使用',
        paragraphs: [
          '1.1 我们授予您非排他性、不可转让、有限的许可，以访问和使用我们的网站和服务，仅用于您的个人或商业目的。',
          '1.2 您同意不以下列方式使用我们的网站或服务：',
        ],
        list: ['违反任何适用的法律、法规或监管要求', '侵犯或违反他人的权利，包括知识产权、隐私权或公开权', '分发、上传或传输病毒、恶意软件或其他有害代码', '干扰或破坏网站或服务的正常运行', '未经授权访问或尝试访问网站或服务的任何部分', '收集或存储他人的个人信息，未经其明确同意', '从事任何可能损害我们声誉或业务的活动'],
      },
      {
        title: '2. 知识产权',
        paragraphs: [
          '2.1 我们的网站、服务和内容（包括但不限于文本、图像、图形、徽标、图标、视频、音频、软件和代码）受版权、商标和其他知识产权法律的保护。',
          '2.2 您同意不复制、修改、分发、出售、租赁、反向工程、反编译或创建我们的网站、服务或内容的衍生作品，除非我们明确书面授权。',
          '2.3 我们的商标、服务标记和标志（包括"羲梦科技"）是我们的专有财产。您同意不使用这些标记，除非我们明确书面授权。',
        ],
      },
      {
        title: '3. 用户内容',
        paragraphs: [
          '3.1 我们的网站或服务可能允许您提交、上传或分享内容，如评论、反馈或其他材料（以下简称"用户内容"）。',
          '3.2 通过提交用户内容，您授予我们非排他性、全球性、免版税、可转让、可再授权的许可，以使用、复制、修改、分发、展示和表演您的用户内容，仅用于提供、维护和改进我们的网站和服务。',
          '3.3 您同意您的用户内容不违反任何适用的法律、法规或监管要求，也不侵犯或违反他人的权利。',
          '3.4 我们保留权利（但没有义务）在任何时候自行决定删除或移除任何用户内容，无需通知。',
        ],
      },
      {
        title: '4. 免责声明',
        paragraphs: [
          '4.1 我们的网站和服务按"现状"和"可用"提供，不提供任何明示或暗示的保证。',
          '4.2 我们不保证我们的网站或服务将不间断、无错误，或其缺陷将被纠正。',
          '4.3 我们不保证网站或服务上的信息是准确、完整或最新的。',
          '4.4 在适用法律允许的最大范围内，我们排除所有关于网站或服务的明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。',
        ],
      },
      {
        title: '5. 责任限制',
        paragraphs: [
          '5.1 在适用法律允许的最大范围内，我们不对您或任何第三方因您使用或无法使用我们的网站或服务而造成的任何直接、间接、偶然、特殊、后果性或惩罚性损害承担责任，即使我们已被告知此类损害的可能性。',
          '5.2 我们对您的总责任（无论是合同、侵权还是其他原因）不应超过您在过去12个月内支付给我们的金额，如果有的话。',
        ],
      },
      {
        title: '6. 终止',
        paragraphs: ['6.1 我们可以在任何时候，以任何理由，立即终止或暂停您对网站或服务的访问，无需通知。', '6.2 本条款的一些规定在终止后仍将继续有效，包括但不限于知识产权、免责声明、责任限制和争议解决条款。'],
      },
      {
        title: '7. 法律适用和争议解决',
        paragraphs: ['7.1 本条款受中华人民共和国法律管辖，不考虑其法律冲突原则。', '7.2 任何与本条款或我们的网站或服务有关的争议应首先通过友好协商解决。如果协商不成，争议应提交上海仲裁委员会，按照其当时有效的仲裁规则进行仲裁。'],
      },
      {
        title: '8. 一般条款',
        paragraphs: ['8.1 本条款构成您与我们之间关于使用网站和服务的完整协议，并取代任何先前的协议或理解。', '8.2 我们可以随时更新本条款。更新后的条款将在我们的网站上发布，并更新"版本"和"生效日期"。您继续使用网站或服务即表示您接受更新后的条款。', '8.3 如果本条款的任何部分被有管辖权的法院认定为无效或不可执行，该部分将被视为有效和可执行的最大范围内适用，其余条款将继续完全有效。', '8.4 我们未能行使或执行本条款的任何权利或规定，不应被视为放弃该权利或规定。'],
      },
    ] as TermsSection[],
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Seo
        title={text.title}
        description={text.description}
        path="/terms"
        keywords={text.keywords}
        structuredData={buildBreadcrumbSchema([
          { name: text.home, path: route('/') },
          { name: text.title, path: route('/terms') },
        ])}
      />
      <PageHeader title={text.title} subtitle={text.subtitle} gradient="from-blue-400 via-cyan-400 to-teal-400" />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <div className="mb-12 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <p className="text-sm text-gray-300">{text.version}</p>
          </div>

          {text.sections.map((section) => (
            <section key={section.title} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-gray-300 leading-relaxed">{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{text.contactTitle}</h2>
            <p className="text-gray-300 leading-relaxed">{text.contactIntro}</p>
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <p className="text-gray-300">{text.emailLabel}<a href="mailto:echo@ximengtech.cn" className="text-blue-400 hover:underline">echo@ximengtech.cn</a></p>
              <p className="text-gray-300 mt-2">{text.addressLabel}{text.address}</p>
            </div>
          </section>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Terms;
