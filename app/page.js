'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [activeDemo, setActiveDemo] = useState({});

  const toggleDemo = (id) => {
    setActiveDemo(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const transitions = [
    {
      id: 'morphing-blob',
      title: 'Morphing Blob Transition',
      description: 'Smooth blob morphing with elastic easing and color transitions. Perfect for hero sections and call-to-action buttons.',
      css: `.morphing-blob {
  position: relative;
  padding: 20px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50px;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.morphing-blob::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55),
              height 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.morphing-blob:hover {
  border-radius: 20px;
  transform: scale(1.1);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.morphing-blob:hover::before {
  width: 300px;
  height: 300px;
}`
    },
    {
      id: 'liquid-fill',
      title: 'Liquid Fill Animation',
      description: 'Water-like fill effect that flows from bottom to top with wave distortion. Great for loading states and progress indicators.',
      css: `.liquid-fill {
  position: relative;
  padding: 20px 40px;
  background: transparent;
  border: 3px solid #00d4ff;
  color: #00d4ff;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.6s ease;
}

.liquid-fill::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: linear-gradient(180deg, #00d4ff 0%, #0099ff 100%);
  transition: height 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
  z-index: -1;
}

.liquid-fill::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  animation: wave 3s ease-in-out infinite;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.liquid-fill:hover {
  color: white;
}

.liquid-fill:hover::before {
  height: 100%;
}

.liquid-fill:hover::after {
  opacity: 1;
}

@keyframes wave {
  0%, 100% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(50%) translateY(-10px); }
}`
    },
    {
      id: 'viscous-flow',
      title: 'Viscous Flow Effect',
      description: 'Honey-like slow flowing transition with multiple layers creating depth. Ideal for premium product showcases.',
      css: `.viscous-flow {
  position: relative;
  padding: 20px 40px;
  background: #1a1a1a;
  border: none;
  color: #ffd700;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
}

.viscous-flow::before,
.viscous-flow::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              height 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 1.2s ease;
  opacity: 0;
}

.viscous-flow::before {
  background: radial-gradient(circle, #ffd700 0%, #ffed4e 100%);
  transition-delay: 0s;
}

.viscous-flow::after {
  background: radial-gradient(circle, #ffed4e 0%, #ffd700 100%);
  transition-delay: 0.2s;
}

.viscous-flow:hover::before {
  width: 400px;
  height: 400px;
  opacity: 0.3;
}

.viscous-flow:hover::after {
  width: 350px;
  height: 350px;
  opacity: 0.2;
}

.viscous-flow:hover {
  color: #1a1a1a;
  transform: scale(1.05);
}`
    },
    {
      id: 'gooey-merge',
      title: 'Gooey Merge Transition',
      description: 'SVG filter-based gooey effect that merges and separates elements. Creates organic, blob-like interactions.',
      css: `.gooey-container {
  filter: url(#gooey);
}

.gooey-merge {
  position: relative;
  padding: 20px 40px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.gooey-merge::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -20px;
  width: 20px;
  height: 20px;
  background: #f5576c;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.gooey-merge:hover::before {
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

.gooey-merge:hover {
  transform: scale(1.1);
}

/* SVG Filter */
<svg style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="gooey">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />
      <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
    </filter>
  </defs>
</svg>`
    },
    {
      id: 'ripple-splash',
      title: 'Ripple Splash Effect',
      description: 'Multiple concentric ripples expanding outward like water droplets. Perfect for interactive elements and notifications.',
      css: `.ripple-splash {
  position: relative;
  padding: 20px 40px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.ripple-splash::before,
.ripple-splash::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: width 0.8s ease-out, height 0.8s ease-out, opacity 0.8s ease-out;
}

.ripple-splash::after {
  transition-delay: 0.15s;
  border-color: rgba(255, 255, 255, 0.4);
}

.ripple-splash:hover::before {
  width: 300px;
  height: 300px;
  opacity: 0;
}

.ripple-splash:hover::after {
  width: 350px;
  height: 350px;
  opacity: 0;
}

.ripple-splash:hover {
  transform: scale(0.95);
}`
    },
    {
      id: 'melting-drip',
      title: 'Melting Drip Animation',
      description: 'Simulates melting ice cream or wax with downward drip effects. Unique for artistic and creative interfaces.',
      css: `.melting-drip {
  position: relative;
  padding: 20px 40px;
  background: linear-gradient(180deg, #ff6b6b 0%, #ff8e53 100%);
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  overflow: visible;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.melting-drip::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 20px;
  height: 0;
  background: linear-gradient(180deg, #ff8e53 0%, transparent 100%);
  border-radius: 0 0 50% 50%;
  transform: translateX(-50%);
  transition: height 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55),
              width 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.melting-drip:hover {
  border-radius: 20px 20px 0 0;
  transform: translateY(-5px);
}

.melting-drip:hover::before {
  height: 30px;
  width: 40px;
}`
    },
    {
      id: 'bubble-pop',
      title: 'Bubble Pop Transition',
      description: 'Playful bubble expansion that pops on interaction. Great for fun, engaging user experiences.',
      css: `.bubble-pop {
  position: relative;
  padding: 20px 40px;
  background: radial-gradient(circle, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  overflow: hidden;
}

.bubble-pop::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
  transform: scale(0);
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.bubble-pop:hover {
  border-radius: 20%;
  transform: scale(1.2);
}

.bubble-pop:hover::before {
  transform: scale(1);
  animation: bubble-shine 0.6s ease-out;
}

@keyframes bubble-shine {
  0% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: scale(1.5) rotate(180deg); }
}`
    },
    {
      id: 'elastic-stretch',
      title: 'Elastic Stretch Effect',
      description: 'Rubber band-like stretching with overshoot animation. Adds playful physics to interactions.',
      css: `.elastic-stretch {
  position: relative;
  padding: 20px 40px;
  background: linear-gradient(135deg, #fc466b 0%, #3f5efb 100%);
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.elastic-stretch:hover {
  transform: scaleX(1.3) scaleY(0.9);
  border-radius: 50px;
}

.elastic-stretch:active {
  transform: scaleX(0.9) scaleY(1.1);
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`
    },
    {
      id: 'gradient-flow',
      title: 'Gradient Flow Animation',
      description: 'Smooth flowing gradient that moves through multiple color stops. Creates dynamic, living backgrounds.',
      css: `.gradient-flow {
  position: relative;
  padding: 20px 40px;
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #4facfe);
  background-size: 400% 400%;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  animation: gradient-shift 3s ease infinite;
  transition: all 0.5s ease;
}

.gradient-flow:hover {
  animation: gradient-shift 1s ease infinite;
  transform: scale(1.05);
  box-shadow: 0 10px 40px rgba(127, 115, 245, 0.4);
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`
    },
    {
      id: 'smoke-disperse',
      title: 'Smoke Disperse Effect',
      description: 'Ethereal smoke-like particles dispersing outward. Perfect for mysterious or magical themes.',
      css: `.smoke-disperse {
  position: relative;
  padding: 20px 40px;
  background: linear-gradient(135deg, #434343 0%, #000000 100%);
  border: 2px solid #666;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s ease;
}

.smoke-disperse::before,
.smoke-disperse::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 1;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.smoke-disperse::after {
  transition-delay: 0.2s;
  width: 80px;
  height: 80px;
}

.smoke-disperse:hover::before {
  transform: translate(-80%, -80%) scale(2);
  opacity: 0;
}

.smoke-disperse:hover::after {
  transform: translate(80%, 80%) scale(2.5);
  opacity: 0;
}

.smoke-disperse:hover {
  border-color: #fff;
  box-shadow: 0 0 30px rgba(255,255,255,0.3);
}`
    },
    {
      id: 'neon-bleed',
      title: 'Neon Bleed Transition',
      description: 'Neon glow that bleeds beyond boundaries with chromatic aberration. Cyberpunk aesthetic for modern designs.',
      css: `.neon-bleed {
  position: relative;
  padding: 20px 40px;
  background: #0a0a0a;
  border: 2px solid #0ff;
  color: #0ff;
  font-size: 18px;
  cursor: pointer;
  text-shadow: 0 0 10px #0ff;
  transition: all 0.5s ease;
}

.neon-bleed::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0ff;
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.5s ease;
  z-index: -1;
}

.neon-bleed:hover {
  color: #fff;
  border-color: #f0f;
  text-shadow: 0 0 20px #0ff, 0 0 40px #0ff, 2px 0 0 #f0f, -2px 0 0 #0ff;
  box-shadow: 0 0 20px #0ff, 0 0 40px #0ff, inset 0 0 20px rgba(0,255,255,0.2);
}

.neon-bleed:hover::before {
  opacity: 0.3;
}`
    },
    {
      id: 'ink-spread',
      title: 'Ink Spread in Water',
      description: 'Organic ink drop spreading effect with multiple color channels. Artistic and sophisticated animation.',
      css: `.ink-spread {
  position: relative;
  padding: 20px 40px;
  background: #f5f5f5;
  border: 2px solid #333;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.8s ease;
}

.ink-spread::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, #6a11cb 0%, #2575fc 100%);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 0.9;
}

.ink-spread:hover::before {
  transform: translate(-50%, -50%) scale(50);
}

.ink-spread:hover {
  color: white;
  border-color: #2575fc;
}`
    }
  ];

  return (
    <div className={styles.container}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
          </filter>
        </defs>
      </svg>

      <header className={styles.header}>
        <h1 className={styles.title}>Premium Liquid Transitions</h1>
        <p className={styles.subtitle}>Top-class CSS transitions that make websites cooler</p>
      </header>

      <div className={styles.grid}>
        {transitions.map((transition) => (
          <div key={transition.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{transition.title}</h2>
            <p className={styles.cardDescription}>{transition.description}</p>

            <div className={styles.demoSection}>
              <div className={styles.demoContainer}>
                <button
                  className={styles[transition.id]}
                  onMouseEnter={() => setActiveDemo(prev => ({ ...prev, [transition.id]: true }))}
                  onMouseLeave={() => setActiveDemo(prev => ({ ...prev, [transition.id]: false }))}
                >
                  Hover Me
                </button>
              </div>
            </div>

            <div className={styles.codeSection}>
              <div className={styles.codeHeader}>
                <span className={styles.codeLabel}>CSS Code</span>
                <button
                  className={styles.copyButton}
                  onClick={() => {
                    navigator.clipboard.writeText(transition.css);
                  }}
                >
                  Copy
                </button>
              </div>
              <pre className={styles.codeBlock}>
                <code>{transition.css}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>Built with Next.js • All transitions are pure CSS • No JavaScript required for effects</p>
      </footer>
    </div>
  );
}
