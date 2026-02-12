import { motion } from 'motion/react';
import { useSplash } from '../../../hooks/useSplash';

const HeroSection = () => {
    const { isSplashFinished } = useSplash();

    // Text variants for the staggered reveal
    const letterContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
            },
        },
    };

    const letterAnimation = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#fffefc]">

            {/* Liquid Gradient Background - Colorful & Realistic */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[#ff6666]/30 rounded-full blur-[100px] mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-[#d4af38]/30 rounded-full blur-[100px] mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 50, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-[#0891B2]/20 rounded-full blur-[100px] mix-blend-multiply"
                />
            </div>

            {/* Glassmorphism / Texture Overlay (Optional, ensures "Realistic" feel) */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] pointer-events-none" />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isSplashFinished ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-4"
            >
                {/* Logo Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative mb-8 md:mb-12"
                >
                    {/* Central Glow (White/Light) */}
                    <div className="absolute inset-0 bg-white blur-3xl rounded-full scale-125 opacity-80" />

                    <img
                        src="/images/brand/logo.webp"
                        alt="HerLead Logo"
                        className="w-[200px] md:w-[400px] lg:w-[600px] h-auto relative z-10 drop-shadow-xl"
                    />
                </motion.div>

                {/* Animated Motto */}
                <motion.div
                    variants={letterContainer}
                    initial="hidden"
                    animate="show"
                    className="relative"
                >
                    <motion.h2 className="text-2xl md:text-5xl lg:text-7xl font-heading font-black uppercase tracking-widest text-[#121212] drop-shadow-sm">
                        {Array.from("360° DIGITAL IMPACT").map((char, index) => (
                            <motion.span key={index} variants={letterAnimation}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>

                    {/* Elegant Separator Line (Dark) */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af38] to-transparent mt-6 md:mt-10 mx-auto max-w-xs md:max-w-xl opacity-80"
                    />
                </motion.div>

                {/* Scroll Indicator (Dark) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center p-1"
                    >
                        <div className="w-1 h-2 bg-black rounded-full" />
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default HeroSection;