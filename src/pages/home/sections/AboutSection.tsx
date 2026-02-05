import React, { useRef } from 'react';
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

    const marqueeWords = [
        { text: "ELEVATING AUTHORITY", font: "font-heading font-black uppercase" },
        { text: "DIGITAL IMPACT", font: "font-heading font-black uppercase" },
        { text: "STRATEGIC GROWTH", font: "font-heading font-black uppercase" },
        { text: "MODERN BRANDING", font: "font-heading font-black uppercase" },
        { text: "CREATIVE EXCELLENCE", font: "font-heading font-black uppercase" },
        { text: "VISUAL IDENTITY", font: "font-heading font-black uppercase" },
        { text: "NEXT-GEN SOLUTIONS", font: "font-heading font-black uppercase" },
        { text: "PREMIUM DESIGN", font: "font-heading font-black uppercase" }
    ];

    const splitText = (text: string) => {
        return text.split("").map((char, i) => (
            <motion.span
                key={i}
                variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}
                className="inline-block whitespace-pre"
            >
                {char}
            </motion.span>
        ));
    };

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

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start'>
                    {/* Image */}
                    <motion.div
                        initial={{ x: -60, opacity: 0, scale: 0.95 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='lg:col-span-6 relative order-1 lg:order-1'
                    >
                        <div className='relative aspect-square w-full max-w-xl overflow-hidden rounded-sm bg-neutral-100'>
                            <img
                                src="/images/about/about.webp"
                                alt="About HerLead"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className='lg:col-span-6 space-y-12 order-2 lg:order-2'
                    >
                        <div className='space-y-6'>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter text-text uppercase'>
                                {["BUILDING", "DIGITAL", "IMPACT."].map((word, idx) => (
                                    <div key={idx} className='overflow-hidden'>
                                        <motion.span
                                            variants={{
                                                hidden: { y: "100%" },
                                                visible: { y: 0 }
                                            }}
                                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1] }}
                                            className={`inline-block ${idx === 1 ? 'text-secondary' : idx === 2 ? 'text-primary' : ''}`}
                                        >
                                            {word}
                                        </motion.span>
                                    </div>
                                ))}
                            </h2>
                        </div>

                        <div className='max-w-xl space-y-8'>
                            <motion.p
                                variants={{
                                    hidden: { y: 30, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className='text-lg md:text-body-custom font-body font-bold text-text leading-relaxed'
                            >
                                {aboutContent.intro}
                            </motion.p>

                            <motion.p
                                variants={{
                                    hidden: { y: 30, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className='text-lg md:text-body-custom font-body text-text leading-relaxed whitespace-pre-line'
                                dangerouslySetInnerHTML={{ __html: aboutContent.mainDescription }}
                            />

                            <motion.div
                                variants={{
                                    hidden: { y: 30, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className='grid grid-cols-2 md:grid-cols-3 gap-10 pt-10 border-t border-black/5'
                            >
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
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Showcase Visual Section */}
            <div
                ref={showcaseRef}
                className="relative w-screen left-1/2 -translate-x-1/2 h-screen md:h-[130vh] bg-bg-light flex flex-col items-center justify-center overflow-hidden mt-20"
            >
                {/* Central Visual */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[60vh] md:w-[45vw] md:h-[70vh] z-10 flex items-center justify-center pointer-events-none">
                    <motion.div
                        initial={{ clipPath: "inset(20% 20% 20% 20%)" }}
                        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        className="w-full h-full overflow-hidden relative"
                    >
                        <motion.img
                            initial={{ scale: 1.2, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                            src="/images/about/showcase.webp"
                            alt="Hero Focal Point"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 ring-1 ring-inset ring-white/10"></div>
                    </motion.div>
                </div>

                {/* Typography Layers */}
                <motion.div
                    style={{ y: titleTopY }}
                    className="absolute top-[13%] md:top-[15%] left-1/2 -translate-x-1/2 z-20 w-full text-center pointer-events-none"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.05 }}
                        className="font-display font-bold text-[22vw] md:text-[10vw] leading-none uppercase tracking-tighter text-secondary"
                    >
                        {splitText("Modern")}
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ y: titleBottomY }}
                    className="absolute bottom-[23%] md:bottom-[23%] left-1/2 -translate-x-1/2 z-20 w-full text-center pointer-events-none"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
                        className="font-heading font-black text-[22vw] md:text-[10vw] leading-none uppercase tracking-tighter text-secondary"
                    >
                        {splitText("Brand")}
                    </motion.div>
                </motion.div>

                {/* Meta Data */}
                <div className="absolute top-12 left-8 md:top-16 md:left-12 z-30 flex flex-col gap-2">
                    <span className="font-heading font-black text-[10px] uppercase tracking-widest text-black">Est. 2024</span>
                    <div className="w-10 h-px bg-black/20"></div>
                </div>

                <div className="absolute top-12 right-8 md:top-16 md:right-12 z-30 flex flex-col items-end gap-2">
                    <span className="font-heading font-black text-[10px] uppercase tracking-widest text-right text-black">Global Reach</span>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
                    </div>
                </div>

                {/* Marquee */}
                <div className="absolute bottom-0 w-full bg-secondary text-white py-8 md:py-12 z-50 overflow-hidden border-t border-white/5">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="flex whitespace-nowrap"
                    >
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
                                {marqueeWords.map((word, idx) => (
                                    <React.Fragment key={idx}>
                                        <span className={`text-2xl md:text-5xl tracking-widest text-white shrink-0 ${word.font}`}>
                                            {word.text}
                                        </span>
                                        <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shrink-0"></span>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;