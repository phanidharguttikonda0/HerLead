import { useRef } from 'react';
import { motion } from 'motion/react';
import { serviceCards } from '../../../constants/legacy';
import ServiceCard from '../components/ServiceCard';

const LegacySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-bg-light"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-24 pb-4 md:pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <div className='inline-flex items-center justify-center gap-4 md:gap-8 mb-3 md:mb-4'>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            className='w-10 md:w-24 h-[1.5px] md:h-[2px] bg-[#E5E5E5] origin-right'
                        />
                        <span className="text-secondary font-heading font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm">
                            Our Capabilities
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            className='header-line-right w-10 md:w-24 h-[1.5px] md:h-[2px] bg-[#E5E5E5] origin-left'
                        />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-0 text-secondary">
                        HerLead Legacy
                    </h2>
                </motion.div>
            </div>

            <div className="relative">
                {serviceCards.map((group, idx) => (
                    <div
                        key={idx}
                        className="sticky top-0 w-full h-[85vh] md:h-screen flex items-center justify-center p-3 md:p-8 lg:p-12 overflow-hidden will-change-transform"
                    >
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full flex items-center justify-center will-change-transform"
                        >
                            <ServiceCard group={group} />
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LegacySection;