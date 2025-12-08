
import React, { useEffect, useRef } from 'react';

const CosmicRing: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let active = true;

    // Resize handler
    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Interaction variables
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    // Configuration
    const PARTICLE_COUNT = 800;
    const CONNECTION_DISTANCE = 120;
    const CONNECT_DIST_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE; // Pre-calculate square
    const COLORS = ['#3b82f6', '#06b6d4', '#8b5cf6', '#ffffff'];

    class Particle {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      size: number;
      color: string;
      isHub: boolean; // Optimization: Only hubs connect lines
      
      // Orbit parameters
      radius: number;
      angle: number;
      speed: number;
      offsetY: number;

      constructor() {
        this.size = Math.random() * 2;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        // Approx 15% of particles are "Hubs" that form connections. 
        // This reduces line calculation complexity from O(N^2) to O(N * 0.15N)
        this.isHub = Math.random() > 0.85; 
        
        this.angle = Math.random() * Math.PI * 2;
        
        // Distribution: Spiral Galaxy with central density
        const r = Math.random(); 
        this.radius = 50 + Math.pow(r, 2) * 900; // Wide spread
        
        this.offsetY = (Math.random() - 0.5) * 250; 
        this.speed = (0.001 + Math.random() * 0.002) * (500 / (this.radius + 100));
        
        this.updatePosition();
      }

      updatePosition() {
        const armOffset = this.radius * 0.002; 
        const currentAngle = this.angle + armOffset;

        const px = Math.cos(currentAngle) * this.radius;
        const pz = Math.sin(currentAngle) * this.radius;
        const py = this.offsetY;

        // Rotation Matrix
        // X-Axis
        let y1 = py * Math.cos(rotationX) - pz * Math.sin(rotationX);
        let z1 = py * Math.sin(rotationX) + pz * Math.cos(rotationX);
        
        // Y-Axis
        let x2 = px * Math.cos(rotationY) - z1 * Math.sin(rotationY);
        let z2 = px * Math.sin(rotationY) + z1 * Math.cos(rotationY);

        this.x = x2;
        this.y = y1;
        this.z = z2;
      }

      update() {
        this.angle += this.speed;
        this.updatePosition();
      }

      draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
        const fov = 600;
        const scale = fov / (fov + this.z);

        if (scale < 0) return null;

        const x2d = this.x * scale + centerX;
        const y2d = this.y * scale + centerY;
        
        // Don't draw if off screen
        if (x2d < 0 || x2d > width || y2d < 0 || y2d > height) return null;

        const s2d = this.size * scale;

        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.min(1, scale * 1.5); // Fade distant particles
        ctx.beginPath();
        ctx.arc(x2d, y2d, s2d, 0, Math.PI * 2);
        ctx.fill();
        
        return { x: x2d, y: y2d, p: this, scale };
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!active) {
        requestAnimationFrame(animate);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      
      // Smooth rotation dampening
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;
      
      // Auto rotation drift
      targetRotationY += 0.0015;

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Update and Draw Particles
      // We start fresh every frame. No sorting for z-index on dots to save CPU, 
      // visual difference is negligible for small dots.
      const renderedPoints: {x: number, y: number, p: Particle}[] = [];
      
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.update();
        const point = p.draw(ctx, centerX, centerY);
        if (point) {
            renderedPoints.push(point);
        }
      }

      // 2. Draw Connections (Spatial Hash Optimized)
      // Only Hubs look for neighbors.
      ctx.lineWidth = 0.5;

      const CELL = CONNECTION_DISTANCE;
      const grid = new Map<string, number[]>();
      const rLen = renderedPoints.length;

      for (let i = 0; i < rLen; i++) {
        const cX = Math.floor(renderedPoints[i].x / CELL);
        const cY = Math.floor(renderedPoints[i].y / CELL);
        const key = cX + ':' + cY;
        const bucket = grid.get(key);
        if (bucket) bucket.push(i); else grid.set(key, [i]);
      }

      for (let i = 0; i < rLen; i++) {
        const p1 = renderedPoints[i];
        if (!p1.p.isHub || p1.p.z > 300) continue;

        const cX = Math.floor(p1.x / CELL);
        const cY = Math.floor(p1.y / CELL);

        for (let gx = cX - 1; gx <= cX + 1; gx++) {
          for (let gy = cY - 1; gy <= cY + 1; gy++) {
            const key = gx + ':' + gy;
            const bucket = grid.get(key);
            if (!bucket) continue;

            for (let bi = 0; bi < bucket.length; bi++) {
              const j = bucket[bi];
              if (i === j) continue;
              const p2 = renderedPoints[j];

              const dx = p1.x - p2.x;
              if (dx > CONNECTION_DISTANCE || dx < -CONNECTION_DISTANCE) continue;
              const dy = p1.y - p2.y;
              if (dy > CONNECTION_DISTANCE || dy < -CONNECTION_DISTANCE) continue;
              const distSq = dx * dx + dy * dy;
              if (distSq < CONNECT_DIST_SQ) {
                const alpha = (1 - distSq / CONNECT_DIST_SQ) * 0.25;
                if (alpha > 0.01) {
                  ctx.strokeStyle = `rgba(100, 200, 255, ${alpha})`;
                  ctx.beginPath();
                  ctx.moveTo(p1.x, p1.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.stroke();
                }
              }
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
        const nx = (e.clientX / width) * 2 - 1;
        const ny = (e.clientY / height) * 2 - 1;

        // Interactive tilt
        targetRotationY += nx * 0.05;
        targetRotationX = ny * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pause when Hero is off-screen or page hidden
    const io = new IntersectionObserver((entries) => {
      active = entries[0]?.isIntersecting ?? true;
    }, { threshold: 0.05 });
    io.observe(canvas);

    const onVisibility = () => {
      active = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('visibilitychange', onVisibility);
        io.disconnect();
        cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block"
    />
  );
};

export default CosmicRing;
