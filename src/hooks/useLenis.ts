import { useEffect, useState } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook to access the Lenis instance for programmatic scrolling
 * @returns Lenis instance or null if not initialized
 */
export const useLenis = () => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        // Get the Lenis instance from window (set by SmoothScroll component)
        const lenisInstance = (window as any).lenis;
        if (lenisInstance) {
            setLenis(lenisInstance);
        }
    }, []);

    return lenis;
};

/**
 * Scroll to a specific element or position
 * @param target - CSS selector, HTMLElement, or number (scroll position)
 * @param options - Scroll options (offset, duration, etc.)
 */
export const scrollTo = (
    target: string | HTMLElement | number,
    options?: {
        offset?: number;
        duration?: number;
        easing?: (t: number) => number;
    }
) => {
    const lenis = (window as any).lenis as Lenis;
    if (lenis) {
        lenis.scrollTo(target, options);
    }
};

/**
 * Stop the smooth scroll
 */
export const stopScroll = () => {
    const lenis = (window as any).lenis as Lenis;
    if (lenis) {
        lenis.stop();
    }
};

/**
 * Start/resume the smooth scroll
 */
export const startScroll = () => {
    const lenis = (window as any).lenis as Lenis;
    if (lenis) {
        lenis.start();
    }
};
