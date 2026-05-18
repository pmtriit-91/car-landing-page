import { ShieldCheck } from 'lucide-react'

export default function Footer() {
  const links = [
    { name: 'Tổng Quan', href: '#hero' },
    { name: 'Showroom', href: '#showroom' },
    { name: 'Khí Động Học', href: '#story' },
    { name: 'Buồng Lái AI', href: '#interior' },
  ]

  const socialLinks = [
    { 
      href: 'https://x.com',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    { 
      href: 'https://github.com',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    { 
      href: 'https://discord.com',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 127.14 96.36" aria-hidden="true">
          <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.88-.65,1.72-1.34,2.51-2a75.58,75.58,0,0,0,73,0c.8.71,1.63,1.4,2.52,2a68.43,68.43,0,0,1-10.5,5A77.7,77.7,0,0,0,95.14,86.36a105.73,105.73,0,0,0,31-18.83C129,54.65,122.94,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="section-full" style={{ backgroundColor: '#030303', borderTop: '1px solid rgba(255, 255, 255, 0.03)', padding: '60px 0 32px 0', zIndex: 20 }}>
      <div className="container-luxury">
        
        {/* Brand logo & navigation */}
        <div className="footer-row">
          
          {/* Brand logo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-tech)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.2em', color: '#ffffff' }}>
                AETHER
              </span>
              <span className="logo-badge">
                EV-9
              </span>
            </div>
            <p style={{ fontSize: '9px', fontFamily: 'monospace', letterSpacing: '0.15em', color: 'var(--text-dark)', textTransform: 'uppercase' }}>
              AUTOMOTIVE DESIGN LABS
            </p>
          </div>

          {/* Navigation links */}
          <nav className="footer-nav">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="footer-nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="footer-socials">
            {socialLinks.map((s, index) => {
              return (
                <a
                  key={index}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-link"
                >
                  {s.svg}
                </a>
              )
            })}
          </div>

        </div>

        {/* Under copyright line */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 AETHER AUTOMOTIVE LABS. ALL RIGHTS RESERVED.
          </p>

          <div className="security-hud">
            <ShieldCheck size={10} style={{ color: 'var(--accent-cyan)' }} />
            <span>CYBER SECURITY END-TO-END CRYPTO-COMMERCE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
