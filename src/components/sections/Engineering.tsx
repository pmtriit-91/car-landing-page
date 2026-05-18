import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';
import heroCar from '../../assets/hero_car.png';
import carChassis from '../../assets/car_chassis.png';

interface ExplodedNode {
    id: number;
    title: string;
    spec: string;
    desc: string;
    x: string;
    y: string;
    anchor: 'top' | 'bottom';
}

export default function Engineering() {
    const [isExploded, setIsExploded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Integrate scroll-based progressive split
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Scroll mapping: split the shell and chassis progressively
    const scrollShellY = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, -140, -180]);
    const scrollChassisY = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 140, 180]);
    const scrollOpacity = useTransform(scrollYProgress, [0.2, 0.45, 0.75], [1, 0.55, 0.4]);
    const scrollScale = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.9]);

    const nodes: ExplodedNode[] = [
        {
            id: 1,
            title: 'Lớp Vỏ Monocoque Carbon L5',
            spec: 'Độ bền xoắn 55,000 Nm/độ',
            desc: 'Chế tác từ sợi carbon carbon-fiber hàng không ép nhiệt áp lực cao. Bảo vệ tuyệt đối cabin hành khách và định hình 100% dòng lưu chuyển khí động học.',
            x: '20%',
            y: '22%',
            anchor: 'top',
        },
        {
            id: 2,
            title: 'Khung Gầm Siêu Dẫn EV-Bed',
            spec: 'Hợp kim Magie-Nhôm siêu nhẹ',
            desc: 'Kiến trúc phẳng trượt nước tích hợp hấp thụ xung lực đa điểm, phân bổ trọng tâm lý tưởng 50:50 hoàn hảo ở sàn xe.',
            x: '80%',
            y: '75%',
            anchor: 'bottom',
        },
        {
            id: 3,
            title: 'Lõi Pin Thể Rắn Lõi Lỏng',
            spec: 'Mật độ 600 Wh/kg - Dung lượng 130 kWh',
            desc: 'Sử dụng chất điện phân rắn triệt tiêu nguy cơ cháy nổ, kết hợp lõi làm mát lỏng tản nhiệt vi mô từng cell pin.',
            x: '50%',
            y: '55%',
            anchor: 'top',
        },
        {
            id: 4,
            title: 'Động Cơ Điện Kép Siêu Dẫn',
            spec: 'Dual Quantum Motors - 1200 HP',
            desc: 'Hệ thống truyền động kép hiệu suất 98.7% với công nghệ làm mát lõi rotor trực tiếp, cho phản hồi mô-men xoắn tức thời.',
            x: '78%',
            y: '38%',
            anchor: 'top',
        },
    ];


    return (
        <section
            id="engineering"
            ref={containerRef}
            className="section-full"
            style={{ backgroundColor: '#050507', padding: '120px 0', overflow: 'hidden' }}
        >
            {/* Background neon grid grids */}
            <div
                className="ambient-glow ambient-cyan"
                style={{ top: '30%', left: '10%', opacity: 0.03, width: '600px', height: '600px' }}
            ></div>

            <div className="container-luxury">
                {/* Section Header */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        maxWidth: '750px',
                        margin: '0 auto 60px auto',
                        gap: '16px',
                    }}
                >
                    <span className="section-label" style={{ letterSpacing: '0.4em' }}>
                        ENGINEERING SPECTACULAR
                    </span>
                    <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 900 }}>
                        KIẾN TRÚC BÓC TÁCH 3D CO-CHASSIS
                    </h2>
                    <p className="section-desc" style={{ maxWidth: '100%' }}>
                        Cuộn chuột xuống hoặc kích hoạt chế độ bóc tách động để xem chi tiết kết cấu vật lý tách tầng
                        giữa lớp vỏ khí động học Carbon Monocoque và Khung gầm thông minh AETHER EV-Bed.
                    </p>

                    <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
                        <button
                            onClick={() => setIsExploded(!isExploded)}
                            className="btn-primary"
                            style={{
                                background: isExploded ? 'var(--accent-cyan)' : '#ffffff',
                                boxShadow: isExploded
                                    ? '0 0 25px rgba(0,242,254,0.5)'
                                    : '0 4px 20px rgba(255,255,255,0.1)',
                            }}
                        >
                            <Layers size={14} />
                            {isExploded ? 'LẮP RÁP THÂN XE' : 'KÍCH HOẠT BÓC TÁCH 3D'}
                        </button>
                    </div>
                </div>

                {/* 3D Exploded Stage */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '680px',
                        borderRadius: '40px',
                        border: '1px solid rgba(255, 255, 255, 0.03)',
                        background:
                            'radial-gradient(50% 50% at 50% 50%, rgba(12, 12, 18, 0.5) 0%, rgba(5, 5, 7, 0.9) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* HUD Tech Blueprint grid background */}
                    <div className="showcase-grid-bg" style={{ opacity: 0.12, backgroundSize: '30px 30px' }}></div>

                    {/* SVG Connector Lines drawing traces between separate parts */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-20"
                        style={{ mixBlendMode: 'screen' }}
                    >
                        {(isExploded || scrollYProgress.get() > 0.3) && (
                            <>
                                {/* Visual lines connecting floating shell and chassis axes */}
                                <motion.line
                                    x1="30%"
                                    y1="28%"
                                    x2="30%"
                                    y2="70%"
                                    stroke="rgba(0, 242, 254, 0.35)"
                                    strokeWidth="1.5"
                                    strokeDasharray="4 4"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1 }}
                                />
                                <motion.line
                                    x1="70%"
                                    y1="28%"
                                    x2="70%"
                                    y2="70%"
                                    stroke="rgba(0, 242, 254, 0.35)"
                                    strokeWidth="1.5"
                                    strokeDasharray="4 4"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1 }}
                                />
                            </>
                        )}
                    </svg>

                    {/* LAYER A: UPPER OUTER SHELL (glides up, changes opacity) */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            y: isExploded ? -180 : scrollShellY,
                            opacity: isExploded ? 0.45 : scrollOpacity,
                            scale: isExploded ? 0.85 : scrollScale,
                            width: '58%',
                            maxWidth: '480px',
                            zIndex: 25,
                            filter: 'drop-shadow(0 -20px 40px rgba(0, 242, 254, 0.15))',
                        }}
                        transition={{ type: 'spring', damping: 25, stiffness: 100 }}
                    >
                        <img
                            src={heroCar}
                            alt="AETHER EV-9 Aerodynamic Shell"
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                        {/* Hologram badge on upper shell */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '15%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                padding: '6px 12px',
                                background: 'rgba(0, 242, 254, 0.1)',
                                border: '1px solid var(--accent-cyan)',
                                borderRadius: '4px',
                                fontSize: '9px',
                                fontFamily: 'monospace',
                                color: 'var(--accent-cyan)',
                            }}
                        >
                            CARBON SHELL LAYER ACTIVE
                        </div>
                    </motion.div>

                    {/* LAYER B: LOWER SKATEBOARD CHASSIS (glides down) */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            y: isExploded ? 180 : scrollChassisY,
                            scale: isExploded ? 0.85 : scrollScale,
                            width: '58%',
                            maxWidth: '480px',
                            zIndex: 15,
                            filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.9))',
                        }}
                        transition={{ type: 'spring', damping: 25, stiffness: 100 }}
                    >
                        <img
                            src={carChassis}
                            alt="AETHER EV-9 Skateboard Chassis"
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </motion.div>

                    {/* Interactive Mechanical Spec Labels - Fade in only when separated */}
                    <AnimatePresence>
                        {(isExploded || scrollYProgress.get() > 0.35) && (
                            <div className="absolute inset-0 w-full h-full z-30 pointer-events-none">
                                {nodes.map((node) => (
                                    <motion.div
                                        key={node.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5, delay: node.id * 0.1 }}
                                        style={{
                                            position: 'absolute',
                                            left: node.x,
                                            top: node.y,
                                            pointerEvents: 'auto',
                                            transform: 'translate(-50%, -50%)',
                                            maxWidth: '240px',
                                        }}
                                    >
                                        {/* Glowing coordinate circular HUD dot */}
                                        <div
                                            style={{
                                                position: 'relative',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <div
                                                className="hotspot-pulse"
                                                style={{
                                                    width: '10px',
                                                    height: '10px',
                                                    backgroundColor: 'var(--accent-cyan)',
                                                }}
                                            ></div>

                                            {/* Blueprint Text Panel */}
                                            <div
                                                className="glass-panel"
                                                style={{
                                                    position: 'absolute',
                                                    top: node.anchor === 'top' ? '-110px' : '20px',
                                                    left: '-100px',
                                                    width: '200px',
                                                    padding: '12px',
                                                    borderRadius: '12px',
                                                    border: '1px solid rgba(0, 242, 254, 0.25)',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                <h4
                                                    style={{
                                                        fontSize: '0.75rem',
                                                        fontWeight: 800,
                                                        textTransform: 'uppercase',
                                                        color: 'var(--accent-cyan)',
                                                        marginBottom: '2px',
                                                    }}
                                                >
                                                    {node.title}
                                                </h4>
                                                <span
                                                    style={{
                                                        fontSize: '8px',
                                                        fontFamily: 'monospace',
                                                        color: '#ffffff',
                                                        opacity: 0.8,
                                                        letterSpacing: '0.05em',
                                                    }}
                                                >
                                                    {node.spec}
                                                </span>
                                                <p
                                                    style={{
                                                        fontSize: '9px',
                                                        lineHeight: '1.4',
                                                        color: 'var(--text-secondary)',
                                                        marginTop: '4px',
                                                    }}
                                                >
                                                    {node.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </AnimatePresence>

                    {/* Exploded HUD watermark */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '24px',
                            right: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: 'monospace',
                            fontSize: '0.65rem',
                            color: 'var(--text-dark)',
                        }}
                    >
                        <span>CAD SPEC_REV: 09-CO</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
