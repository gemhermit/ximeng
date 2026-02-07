import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <PageHeader title="网站地图" subtitle="Sitemap" gradient="from-blue-400 via-cyan-400 to-teal-400" />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          {/* 网站地图介绍 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">网站结构</h2>
            <p className="text-gray-300 leading-relaxed">
              以下是羲梦科技网站的主要页面结构和导航链接。通过点击链接，您可以快速访问网站的各个部分。
            </p>
          </div>

          {/* 网站地图内容 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 主导航 */}
            <section>
              <h3 className="text-xl font-bold text-blue-400 mb-4">主导航</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    首页
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    解决方案
                  </Link>
                </li>
                <li>
                  <Link to="/cases" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    创新案例
                  </Link>
                </li>
              </ul>
            </section>

            {/* 核心业务 */}
            <section>
              <h3 className="text-xl font-bold text-blue-400 mb-4">核心业务</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/solutions#industry-manufacturing" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    工业制造
                  </Link>
                </li>
                <li>
                  <Link to="/solutions#education-technology" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    教育科技
                  </Link>
                </li>
                <li>
                  <Link to="/solutions#cultural-tourism" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    文化旅游
                  </Link>
                </li>
                <li>
                  <Link to="/solutions#cloud-engine-service" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    云引擎服务
                  </Link>
                </li>
                <li>
                  <Link to="/solutions#ai-marketing" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    全域AI营销
                  </Link>
                </li>
                <li>
                  <Link to="/solutions#ai-hardware" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    AI硬件定制
                  </Link>
                </li>
              </ul>
            </section>

            {/* 公司信息 */}
            <section>
              <h3 className="text-xl font-bold text-blue-400 mb-4">公司信息</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    联系我们
                  </Link>
                </li>
              </ul>
            </section>

            {/* 法律信息 */}
            <section>
              <h3 className="text-xl font-bold text-blue-400 mb-4">法律信息</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    隐私政策
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    服务条款
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          {/* 页脚信息 */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-bold text-blue-400 mb-4">访问统计</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              羲梦科技网站提供丰富的内容和服务，包括解决方案、创新案例、公司信息等。如果您在使用过程中遇到任何问题，请随时与我们联系。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                <p className="text-blue-400 text-2xl font-bold">10+</p>
                <p className="text-gray-300 text-sm mt-1">核心解决方案</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                <p className="text-blue-400 text-2xl font-bold">50+</p>
                <p className="text-gray-300 text-sm mt-1">创新案例</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                <p className="text-blue-400 text-2xl font-bold">100+</p>
                <p className="text-gray-300 text-sm mt-1">合作客户</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Sitemap;