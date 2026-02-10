import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { serviceDetails } from '../../constants/serviceDetails';
import { legacyDetails } from '../../constants/legacyDetails';
import Button from '../../components/common/Button';

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
    const navigate = useNavigate();
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

                {/* 2. Hero Section (Restructured Layout) */}
                {/* 2. Hero Section (Restructured Layout) */}
                <div className="mb-20 md:mb-32">
                    {/* Heading - Full Width */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black leading-[1.1] tracking-tighter uppercase text-left text-secondary mb-8">
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="inline-block"
                        >
                            {detail.title}
                        </motion.span>
                    </h1>

                    {/* Content Stack: Subtitle -> Video -> Description */}
                    <div className="flex flex-col gap-8 md:gap-12 items-start">
                        {/* Subtitle */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        >
                            <p className="text-xl md:text-2xl font-bold leading-relaxed">
                                {detail.subtitle}
                            </p>
                        </motion.div>

                        {/* Visual: Video or Image */}
                        {(detail.heroVideo || detail.heroImage) && (
                            <div className="w-full relative">
                                <motion.div
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                    className="relative w-full aspect-[16/9] overflow-hidden rounded-sm hero-img flex items-center justify-center bg-transparent"
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
                                </motion.div>
                            </div>
                        )}

                        {/* Description & Stats */}
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                            className="space-y-8 max-w-4xl"
                        >
                            <div className="w-16 md:w-20 h-1 bg-black" />
                            <p className="text-lg md:text-xl text-black leading-relaxed">
                                {detail.description}
                            </p>

                            {detail.stats && detail.stats.length > 0 && (
                                <div className="flex flex-wrap gap-4 pt-4">
                                    {detail.stats.map((stat, i) => (
                                        <div key={i} className="border border-[#EBEBEB] px-6 py-4 min-w-[120px]">
                                            <div className="text-3xl font-heading font-black">{stat.value}</div>
                                            <div className="text-[10px] font-heading font-black uppercase tracking-widest text-secondary">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* 3. Secondary Content (Process & Features) */}
                <div className="mb-20 md:mb-32">
                    {/* Image - Full Width at Top */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1 }}
                        className="mb-12"
                    >
                        <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-sm bg-neutral-100">
                            <img
                                src={detail.gallery?.[0] || detail.heroImage}
                                alt="Detail View"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Core Capabilities Heading */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <span className="text-secondary font-heading font-black uppercase tracking-[0.2em] text-sm md:text-base">
                            Core Capabilities
                        </span>
                    </motion.div>

                    {/* Features Cards Grid */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {detail.features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`group bg-white border border-[#EBEBEB] rounded-sm p-6 md:p-8 hover:border-secondary hover:shadow-lg transition-all duration-300 ${i >= 3 ? 'md:col-span-1 lg:col-start-' + (i === 3 ? '2' : '5') : ''
                                    }`}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-4xl font-heading font-black text-secondary group-hover:scale-110 transition-transform">
                                        0{i + 1}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-heading font-black uppercase mb-3 group-hover:text-secondary transition-colors">
                                    {f.title.replace(/^\d+\.\s*/, '')}
                                </h3>
                                <p className="text-black text-base md:text-lg leading-relaxed">
                                    {f.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* 4. Why Choose Us Carousel Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1 }}
                    className="mb-20 md:mb-32"
                >
                    <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 text-black p-8 md:p-16 rounded-xl relative overflow-hidden">
                        <h2 className="text-3xl md:text-5xl font-heading font-black mb-12 text-center">
                            We're the agency for people who hate agencies
                        </h2>

                        {(() => {
                            const [currentSlide, setCurrentSlide] = useState(0);

                            const allCards = [
                                {
                                    icon: "🎯",
                                    title: "We know our sh*t",
                                    description: "We work hard to recruit and retain the best talent in our industry. Our entire team is fully accredited in their area of expertise - and you can be certain we have the best in the biz representing your brand."
                                },
                                {
                                    icon: "✓",
                                    title: "We're selective with our clientele",
                                    description: "We carefully select our partners to ensure we're the right fit for each other, maximizing our potential for success. Our retention rate speaks for itself, and our client portfolio consists of a list of long-term success stories."
                                },
                                {
                                    icon: "👑",
                                    title: "We don't join trends, we create them",
                                    description: "See that wave our competitors are riding? We made it. This is your invitation to get on and start setting trends with us."
                                },
                                {
                                    icon: "🏠",
                                    title: "We're your in-house team",
                                    description: "We take the whole \"full-service\" thing seriously. Expect to have a long-term and dedicated team on your account."
                                },
                                {
                                    icon: "🔥",
                                    title: "We don't settle for average",
                                    description: "We're not here for a participation medal - We play to WIN. Our goal is to drive industry-leading results for our clients, with an award-winning mindset, long-term."
                                }
                            ];

                            const getVisibleCards = () => {
                                const startIndex = currentSlide % 2 === 0 ? 0 : 2;
                                return allCards.slice(startIndex, startIndex + 3);
                            };

                            const nextSlide = () => {
                                setCurrentSlide((prev) => prev + 1);
                            };

                            const prevSlide = () => {
                                setCurrentSlide((prev) => prev - 1);
                            };

                            return (
                                <div className="relative">
                                    {/* Cards Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                        {getVisibleCards().map((card, idx) => (
                                            <motion.div
                                                key={`${currentSlide}-${idx}`}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                className="bg-yellow-300 bg-opacity-60 backdrop-blur-sm border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
                                            >
                                                <div className="text-4xl mb-4">{card.icon}</div>
                                                <h3 className="text-xl md:text-2xl font-heading font-black mb-3">
                                                    {card.title}
                                                </h3>
                                                <p className="text-sm md:text-base leading-relaxed">
                                                    {card.description}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Navigation Arrows */}
                                    <div className="flex justify-center gap-4">
                                        <button
                                            onClick={prevSlide}
                                            className="w-12 h-12 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                            aria-label="Previous slide"
                                        >
                                            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="w-12 h-12 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                            aria-label="Next slide"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        })()}
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
                        <div className="border-t-2 border-black pt-10 md:pt-16 flex flex-col gap-10 md:gap-16">
                            <div className="w-full">
                                <h3 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter leading-none text-secondary">
                                    Frequently Asked Questions
                                </h3>
                            </div>
                            <div className="w-full space-y-12">
                                {detail.faqs.slice(0, 5).map((faq, i) => (
                                    <FAQItem key={i} faq={faq} index={i} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Contact CTA Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1 }}
                    className="mt-20 md:mt-32 mb-20 md:mb-32"
                >
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
                        <Button
                            onClick={() => navigate('/request-quote')}
                            variant="yellow"
                            size="sm"
                            className="!px-6 !py-3"
                        >
                            Request a Quote
                        </Button>

                        <Button
                            onClick={() => navigate('/contact')}
                            variant="red"
                            size="sm"
                            className="!px-6 !py-3"
                        >
                            General Inquiries
                        </Button>

                        <Button
                            onClick={() => navigate('/influencer-partnership')}
                            variant="purple"
                            size="sm"
                            className="!px-6 !py-3"
                        >
                            I'm an Influencer
                        </Button>

                        <Button
                            onClick={() => navigate('/talent-application')}
                            variant="red"
                            size="sm"
                            className="!px-6 !py-3"
                        >
                            I Am a Talent
                        </Button>

                        <Button
                            onClick={() => navigate('/hire-talent')}
                            variant="cyan"
                            size="sm"
                            className="!px-6 !py-3"
                        >
                            I Need a Talent
                        </Button>
                    </div>
                </motion.div>
            </div>
        </main >
    );
};

export default ServiceDetail;
