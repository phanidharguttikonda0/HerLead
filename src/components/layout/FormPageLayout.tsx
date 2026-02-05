import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useSpring } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface FormPageLayoutProps {
    hero: {
        title: React.ReactNode;
        subtext: React.ReactNode;
        image: string;
        imageAlt?: string;
    };
    message: {
        subtitle: string;
        title: React.ReactNode;
        description: React.ReactNode;
        footer?: React.ReactNode;
    };
    formTitle: string;
    extraSection?: React.ReactNode;
    callout?: React.ReactNode;
    children: React.ReactNode;
    containerClassName?: string;
}

export const FormPageLayout = ({
    hero,
    message,
    formTitle,
    extraSection,
    callout,
    children,
    containerClassName = ""
}: FormPageLayoutProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main ref={containerRef} className={`bg-[#F7F7F7] text-black min-h-screen ${containerClassName}`}>
            {/* Header / Navigation Back */}
            <div className="fixed top-28 left-6 md:top-24 md:left-12 z-40">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full border border-[#EBEBEB] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <ArrowLeft size={18} />
                    </div>
                    <span className="text-[10px] uppercase font-heading font-bold tracking-widest hidden md:block text-black">Return Home</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col md:flex-row items-stretch overflow-hidden">
                {/* Text Side */}
                <div className="flex-1 flex flex-col justify-center px-6 md:px-20 pt-44 pb-12 md:py-20 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter uppercase text-black">
                            {hero.title}
                        </h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-8 md:mt-12 space-y-4"
                        >
                            {hero.subtext}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 relative min-h-[300px] md:min-h-0 bg-black overflow-hidden border-l border-[#EBEBEB]">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.8 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        src={hero.image}
                        alt={hero.imageAlt || "Hero"}
                        className="w-full h-full object-cover"
                    />
                    {/* Replaced gradient with solid subtle border/overlay if needed, but per rules keeping it clean */}
                </div>
            </section>

            {/* Message Section */}
            <section className="py-16 md:py-24 px-6 md:px-20 max-w-7xl mx-auto border-t border-[#EBEBEB]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-base md:text-2xl uppercase tracking-[0.2em] font-heading font-black mb-6 md:mb-8 text-secondary">
                            {message.subtitle}
                        </h3>
                        <div className="text-xl md:text-3xl lg:text-4xl font-heading font-black uppercase leading-tight tracking-tighter text-black">
                            {message.title}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-10"
                    >
                        <div className="text-base md:text-2xl font-body leading-relaxed text-black">
                            {message.description}
                        </div>
                        {message.footer && (
                            <div className="pt-6 md:pt-8 border-t-2 border-black text-black">
                                {message.footer}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Extra Section (e.g. Staffing Detail) */}
            {extraSection}

            {/* Form Section */}
            <section className="relative pt-24 pb-12 bg-[#F7F7F7] text-black px-6 md:px-20 form-container border-t border-[#EBEBEB] overflow-hidden">
                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* The Form Card - No shadow/blur */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-3xl md:rounded-[4rem] p-8 md:p-20 border border-[#EBEBEB]"
                    >
                        <div className="mb-16 md:mb-24 text-center">
                            <h2 className="text-3xl md:text-6xl lg:text-8xl font-heading font-black uppercase tracking-tighter mb-4">
                                {formTitle}
                            </h2>
                            <div className="w-20 h-1 bg-secondary mx-auto"></div>
                        </div>

                        <form className="space-y-20 md:space-y-24" onSubmit={(e) => e.preventDefault()}>
                            {children}

                            {/* Optional Callout Card */}
                            {callout}
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Award-Level Eyes Section */}
            <section className="w-full bg-secondary py-24 md:py-32 flex flex-col items-center justify-center relative overflow-hidden border-t border-[#EBEBEB]">
                <div className="relative z-10 flex flex-col items-center gap-8">
                    <EyesFollow />
                    <h2 className="text-4xl md:text-8xl font-heading font-black text-black uppercase tracking-tighter text-center mt-12 md:mt-20">
                        Bring Your <br /><span className="text-white">Best Energy.</span>
                    </h2>
                </div>
            </section>
        </main>
    )
}

const EyesFollow = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="flex gap-6 md:gap-12 scale-90 md:scale-100">
            {[0, 1].map((i) => (
                <Eye key={i} mousePos={mousePos} />
            ))}
        </div>
    );
};

const Eye = ({ mousePos }: { mousePos: { x: number, y: number } }) => {
    const eyeRef = useRef<HTMLDivElement>(null);

    // Smooth pupil movement using Framer Motion springs
    const x = useSpring(0, { stiffness: 150, damping: 15 });
    const y = useSpring(0, { stiffness: 150, damping: 15 });

    useEffect(() => {
        if (!eyeRef.current) return;
        const rect = eyeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);
        const distance = Math.min(rect.width / 4, Math.hypot(mousePos.x - centerX, mousePos.y - centerY) / 10);

        x.set(Math.cos(angle) * distance);
        y.set(Math.sin(angle) * distance);
    }, [mousePos, x, y]);

    return (
        <div
            ref={eyeRef}
            className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-full flex items-center justify-center relative overflow-hidden border-4 border-black"
        >
            <motion.div
                style={{ x, y }}
                className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full relative"
            >
                <div className="absolute top-2 left-2 w-4 h-4 md:w-5 md:h-5 bg-white rounded-full" />
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/40 rounded-full" />
            </motion.div>
        </div>
    );
};

export const FormGroup = ({ number, title, children }: { number: string, title: string, children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="form-group space-y-12"
    >
        <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-secondary"></span>
            <h3 className="text-lg font-heading font-black uppercase tracking-[0.3em]">{number}. {title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {children}
        </div>
    </motion.div>
)

export const FormField = ({ label, children, hint, fullWidth = false }: { label: string, children: React.ReactNode, hint?: string, fullWidth?: boolean }) => (
    <div className={`form-field flex flex-col gap-4 relative group ${fullWidth ? 'md:col-span-2' : ''}`}>
        <label className="text-sm uppercase tracking-[0.2em] font-black text-black flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            {label}
        </label>
        {hint && <p className="text-[10px] text-black font-black -mt-3 uppercase tracking-wider">{hint}</p>}
        {children}
        <motion.span
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            className="absolute bottom-0 left-0 h-0.5 bg-secondary transition-all"
        />
    </div>
)

export const SubmitButton = ({ text, onClick }: { text: string, onClick?: (e: React.MouseEvent) => void }) => (
    <div className="form-field flex justify-center pt-10 pb-10">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="group relative flex items-center gap-6 px-12 py-6 bg-secondary text-white rounded-full overflow-hidden"
        >
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
            <span className="relative z-10 font-heading font-black uppercase tracking-[0.2em] text-base">
                {text}
            </span>
            <div className="relative z-10 w-10 h-10 rounded-full bg-[#FFFFFF20] flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-secondary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </motion.button>
    </div>
)
