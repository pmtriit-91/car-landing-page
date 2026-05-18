import { motion } from 'framer-motion'
import { Cpu, Zap, Compass, Eye } from 'lucide-react'

interface FeatureCardProps {
  icon: any
  title: string
  desc: string
  spanClasses?: string
  delay: number
}

function FeatureCard({ icon: Icon, title, desc, spanClasses = "", delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`feature-card glass-panel ${spanClasses}`}
    >
      {/* Absolute ambient backlight in cards */}
      <div className="feature-card-glow"></div>

      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', gap: '32px' }}>
        <div className="feature-icon-wrap">
          <Icon size={22} className="transform transition-transform duration-300" />
        </div>

        <div>
          <h3>
            {title}
          </h3>
          <p>
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const features = [
    {
      icon: Cpu,
      title: "Hệ Thống Tự Lái L5 AI",
      desc: "Trang bị chip xử lý lượng tử thần kinh 2000 TOPS, hệ thống tự động lái L5 xử lý dữ liệu từ 12 camera HDR, radar Lidar 4D và cảm biến siêu âm thời gian thực. Xe có thể vận hành hoàn hảo không cần can thiệp trong mọi điều kiện thời tiết phức tạp.",
      spanClasses: "col-span-2",
      delay: 0.1
    },
    {
      icon: Eye,
      title: "Buồng Lái Holographic AI",
      desc: "Loại bỏ hoàn toàn màn hình phẳng truyền thống. Hệ thống hiển thị nổi ba chiều holographic 3D tương tác bằng giọng nói tự nhiên và cử chỉ tay không khí, tối ưu tầm nhìn tập trung an toàn của tài xế.",
      spanClasses: "",
      delay: 0.25
    },
    {
      icon: Zap,
      title: "Pin Thể Rắn Thế Hệ Mới",
      desc: "Tích hợp công nghệ lõi pin thể rắn mật độ năng lượng cực cao 600 Wh/kg, đảm bảo an toàn cháy nổ 100% và cho phép sạc từ 10% đến 80% chỉ trong vòng 8 phút qua trạm sạc siêu cao áp 800V.",
      spanClasses: "",
      delay: 0.15
    },
    {
      icon: Compass,
      title: "Hệ Treo Thích Ứng Chủ Động",
      desc: "Hệ thống treo khí nén năm buồng kết hợp cảm biến quét địa hình bằng laser liên tục. Hệ thống tự động phân tích và thay đổi độ cao, độ cứng giảm chấn của từng bánh xe sau mỗi 1 phần triệu giây.",
      spanClasses: "col-span-2",
      delay: 0.3
    }
  ]

  return (
    <section id="features" className="section-full features-section">
      {/* Background ambient lighting effects */}
      <div 
        className="ambient-glow ambient-cyan" 
        style={{ top: '50%', left: 0, transform: 'translateY(-50%)', opacity: 0.03 }}
      ></div>
      <div 
        className="ambient-glow ambient-crimson" 
        style={{ top: '33%', right: 0, transform: 'translateY(-50%)', opacity: 0.03 }}
      ></div>

      <div className="container-luxury">
        {/* Header section */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
          <span className="section-label">
            INTELLIGENT TECHNOLOGY
          </span>
          <h2 className="section-title" style={{ marginTop: '16px', marginBottom: '24px' }}>
            KỲ QUAN CÔNG NGHỆ CHỦ ĐỘNG
          </h2>
          <p className="section-desc" style={{ maxWidth: '100%' }}>
            AETHER EV-9 không chỉ là phương tiện di chuyển, đó là một thực thể trí tuệ nhân tạo di động được thiết kế để mở rộng giác quan và bảo vệ tối đa hành trình của bạn.
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="features-grid">
          {features.map((feat, index) => (
            <FeatureCard
              key={index}
              icon={feat.icon}
              title={feat.title}
              desc={feat.desc}
              spanClasses={feat.spanClasses}
              delay={feat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
