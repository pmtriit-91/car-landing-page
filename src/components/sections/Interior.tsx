import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sliders, Sun, ShieldCheck, Activity } from 'lucide-react'
import interiorImg from '../../assets/car_interior.png'

interface AmbientColor {
  name: string
  label: string
  hex: string
  glowClass: string
  mode: string
  desc: string
}

export default function Interior() {
  const colors: AmbientColor[] = [
    {
      name: 'Cyan',
      label: 'Cyber Cyan',
      hex: '#00f2fe',
      glowClass: 'glow-text-cyan',
      mode: 'Holographic HUD / Autonomous L5 Driving',
      desc: 'Kích hoạt giao diện thực tế tăng cường lập thể HUD 3D màu xanh neon. Bản đồ không gian thời gian thực hiển thị nổi trên kính lái, kích hoạt toàn bộ cảm biến tự lái L5 và trợ lý ảo thông minh AETHER.'
    },
    {
      name: 'Crimson',
      label: 'Deep Crimson',
      hex: '#ff0055',
      glowClass: 'glow-text-crimson',
      mode: 'Performance Mode / Full Engine Overdrive',
      desc: 'Chuyển đổi toàn bộ giao diện điều khiển sang màu đỏ rực lửa. Toàn bộ công suất 1200 mã lực được giải phóng, hạ thấp trọng tâm treo xuống sát đất mặt đua, tăng lực phản hồi vô lăng và mở cánh gió đuôi xe.'
    },
    {
      name: 'Amber',
      label: 'Solar Amber',
      hex: '#ffa300',
      glowClass: 'glow-text-amber',
      mode: 'Long-Range Eco / Solid-State Optimization',
      desc: 'Thiết lập buồng lái sang tông màu vàng hổ phách thư giãn. Tối ưu hóa tối đa lượng pin tiêu hao bằng cách phân bổ lực phanh tái sinh chủ động, giảm tải điều hòa và điều chỉnh mô-men xoắn hành trình êm dịu.'
    },
    {
      name: 'Emerald',
      label: 'Eco Emerald',
      hex: '#00e676',
      glowClass: 'hud-dot',
      mode: 'Bio-Cabin Air / Ionizing Regeneration',
      desc: 'Bao phủ khoang lái bằng nguồn ánh sáng xanh ngọc bích êm dịu. Hệ thống kích hoạt máy ion hóa lọc hạt bụi siêu vi PM2.5, phun hương tinh dầu thông tuyết tái tạo tinh thần và giảm nhịp tim tài xế.'
    }
  ]

  const [activeColor, setActiveColor] = useState<AmbientColor>(colors[0])

  return (
    <section id="interior" className="section-full interior-section">
      <div className="container-luxury">
        <div className="interior-row">
          
          {/* Left Side: Immersive Cockpit render with real-time ambient tint blend overlays */}
          <div className="interior-media-side">
            <div className="interior-img-box">
              
              {/* Color Blend Layer 1 (mix-blend-mode: color) */}
              <div
                className="interior-blend-layer"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${activeColor.hex} 0%, transparent 80%)`,
                  opacity: 0.55
                }}
              ></div>

              {/* Color Blend Layer 2 (mix-blend-mode: screen) */}
              <div
                className="interior-blend-layer-screen"
                style={{
                  background: `linear-gradient(to top, ${activeColor.hex} 0%, transparent 100%)`,
                  opacity: 0.12
                }}
              ></div>

              {/* Base Premium High-Tech Cockpit Image */}
              <img
                src={interiorImg}
                alt="AETHER EV-9 Cockpit Cabin"
                className="interior-img"
              />

              {/* HUD Dynamic Driving Mode Tag Overlay */}
              <div className="interior-tag-hud">
                <div
                  className="hud-dot"
                  style={{
                    backgroundColor: activeColor.hex,
                    boxShadow: `0 0 10px ${activeColor.hex}`
                  }}
                ></div>
                <span className="hud-text">
                  AMBIENT GLOW STATE: {activeColor.label.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Driving Modes & Ambient Lighting Control Deck */}
          <div className="interior-info-side">
            <div>
              <span className="section-label">
                IMMERSIVE COCKPIT
              </span>
              
              <h2 className="section-title" style={{ marginTop: '16px', marginBottom: '24px' }}>
                HỆ THỐNG ÁNH SÁNG SINH HỌC
              </h2>
              
              <p className="section-desc" style={{ maxWidth: '100%' }}>
                Cá nhân hóa mọi hành trình thông qua dải ánh sáng LED bao phủ 360 độ trong cabin. Mỗi màu sắc không chỉ thay đổi mood mà còn chuyển đổi sang chế độ vận hành cơ học đồng bộ hoàn hảo.
              </p>
            </div>

            {/* Premium circular color pickers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.15em', color: 'var(--text-dark)', textTransform: 'uppercase' }}>
                CHỌN CHẾ ĐỘ ÁNH SÁNG
              </span>
              
              <div className="color-picker-group">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveColor(c)}
                    className="color-picker-btn"
                    style={{
                      borderColor: activeColor.name === c.name ? c.hex : 'transparent',
                    }}
                    aria-label={`Select ${c.name} ambient lighting`}
                  >
                    <div
                      className="color-picker-dot"
                      style={{
                        backgroundColor: c.hex,
                        boxShadow: activeColor.name === c.name ? `0 0 15px ${c.hex}` : 'none'
                      }}
                    ></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Sync driving modes specifications card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeColor.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="interior-detail-panel glass-panel"
                style={{ borderLeft: `3px solid ${activeColor.hex}` }}
              >
                <div className="interior-detail-header" style={{ color: activeColor.hex }}>
                  {activeColor.name === 'Cyan' && <Sliders size={14} />}
                  {activeColor.name === 'Crimson' && <Activity size={14} />}
                  {activeColor.name === 'Amber' && <Sun size={14} />}
                  {activeColor.name === 'Emerald' && <ShieldCheck size={14} />}
                  <span>{activeColor.mode}</span>
                </div>

                <p className="interior-detail-desc">
                  {activeColor.desc}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  )
}
