import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { casesData, getCategoryImage } from '../data/cases';

const CaseDetail: React.FC = () => {
  const { slug } = useParams();
  const item = casesData.find(c => c.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-slate-950">
        <PageHeader title="案例未找到" subtitle="Not Found" gradient="from-purple-400 via-pink-400 to-red-400" />
        <div className="container mx-auto px-6 py-12">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <p className="text-gray-300">未找到对应案例，请返回列表。</p>
            <Link to="/cases" className="mt-4 inline-block px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600">返回案例列表</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <PageHeader title={item.title} subtitle={item.category} gradient="from-purple-400 via-pink-400 to-red-400" />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <img src={item.image || getCategoryImage(item.category)} alt={item.title} className="w-full h-auto rounded-xl border border-white/10 object-cover" />
          </div>
          <div className="md:col-span-3 p-6 rounded-xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-blue-400 font-bold tracking-widest">{item.category}</div>
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">{item.summary}</p>
            {item.achievements && item.achievements.length > 0 && (
              <div className="mt-6">
                <div className="font-bold text-white mb-2">成果数据</div>
                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((a, i) => (
                    <span key={i} className="px-2 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-200">{a}</span>
                  ))}
                </div>
              </div>
            )}
            {item.scope && item.scope.length > 0 && (
              <div className="mt-6">
                <div className="font-bold text白 mb-2">实施范围</div>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  {item.scope.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.story && (
              <div className="mt-6">
                <div className="font-bold text-white mb-2">团队故事</div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.story}</p>
              </div>
            )}
            {item.link && (
              <div className="mt-6">
                <a href={item.link} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white/10 text-slate-200 text-sm border border-white/20 hover:bg-white/20">外部链接</a>
              </div>
            )}
            <div className="mt-6">
              <Link to="/cases" className="px-4 py-2 rounded-lg bg-white/10 text-slate-200 text-sm border border-white/20 hover:bg-white/20">返回案例列表</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default CaseDetail;
