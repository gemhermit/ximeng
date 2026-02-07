
import React from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from '../data/jobs';

const Join: React.FC = () => {
  return (
    <section id="join" className="py-24 md:py-32 relative bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">加入 羲梦科技</h2>
          <p className="text-gray-400 mt-4">寻找那些不安于现状的灵魂</p>
        </div>

        {/* Process Steps - Hidden on small mobile, visible on md+ */}
        <div className="mb-20 relative max-w-4xl mx-auto hidden md:block">
           <div className="absolute top-5 left-16 right-16 h-0.5 bg-white/10 -z-10 transform -translate-y-1/2"></div>
           <div className="flex justify-between">
              {['投递简历', '专业初试', '挑战任务', '发放 Offer'].map((step, i) => (
                 <div key={i} className="text-center w-32">
                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold mb-2 ${i===0 ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-slate-800 border border-white/20'}`}>
                        {i + 1}
                    </div>
                    <div className="text-sm text-gray-400">{step}</div>
                 </div>
              ))}
           </div>
        </div>

        <div className="max-w-6xl mx-auto">
           <h3 className="text-xl font-bold text-center mb-8"><span className="border-b-4 border-purple-500 pb-2">热招职位</span></h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobsData.map((job, i) => (
                  <Link to={`/careers/${job.id}`} key={i} className={`group flex flex-col justify-between p-6 rounded-xl bg-white/5 hover:bg-${job.color}-600 hover:scale-[1.02] transition-all duration-300 hoverable cursor-pointer border border-white/5 shadow-lg`}>
                     <div className="mb-4">
                        <h4 className="font-bold text-lg mb-1">{job.title}</h4>
                        <p className={`text-sm text-gray-400 group-hover:text-${job.color}-200`}>{job.dept} | {job.loc} | {job.salary}</p>
                     </div>
                     <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10 group-hover:border-white/20">
                        <span className="text-xs text-gray-500 group-hover:text-white">全职</span>
                        <i className="fas fa-arrow-right text-gray-500 group-hover:text-white transform group-hover:translate-x-2 transition-transform"></i>
                     </div>
                  </Link>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
