import { useState, useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Plus, X, Radio } from 'lucide-react';
import showcaseCar from '../../assets/hero_car.png';

interface Hotspot {
    id: number;
    top: string; // percentage
    left: string; // percentage
    title: string;
    desc: string;
    cardPos: {
        // Positions for info card
        top: string;
        left?: string;
        right?: string;
    };
    // Line points relative to stage (%) to draw high-tech polyline
    pathD: string;
}

export default function Showcase() {
    const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 120, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const bgTranslateX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
    const bgTranslateY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

    const ringTranslateX = useTransform(springX, [-0.5, 0.5], [30, -30]);
    const ringTranslateY = useTransform(springY, [-0.5, 0.5], [20, -20]);

    const carTranslateX = useTransform(springX, [-0.5, 0.5], [-25, 25]);
    const carTranslateY = useTransform(springY, [-0.5, 0.5], [-15, 15]);
    const carRotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
    const carRotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

    const shadowTranslateX = useTransform(springX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(relativeX);
        mouseY.set(relativeY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const hotspots: Hotspot[] = [
        {
            id: 1,
            top: '55%',
            left: '23%',
            title: 'Đèn Pha LED Laser Thông Minh',
            desc: 'Cụm đèn pha laser ma trận quét đường đi chính xác lên tới 600m, tự động giảm cường độ sáng tránh chói mắt xe ngược chiều và tích hợp chuyển động đồ họa chào mừng độc bản.',
            cardPos: { top: '12%', left: '4%' },
            pathD: 'M 23 55 L 14 55 L 14 26 L 4 26',
        },
        {
            id: 2,
            top: '63%',
            left: '60%',
            title: 'Mâm Carbon Khí Động Học Chủ Động',
            desc: 'Mâm xe đúc hoàn toàn từ sợi carbon chịu lực siêu nhẹ, tích hợp cánh gió điện tử chủ động đóng kín ở dải tốc độ cao để triệt tiêu nhiễu động khí xung quanh vòm bánh xe.',
            cardPos: { top: '15%', right: '4%' },
            pathD: 'M 60 63 L 78 63 L 78 28 L 96 28',
        },
        {
            id: 3,
            top: '42%',
            left: '36%',
            title: 'Gương Kính Điện Tử Siêu Rộng',
            desc: 'Camera góc siêu rộng HDR thay thế gương vật lý truyền thống, truyền tải trực quan không độ trễ lên màn hình cong buồng lái cabin và triệt tiêu 8% sức cản gió.',
            cardPos: { top: '12%', left: '4%' },
            pathD: 'M 36 42 L 20 42 L 20 22 L 4 22',
        },
    ];

    return (
        <section
            id="showroom"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="showcase-section"
            style={{ overflow: 'hidden' }}
        >
            <div className="container-luxury">
                {/* Header section info */}
                <div className="showcase-header">
                    <div>
                        <span className="section-label">Interactive Experience</span>
                        <h2 className="section-title">SÂN KHẤU TƯƠNG TÁC 2.5D</h2>
                    </div>
                    <p className="section-desc">
                        Di chuyển chuột của bạn qua chiếc xe để trải nghiệm hiệu ứng không gian 2.5D Parallax. Nhấp vào
                        các điểm chạm để khai phá các trang bị tối tân bậc nhất.
                    </p>
                </div>

                {/* Main Interactive Stage Container */}
                <div className="showcase-stage" style={{ minHeight: '600px' }}>
                    {/* Layer 1: Background grid pattern */}
                    <motion.div style={{ x: bgTranslateX, y: bgTranslateY }} className="showcase-grid-bg"></motion.div>

                    {/* Layer 2: Neon ambient circular glow behind car */}
                    <motion.div
                        style={{ x: ringTranslateX, y: ringTranslateY }}
                        className="showcase-circle-neon"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                    ></motion.div>

                    <motion.div
                        style={{
                            x: ringTranslateX,
                            y: ringTranslateY,
                            position: 'absolute',
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'var(--accent-cyan)',
                            borderRadius: '50%',
                            filter: 'blur(150px)',
                            opacity: 0.08,
                            pointerEvents: 'none',
                            zIndex: 0,
                        }}
                    ></motion.div>

                    {/* Layer 3: Under Car Glowing Shadow */}
                    <motion.div
                        style={{
                            x: shadowTranslateX,
                            position: 'absolute',
                            bottom: '22%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80%',
                            height: '30px',
                            background:
                                'radial-gradient(50% 50% at 50% 50%, rgba(0,242,254,0.2) 0%, rgba(0,0,0,0) 100%)',
                            pointerEvents: 'none',
                            zIndex: 0,
                        }}
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
                            style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.85))' }}
                        />

                        {/* Interactive hotspot buttons pinned to the car */}
                        {hotspots.map((hs) => (
                            <button
                                key={hs.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveHotspot(activeHotspot?.id === hs.id ? null : hs);
                                }}
                                style={{ top: hs.top, left: hs.left }}
                                className="hotspot-trigger"
                            >
                                <div
                                    className="hotspot-pulse"
                                    style={{
                                        backgroundColor: activeHotspot?.id === hs.id ? '#ffffff' : 'var(--accent-cyan)',
                                        boxShadow:
                                            activeHotspot?.id === hs.id
                                                ? '0 0 15px #ffffff'
                                                : '0 0 10px var(--accent-cyan)',
                                    }}
                                ></div>
                            </button>
                        ))}
                    </motion.div>

                    {/* Layer 5: High-Tech Hologram SVG Connection Lines */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-20"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <AnimatePresence>
                            {activeHotspot && (
                                <>
                                    {/* Glowing connector HUD line */}
                                    <motion.path
                                        d={activeHotspot.pathD}
                                        fill="none"
                                        stroke="var(--accent-cyan)"
                                        strokeWidth="0.25"
                                        strokeDasharray="1.5 0.5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.7 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                    />

                                    {/* Laser point sweep pulsing dot along path */}
                                    <motion.circle
                                        r="0.5"
                                        fill="#ffffff"
                                        initial={{ offset: 0 }}
                                        animate={{ offset: 1 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                        style={{
                                            boxShadow: '0 0 8px #ffffff',
                                        }}
                                    >
                                        <animateMotion path={activeHotspot.pathD} dur="2s" repeatCount="indefinite" />
                                    </motion.circle>
                                </>
                            )}
                        </AnimatePresence>
                    </svg>

                    {/* Interactive Floating Details HUD Panel */}
                    <AnimatePresence>
                        {activeHotspot && (
                            <motion.div
                                initial={{ scale: 0.92, opacity: 0, y: 15 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.92, opacity: 0, y: 15 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                                }}
                                className="hotspot-card glass-panel"
                                style={{
                                    position: 'absolute',
                                    top: activeHotspot.cardPos.top,
                                    left: activeHotspot.cardPos.left || 'auto',
                                    right: activeHotspot.cardPos.right || 'auto',
                                    zIndex: 40,
                                    maxWidth: '340px',
                                    border: '1px solid rgba(0, 242, 254, 0.35)',
                                    boxShadow: '0 20px 50px rgba(0, 242, 254, 0.08)',
                                }}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setActiveHotspot(null)}
                                    className="hotspot-card-close"
                                    aria-label="Close details"
                                    style={{ top: '12px', right: '12px' }}
                                >
                                    <X size={14} />
                                </button>

                                <div
                                    className="hotspot-card-header"
                                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                >
                                    <Radio size={12} className="animate-pulse" />
                                    <span>AETHER TELEMETRY HUD</span>
                                </div>

                                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginTop: '8px' }}>
                                    {activeHotspot.title}
                                </h3>

                                <p
                                    style={{
                                        marginTop: '8px',
                                        fontSize: '0.75rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {activeHotspot.desc}
                                </p>

                                {/* Coordinate metadata inside card */}
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '16px',
                                        marginTop: '16px',
                                        paddingTop: '12px',
                                        borderTop: '1px solid rgba(255,255,255,0.05)',
                                        fontSize: '0.6rem',
                                        fontFamily: 'monospace',
                                        color: 'var(--text-dark)',
                                    }}
                                >
                                    <span>LOC_X: {activeHotspot.left}</span>
                                    <span>LOC_Y: {activeHotspot.top}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Ambient hint on bottom center */}
                    <div className="showcase-stage-footer">
                        <Plus size={10} style={{ color: 'var(--accent-cyan)' }} />
                        <span>CYBERNETIC CHASSIS EV-9</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
