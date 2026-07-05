import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import faceSentinelImg from '@/assets/hero/facesentinel.svg';
import harbingerImg from '@/assets/hero/harbinger.svg';
import liveGraphImg from '@/assets/hero/live-graph.svg';
import footballImg from '@/assets/hero/football-analytics.svg';

const PROJECTS = [
  {
    id: 'facesentinel',
    name: 'FaceSentinel',
    tag: 'Biometric Auth Pipeline',
    description:
      'Kafka-native face verification enforcing a sub-350ms SLA under concurrent load, with HMAC-signed audit trails and KEDA-autoscaled Kubernetes deployment.',
    src: faceSentinelImg,
    bg: '#C0623F',
    panel: '#D9805F',
    href: 'https://github.com/TemiKayode/FaceSentinel',
  },
  {
    id: 'harbinger',
    name: 'Harbinger',
    tag: 'OSS Supply Chain Intelligence',
    description:
      'Real-time monitoring across 6 package registries — Kafka to Neo4j to Flink anomaly detection, holding CI/CD in under 15 minutes.',
    src: harbingerImg,
    bg: '#3E7A5D',
    panel: '#559078',
    href: 'https://github.com/TemiKayode/harbinger',
  },
  {
    id: 'live-graph',
    name: 'Live System Intelligence Graph',
    tag: 'Production CI/CD Tooling',
    description:
      'Maps execution traces to source in real time, generating signed Change Impact Certificates in under 60 seconds on every pull request.',
    src: liveGraphImg,
    bg: '#4C4FB0',
    panel: '#6669C4',
    href: 'https://github.com/TemiKayode/live-system-intelligence-graph',
  },
  {
    id: 'football-analytics',
    name: 'Global Football Scouting',
    tag: 'ML Analytics Platform',
    description:
      'Streamlit scouting platform ranking 20,000+ players across 36 leagues with per-90 statistics and ML-driven transfer recommendations.',
    src: footballImg,
    bg: '#2F6690',
    panel: '#4A80AA',
    href: 'https://github.com/TemiKayode/Global-Football-Scouting-Analytics-Platform',
  },
] as const;

const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';

type Role = 'center' | 'left' | 'right' | 'back';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    PROJECTS.forEach((p) => {
      const img = new Image();
      img.src = p.src;
    });
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = useCallback(
    (direction: 'next' | 'prev') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((prev) =>
        direction === 'next' ? (prev + 1) % 4 : (prev + 3) % 4
      );
      window.setTimeout(() => setIsAnimating(false), 650);
    },
    [isAnimating]
  );

  const roleFor = (index: number): Role => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 3) % 4) return 'left';
    if (index === (activeIndex + 1) % 4) return 'right';
    return 'back';
  };

  const roleStyle = (role: Role): React.CSSProperties => {
    switch (role) {
      case 'center':
        return {
          left: '50%',
          bottom: isMobile ? '22%' : 0,
          height: isMobile ? '60%' : '92%',
          transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
          filter: 'blur(0px)',
          opacity: 1,
          zIndex: 20,
        };
      case 'left':
        return {
          left: isMobile ? '20%' : '30%',
          bottom: isMobile ? '32%' : '12%',
          height: isMobile ? '16%' : '28%',
          transform: 'translateX(-50%) scale(1)',
          filter: 'blur(2px)',
          opacity: 0.85,
          zIndex: 10,
        };
      case 'right':
        return {
          left: isMobile ? '80%' : '70%',
          bottom: isMobile ? '32%' : '12%',
          height: isMobile ? '16%' : '28%',
          transform: 'translateX(-50%) scale(1)',
          filter: 'blur(2px)',
          opacity: 0.85,
          zIndex: 10,
        };
      case 'back':
      default:
        return {
          left: '50%',
          bottom: isMobile ? '32%' : '12%',
          height: isMobile ? '13%' : '22%',
          transform: 'translateX(-50%) scale(1)',
          filter: 'blur(4px)',
          opacity: 1,
          zIndex: 5,
        };
    }
  };

  const active = PROJECTS[activeIndex];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: active.bg,
        transition: `background-color 650ms ${EASE}`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none grain-overlay"
          style={{ zIndex: 50, opacity: 0.4 }}
        />

        {/* Giant ghost text */}
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none"
          style={{ zIndex: 2, top: '18%' }}
        >
          <span
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(90px, 28vw, 380px)',
              fontWeight: 900,
              color: '#ffffff',
              opacity: 1,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            TEMI
          </span>
        </div>

        {/* Brand label */}
        <div
          className="absolute top-6 left-4 sm:left-8 text-xs font-semibold uppercase text-white"
          style={{ zIndex: 60, opacity: 0.9, letterSpacing: '0.18em' }}
        >
          Temitayo Kayode
        </div>

        {/* Carousel */}
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          {PROJECTS.map((project, index) => {
            const role = roleFor(index);
            const style = roleStyle(role);
            return (
              <div
                key={project.id}
                style={{
                  position: 'absolute',
                  aspectRatio: '0.6 / 1',
                  transition: `transform 650ms ${EASE}, filter 650ms ${EASE}, opacity 650ms ${EASE}, left 650ms ${EASE}`,
                  willChange: 'transform, filter, opacity',
                  ...style,
                }}
              >
                <img
                  src={project.src}
                  alt={project.name}
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom-left text + nav buttons */}
        <div
          className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24"
          style={{ zIndex: 60, maxWidth: 320 }}
        >
          <p
            className="font-bold uppercase tracking-widest mb-2 sm:mb-3 text-base sm:text-[22px] text-white"
            style={{ opacity: 0.95, letterSpacing: '0.02em' }}
          >
            Featured Systems
          </p>
          <p
            className="hidden sm:block text-xs sm:text-sm text-white mb-4 sm:mb-5"
            style={{ opacity: 0.85, lineHeight: 1.6 }}
          >
            <span className="font-semibold">{active.name}</span> — {active.description}
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate('prev')}
              aria-label="Previous project"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-transparent text-white transition-transform hover:scale-[1.08]"
              style={{
                border: '2px solid #ffffff',
                transitionProperty: 'transform, background-color',
                transitionDuration: '150ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ArrowLeft size={26} strokeWidth={2.25} />
            </button>
            <button
              type="button"
              onClick={() => navigate('next')}
              aria-label="Next project"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-transparent text-white transition-transform hover:scale-[1.08]"
              style={{
                border: '2px solid #ffffff',
                transitionProperty: 'transform, background-color',
                transitionDuration: '150ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ArrowRight size={26} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* Bottom-right link */}
        <a
          href={active.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 flex items-center text-white no-underline uppercase transition-opacity duration-200"
          style={{
            zIndex: 60,
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(20px, 4vw, 56px)',
            fontWeight: 400,
            opacity: 0.95,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.95')}
        >
          View Project
          <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 ml-2" strokeWidth={2.25} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
