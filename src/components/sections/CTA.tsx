import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Send, CheckCircle, Shield } from 'lucide-react'

export default function CTA() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name || !email) return
    setIsSubmitted(true)
    setTimeout(() => {
      // Keep it true but you can close later
    }, 4000)
  }

  const handleClose = () => {
    setShowModal(false)
    setIsSubmitted(false)
    setEmail('')
    setName('')
  }

  return (
    <section id="cta" className="section-full cta-section">
      {/* Dynamic backdrop glows */}
      <div 
        className="ambient-glow ambient-cyan" 
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.08 }}
      ></div>

      <div className="container-luxury cta-wrap">
        <span className="section-label">
          EXCLUSIVE PROTOCOL
        </span>
        
        <h2 className="cta-title">
          BƯỚC VÀO TƯƠNG LAI CỦA DI CHUYỂN
        </h2>
        
        <p className="cta-desc">
          Các suất đặt trước sớm dành cho phiên bản giới hạn của dòng AETHER EV-9 Hyper-Luxury đã chính thức mở. Hãy sở hữu tấm vé định danh và xác thực số hoá qua mã hợp đồng thông minh blockchain của bạn ngay hôm nay.
        </p>

        <div className="cta-btn-group">
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            ĐẶT TRƯỚC HÔM NAY
            <ArrowRight size={14} />
          </button>
          
          <a
            href="#showroom"
            className="btn-secondary"
          >
            TÌM HIỂU THÊM
          </a>
        </div>
      </div>

      {/* Booking Form Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="modal-card glass-panel"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                ĐÓNG [X]
              </button>

              {!isSubmitted ? (
                <>
                  <span className="modal-header-tag">
                    SECURED RESERVATION FORM
                  </span>
                  
                  <h3 className="modal-title">
                    ĐĂNG KÝ HỢP ĐỒNG ĐỊNH DANH
                  </h3>

                  <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name-input">
                        HỌ VÀ TÊN CHỦ SỞ HỮU
                      </label>
                      <input
                        type="text"
                        id="name-input"
                        required
                        placeholder="Vd: Nguyễn Văn A"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email-input">
                        ĐỊA CHỈ EMAIL XÁC THỰC
                      </label>
                      <input
                        type="email"
                        id="email-input"
                        required
                        placeholder="Vd: name@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                      />
                    </div>

                    {/* Submitting Secure Ledger Hint */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.7, margin: '4px 0' }}>
                      <Shield size={12} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.6rem', fontFamily: 'monospace', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>
                        Định danh mã hóa đầu cuối AES-256 bảo mật
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="form-submit-btn"
                    >
                      XÁC NHẬN GIAO DỊCH
                      <Send size={12} />
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-screen"
                >
                  <CheckCircle size={48} style={{ color: 'var(--accent-cyan)', filter: 'drop-shadow(0 0 10px rgba(0,242,254,0.4))' }} />
                  
                  <h3 className="success-title">
                    GIAO DỊCH HOÀN TẤT THÀNH CÔNG!
                  </h3>
                  
                  <p className="success-desc">
                    Chúc mừng <strong>{name}</strong>! Hồ sơ đăng ký định danh của bạn đã được ghi nhận thành công trên mạng lưới lưu trữ an toàn AETHER.
                  </p>

                  <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', width: '100%', textAlign: 'left', fontFamily: 'monospace', fontSize: '0.65rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ color: 'var(--text-dark)' }}>HỢP ĐỒNG ĐỊNH DANH (HASH):</div>
                    <div style={{ color: 'var(--accent-cyan)', overflowWrap: 'anywhere' }}>
                      AE9x_{Math.random().toString(36).substring(2, 10).toUpperCase()}_{Date.now().toString(36).toUpperCase()}
                    </div>
                    <div style={{ color: 'var(--text-dark)', marginTop: '4px' }}>TRẠNG THÁI: CHỜ KHỞI TẠO SUẤT CHẾ TẠO</div>
                  </div>

                  <p className="success-desc" style={{ fontSize: '0.65rem', opacity: 0.7 }}>
                    Mã xác nhận bảo mật và tiến độ chế tác xe sẽ được gửi về email <strong>{email}</strong> trong vòng 24 giờ.
                  </p>
                  
                  <button
                    onClick={handleClose}
                    className="btn-secondary"
                    style={{ width: '100%', padding: '10px', fontSize: '0.7rem' }}
                  >
                    HỦY BỎ GIAO DỊCH & QUAY LẠI
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
