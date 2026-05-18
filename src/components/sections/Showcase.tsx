import { useState, useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Info, Plus, X } from 'lucide-react'
import showcaseCar from '../../assets/hero_car.png'

interface Hotspot {
  id: number
  top: string
  left: string
  title: string
  desc: string
}

export default function Showcase() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 120, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const bgTranslateX = useTransform(springX, [-0.5, 0.5], [-15, 15])
  const bgTranslateY = useTransform(springY, [-0.5, 0.5], [-10, 10])

  const ringTranslateX = useTransform(springX, [-0.5, 0.5], [30, -30])
  const ringTranslateY = useTransform(springY, [-0.5, 0.5], [20, -20])

  const carTranslateX = useTransform(springX, [-0.5, 0.5], [-25, 25])
  const carTranslateY = useTransform(springY, [-0.5, 0.5], [-15, 15])
  const carRotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const carRotateY = useTransform(springX, [-0.5, 0.5], [-12, 12])

  const shadowTranslateX = useTransform(springX, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5

    mouseX.set(relativeX)
    mouseY.set(relativeY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const hotspots: Hotspot[] = [
    {
      id: 1,
      top: '55%',
      left: '23%',
      title: 'Đèn Pha LED Laser Thông Minh',
      desc: 'Cụm đèn pha laser ma trận thông minh quét đường đi chuẩn xác lên tới 600m, tự động giảm cường độ sáng tránh chói mắt xe ngược chiều và tích hợp đèn chào mừng ký tự chuyển động.',
    },
    {
      id: 2,
      top: '63%',
      left: '60%',
      title: 'Mâm Carbon Khí Động Học Chủ Động',
      desc: 'Mâm xe đúc hoàn toàn từ sợi carbon chịu lực siêu nhẹ, tích hợp cánh gió điều khiển điện tử tự động thu hẹp hoặc mở rộng khoảng gió để tăng hiệu năng bám đường hoặc tối ưu phạm vi hoạt động.',
    },
    {
      id: 3,
      top: '42%',
      left: '36%',
      title: 'Gương Kính Điện Tử HDR',
      desc: 'Gạt bỏ gương vật lý cồng kềnh, camera góc siêu rộng HDR kết hợp cảm biến AI truyền tải hình ảnh thời gian thực không độ trễ lên màn hình cong bên trong khoang cabin, giảm sức cản không khí đi 8%.',
    },
  ]

  return (
    <section
      id="showroom"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="showcase-section"
    >
      <div className="container-luxury">
        {/* Header section info */}
        <div className="showcase-header">
          <div>
            <span className="section-label">
              Interactive Experience
            </span>
            <h2 className="section-title">
              SÂN KHẤU TƯƠNG TÁC 2.5D
            </h2>
          </div>
          <p className="section-desc">
            Di chuyển chuột của bạn qua chiếc xe để trải nghiệm hiệu ứng không gian 2.5D Parallax. Nhấp vào các điểm chạm để khai phá các trang bị tối tân bậc nhất.
          </p>
        </div>

        {/* Main Interactive Stage Container */}
        <div className="showcase-stage">
          
          {/* Layer 1: Background grid pattern */}
          <motion.div
            style={{ x: bgTranslateX, y: bgTranslateY }}
            className="showcase-grid-bg"
          ></motion.div>

          {/* Layer 2: Neon ambient circular glow behind car */}
          <motion.div
            style={{ x: ringTranslateX, y: ringTranslateY }}
            className="showcase-circle-neon"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          ></motion.div>
          
          <motion.div
            style={{ x: ringTranslateX, y: ringTranslateY, position: 'absolute', width: '200px', height: '200px', backgroundColor: 'var(--accent-cyan)', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.1, pointerEvents: 'none', zIndex: 0 }}
          ></motion.div>

          {/* Layer 3: Under Car Glowing Shadow */}
          <motion.div
            style={{ x: shadowTranslateX, position: 'absolute', bottom: '22%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '30px', background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,242,254,0.25) 0%, rgba(0,0,0,0) 100%)', pointerEvents: 'none', zIndex: 0 }}
          ></motion.div>

          {/* Layer 4: Interactive Main Car Layer */}
          <motion.div
            style={{
              x: carTranslateX,
              y: carTranslateY,
              rotateX: carRotateX,
              rotateY: carRotateY,
              perspective: 1000,
            }}
            className="showcase-car-wrapper"
          >
            {/* Main Car Asset */}
            <img
              src={showcaseCar}
              alt="AETHER EV-9 Showcase"
              className="showcase-car-img"
            />

            {/* Interactive hotspot buttons pinned to the car */}
            {hotspots.map((hs) => (
              <button
                key={hs.id}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveHotspot(hs)
                }}
                style={{ top: hs.top, left: hs.left }}
                className="hotspot-trigger"
              >
                <div className="hotspot-pulse"></div>
              </button>
            ))}
          </motion.div>

          {/* Floating Hotspot Details Card */}
          <div className="hotspot-details-overlay">
            {activeHotspot && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="hotspot-card glass-panel"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="hotspot-card-close"
                  aria-label="Close details"
                >
                  <X size={16} />
                </button>

                <div className="hotspot-card-header">
                  <Info size={14} />
                  <span>TECH SPEC DETECTED</span>
                </div>

                <h3>
                  {activeHotspot.title}
                </h3>
                
                <p>
                  {activeHotspot.desc}
                </p>
              </motion.div>
            )}
          </div>

          {/* Ambient hint on bottom center */}
          <div className="showcase-stage-footer">
            <Plus size={10} style={{ color: 'var(--accent-cyan)' }} />
            <span>CYBERNETIC CHASSIS EV-9</span>
          </div>
        </div>
      </div>
    </section>
  )
}
