import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <PageHeader title="隐私政策" subtitle="Privacy Policy" gradient="from-blue-400 via-cyan-400 to-teal-400" />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          {/* 版本信息 */}
          <div className="mb-12 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <p className="text-sm text-gray-300">版本: 1.0 | 生效日期: 2025年1月1日</p>
          </div>

          {/* 引言 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">引言</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              羲梦科技（以下简称"我们"）致力于保护您的隐私。本隐私政策解释了我们如何收集、使用、披露和保护您在访问我们的网站、使用我们的服务或与我们互动时提供的个人信息。
            </p>
            <p className="text-gray-300 leading-relaxed">
              请仔细阅读本隐私政策，以了解我们的隐私惯例。如果您不同意本政策的任何部分，请不要访问我们的网站或使用我们的服务。
            </p>
          </section>

          {/* 信息收集 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">我们收集的信息</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">个人身份信息</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                  <li>姓名</li>
                  <li>联系方式（电子邮件地址、电话号码）</li>
                  <li>公司名称和职位</li>
                  <li>账单和支付信息</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">非个人身份信息</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                  <li>IP地址</li>
                  <li>浏览器类型和版本</li>
                  <li>访问时间和日期</li>
                  <li>访问的页面</li>
                  <li>操作系统和平台</li>
                  <li>设备信息</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Cookies和类似技术</h3>
                <p className="text-gray-300 leading-relaxed">
                  我们使用Cookies和其他类似技术（如网络信标、像素标签）来收集和存储信息。这些技术帮助我们识别您的浏览器，记住您的偏好，并改进您的用户体验。
                </p>
              </div>
            </div>
          </section>

          {/* 信息使用 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">我们如何使用您的信息</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3 pl-4">
              <li>提供、维护和改进我们的服务</li>
              <li>处理您的请求和交易</li>
              <li>与您沟通，包括发送服务更新、营销信息和支持响应</li>
              <li>个性化您的用户体验</li>
              <li>监测和分析网站流量和使用模式</li>
              <li>检测、预防和解决欺诈、安全或技术问题</li>
              <li>遵守适用的法律、法规和监管要求</li>
              <li>保护我们的权利、财产和安全</li>
            </ul>
          </section>

          {/* 信息共享 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">我们如何共享您的信息</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">第三方服务提供商</h3>
                <p className="text-gray-300 leading-relaxed">
                  我们可能会与代表我们提供服务的第三方共享您的信息，如：
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 mt-2">
                  <li>支付处理服务</li>
                  <li>数据分析服务</li>
                  <li>客户支持服务</li>
                  <li>营销和广告服务</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">法律要求</h3>
                <p className="text-gray-300 leading-relaxed">
                  我们可能会根据适用的法律、法规、法律程序或政府要求披露您的信息。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">业务转让</h3>
                <p className="text-gray-300 leading-relaxed">
                  如果我们参与合并、收购、资产出售或其他业务转让，您的信息可能会作为业务资产的一部分被转让。
                </p>
              </div>
            </div>
          </section>

          {/* 数据安全 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">数据安全</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              我们采取适当的技术和组织措施来保护您的个人信息，防止未经授权的访问、使用、披露、修改或销毁。这些措施包括：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li>加密存储和传输敏感信息</li>
              <li>访问控制和身份验证机制</li>
              <li>定期安全审计和评估</li>
              <li>员工培训和保密协议</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              尽管我们采取了合理的安全措施，但没有任何方法可以保证数据传输或存储的完全安全。您使用我们的服务即表示您理解并接受这种风险。
            </p>
          </section>

          {/* 您的权利 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">您的权利</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              根据适用的法律，您可能有权：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li>访问您的个人信息</li>
              <li>更正不准确的个人信息</li>
              <li>删除您的个人信息</li>
              <li>限制或反对我们处理您的个人信息</li>
              <li>数据可携带性</li>
              <li>撤回同意</li>
              <li>投诉权</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              要行使这些权利，请通过<Link to="/contact" className="text-blue-400 hover:underline">联系我们</Link>页面提交请求。我们将在适用法律要求的时间内响应您的请求。
            </p>
          </section>

          {/* 数据保留 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">数据保留</h2>
            <p className="text-gray-300 leading-relaxed">
              我们将在实现本政策所述目的所需的时间内保留您的个人信息，或根据适用法律的要求保留更长时间。当我们不再需要您的个人信息时，我们将以安全的方式删除或匿名化处理。
            </p>
          </section>

          {/* 儿童隐私 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">儿童隐私</h2>
            <p className="text-gray-300 leading-relaxed">
              我们的服务不针对16岁以下的儿童。我们不会故意收集16岁以下儿童的个人信息。如果我们发现我们收集了16岁以下儿童的个人信息，我们将立即删除该信息。
            </p>
          </section>

          {/* 政策更新 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">政策更新</h2>
            <p className="text-gray-300 leading-relaxed">
              我们可能会不时更新本隐私政策。我们将在本页面发布更新后的政策，并更新"版本"和"生效日期"。我们鼓励您定期查看本政策，以了解我们的隐私惯例的任何变化。
            </p>
          </section>

          {/* 联系我们 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">联系我们</h2>
            <p className="text-gray-300 leading-relaxed">
              如果您对本隐私政策有任何问题或疑虑，请通过以下方式联系我们：
            </p>
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <p className="text-gray-300">电子邮件：<a href="mailto:privacy@ximeng.tech" className="text-blue-400 hover:underline">privacy@ximeng.tech</a></p>
              <p className="text-gray-300 mt-2">地址：上海市徐汇区龙台路180号"模速空间"创新生态社区</p>
            </div>
          </section>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Privacy;