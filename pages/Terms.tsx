import React from 'react';
import PageHeader from '../components/PageHeader';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <PageHeader title="服务条款" subtitle="Terms of Service" gradient="from-blue-400 via-cyan-400 to-teal-400" />

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
              欢迎使用羲梦科技（以下简称"我们"）的网站和服务。本服务条款（以下简称"条款"）规定了您使用我们的网站、服务、产品或内容的条件。
            </p>
            <p className="text-gray-300 leading-relaxed">
              请仔细阅读本条款。通过访问或使用我们的网站或服务，您同意受本条款的约束。如果您不同意本条款的任何部分，请不要访问或使用我们的网站或服务。
            </p>
          </section>

          {/* 服务使用 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. 服务使用</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                1.1 我们授予您非排他性、不可转让、有限的许可，以访问和使用我们的网站和服务，仅用于您的个人或商业目的。
              </p>
              <p className="text-gray-300 leading-relaxed">
                1.2 您同意不以下列方式使用我们的网站或服务：
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                <li>违反任何适用的法律、法规或监管要求</li>
                <li>侵犯或违反他人的权利，包括知识产权、隐私权或公开权</li>
                <li>分发、上传或传输病毒、恶意软件或其他有害代码</li>
                <li>干扰或破坏网站或服务的正常运行</li>
                <li>未经授权访问或尝试访问网站或服务的任何部分</li>
                <li>收集或存储他人的个人信息，未经其明确同意</li>
                <li>从事任何可能损害我们声誉或业务的活动</li>
              </ul>
            </div>
          </section>

          {/* 知识产权 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. 知识产权</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                2.1 我们的网站、服务和内容（包括但不限于文本、图像、图形、徽标、图标、视频、音频、软件和代码）受版权、商标和其他知识产权法律的保护。
              </p>
              <p className="text-gray-300 leading-relaxed">
                2.2 您同意不复制、修改、分发、出售、租赁、反向工程、反编译或创建我们的网站、服务或内容的衍生作品，除非我们明确书面授权。
              </p>
              <p className="text-gray-300 leading-relaxed">
                2.3 我们的商标、服务标记和标志（包括"羲梦科技"）是我们的专有财产。您同意不使用这些标记，除非我们明确书面授权。
              </p>
            </div>
          </section>

          {/* 用户内容 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. 用户内容</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                3.1 我们的网站或服务可能允许您提交、上传或分享内容，如评论、反馈或其他材料（以下简称"用户内容"）。
              </p>
              <p className="text-gray-300 leading-relaxed">
                3.2 通过提交用户内容，您授予我们非排他性、全球性、免版税、可转让、可再授权的许可，以使用、复制、修改、分发、展示和表演您的用户内容，仅用于提供、维护和改进我们的网站和服务。
              </p>
              <p className="text-gray-300 leading-relaxed">
                3.3 您同意您的用户内容不违反任何适用的法律、法规或监管要求，也不侵犯或违反他人的权利。
              </p>
              <p className="text-gray-300 leading-relaxed">
                3.4 我们保留权利（但没有义务）在任何时候自行决定删除或移除任何用户内容，无需通知。
              </p>
            </div>
          </section>

          {/* 免责声明 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. 免责声明</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                4.1 我们的网站和服务按"现状"和"可用"提供，不提供任何明示或暗示的保证。
              </p>
              <p className="text-gray-300 leading-relaxed">
                4.2 我们不保证我们的网站或服务将不间断、无错误，或其缺陷将被纠正。
              </p>
              <p className="text-gray-300 leading-relaxed">
                4.3 我们不保证网站或服务上的信息是准确、完整或最新的。
              </p>
              <p className="text-gray-300 leading-relaxed">
                4.4 在适用法律允许的最大范围内，我们排除所有关于网站或服务的明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。
              </p>
            </div>
          </section>

          {/* 责任限制 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. 责任限制</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                5.1 在适用法律允许的最大范围内，我们不对您或任何第三方因您使用或无法使用我们的网站或服务而造成的任何直接、间接、偶然、特殊、后果性或惩罚性损害承担责任，即使我们已被告知此类损害的可能性。
              </p>
              <p className="text-gray-300 leading-relaxed">
                5.2 我们对您的总责任（无论是合同、侵权还是其他原因）不应超过您在过去12个月内支付给我们的金额，如果有的话。
              </p>
            </div>
          </section>

          {/* 终止 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. 终止</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                6.1 我们可以在任何时候，以任何理由，立即终止或暂停您对网站或服务的访问，无需通知。
              </p>
              <p className="text-gray-300 leading-relaxed">
                6.2 本条款的一些规定在终止后仍将继续有效，包括但不限于知识产权、免责声明、责任限制和争议解决条款。
              </p>
            </div>
          </section>

          {/* 法律适用和争议解决 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. 法律适用和争议解决</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                7.1 本条款受中华人民共和国法律管辖，不考虑其法律冲突原则。
              </p>
              <p className="text-gray-300 leading-relaxed">
                7.2 任何与本条款或我们的网站或服务有关的争议应首先通过友好协商解决。如果协商不成，争议应提交上海仲裁委员会，按照其当时有效的仲裁规则进行仲裁。
              </p>
            </div>
          </section>

          {/* 一般条款 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. 一般条款</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                8.1 本条款构成您与我们之间关于使用网站和服务的完整协议，并取代任何先前的协议或理解。
              </p>
              <p className="text-gray-300 leading-relaxed">
                8.2 我们可以随时更新本条款。更新后的条款将在我们的网站上发布，并更新"版本"和"生效日期"。您继续使用网站或服务即表示您接受更新后的条款。
              </p>
              <p className="text-gray-300 leading-relaxed">
                8.3 如果本条款的任何部分被有管辖权的法院认定为无效或不可执行，该部分将被视为有效和可执行的最大范围内适用，其余条款将继续完全有效。
              </p>
              <p className="text-gray-300 leading-relaxed">
                8.4 我们未能行使或执行本条款的任何权利或规定，不应被视为放弃该权利或规定。
              </p>
            </div>
          </section>

          {/* 联系我们 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">联系我们</h2>
            <p className="text-gray-300 leading-relaxed">
              如果您对本服务条款有任何问题或疑虑，请通过以下方式联系我们：
            </p>
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <p className="text-gray-300">电子邮件：<a href="mailto:terms@ximeng.tech" className="text-blue-400 hover:underline">terms@ximeng.tech</a></p>
              <p className="text-gray-300 mt-2">地址：上海市徐汇区龙台路180号"模速空间"创新生态社区</p>
            </div>
          </section>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Terms;