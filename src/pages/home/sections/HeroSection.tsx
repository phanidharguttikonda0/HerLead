import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSplash } from '../../../hooks/useSplash';

const HeroSection = () => {
    const { isSplashFinished } = useSplash();
    const [showVideo, setShowVideo] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Ensure video starts when splash is finished
    useEffect(() => {
        if (isSplashFinished && showVideo && videoRef.current) {
            const playVideo = async () => {
                try {
                    await videoRef.current?.play();
                } catch (error) {
                    console.log("Video auto-play failed:", error);
                }
            };
            playVideo();
        }
    }, [isSplashFinished, showVideo]);

    // Monitor video time and show logo 0.5 seconds before video ends
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const timeRemaining = video.duration - video.currentTime;
            if (timeRemaining <= 0.5 && timeRemaining > 0 && showVideo) {
                setShowVideo(false);
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [showVideo]);

    const handleVideoEnd = () => {
        // Show logo for 6 seconds then switch back to video
        setTimeout(() => {
            setShowVideo(true);
        }, 6000);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: isSplashFinished ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: showVideo ? "#121212" : "#fffefc" }}
        >
            <AnimatePresence mode="wait">
                {showVideo ? (
                    <motion.div
                        key="video-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onEnded={handleVideoEnd}
                            className="w-full h-full object-cover"
                        >
                            <source src="/videos/hero.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </motion.div>
                ) : (
                    <motion.div
                        key="logo-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 flex flex-col items-center justify-center p-8"
                    >
                        <img
                            src="/images/brand/logo.webp"
                            alt="HerLead Logo"
                            className="w-[280px] md:w-[500px] lg:w-[700px] h-auto relative z-10"
                        />
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-8 md:mt-12 text-sm md:text-xl lg:text-3xl font-heading font-black uppercase tracking-[0.4em] text-black text-center max-w-2xl leading-relaxed"
                        >
                            360° DIGITAL IMPACT
                        </motion.h2>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default HeroSection;