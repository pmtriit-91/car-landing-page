import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import heroCar from '../../assets/hero_car.png'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  }

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  }

  // Create an array of 20 atmospheric dust particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 8,
    yDistance: -(Math.random() * 150 + 100)
  }))

  return (
    <section id="hero" className="hero-section" style={{ perspective: '1000px' }}>
      {/* Background Ambient Lights */}
      <div 
        className="ambient-glow ambient-cyan" 
        style={{ top: '25%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.08 }}
      ></div>
      <div 
        className="ambient-glow ambient-crimson" 
        style={{ bottom: 0, right: 0, opacity: 0.05 }}
      ></div>

      {/* Floating Cosmic Dust Particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{
              opacity: [0, 0.4, 0.4, 0],
              y: p.yDistance,
              x: [0, Math.random() * 40 - 20, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 242, 254, 0.35)',
              filter: 'blur(0.5px)',
              boxShadow: '0 0 10px rgba(0, 242, 254, 0.5)'
            }}
          />
        ))}
      </div>

      {/* Top Floating Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-luxury hero-text-wrap"
      >
        <motion.span
          variants={childVariants}
          className="hero-subtitle-tag glow-text-cyan"
        >
          Khai Phá Kỷ Nguyên Số Mới
        </motion.span>

        <motion.h1
          variants={childVariants}
          className="hero-title-main"
          style={{ letterSpacing: '-0.03em' }}
        >
          AETHER <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(to right, #ffffff, #94a3b8, var(--accent-cyan))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>EV-9</span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="hero-desc-para"
        >
          Khí Động Học Chủ Động. Cabin Độc Bản AI. Trái Tim Điện 1200 Mã Lực.
        </motion.p>
      </motion.div>

      {/* Hero Central Car Image with Parallax & Light Sweeps */}
      <div className="hero-car-stage">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 70, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.5 }}
          style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          {/* Subtle light glow behind car */}
          <div className="hero-car-glow"></div>

          {/* Masterpiece Car Image with slow subtle infinite float */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}
          >
            <img
              src={heroCar}
              alt="AETHER EV-9 Hypercar"
              className="hero-car-image"
              style={{ filter: 'drop-shadow(0 15px 45px rgba(0, 242, 254, 0.15))' }}
            />

            {/* Cinematic light sweep overlay reflection */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 5, ease: [0.25, 1, 0.5, 1] }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '35%',
                background: 'linear-gradient(90deg, transparent, rgba(0, 242, 254, 0.18), rgba(255, 255, 255, 0.28), rgba(0, 242, 254, 0.18), transparent)',
                transform: 'skewX(-25deg)',
                mixBlendMode: 'screen',
                pointerEvents: 'none',
                zIndex: 10
              }}
            />
          </motion.div>

          {/* Under car ambient shadow reflection */}
          <motion.div 
            animate={{ scale: [0.95, 1.03, 0.95] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hero-car-shadow"
          ></motion.div>
        </motion.div>
      </div>

      {/* Bottom Row - Features summary & Scroll indicator */}
      <div className="container-luxury">
        <div className="hero-metrics-bar">
          <div className="hero-metrics-group">
            <div className="hero-metric-item">
              <h4>Gia Tốc</h4>
              <p>0-100 km/h / 1.89s</p>
            </div>
            <div className="hero-metric-item">
              <h4>Hành Trình</h4>
              <p>950 km (WLTP)</p>
            </div>
            <div className="hero-metric-item">
              <h4>Công Hiến</h4>
              <p style={{ color: 'var(--accent-cyan)' }}>1200 HP</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.a
            href="#showroom"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="scroll-explore-hint"
          >
            CUỘN ĐỂ KHÁM PHÁ
            <ArrowDown size={13} style={{ color: 'var(--accent-cyan)' }} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
