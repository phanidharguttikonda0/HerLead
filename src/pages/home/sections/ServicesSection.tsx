import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../../../constants/services';

const ServicesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-rotation for mobile
    useEffect(() => {
        let interval: any;

        const setupInterval = () => {
            const isMobile = window.innerWidth < 1024;
            if (isMobile) {
                interval = setInterval(() => {
                    setHoveredIndex((prev) => (prev + 1) % services.length);
                }, 3000);
            }
        };

        setupInterval();

        const handleResize = () => {
            if (interval) clearInterval(interval);
            setupInterval();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            if (interval) clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <section
            ref={containerRef}
            id="services"
            className="relative w-full bg-black pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                {/* Centered "I'm looking for" Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='mb-8 md:mb-12 flex justify-center w-full'
                >
                    <div className='inline-flex items-center justify-center gap-3 md:gap-6 w-max'>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className='w-8 md:w-20 h-[2px] bg-white origin-right'
                        />
                        <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-widest md:tracking-[0.2em] text-white text-center'>
                            I'm looking for
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className='header-line-right w-8 md:w-20 h-[2px] bg-white origin-left'
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-48 items-start">
                    {/* Visual Content Column */}
                    <div className="w-full">
                        <div className="min-h-[350px] md:min-h-[500px] flex flex-col justify-center items-center">
                            <motion.div
                                layout
                                onClick={() => navigate(`/services/${services[hoveredIndex].slug}`)}
                                className="space-y-6 md:space-y-8 flex flex-col items-center cursor-pointer group transition-all duration-500 ease-out"
                            >
                                {/* Responsive Media Container */}
                                <div className="relative w-[280px] sm:w-[320px] md:w-[420px] aspect-square rounded-full overflow-hidden border-4 md:border-8 border-white bg-[#1A1A1A] transition-transform duration-500 group-hover:scale-[1.02]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={services[hoveredIndex].id}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="w-full h-full"
                                        >
                                            {services[hoveredIndex].video ? (
                                                <video
                                                    src={services[hoveredIndex].video}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <img
                                                    src={services[hoveredIndex].images[0]}
                                                    alt={services[hoveredIndex].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Text Content */}
                                <motion.div
                                    className="w-full max-w-lg text-center px-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-secondary uppercase tracking-wider mb-2 transition-colors duration-300">
                                        {services[hoveredIndex].name}
                                    </h3>
                                    <p className="text-white font-body text-xs sm:text-sm leading-relaxed font-bold uppercase tracking-widest max-w-sm mx-auto">
                                        {services[hoveredIndex].description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Pill Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-3 lg:pt-4 lg:items-start"
                    >
                        {services.map((service, index) => {
                            const isActive = hoveredIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onClick={() => navigate(`/services/${service.slug}`)}
                                    layout
                                    initial={false}
                                    animate={{
                                        backgroundColor: isActive ? "#ffffff" : "#000000",
                                        borderColor: isActive ? "#ffffff" : "#333333",
                                        color: isActive ? "var(--color-secondary)" : "#ffffff",
                                        y: isActive ? -4 : 0
                                    }}
                                    whileHover={{
                                        y: isActive ? -4 : -2,
                                        borderColor: "#666666"
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="relative group cursor-pointer rounded-full border-2 w-full lg:max-w-[340px] px-8 py-4 md:py-3.5 flex items-center justify-between"
                                >
                                    <span className="text-[14px] font-heading font-black uppercase tracking-widest pointer-events-none">
                                        {service.name}
                                    </span>
                                    <motion.div
                                        animate={{
                                            rotate: isActive ? 0 : 0,
                                            x: isActive ? 4 : 0
                                        }}
                                        className="pointer-events-none"
                                    >
                                        <ArrowUpRight
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;