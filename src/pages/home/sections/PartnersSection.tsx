import { motion } from 'motion/react';
import {
    Cpu,
    Dna,
    Eclipse,
    Fingerprint,
    Globe,
    Infinity as InfinityIcon,
    Leaf,
    Lightbulb,
    Orbit,
    Puzzle,
    ShieldCheck,
    Waves
} from 'lucide-react';

const partners = [
    { icon: <Cpu size={56} />, color: "#FF6B6B" },         // Coral Red
    { icon: <Dna size={56} />, color: "#4ECDC4" },         // Turquoise
    { icon: <Eclipse size={56} />, color: "#FFD93D" },     // Sunny Yellow
    { icon: <Fingerprint size={56} />, color: "#6C5CE7" }, // Purple
    { icon: <Globe size={56} />, color: "#A8E6CF" },       // Mint
    { icon: <InfinityIcon size={56} />, color: "#FF8B94" },// Pinkish
    { icon: <Leaf size={56} />, color: "#1DD1A1" },        // Jade Green
    { icon: <Lightbulb size={56} />, color: "#FEA47F" },    // Soft Orange
    { icon: <Orbit size={56} />, color: "#54A0FF" },       // Azure Blue
    { icon: <Puzzle size={56} />, color: "#D284FF" },      // Lavender
    { icon: <ShieldCheck size={56} />, color: "#26DE81" }, // Emerald
    { icon: <Waves size={56} />, color: "#45AAF2" },       // Sky Blue
];

const PartnersSection = () => {
    return (
        <section className="w-full bg-bg-light pt-12 md:pt-24 pb-8 md:pb-24 border-t-2 border-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-24 px-6 md:px-12 lg:px-20">
                    <div className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                            className='w-12 md:w-20 h-[2px] bg-secondary origin-right'
                        />
                        <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-widest md:tracking-[0.2em] text-secondary'>
                            Our Partners
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                            className='w-12 md:w-20 h-[2px] bg-secondary origin-left'
                        />
                    </div>
                </div>

                {/* Icons Marquee */}
                <div className="w-full mb-12 md:mb-32 overflow-hidden relative">
                    <motion.div
                        className="flex whitespace-nowrap gap-16 md:gap-32 py-10"
                        animate={{
                            x: [0, -1200],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {/* Triplicating for seamless loop */}
                        {[...partners, ...partners, ...partners].map((partner, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-center group cursor-pointer will-change-transform transform-gpu"
                            >
                                <div
                                    className="p-4 md:p-6 rounded-3xl border-2 border-black transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-6 bg-white"
                                    style={{ color: partner.color }}
                                >
                                    {partner.icon}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;