import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Standard scroll reset
        window.scrollTo(0, 0);

        // Lenis scroll reset if available
        if ((window as any).lenis) {
            (window as any).lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
