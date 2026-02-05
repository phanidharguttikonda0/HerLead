import { useRef } from 'react';
import { motion, type Variants } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
    group: {
        title: string;
        slug: string;
        desc: string;
        color: string;
        textColor: string;
        variant: string;
        tags: string[];
        video?: string;
        images: string[];
    };
}

const PhoneFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`relative mx-auto border-2 sm:border-4 md:border-10 border-[#1A1A1A] rounded-2xl sm:rounded-4xl md:rounded-[2.8rem] h-[240px] w-[85%] sm:h-[320px] sm:w-[90%] md:h-[520px] md:w-[94%] bg-[#000] overflow-hidden ${className}`}>
            <div className="absolute -left-0.5 top-8 sm:top-12 w-0.5 h-4 sm:h-6 bg-[#1A1A1A] rounded-r-full z-10" />
            <div className="absolute -left-0.5 top-14 sm:top-20 w-0.5 h-6 sm:h-10 bg-[#1A1A1A] rounded-r-full z-10" />
            <div className="relative w-full h-full rounded-xl sm:rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden bg-neutral-100">
                {children}
            </div>
        </div>
    );
};

const ServiceCard = ({ group }: ServiceCardProps) => {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);

    const renderVisual = () => {
        switch (group.variant) {
            case "single":
                return (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <PhoneFrame>
                            <img
                                src={group.images[0]}
                                alt={group.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </PhoneFrame>
                    </div>
                );
            case "video":
                return group.video ? (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <PhoneFrame>
                            <video
                                ref={videoRef}
                                muted
                                loop
                                playsInline
                                autoPlay
                                className="w-full h-full object-cover"
                            >
                                <source src={group.video} type="video/webm" />
                                <source src={group.video.replace('.webm', '.mp4')} type="video/mp4" />
                            </video>
                        </PhoneFrame>
                    </div>
                ) : null;
            case "double":
                return (
                    <div className="relative w-full h-full flex items-center justify-center scale-[0.5] sm:scale-[0.65] md:scale-[0.8]">
                        <PhoneFrame className="-rotate-6 -translate-x-16 sm:-translate-x-24 md:-translate-x-40 translate-y-4 scale-95">
                            <img src={group.images[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </PhoneFrame>
                        <PhoneFrame className="absolute rotate-3 translate-x-20 sm:translate-x-28 md:translate-x-48 -translate-y-4 z-10">
                            <img src={group.images[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </PhoneFrame>
                    </div>
                );
            default:
                return null;
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            onClick={() => navigate(`/services/${group.slug}`)}
            whileHover={{ scale: 1.01 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={containerVariants}
            className={`relative w-[96%] sm:w-[92%] md:w-[98%] lg:w-full h-[90%] md:h-[85%] group/card overflow-hidden rounded-3xl sm:rounded-4xl md:rounded-[3.5rem]
              ${group.color} ${group.textColor} border-2 border-white mx-auto cursor-pointer will-change-transform transform-gpu`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] h-full overflow-hidden">
                {/* CONTENT SIDE */}
                <div className="relative z-10 p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20 flex flex-col justify-start lg:justify-between h-auto lg:h-full">
                    <div>
                        <h3
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-black leading-[1.1] tracking-tighter mb-4 sm:mb-5 lg:mb-10 text-center lg:text-left uppercase"
                        >
                            {group.title}
                        </h3>

                        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 lg:mb-12">
                            {group.tags.map((tag, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-4 rounded-full bg-white border-2 border-black text-black text-[11px] sm:text-xs md:text-sm lg:text-base font-bold transition-colors hover:bg-black hover:text-white"
                                >
                                    <span className="truncate">{tag}</span>
                                    <ArrowUpRight size={12} className="shrink-0 hidden sm:block lg:w-4 lg:h-4" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* VISUAL SIDE */}
                <div className="flex relative flex-1 items-center justify-center p-1 sm:p-2 md:p-4 lg:p-10 min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-0">
                    <motion.div
                        variants={{
                            hidden: { scale: 0.9, opacity: 0 },
                            visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="w-full h-full flex items-center justify-center will-change-transform"
                    >
                        {renderVisual()}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
