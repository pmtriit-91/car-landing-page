import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Play, RotateCcw } from 'lucide-react'

// Simple count up animator helper component
interface CountUpProps {
  value: number
  duration?: number
  decimals?: number
  suffix?: string
}

function CountUp({ value, duration = 1.5, decimals = 0, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const endValue = value

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      const easedProgress = progress * (2 - progress)
      
      const currentCount = easedProgress * endValue
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration, isInView])

  return (
    <span ref={nodeRef} className="metric-val">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function Performance() {
  const [chargeProgress, setChargeProgress] = useState(10)
  const [isCharging, setIsCharging] = useState(false)
  const batteryRef = useRef<HTMLDivElement>(null)

  const handleChargeSimulation = () => {
    if (isCharging) return
    setIsCharging(true)
    setChargeProgress(10)

    let current = 10
    const interval = setInterval(() => {
      current += 1
      setChargeProgress(current)
      if (current >= 80) {
        clearInterval(interval)
        setIsCharging(false)
      }
    }, 45)
  }

  const handleResetCharge = () => {
    if (isCharging) return
    setChargeProgress(10)
  }

  const metrics = [
    {
      value: 1.89,
      decimals: 2,
      suffix: "s",
      label: "Gia tốc 0-100 km/h",
      desc: "Vượt qua giới hạn vật lý với khối động cơ Tri-Motor siêu dẫn dẫn động 4 bánh chủ động."
    },
    {
      value: 950,
      decimals: 0,
      suffix: " km",
      label: "Phạm vi hoạt động (WLTP)",
      desc: "Khối pin thể rắn thế hệ mới phân bổ trọng lượng tối ưu, giảm hao phí nhiệt năng."
    },
    {
      value: 350,
      decimals: 0,
      suffix: " km/h",
      label: "Tốc độ tối đa lý thuyết",
      desc: "Tinh chỉnh hoàn hảo tỷ số truyền động vi sai và cánh gió chủ động tăng lực bám."
    },
    {
      value: 8,
      decimals: 0,
      suffix: " phút",
      label: "Thời gian sạc nhanh 10-80%",
      desc: "Nhờ kết cấu mạng lưới điện áp siêu cao 800V và cổng sạc lõi lỏng AETHER Supercharge."
    }
  ]

  return (
    <section id="performance" className="section-full performance-section">
      {/* Absolute ambient backlight */}
      <div 
        className="ambient-glow ambient-crimson" 
        style={{ bottom: '25%', left: '50%', transform: 'translateX(-50%)', opacity: 0.05 }}
      ></div>

      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
          <span className="section-label" style={{ color: 'var(--accent-crimson)' }}>
            UNRIVALED PERFORMANCE
          </span>
          <h2 className="section-title" style={{ marginTop: '16px', marginBottom: '24px' }}>
            HIỆU NĂNG PHÁ VỠ GIỚI HẠN
          </h2>
          <p className="section-desc" style={{ maxWidth: '100%' }}>
            Sức mạnh động cơ điện vượt bậc kết hợp thiết kế tối ưu hệ số cản gió giúp AETHER EV-9 thiết lập tiêu chuẩn gia tốc hoàn toàn mới trên đường đua toàn cầu.
          </p>
        </div>

        {/* Technical Metric Cards */}
        <div className="metrics-grid">
          {metrics.map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: index * 0.1 }}
              className="metric-card glass-panel"
            >
              <div>
                <p style={{ display: 'flex', alignItems: 'baseline' }}>
                  <CountUp value={m.value} decimals={m.decimals} suffix={m.suffix} />
                </p>
                <p className="metric-lbl glow-text-crimson">
                  {m.label}
                </p>
              </div>
              <p className="metric-desc">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Battery Charger Simulator Card */}
        <motion.div
          ref={batteryRef}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="battery-card glass-panel"
        >
          {/* Charger left info panel */}
          <div className="battery-info-side">
            <div className="battery-header">
              <Zap size={18} className={isCharging ? "animate-pulse" : ""} />
              <span>ULTRAFAST SUPERCHARGE SIMULATOR</span>
            </div>
            
            <h3>
              TRẠNG THÁI NẠP ĐIỆN SIÊU TỐC
            </h3>
            
            <p>
              Trạm sạc lỏng chủ động AETHER Supercharge truyền dẫn dòng điện sạc thông minh. Hãy nhấn nút kích hoạt mô phỏng để thấy dung lượng pin tăng vọt từ 10% lên 80% chỉ trong chớp mắt.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
              <button
                onClick={handleChargeSimulation}
                disabled={isCharging}
                className="btn-primary"
                style={{
                  background: isCharging ? 'rgba(255,255,255,0.1)' : 'white',
                  color: isCharging ? 'var(--text-secondary)' : 'black',
                  cursor: isCharging ? 'not-allowed' : 'pointer',
                  boxShadow: isCharging ? 'none' : '0 0 20px rgba(255,170,0,0.25)',
                  padding: '12px 24px',
                  borderRadius: '100px'
                }}
              >
                <Play size={12} />
                {isCharging ? "ĐANG NẠP ĐIỆN..." : "KÍCH HOẠT SẠC"}
              </button>

              <button
                onClick={handleResetCharge}
                disabled={isCharging}
                className="btn-secondary"
                style={{ padding: '12px 24px', borderRadius: '100px' }}
              >
                <RotateCcw size={12} />
                ĐẶT LẠI
              </button>
            </div>
          </div>

          {/* Interactive animated battery outline */}
          <div className="battery-sim-side">
            <div className="battery-body-shape">
              {/* Battery Tip */}
              <div className="battery-tip"></div>

              {/* Glowing charging fill */}
              <motion.div
                animate={{
                  width: `${chargeProgress}%`,
                  backgroundColor: chargeProgress < 30 ? 'rgba(255, 0, 85, 0.8)' : chargeProgress < 60 ? 'rgba(255, 170, 0, 0.8)' : 'rgba(0, 242, 254, 0.8)'
                }}
                transition={{ duration: 0.1 }}
                className="battery-charge-fill"
                style={{
                  minWidth: '5%',
                  boxShadow: chargeProgress < 30 ? '0 0 20px rgba(255,0,85,0.3)' : chargeProgress < 60 ? '0 0 20px rgba(255,170,0,0.3)' : '0 0 20px rgba(0,242,254,0.3)'
                }}
              >
                {/* Charging pulse overlay stripes */}
                {isCharging && (
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[size:20px_20px] animate-[chargeStripes_1s_linear_infinite]" style={{ position: 'absolute', inset: 0 }}></div>
                )}
              </motion.div>

              {/* Big central floating percent */}
              <div className="battery-percent-display">
                {chargeProgress}%
              </div>
            </div>

            <div className="battery-status-lbl">
              <span style={{ color: chargeProgress >= 80 ? 'var(--accent-cyan)' : 'inherit', textShadow: chargeProgress >= 80 ? '0 0 10px rgba(0,242,254,0.3)' : 'none' }}>
                TRẠNG THÁI: {isCharging ? "ĐANG NẠP CHỦ ĐỘNG" : chargeProgress >= 80 ? "HOÀN THÀNH 80%" : "ĐÃ KẾT NỐI SẴN SÀNG"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes chargeStripes {
          0% { background-position: 0 0; }
          100% { background-position: 20px 0; }
        }
      `}</style>
    </section>
  )
}
