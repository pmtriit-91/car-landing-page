/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Zap, Compass, Eye } from 'lucide-react';

interface EditorialFeatureProps {
    id: string;
    icon: any;
    tag: string;
    title: string;
    desc: string;
    offsetY: number; // parallax offset
    align: 'left' | 'right';
}

function EditorialFeature({ id, icon: Icon, tag, title, desc, offsetY, align }: EditorialFeatureProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ['start end', 'end start'],
    });

    // Differential parallax drift speed
    const driftY = useTransform(scrollYProgress, [0, 1], [offsetY, -offsetY]);

    return (
        <div
            ref={elementRef}
            style={{
                display: 'flex',
                justifyContent: align === 'left' ? 'flex-start' : 'flex-end',
                width: '100%',
                margin: '120px 0',
                position: 'relative',
            }}
        >
            <motion.div
                className="glass-panel"
                style={{
                    y: driftY,
                    width: '100%',
                    maxWidth: '540px',
                    padding: '48px',
                    borderRadius: '32px',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                }}
            >
                {/* Background ambient neon tint */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '120px',
                        height: '120px',
                        background: 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)',
                        filter: 'blur(15px)',
                        pointerEvents: 'none',
                    }}
                ></div>

                {/* High-end Technical HUD number watermark */}
                <div
                    style={{
                        position: 'absolute',
                        top: '24px',
                        right: '32px',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        opacity: 0.06,
                        color: '#ffffff',
                    }}
                >
                    {id}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="feature-icon-wrap" style={{ width: '42px', height: '42px', borderRadius: '10px' }}>
                        <Icon size={18} />
                    </div>
                    <span
                        style={{
                            fontSize: '0.65rem',
                            fontFamily: 'monospace',
                            letterSpacing: '0.25em',
                            color: 'var(--accent-cyan)',
                            textTransform: 'uppercase',
                        }}
                    >
                        {tag}
                    </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h3
                        style={{
                            fontSize: '1.4rem',
                            fontWeight: 850,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                        }}
                    >
                        {title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{desc}</p>
                </div>

                {/* Decorative corner crosshair brackets */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '16px',
                        fontSize: '8px',
                        fontFamily: 'monospace',
                        color: 'var(--text-dark)',
                    }}
                >
                    [ SYS_ACTIVE ]
                </div>
            </motion.div>
        </div>
    );
}

export default function Features() {
    const featuresList: EditorialFeatureProps[] = [
        {
            id: '01',
            icon: Cpu,
            tag: 'ARTIFICIAL COGNITION',
            title: 'Bộ Não Tự Lái Lượng Tử L5 AI',
            desc: 'Vượt trên mọi giới hạn bán dẫn thông thường. Vi xử lý lượng tử thần kinh xử lý 2000 nghìn tỷ phép tính mỗi giây (2000 TOPS) kết nối trực tiếp đến radar Lidar quang phổ 4D, giúp xe tái tạo tức thời mô hình không gian 3 chiều xung quanh trong vòng 1 phần triệu giây kể cả trong bão tuyết hay sương mù dày đặc.',
            offsetY: 40,
            align: 'left',
        },
        {
            id: '02',
            icon: Eye,
            tag: 'HOLOGRAPHIC CABIN',
            title: 'Màn Hiển Thị Ba Chiều Tương Tác HUD',
            desc: 'Trang bị thấu kính phản xạ quang học nano phẳng. Hệ thống loại bỏ hoàn toàn các màn hình cảm ứng LCD thông thường, chiếu trực tiếp các bảng điều khiển dạng ảnh ba chiều nổi lơ lửng giữa không trung. Người lái tương tác bằng giọng nói tự nhiên hoặc khua tay điều khiển không chạm mượt mà.',
            offsetY: -30,
            align: 'right',
        },
        {
            id: '03',
            icon: Zap,
            tag: 'SOLID-STATE BATTERY',
            title: 'Mạng Lưới Pin Thể Rắn Siêu Nạp 800V',
            desc: 'Đột phá mật độ năng lượng đạt ngưỡng 600 Wh/kg nhờ chất điện phân rắn gốm tinh thể. Pin siêu nạp 800V không chỉ triệt tiêu nguy cơ cháy nổ vật lý mà còn cho phép nạp đầy năng lượng từ 10% lên 80% chỉ trong vòng 8 phút, sẵn sàng cho những hành trình xa xôi xuyên lục địa.',
            offsetY: 60,
            align: 'left',
        },
        {
            id: '04',
            icon: Compass,
            tag: 'ACTIVE SUSPENSION',
            title: 'Hệ Thống Treo Năm Buồng Thích Ứng',
            desc: 'Tích hợp cụm cảm biến laser quét địa hình bề mặt đường phía trước xe. Hệ thống treo khí nén năm buồng phản hồi chủ động thay đổi độ đàn hồi giảm chấn ở từng bánh xe độc lập sau mỗi 1 miligiây, triệt tiêu hoàn toàn rung chấn vật lý mang lại cảm giác êm ái tuyệt đối như lướt đi trên mặt hồ lặng gió.',
            offsetY: -40,
            align: 'right',
        },
    ];

    return (
        <section id="features" className="section-full features-section" style={{ padding: '160px 0' }}>
            {/* Decorative vertical blueprint line sweep */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1px',
                    background:
                        'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03) 15%, rgba(0,242,254,0.08) 50%, rgba(255,255,255,0.03) 85%, transparent)',
                    zIndex: 1,
                }}
            ></div>

            <div className="container-luxury" style={{ zIndex: 10 }}>
                {/* Editorial Section Header */}
                <div
                    style={{
                        textAlign: 'left',
                        maxWidth: '680px',
                        marginBottom: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <span className="section-label" style={{ letterSpacing: '0.4em' }}>
                        EDITORIAL FEATURES SYSTEM
                    </span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1 }}>
                        KỶ NGUYÊN CỦA KIẾN TRÚC THÔNG MINH
                    </h2>
                    <p className="section-desc" style={{ maxWidth: '100%', fontSize: '0.95rem' }}>
                        AETHER EV-9 tái định nghĩa mối quan hệ giữa con người và cỗ máy di chuyển. Đây không đơn thuần
                        là một phương tiện giao thông, mà là một thực thể trí tuệ nhân tạo độc lập hoạt động đồng điệu
                        để bảo vệ và mở rộng các giác quan của bạn.
                    </p>
                </div>

                {/* Asymmetric Magazine List */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: '40px',
                        position: 'relative',
                    }}
                >
                    {featuresList.map((feat) => (
                        <EditorialFeature
                            key={feat.id}
                            id={feat.id}
                            icon={feat.icon}
                            tag={feat.tag}
                            title={feat.title}
                            desc={feat.desc}
                            offsetY={feat.offsetY}
                            align={feat.align}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
