import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { serviceDetails } from '../../constants/serviceDetails';
import { legacyDetails } from '../../constants/legacyDetails';

const FAQItem = ({ faq, index }: { faq: { q: string, a: string }, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#EBEBEB] last:border-0 pb-8">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-start justify-between gap-6 text-left group"
            >
                <h4 className="text-2xl md:text-3xl font-heading font-black uppercase leading-tight flex items-start gap-4 text-black">
                    <span className="text-secondary">Q{index + 1}.</span>
                    {faq.q}
                </h4>
                <div className="mt-1 shrink-0 w-8 h-8 rounded-full border border-[#EBEBEB] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="text-black text-xl leading-relaxed pl-12 border-l-2 border-secondary mt-6">
                            {faq.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const containerRef = useRef<HTMLDivElement>(null);
    const detail = serviceDetails[slug as string] || legacyDetails[slug as string] || serviceDetails["pr-media-services"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <main ref={containerRef} className="bg-[#FDFDFD] text-black min-h-screen pt-24 md:pt-32 pb-0 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-10">

                {/* 1. Header Label (Theme Matched) */}
                <div className="mb-10 md:mb-16 flex justify-center w-full overflow-hidden">
                    <div className="inline-flex items-center justify-center gap-6 w-max">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="section-line w-12 md:w-24 h-px bg-secondary origin-right"
                        />
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="section-label text-sm md:text-lg font-heading font-black uppercase tracking-[0.2em] text-secondary whitespace-nowrap"
                        >
                            Service Showcase
                        </motion.span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="section-line w-12 md:w-24 h-px bg-secondary origin-left"
                        />
                    </div>
                </div>

                {/* 2. Hero Section (Split Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-24 mb-20 md:mb-32">

                    {/* Left: Typography */}
                    <div className="lg:col-span-6 space-y-12">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.1] tracking-tighter uppercase text-left">
                            <div className="reveal-text-line overflow-hidden pb-2">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                    className="inline-block"
                                >
                                    {detail.title.split(' ')[0]}
                                </motion.span>
                            </div>
                            <div className="reveal-text-line overflow-hidden pb-2">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                    className="inline-block text-secondary"
                                >
                                    {detail.title.split(' ').slice(1).join(' ')}
                                </motion.span>
                            </div>
                        </h1>

                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                            className="content-block space-y-6 md:space-y-8"
                        >
                            <div className="w-16 md:w-20 h-1 bg-black" />
                            <p className="text-lg md:text-xl font-bold leading-relaxed max-w-md">
                                {detail.subtitle}
                            </p>
                            <p className="text-lg md:text-xl text-black leading-relaxed">
                                {detail.description}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                {detail.stats && detail.stats.map((stat, i) => (
                                    <div key={i} className="border border-[#EBEBEB] px-6 py-4 min-w-[120px]">
                                        <div className="text-3xl font-heading font-black">{stat.value}</div>
                                        <div className="text-[10px] font-heading font-black uppercase tracking-widest text-secondary">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-6 relative mt-4 lg:mt-0">
                        <motion.div
                            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                            className="relative w-full max-w-lg mx-auto overflow-hidden rounded-sm hero-img flex items-center justify-center bg-transparent"
                        >
                            {detail.heroVideo ? (
                                <video
                                    src={detail.heroVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                />
                            ) : (
                                <img
                                    src={detail.heroImage}
                                    alt={detail.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                />
                            )}
                            {/* Removed overlay */}
                        </motion.div>
                    </div>
                </div>

                {/* 3. Secondary Content (Process & Features) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-24 mb-20 md:mb-32">
                    {/* Visual 2 (Required 2nd Image) */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 order-2 lg:order-1"
                    >
                        <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-neutral-100">
                            <img
                                src={detail.gallery?.[0] || detail.heroImage}
                                alt="Detail View"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-8 border-l-2 border-secondary pl-6">
                            <p className="font-heading font-black text-xl uppercase leading-tight">
                                "Strategic precision determines the magnitude of your impact."
                            </p>
                        </div>
                    </motion.div>

                    {/* Features List */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-7 order-1 lg:order-2"
                    >
                        <span className="block text-secondary font-heading font-black uppercase tracking-[0.2em] mb-8">
                            Core Capabilities
                        </span>

                        <div className="space-y-0 border-t border-[#EBEBEB]">
                            {detail.features.map((f, i) => (
                                <div key={i} className="group py-8 border-b border-[#EBEBEB] flex gap-6 md:gap-12 items-start transition-colors hover:bg-[#F5F5F5] px-4 -mx-4 h-full relative overflow-hidden">
                                    <span className="text-2xl font-heading font-black text-black group-hover:text-secondary transition-colors">0{i + 1}</span>
                                    <div>
                                        <h3 className="text-3xl font-heading font-black uppercase mb-2">{f.title.replace(/^\d+\.\s*/, '')}</h3>
                                        <p className="text-black text-lg leading-relaxed max-w-md">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* 4. Methodology Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1 }}
                    className="mb-20 md:mb-32"
                >
                    <div className="bg-accent-blue text-white p-8 md:p-24 rounded-sm relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-8 text-black">
                                    {detail.method.title.split(' ').slice(0, -1).join(' ')} <span className="text-white">{detail.method.title.split(' ').slice(-1)}</span>
                                </h2>
                                <p className="text-white text-xl max-w-md">
                                    {detail.method.description}
                                </p>
                            </div>
                            <div className="space-y-8">
                                {detail.process.map((p, i) => (
                                    <div key={i} className="flex gap-6 items-center">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <div>
                                            <span className="text-sm font-heading font-black uppercase tracking-widest text-white block mb-1">Step 0{i + 1}</span>
                                            <h4 className="text-2xl font-bold text-white">{p.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Removed decorative background text */}
                    </div>
                </motion.div>

                {/* 5. Outro Block */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1 }}
                    className="mb-20 md:mb-32"
                >
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter leading-tight">
                            The Future of Your Brand Starts with the <span className="text-secondary">Right PR Partner</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-black font-body italic leading-relaxed">
                            Your brand deserves to be seen, heard, and celebrated. We’ll craft your story, strengthen your presence, and help you dominate both online and offline landscapes.
                        </p>
                        <div className="pt-8 text-center flex flex-col items-center">
                            <span className="text-sm font-heading font-black uppercase tracking-[0.4em] text-secondary">Let's Connect</span>
                        </div>
                    </div>
                </motion.div>

                {/* 6. FAQ Section */}
                {detail.faqs && detail.faqs.length > 0 && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1 }}
                        className="mb-12 md:mb-16"
                    >
                        <div className="border-t-2 border-black pt-10 md:pt-16 flex flex-col lg:flex-row gap-10 md:gap-16">
                            <div className="lg:w-1/3">
                                <h3 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter leading-none sticky top-32">
                                    Frequently <br />
                                    <span className="text-secondary italic">Asked</span> <br />
                                    Questions
                                </h3>
                            </div>
                            <div className="lg:w-2/3 space-y-12">
                                {detail.faqs.slice(0, 5).map((faq, i) => (
                                    <FAQItem key={i} faq={faq} index={i} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </main >
    );
};

export default ServiceDetail;
