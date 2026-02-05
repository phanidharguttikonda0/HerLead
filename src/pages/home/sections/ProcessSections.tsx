import { useRef, useState, useEffect } from 'react';
import { motion, type Variants, useMotionValue, useSpring } from 'motion/react';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import { processSteps } from '../../../constants/process';

const ProcessSections = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLElement>(null);

    // Custom Cursor State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHoveringSlider, setIsHoveringSlider] = useState(false);

    // Smooth follow
    const springX = useSpring(mouseX, { damping: 20, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 20, stiffness: 200 });

    // Drag to scroll logic
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll-speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollSlider = (direction: 'next' | 'prev') => {
        if (!sliderRef.current) return;
        const card = sliderRef.current.children[0] as HTMLElement;
        if (!card) return;
        const cardWidth = card.offsetWidth;
        const gap = window.innerWidth > 1024 ? 48 : 24;
        const scrollAmount = cardWidth + gap;

        sliderRef.current.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-bg-light pt-16 lg:pt-24 pb-8 lg:pb-12 overflow-hidden flex flex-col justify-center"
        >
            {/* Custom Cursor */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHoveringSlider ? 1 : 0,
                    opacity: isHoveringSlider ? 1 : 0,
                }}
                className="fixed top-0 left-0 w-24 h-24 bg-accent-blue rounded-full pointer-events-none z-50 flex items-center justify-center text-white font-black text-[10px] uppercase tracking-widest"
            >
                DRAG
            </motion.div>

            <div className="relative z-10 w-full">
                {/* Header Section */}
                <div className="px-6 md:px-12 lg:px-20 mb-12 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-[10px] md:text-sm font-heading font-black uppercase tracking-[0.25em] text-black">Our Workflow</span>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-[4.5vw] font-heading font-black uppercase leading-[0.8] tracking-tighter text-black"
                        >
                            The <span className="text-secondary italic">HerLead</span> <br /> Blueprint.
                        </motion.h2>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => scrollSlider('prev')}
                                className="w-14 h-14 rounded-full border border-black flex items-center justify-center text-black transition-all duration-300 hover:bg-secondary hover:text-white cursor-pointer active:scale-95"
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <button
                                onClick={() => scrollSlider('next')}
                                className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white transition-all duration-300 hover:bg-black hover:text-white cursor-pointer active:scale-95"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="relative border-t border-black/10">
                    <motion.div
                        ref={sliderRef}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        onMouseEnter={() => setIsHoveringSlider(true)}
                        onMouseLeave={() => {
                            setIsHoveringSlider(false);
                            setIsDragging(false);
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className={`flex gap-6 lg:gap-12 px-6 md:px-12 lg:px-20 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-12 ${isHoveringSlider ? 'lg:cursor-none' : ''} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    >
                        {processSteps.map((step) => (
                            <motion.div
                                key={step.number}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8
                                }}
                                className="group relative shrink-0 w-[280px] md:w-[360px] lg:w-[400px] h-[380px] md:h-[460px] lg:h-[500px] bg-secondary border-2 border-white rounded-[3rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden snap-center will-change-transform transform-gpu select-none"
                            >
                                <div className="absolute top-8 right-10 flex flex-col items-end opacity-20">
                                    <span className="text-[4rem] md:text-[5.5rem] font-heading font-black leading-none text-white select-none -translate-y-6 md:-translate-y-8">
                                        {step.number}
                                    </span>
                                </div>

                                <div className="relative z-10 pointer-events-none">
                                    <h3 className="text-3xl md:text-4xl lg:text-4xl font-heading font-black text-white mb-6 uppercase tracking-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-base md:text-xl font-body font-bold text-white leading-relaxed mb-8">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-auto pointer-events-none">
                                    <div className="h-px w-full bg-white mb-6" />
                                    <div className="flex items-center justify-between">
                                        <p className="text-[11px] md:text-[12px] font-heading font-black text-white tracking-widest uppercase italic">
                                            {step.details}
                                        </p>
                                        <MoveRight className="text-white transform group-hover:translate-x-2 transition-transform duration-500" size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSections;