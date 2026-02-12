import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
    onComplete?: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
    const [shouldRender, setShouldRender] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Ensure video plays if autoplay policy allows
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
                // Fallback: If autoplay fails (rare with muted), maybe show a play button or just skip?
                // For now, let's just proceed after a timeout if video doesn't start
                setTimeout(() => setShouldRender(false), 3000);
            });
        }
    }, []);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {shouldRender && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                >
                    <video
                        ref={videoRef}
                        src="/videos/hero.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                        onEnded={() => setShouldRender(false)}
                    />

                    {/* Optional Skip Button for UX */}
                    <button
                        onClick={() => setShouldRender(false)}
                        className="absolute bottom-8 right-8 text-white/50 hover:text-white text-sm uppercase tracking-widest transition-colors z-20"
                    >
                        Skip
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
