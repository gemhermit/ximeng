import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradient?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  gradient = "from-blue-400 via-cyan-400 to-teal-400" 
}) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 border-b border-white/5 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
         <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full animate-pulse"></div>
         <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="inline-block px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs text-gray-400 tracking-widest uppercase">
          {subtitle}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          {gradient === "none" ? (
            <span className="text-white">
              {title}
            </span>
          ) : (
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
              {title}
            </span>
          )}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-8"></div>
      </div>
    </div>
  );
};

export default PageHeader;