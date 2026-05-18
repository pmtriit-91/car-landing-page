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

  return (
    <section id="hero" className="hero-section">
      {/* Background Ambient Lights */}
      <div 
        className="ambient-glow ambient-cyan" 
        style={{ top: '25%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.08 }}
      ></div>
      <div 
        className="ambient-glow ambient-crimson" 
        style={{ bottom: 0, right: 0, opacity: 0.05 }}
      ></div>

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

      {/* Hero Central Car Image */}
      <div className="hero-car-stage">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.6 }}
          style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          {/* Subtle light glow behind car */}
          <div className="hero-car-glow"></div>

          {/* Masterpiece Car Image */}
          <img
            src={heroCar}
            alt="AETHER EV-9 Hypercar"
            className="hero-car-image"
          />

          {/* Under car ambient shadow reflection */}
          <div className="hero-car-shadow"></div>
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
