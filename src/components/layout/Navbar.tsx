import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Showroom', href: '#showroom' },
    { name: 'Khí Động Học', href: '#story' },
    { name: 'Buồng Lái', href: '#interior' },
    { name: 'Hiệu Năng', href: '#performance' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.2 }}
      className="header-wrapper"
      style={{
        paddingTop: scrolled ? '12px' : '24px',
      }}
    >
      <div className={`nav-pill ${scrolled ? 'scrolled' : ''}`}>
        
        {/* Brand Logo */}
        <a href="#hero" className="nav-logo-group">
          <span className="logo-main-text">
            AETHER
          </span>
          <span className="logo-badge">
            EV-9
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link-item"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button & Menu Toggle */}
        <div className="nav-cta-group">
          <a href="#cta" className="nav-reserve-btn">
            ĐẶT TRƯỚC
            <ArrowRight size={11} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-toggle-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-drawer"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ width: '100%', borderRadius: '14px' }}
            >
              ĐẶT TRƯỚC HÔM NAY
              <ArrowRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
