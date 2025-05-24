import React, { useRef, useEffect, useState } from 'react';
import './ParticleNetwork.css';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let canvasWidth = 0;
    let canvasHeight = 0;
    
    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      const rect = container.getBoundingClientRect();
      
      canvasWidth = rect.width;
      canvasHeight = rect.height;
      
      // Set actual canvas size in memory (scaled for high DPI)
      canvas.width = canvasWidth * window.devicePixelRatio;
      canvas.height = canvasHeight * window.devicePixelRatio;
      
      // Scale the drawing context so everything draws at the correct size
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Set the CSS size to fill container completely
      canvas.style.width = canvasWidth + 'px';
      canvas.style.height = canvasHeight + 'px';
      
      // Redistribute particles when canvas resizes
      particles.forEach(particle => {
        if (particle.x > canvasWidth) particle.x = Math.random() * canvasWidth;
        if (particle.y > canvasHeight) particle.y = Math.random() * canvasHeight;
      });
    };

    // Particle system
    const particles = [];
    const particleCount = 60;
    const maxDistance = 150;
    const mouseRadius = 120;

    class Particle {
      constructor() {
        this.hue = Math.random() * 60 + 200; // Blue to purple range
        this.reset();
      }

      reset() {
        // Ensure particles use current canvas dimensions
        this.x = Math.random() * Math.max(canvasWidth, 100);
        this.y = Math.random() * Math.max(canvasHeight, 100);
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 3 + 1;
        this.originalRadius = this.radius;
        this.opacity = Math.random() * 0.6 + 0.4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges with some randomness
        if (this.x < 0 || this.x > canvasWidth) {
          this.vx *= -0.8;
          this.vx += (Math.random() - 0.5) * 0.2;
        }
        if (this.y < 0 || this.y > canvasHeight) {
          this.vy *= -0.8;
          this.vy += (Math.random() - 0.5) * 0.2;
        }

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(canvasWidth, this.x));
        this.y = Math.max(0, Math.min(canvasHeight, this.y));

        // Mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius && isHovering) {
          // Attract to mouse with varying force
          const force = (mouseRadius - distance) / mouseRadius;
          this.vx += (dx / distance) * force * 0.02;
          this.vy += (dy / distance) * force * 0.02;
          this.radius = this.originalRadius * (1 + force * 0.5);
          this.opacity = Math.min(1, this.opacity + force * 0.3);
        } else {
          this.radius = this.originalRadius;
          this.opacity = Math.max(0.4, this.opacity - 0.01);
        }

        // Add some drift
        this.vx += (Math.random() - 0.5) * 0.01;
        this.vy += (Math.random() - 0.5) * 0.01;

        // Damping
        this.vx *= 0.995;
        this.vy *= 0.995;
      }

      draw() {
        // Main particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity * 0.1})`;
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      if (canvasWidth <= 0 || canvasHeight <= 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Clear canvas with trailing effect
      ctx.fillStyle = 'rgba(15, 15, 35, 0.05)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.4;
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `hsla(${particles[i].hue}, 70%, 60%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${particles[j].hue}, 70%, 60%, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      if (isHovering) {
        particles.forEach(particle => {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius) {
            const opacity = (1 - distance / mouseRadius) * 0.6;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `hsla(280, 70%, 60%, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });

        // Draw mouse node with pulsing effect
        const time = Date.now() * 0.005;
        const pulseRadius = 8 + Math.sin(time) * 3;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(280, 70%, 60%, 0.8)';
        ctx.fill();
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, pulseRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(280, 70%, 60%, 0.2)';
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Setup with proper timing
    const setup = () => {
      resizeCanvas();
      initParticles();
      animate();
    };

    // Use ResizeObserver for better container size detection
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    
    resizeObserver.observe(canvas.parentElement);

    // Initial setup with delay
    const timeoutId = setTimeout(setup, 100);

    // Mouse event handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  return (
    <div className="particle-network">
      <canvas ref={canvasRef} className="particle-canvas" />
    </div>
  );
};

export default ParticleNetwork; 