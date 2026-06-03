import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';
import { buildBreadcrumbSchema } from '@/lib/seo';
import { useLanguage } from '@/lib/i18n';

type LegalSection = {
  title: string;
  paragraphs?: React.ReactNode[];
  list?: string[];
  subsections?: Array<{
    title: string;
    paragraphs?: React.ReactNode[];
    list?: string[];
  }>;
};

const Privacy: React.FC = () => {
  const { isEnglish, route } = useLanguage();
  const text = isEnglish ? {
    title: 'Privacy Policy',
    subtitle: 'Privacy Policy',
    description: 'Learn how Ximeng Tech collects, uses, protects, and handles personal information across its website and services, and what privacy rights users may have.',
    keywords: ['Ximeng Tech privacy policy', 'privacy policy', 'personal information protection'],
    home: 'Home',
    version: 'Version: 1.0 | Effective Date: January 1, 2025',
    contactTitle: 'Contact Us',
    contactIntro: 'If you have any questions or concerns about this Privacy Policy, please contact us through the following channels:',
    emailLabel: 'Email:',
    addressLabel: 'Address:',
    address: '180 Longtai Road, Xuhui District, Mosu Space Innovation Community, Shanghai, China',
    sections: [
      {
        title: 'Introduction',
        paragraphs: [
          'Ximeng Tech ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal information you provide when you visit our website, use our services, or interact with us.',
          'Please read this Privacy Policy carefully to understand our privacy practices. If you do not agree with any part of this policy, please do not access our website or use our services.',
        ],
      },
      {
        title: 'Information We Collect',
        subsections: [
          {
            title: 'Personal Information',
            list: ['Name', 'Contact information, such as email address and phone number', 'Company name and job title', 'Billing and payment information'],
          },
          {
            title: 'Non-Personal Information',
            list: ['IP address', 'Browser type and version', 'Access time and date', 'Pages visited', 'Operating system and platform', 'Device information'],
          },
          {
            title: 'Cookies and Similar Technologies',
            paragraphs: ['We use cookies and similar technologies, such as web beacons and pixel tags, to collect and store information. These technologies help us recognize your browser, remember preferences, and improve your experience.'],
          },
        ],
      },
      {
        title: 'How We Use Your Information',
        list: [
          'Provide, maintain, and improve our services',
          'Process your requests and transactions',
          'Communicate with you, including service updates, marketing information, and support responses',
          'Personalize your user experience',
          'Monitor and analyze website traffic and usage patterns',
          'Detect, prevent, and resolve fraud, security, or technical issues',
          'Comply with applicable laws, regulations, and regulatory requirements',
          'Protect our rights, property, and safety',
        ],
      },
      {
        title: 'How We Share Your Information',
        subsections: [
          {
            title: 'Third-Party Service Providers',
            paragraphs: ['We may share information with third parties that provide services on our behalf, including:'],
            list: ['Payment processing services', 'Data analytics services', 'Customer support services', 'Marketing and advertising services'],
          },
          {
            title: 'Legal Requirements',
            paragraphs: ['We may disclose information when required by applicable laws, regulations, legal process, or government requests.'],
          },
          {
            title: 'Business Transfers',
            paragraphs: ['If we are involved in a merger, acquisition, asset sale, or other business transfer, information may be transferred as part of the business assets.'],
          },
        ],
      },
      {
        title: 'Data Security',
        paragraphs: [
          'We take appropriate technical and organizational measures to protect personal information from unauthorized access, use, disclosure, modification, or destruction. These measures include:',
        ],
        list: ['Encrypted storage and transmission of sensitive information', 'Access control and authentication mechanisms', 'Regular security audits and assessments', 'Employee training and confidentiality commitments'],
        subsections: [
          {
            title: '',
            paragraphs: ['Although we take reasonable security measures, no method of data transmission or storage can be guaranteed to be completely secure. By using our services, you understand and accept this risk.'],
          },
        ],
      },
      {
        title: 'Your Rights',
        paragraphs: ['Depending on applicable law, you may have the right to:'],
        list: ['Access your personal information', 'Correct inaccurate personal information', 'Delete your personal information', 'Restrict or object to our processing of your personal information', 'Data portability', 'Withdraw consent', 'File a complaint'],
        subsections: [
          {
            title: '',
            paragraphs: [
              <>To exercise these rights, please submit a request through the <Link to={route('/contact')} className="text-blue-400 hover:underline">Contact Us</Link> page. We will respond within the timeframe required by applicable law.</>,
            ],
          },
        ],
      },
      {
        title: 'Data Retention',
        paragraphs: ['We retain personal information for as long as necessary to fulfill the purposes described in this policy, or longer when required by applicable law. When personal information is no longer needed, we will delete or anonymize it securely.'],
      },
      {
        title: 'Children\'s Privacy',
        paragraphs: ['Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If we learn that we have collected such information, we will delete it promptly.'],
      },
      {
        title: 'Policy Updates',
        paragraphs: ['We may update this Privacy Policy from time to time. We will publish the updated policy on this page and update the version and effective date. We encourage you to review this policy periodically.'],
      },
    ] as LegalSection[],
  } : {
    title: '隐私政策',
    subtitle: 'Privacy Policy',
    description: '了解羲梦科技官网和服务如何收集、使用、保护和处理个人信息，以及用户在隐私保护方面的相关权利。',
    keywords: ['羲梦科技隐私政策', '隐私政策', '个人信息保护'],
    home: '首页',
    version: '版本: 1.0 | 生效日期: 2025年1月1日',
    contactTitle: '联系我们',
    contactIntro: '如果您对本隐私政策有任何问题或疑虑，请通过以下方式联系我们：',
    emailLabel: '电子邮件：',
    addressLabel: '地址：',
    address: '上海市徐汇区龙台路180号"模速空间"创新生态社区',
    sections: [
      {
        title: '引言',
        paragraphs: [
          '羲梦科技（以下简称"我们"）致力于保护您的隐私。本隐私政策解释了我们如何收集、使用、披露和保护您在访问我们的网站、使用我们的服务或与我们互动时提供的个人信息。',
          '请仔细阅读本隐私政策，以了解我们的隐私惯例。如果您不同意本政策的任何部分，请不要访问我们的网站或使用我们的服务。',
        ],
      },
      {
        title: '我们收集的信息',
        subsections: [
          { title: '个人身份信息', list: ['姓名', '联系方式（电子邮件地址、电话号码）', '公司名称和职位', '账单和支付信息'] },
          { title: '非个人身份信息', list: ['IP地址', '浏览器类型和版本', '访问时间和日期', '访问的页面', '操作系统和平台', '设备信息'] },
          { title: 'Cookies和类似技术', paragraphs: ['我们使用Cookies和其他类似技术（如网络信标、像素标签）来收集和存储信息。这些技术帮助我们识别您的浏览器，记住您的偏好，并改进您的用户体验。'] },
        ],
      },
      {
        title: '我们如何使用您的信息',
        list: ['提供、维护和改进我们的服务', '处理您的请求和交易', '与您沟通，包括发送服务更新、营销信息和支持响应', '个性化您的用户体验', '监测和分析网站流量和使用模式', '检测、预防和解决欺诈、安全或技术问题', '遵守适用的法律、法规和监管要求', '保护我们的权利、财产和安全'],
      },
      {
        title: '我们如何共享您的信息',
        subsections: [
          { title: '第三方服务提供商', paragraphs: ['我们可能会与代表我们提供服务的第三方共享您的信息，如：'], list: ['支付处理服务', '数据分析服务', '客户支持服务', '营销和广告服务'] },
          { title: '法律要求', paragraphs: ['我们可能会根据适用的法律、法规、法律程序或政府要求披露您的信息。'] },
          { title: '业务转让', paragraphs: ['如果我们参与合并、收购、资产出售或其他业务转让，您的信息可能会作为业务资产的一部分被转让。'] },
        ],
      },
      {
        title: '数据安全',
        paragraphs: ['我们采取适当的技术和组织措施来保护您的个人信息，防止未经授权的访问、使用、披露、修改或销毁。这些措施包括：'],
        list: ['加密存储和传输敏感信息', '访问控制和身份验证机制', '定期安全审计和评估', '员工培训和保密协议'],
        subsections: [{ title: '', paragraphs: ['尽管我们采取了合理的安全措施，但没有任何方法可以保证数据传输或存储的完全安全。您使用我们的服务即表示您理解并接受这种风险。'] }],
      },
      {
        title: '您的权利',
        paragraphs: ['根据适用的法律，您可能有权：'],
        list: ['访问您的个人信息', '更正不准确的个人信息', '删除您的个人信息', '限制或反对我们处理您的个人信息', '数据可携带性', '撤回同意', '投诉权'],
        subsections: [{ title: '', paragraphs: [<>要行使这些权利，请通过<Link to={route('/contact')} className="text-blue-400 hover:underline">联系我们</Link>页面提交请求。我们将在适用法律要求的时间内响应您的请求。</>] }],
      },
      { title: '数据保留', paragraphs: ['我们将在实现本政策所述目的所需的时间内保留您的个人信息，或根据适用法律的要求保留更长时间。当我们不再需要您的个人信息时，我们将以安全的方式删除或匿名化处理。'] },
      { title: '儿童隐私', paragraphs: ['我们的服务不针对16岁以下的儿童。我们不会故意收集16岁以下儿童的个人信息。如果我们发现我们收集了16岁以下儿童的个人信息，我们将立即删除该信息。'] },
      { title: '政策更新', paragraphs: ['我们可能会不时更新本隐私政策。我们将在本页面发布更新后的政策，并更新"版本"和"生效日期"。我们鼓励您定期查看本政策，以了解我们的隐私惯例的任何变化。'] },
    ] as LegalSection[],
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Seo
        title={text.title}
        description={text.description}
        path="/privacy"
        keywords={text.keywords}
        structuredData={buildBreadcrumbSchema([
          { name: text.home, path: route('/') },
          { name: text.title, path: route('/privacy') },
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
              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-4">{paragraph}</p>
              ))}
              {section.list && (
                <ul className="list-disc list-inside text-gray-300 space-y-3 pl-4">
                  {section.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.subsections?.map((subsection, index) => (
                <div key={`${subsection.title}-${index}`} className={subsection.title ? 'mt-6' : 'mt-4'}>
                  {subsection.title && <h3 className="text-xl font-semibold text-blue-400 mb-3">{subsection.title}</h3>}
                  {subsection.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-gray-300 leading-relaxed mb-4">{paragraph}</p>
                  ))}
                  {subsection.list && (
                    <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                      {subsection.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              ))}
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

export default Privacy;
