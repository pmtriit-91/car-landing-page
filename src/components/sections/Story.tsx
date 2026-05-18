import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import wheelImg from '../../assets/car_wheel.png'
import headlightImg from '../../assets/car_headlight.png'
import aeroImg from '../../assets/car_aerodynamics.png'

interface StoryPartProps {
  img: string
  title: string
  subtitle: string
  desc: string
  metric: string
  metricLabel: string
  alignRight?: boolean
}

function StoryPart({ img, title, subtitle, desc, metric, metricLabel, alignRight = false }: StoryPartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.9])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.3, 1, 1, 0.3])
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="story-part">
      <div className="container-luxury">
        <div className={`story-grid ${alignRight ? 'reverse' : ''}`}>
          
          {/* Layered Image with Parallax scale & glow */}
          <div className="story-media-wrap">
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              className="story-image-box"
            >
              <div style={{ position: 'absolute', inset: 0, background: 'gradient-to-t from-black/80 to-transparent', zIndex: 10, pointerEvents: 'none' }}></div>
              
              {/* Ambient Cyan backlight glow */}
              <div className="story-glow-back"></div>

              <img
                src={img}
                alt={title}
                className="story-image"
              />
            </motion.div>
          </div>

          {/* Narrative Specifications text block */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="story-text-wrap"
          >
            <span className="story-tag">
              {subtitle}
            </span>
            
            <h3 className="story-title">
              {title}
            </h3>

            <div className="story-line"></div>

            <p className="story-desc">
              {desc}
            </p>

            {/* Performance spec callout pill */}
            <div className="story-metric-pill">
              <div>
                <p className="story-metric-val glow-text-cyan">
                  {metric}
                </p>
                <p className="story-metric-lbl">
                  {metricLabel}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default function Story() {
  const stories = [
    {
      img: wheelImg,
      subtitle: "ACTIVE AERODYNAMICS",
      title: "MÂM CACBON KHÍ ĐỘNG HỌC CHỦ ĐỘNG",
      desc: "Chế tác từ sợi carbon cấu trúc cứng cáp siêu nhẹ, các cánh gió chủ động trên mâm xe tự động co giãn dựa trên vận tốc thực tế. Tại dải tốc độ cao trên 120 km/h, mâm xe chuyển sang chế độ khí động học đóng kín nhằm giảm thiểu 12% nhiễu động khí xung quanh vòm bánh xe, gia tăng hiệu suất nạp và bám đường tối ưu.",
      metric: "Cd -12%",
      metricLabel: "Hệ số cản lực lốp xe",
      alignRight: false
    },
    {
      img: headlightImg,
      subtitle: "INTELLIGENT LASER LIGHTING",
      title: "HỆ THỐNG CHIẾU SÁNG LASER MA TRẬN",
      desc: "Trang bị công nghệ quét laser kỹ thuật số siêu vi, hệ thống đèn pha AI quét bề mặt đường 1000 lần mỗi giây để tự động điều hướng luồng sáng. Đèn pha thông minh tự động tối ưu hóa chiều dài quét lên tới 600 mét, ngăn chặn hiện tượng lóa mắt các phương tiện giao thông đối diện và tăng cường độ quét an toàn tuyệt đối.",
      metric: "600 METER",
      metricLabel: "Tầm quét sáng thích ứng",
      alignRight: true
    },
    {
      img: aeroImg,
      subtitle: "WIND TUNNEL TESTING",
      title: "TỐI ƯU HÓA KHÍ ĐỘNG HỌC TUYỆT ĐỐI",
      desc: "Thiết kế mượt mà uốn lượn lấy cảm hứng từ dòng chảy tự nhiên, AETHER EV-9 đạt hệ số cản gió lý tưởng chỉ Cd = 0.19. Dòng khí trượt dọc thân xe kết hợp cánh gió chủ động phía đuôi tự động nâng hạ tạo lực ép nén không khí xuống mặt đường khi tăng tốc, mang lại sự vững chãi hoàn hảo của siêu xe đua thể thao thực thụ.",
      metric: "0.19 Cd",
      metricLabel: "Hệ số cản không khí",
      alignRight: false
    }
  ]

  return (
    <section id="story" className="section-full story-section">
      {/* Background design elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', backgroundImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }}></div>
      
      {/* Interactive Story parts */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {stories.map((story, index) => (
          <StoryPart
            key={index}
            img={story.img}
            subtitle={story.subtitle}
            title={story.title}
            desc={story.desc}
            metric={story.metric}
            metricLabel={story.metricLabel}
            alignRight={story.alignRight}
          />
        ))}
      </div>
    </section>
  )
}
