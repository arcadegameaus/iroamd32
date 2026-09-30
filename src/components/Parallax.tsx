import { useState, useEffect, useRef, ReactNode } from 'react';

interface ParallaxProps {
  src: string;
  alt: string;
  height: string;
  children?: ReactNode;
  speed?: number;
}

export default function Parallax({ src, alt, height, children, speed = 0.4 }: ParallaxProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowH = window.innerHeight;
          if (rect.bottom > 0 && rect.top < windowH) {
            setOffset(rect.top * speed);
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <section ref={ref} className={`relative ${height} overflow-hidden`}>
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offset * -0.3}px) scale(1.15)`,
          willChange: 'transform',
          transition: 'transform 0.05s linear',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      {children}
    </section>
  );
}
