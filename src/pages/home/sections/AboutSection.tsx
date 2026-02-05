import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { aboutContent } from '../../../constants/about';

const AboutSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const showcaseRef = useRef<HTMLDivElement>(null);

    // Scroll progress for showcase parallax effects
    const { scrollYProgress } = useScroll({
        target: showcaseRef,
        offset: ["start end", "end start"]
    });

    const titleTopY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const titleBottomY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section
            ref={containerRef}
            className='relative w-full bg-[#FDFDFD] px-6 md:px-12 lg:px-20 pt-10 md:pt-32 pb-0 overflow-hidden'
            id="about"
        >
            <div className='max-w-7xl mx-auto'>
                {/* Centered Label */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className='mb-6 md:mb-28 flex justify-center w-full overflow-hidden'
                >
                    <div className='inline-flex items-center justify-center gap-6 w-max'>
                        <motion.div
                            variants={{
                                hidden: { scaleX: 0 },
                                visible: { scaleX: 1 }
                            }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className='w-12 md:w-24 h-px bg-secondary/30 origin-right'
                        />
                        <motion.div
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.2em] text-secondary whitespace-nowrap'
                        >
                            Why Herlead
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { scaleX: 0 },
                                visible: { scaleX: 1 }
                            }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className='w-12 md:w-24 h-px bg-secondary/30 origin-left'
                        />
                    </div>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start'>
                    {/* Image - Back to First place on Mobile */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='lg:col-span-6 relative'
                    >
                        <div className='relative aspect-square w-full max-w-xl overflow-hidden rounded-sm bg-neutral-100'>
                            <img
                                src="/images/about/about.webp"
                                alt="About HerLead"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content - Second on Mobile */}
                    <div className='lg:col-span-6 space-y-10 -mt-4 lg:mt-0'>
                        <div className='space-y-6'>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter text-text uppercase'>
                                <span className="block">BUILDING</span>
                                <span className="block text-secondary">DIGITAL</span>
                                <span className="block text-primary">IMPACT.</span>
                            </h2>
                        </div>

                        <div className='max-w-xl space-y-6 md:space-y-8'>
                            <p className='text-lg md:text-body-custom font-body font-bold text-text leading-relaxed'>
                                {aboutContent.intro}
                            </p>

                            <p
                                className='text-lg md:text-body-custom font-body text-text leading-relaxed whitespace-pre-line'
                                dangerouslySetInnerHTML={{ __html: aboutContent.mainDescription }}
                            />

                            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 pt-6 border-t border-black/5'>
                                {[
                                    { label: 'Experience', value: '10+' },
                                    { label: 'Brands', value: '50+' },
                                    { label: 'Results', value: '100%' }
                                ].map((stat, i) => (
                                    <div key={i} className='space-y-1'>
                                        <span className='block text-xs uppercase tracking-[0.3em] font-heading font-black text-secondary'>{stat.label}</span>
                                        <span className='text-4xl md:text-5xl font-black font-heading text-text'>{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Showcase Visual Section */}
            <div
                ref={showcaseRef}
                className="relative w-screen left-1/2 -translate-x-1/2 h-[110vh] md:h-[130vh] bg-bg-light flex flex-col items-center justify-center overflow-hidden mt-20"
            >
                {/* Central Visual */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[60vh] md:w-[45vw] md:h-[70vh] z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-full overflow-hidden relative">
                        <img
                            src="/images/about/showcase.webp"
                            alt="Hero Focal Point"
                            loading="eager"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                </div>

                {/* Typography Layers - CSS PARALLAX for speed */}
                <motion.div
                    style={{ y: titleTopY }}
                    className="absolute top-[13%] md:top-[15%] left-1/2 -translate-x-1/2 z-20 w-full text-center pointer-events-none"
                >
                    <div className="font-display font-bold text-[22vw] md:text-[10vw] leading-none uppercase tracking-tighter text-secondary">
                        Modern
                    </div>
                </motion.div>

                <motion.div
                    style={{ y: titleBottomY }}
                    className="absolute bottom-[32%] md:bottom-[23%] left-1/2 -translate-x-1/2 z-20 w-full text-center pointer-events-none"
                >
                    <div className="font-heading font-black text-[22vw] md:text-[10vw] leading-none uppercase tracking-tighter text-secondary">
                        Brand
                    </div>
                </motion.div>

                {/* Meta Data */}
                <div className="absolute top-12 left-8 md:top-16 md:left-12 z-30 flex flex-col gap-2">
                    <span className="font-heading font-black text-[10px] uppercase tracking-widest text-black">Est. 2026</span>
                    <div className="w-10 h-px bg-black/20"></div>
                </div>

                <div className="absolute top-12 right-8 md:top-16 md:right-12 z-30 flex flex-col items-end gap-2">
                    <span className="font-heading font-black text-[10px] uppercase tracking-widest text-right text-black">Global Reach</span>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
                    </div>
                </div>

                {/* Marquee - Standard CSS Animation for extreme performance */}
                <div className="absolute bottom-0 w-full bg-secondary text-white py-8 md:py-12 z-50 overflow-hidden border-t border-white/5">
                    <style>
                        {`
                            @keyframes marquee-fast {
                                from { transform: translateX(0); }
                                to { transform: translateX(-50%); }
                            }
                            .marquee-container {
                                display: flex;
                                width: max-content;
                                animation: marquee-fast 35s linear infinite;
                                will-change: transform;
                            }
                        `}
                    </style>
                    <div className="marquee-container">
                        <span className="text-2xl md:text-5xl font-heading font-black uppercase tracking-widest whitespace-nowrap px-4">
                            {aboutContent.marqueeText + aboutContent.marqueeText}
                        </span>
                        <span className="text-2xl md:text-5xl font-heading font-black uppercase tracking-widest whitespace-nowrap px-4">
                            {aboutContent.marqueeText + aboutContent.marqueeText}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;