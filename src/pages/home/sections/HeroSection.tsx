import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useSplash } from '../../../hooks/useSplash';

const HeroSection = () => {
    const { isSplashFinished } = useSplash();
    const containerRef = useRef<HTMLElement>(null);

    // Mouse position state for interaction
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement (adjusted for responsiveness)
    const springConfig = { damping: 30, stiffness: 200, mass: 1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Parallax Transforms for Background (Amplified Depth)
    const bgX = useTransform(springX, [-0.5, 0.5], [-60, 60]);
    const bgY = useTransform(springY, [-0.5, 0.5], [-60, 60]);

    // Strong 3D Tilt for "360 View" feel
    // Increased range significantly to make it obvious
    const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth) - 0.5);
        mouseY.set((clientY / innerHeight) - 0.5);
    };

    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            id="hero"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#F5F5F7] perspective-500" // perspective-500 for strong 3D
        >

            {/* Ethereal Mesh Gradients - Soft, Diffused, Premium */}
            <motion.div
                style={{ x: bgX, y: bgY }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
            >
                {/* Gold/Warm Aura */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[#E8C07D] rounded-full blur-[140px] opacity-40 mix-blend-multiply"
                />

                {/* Rose/Pink Aura */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#FFA4A4] rounded-full blur-[140px] opacity-40 mix-blend-multiply"
                />

                {/* Subtle Cool Tone for Balance */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] bg-[#E0E7FF] rounded-full blur-[120px] opacity-30 mix-blend-multiply"
                />
            </motion.div>

            {/* Main Content - 3D Rotatable */}
            <motion.div
                initial="hidden"
                animate={isSplashFinished ? "visible" : "hidden"}
                variants={containerVariants}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-5xl mx-auto will-change-transform"
            >
                {/* Visual Anchor: Logo (Pops out) */}
                <motion.div
                    className="relative mb-12 md:mb-16"
                    style={{ translateZ: 60 }} // Stronger pop
                >
                    <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-150" />
                    <img
                        src="/images/brand/logo.webp"
                        alt="HerLead Logo"
                        className="w-[180px] md:w-[320px] lg:w-[480px] h-auto relative z-10 drop-shadow-2xl"
                    />
                </motion.div>

                {/* Typography (Sits behind logo, but in front of bg) */}
                <motion.div
                    className="relative flex flex-col items-center gap-6"
                    style={{ translateZ: 30 }}
                >
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

                    {/* Button / Call to Action - Functional */}
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
                </motion.div>

            </motion.div>
        </section>
    );
};

export default HeroSection;