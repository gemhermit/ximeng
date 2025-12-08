import React, { useEffect, useRef } from 'react';

interface PreloaderProps {
    loading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ loading }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const gsap = (window as any).gsap;

    useEffect(() => {
        if (!loading) {
            const tl = gsap.timeline();
            tl.to(lineRef.current, { width: "100%", duration: 1.2, ease: "power2.inOut" })
              .to(textRef.current, { y: -20, opacity: 0, duration: 0.5 })
              .to(containerRef.current, { height: 0, duration: 0.8, ease: "power4.inOut", display: "none" });
        }
    }, [loading]);

    return (
        <div ref={containerRef} className="fixed inset-0 bg-black z-[10000] flex justify-center items-center overflow-hidden">
            <div className="text-center w-64">
                <div ref={textRef} className="text-4xl font-bold tracking-widest text-white mb-2">
                    羲梦科技
                </div>
                <div ref={lineRef} className="h-[2px] bg-blue-600 mx-auto w-0"></div>
            </div>
        </div>
    );
};

export default Preloader;