import { useRef } from 'react';
import { motion, type Variants } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials } from '../../../constants/testimonials';

const TestimonialSection = () => {
    const containerRef = useRef<HTMLElement>(null);

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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            ref={containerRef}
            className='relative w-full bg-accent-blue mt-12 md:mt-20 py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden rounded-t-3xl md:rounded-t-[2.5rem]'
        >
            <div className='max-w-7xl mx-auto'>
                {/* Header (Centered) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                            className='w-12 md:w-20 h-[2px] bg-white origin-right'
                        />
                        <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.2em] text-white whitespace-nowrap'>
                            Testimonials
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                            className='w-12 md:w-20 h-[2px] bg-white origin-left'
                        />
                    </div>
                    <div className='mt-8 md:mt-12'>
                        <h3 className='text-4xl font-heading font-black text-white leading-none tracking-tighter uppercase'>
                            What our clients <br className='hidden md:block' />
                            <span className="italic text-white">love about us</span>
                        </h3>
                    </div>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16'
                >
                    {testimonials.map((t) => (
                        <motion.div
                            key={t.id}
                            variants={cardVariants}
                            className='space-y-6 flex flex-col'
                        >
                            {/* Quote Icon SVG */}
                            <div className='text-white'>
                                <svg width="32" height="24" viewBox="0 0 48 36" fill="currentColor">
                                    <path d="M0 21.6001C0 14.4001 2.4 -5.72205e-05 14.4 -5.72205e-05V7.20002C9.6 7.20002 7.2 12 7.2 16.8001V21.6001H14.4V36H0V21.6001ZM26.4 21.6001C26.4 14.4001 28.8 -5.72205e-05 40.8 -5.72205e-05V7.20002C36 7.20002 33.6 12 33.6 16.8001V21.6001H40.8V36H26.4V21.6001Z" />
                                </svg>
                            </div>

                            <p className='text-white text-sm md:text-body-custom font-body font-bold leading-[1.6] flex-1'>
                                "{t.quote}"
                            </p>

                            <div className='pt-4 space-y-4'>
                                {/* 5 Star Rating */}
                                <div className='flex gap-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="#d4af38" className="text-primary" />
                                    ))}
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white font-heading font-black uppercase text-sm tracking-[0.2em]'>
                                        {t.company}
                                    </span>
                                    <span className='text-white text-[10px] uppercase font-bold tracking-widest'>Verified Client</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialSection;