import { useRef } from 'react';
import { motion } from 'motion/react';
import { useSplash } from '../../../hooks/useSplash';

const HeroSection = () => {
    const { isSplashFinished } = useSplash();
    const containerRef = useRef<HTMLElement>(null);

    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white"
        >
            {/* 
                "Expanding Reveal" Animation 
                - Opens from center point to full screen
                - Slow motion (2.5s)
            */}
            <motion.div
                initial={{
                    clipPath: "circle(0% at 50% 50%)",
                    scale: 0.9,
                    opacity: 0
                }}
                animate={isSplashFinished ? {
                    clipPath: "circle(150% at 50% 50%)",
                    scale: 1,
                    opacity: 1
                } : {
                    clipPath: "circle(0% at 50% 50%)",
                    scale: 0.9,
                    opacity: 0
                }}
                transition={{
                    duration: 7, // User requested 6-7 seconds
                    ease: "easeInOut", // Smoother consistency
                    delay: 0.2
                }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {/* Main Content - Static */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-5xl mx-auto">
                    {/* Logo */}
                    <motion.div
                        className="relative mb-12 md:mb-16"
                    >
                        <img
                            src="/images/brand/logo.webp"
                            alt="HerLead Logo"
                            className="w-[180px] md:w-[320px] lg:w-[480px] h-auto relative z-10 drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Typography */}
                    <div className="relative flex flex-col items-center gap-6">
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-[#1d1d1f] leading-tight drop-shadow-sm">
                            <span className="block bg-clip-text text-transparent bg-gradient-to-br from-[#1d1d1f] to-[#434344]">
                                360° DIGITAL
                            </span>
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#d4af38] to-[#ff6666]">
                                IMPACT
                            </span>
                        </h2>

                        <p className="max-w-xl text-lg md:text-xl font-medium text-[#86868b] tracking-wide mt-2">
                            Empowering Visionaries. Defining Futures.
                        </p>

                        {/* Button / Call to Action */}
                        <div
                            onClick={handleScrollDown}
                            className="mt-12 flex items-center justify-center group cursor-pointer"
                            role="button"
                            aria-label="Scroll down"
                        >
                            <div className="w-12 h-12 rounded-full border border-[#1d1d1f]/10 flex items-center justify-center bg-white/50 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1d1d1f"
                                    strokeWidth="1.5"
                                    className="transform translate-y-px transition-transform duration-300 group-hover:translate-y-1"
                                >
                                    <path d="M12 5V19M12 19L19 12M12 19L5 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;