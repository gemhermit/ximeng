import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (!dot || !outline) return;

    let tx = 0, ty = 0;
    let ox = 0, oy = 0;
    let rafId: number | null = null;

    const moveCursor = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      if (rafId == null) rafId = requestAnimationFrame(tick);
    };

    const tick = () => {
      ox += (tx - ox) * 0.2;
      oy += (ty - oy) * 0.2;
      outline.style.transform = `translate(${ox}px, ${oy}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.hoverable') || target.tagName === 'A' || target.tagName === 'BUTTON') {
        document.body.classList.add('hovering');
        outline.style.width = '60px';
        outline.style.height = '60px';
        outline.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        outline.style.borderColor = 'transparent';
        outline.style.backdropFilter = 'blur(2px)';
      } else {
        document.body.classList.remove('hovering');
        outline.style.width = '50px';
        outline.style.height = '50px';
        outline.style.backgroundColor = 'transparent';
        outline.style.borderColor = 'rgba(59, 130, 246, 0.5)';
        outline.style.backdropFilter = 'none';
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-[20px] h-[20px] bg-blue-500 rounded-full z-[9999] pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"></div>
      <div ref={outlineRef} className="fixed top-0 left-0 w-[50px] h-[50px] border border-blue-500/50 rounded-full z-[9999] pointer-events-none transition-[width,height,background-color] duration-200 transform -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
};

export default Cursor;
