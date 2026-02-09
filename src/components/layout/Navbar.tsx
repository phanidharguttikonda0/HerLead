import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Button from '../common/Button';

const Navbar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 50);

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHidden(true);
            } else if (currentScrollY < lastScrollY) {
                setHidden(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', path: '/', action: 'reload' },
        { name: 'About', path: '/#about', action: 'scroll' },
        { name: 'Services', path: '/#services', action: 'scroll' },
    ];

    const handleNavClick = (e: React.MouseEvent, link: any) => {
        if (link.action === 'reload') {
            if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate(link.path);
            }
            return;
        }

        if (link.action === 'scroll') {
            if (pathname === '/') {
                e.preventDefault();
                const targetId = link.path.split('#')[1];
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                setMobileMenuOpen(false);
                return;
            }
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{
                    y: hidden && !mobileMenuOpen ? '-100%' : 0,
                    opacity: hidden && !mobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${mobileMenuOpen ? 'bg-transparent' : 'bg-white/95'
                    } ${scrolled ? 'py-3' : 'py-5'}`}
            >
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Mobile Action Button */}
                    <div className={`lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <Button
                            onClick={() => navigate('/request-quote')}
                            variant="yellow"
                            size="sm"
                            className="!text-[12px] sm:!text-[13px]"
                        >
                            Request Quote
                        </Button>
                    </div>

                    {/* Left: Action Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            onClick={() => navigate('/hire-talent')}
                            variant="cyan"
                            size="sm"
                            className="!px-6 !py-3"
                        >
                            I Need a Talent
                        </Button>

                        <Button
                            onClick={() => navigate('/talent-application')}
                            variant="red"
                            size="sm"
                            className="!px-6 !py-3"
                        >
                            I Am a Talent
                        </Button>
                    </div>

                    {/* Center: Nav Links */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-10 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={(e) => handleNavClick(e, link)}
                                className="text-[21px] uppercase tracking-[0.2em] font-heading font-bold text-text hover:text-secondary transition-colors duration-300 relative group whitespace-nowrap cursor-pointer"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary group-hover:w-full transition-all duration-500" />
                            </Link>
                        ))}
                    </div>

                    {/* Right: Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            onClick={() => navigate('/influencer-partnership')}
                            variant="orange"
                            size="sm"
                            className="!px-6 !py-3"
                        >
                            I Am an Influencer
                        </Button>

                        <Button
                            onClick={() => navigate('/request-quote')}
                            variant="yellow"
                            size="sm"
                            className="!px-6 !py-3"
                        >
                            Request for Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-black'}`}
                        />
                        <span
                            className={`w-3 h-0.5 self-end mr-2 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'bg-black'}`}
                        />
                        <span
                            className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-black'}`}
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-bg-dark z-40 lg:hidden flex flex-col items-center justify-center px-8"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-12 w-full max-w-sm">
                            {/* Mobile Nav Links */}
                            <nav className="flex flex-col items-center gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={(e) => {
                                                handleNavClick(e, link);
                                                setMobileMenuOpen(false);
                                            }}
                                            className="text-xl uppercase tracking-[0.4em] font-heading font-black text-white hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-8 h-px bg-white" />
                                <span className="text-[9px] uppercase tracking-[0.4em] font-black text-white whitespace-nowrap">Strategy • Creativity • Growth</span>
                                <div className="w-8 h-px bg-white" />
                            </motion.div>

                            {/* Mobile Buttons Grid */}
                            <div className="grid grid-cols-1 gap-5 w-full">
                                {[
                                    { label: 'I Need a Talent', variant: 'cyan', href: '/hire-talent' },
                                    { label: 'I Am a Talent', variant: 'red', href: '/talent-application' },
                                    { label: 'I Am an Influencer', variant: 'orange', href: '/influencer-partnership' },
                                    { label: 'Request for Quote', variant: 'yellow', href: '/request-quote' }
                                ].map((btn, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Button
                                            onClick={() => {
                                                navigate(btn.href);
                                                setMobileMenuOpen(false);
                                            }}
                                            variant={btn.variant as any}
                                            size="lg"
                                            fullWidth
                                            className="!py-5"
                                        >
                                            {btn.label}
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
