import { useEffect, useState } from 'react';
import { motion, AnimatePresence, animate, useMotionValue } from 'motion/react';

interface SplashScreenProps {
    onComplete?: () => void;
}

const words = ['Strategy', 'Creativity', 'Growth'];

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [shouldRender, setShouldRender] = useState(true);

    // Counter logic using Motion's motion value for performance
    const count = useMotionValue(0);
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        // Start animations
        const controls = animate(count, 100, {
            duration: 2.5,
            ease: "easeInOut",
            onUpdate: (latest) => setDisplayCount(Math.round(latest)),
            onComplete: () => {
                // Wait a tiny bit then signaled completion via exit animation
                setTimeout(() => {
                    setShouldRender(false);
                }, 500);
            }
        });

        // Word cycling
        const wordCycle = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 600);

        return () => {
            controls.stop();
            clearInterval(wordCycle);
        };
    }, [onComplete, count]);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {shouldRender && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed top-0 left-0 z-100 flex h-screen w-full flex-col justify-between bg-bg-light p-8 md:p-12 lg:p-20 overflow-hidden"
                >
                    {/* Top UI */}
                    <div className="relative z-10 flex justify-between items-start">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-text/80">
                                HerLead
                            </span>
                        </div>
                    </div>

                    {/* Center Content: Cycling Words */}
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                        <div className="relative h-24 flex items-center justify-center w-full">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={words[wordIndex]}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute text-[10vw] md:text-[6vw] font-heading font-black tracking-[-0.05em] uppercase text-text"
                                >
                                    {words[wordIndex]}
                                </motion.h2>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Bottom Content: Progress & Counter */}
                    <div className="relative z-10 w-full space-y-6">
                        <div className="flex items-end justify-between pb-6">
                            <motion.h1
                                className="text-7xl md:text-9xl font-heading font-black text-text tracking-tighter leading-none"
                            >
                                {displayCount}%
                            </motion.h1>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-px bg-text/5 relative overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                className="absolute top-0 left-0 h-full bg-primary"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
