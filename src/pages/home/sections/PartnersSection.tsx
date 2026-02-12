import { motion } from 'motion/react';

const partners = [
    { name: "Logo 1", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/635844dc42a2c8aab0b023cf_logo02b-1.avif" },
    { name: "Logo 2", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/635844b4b303084f0562014d_logo06a-1.webp" },
    { name: "Logo 3", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/635844d9ad459df8b06e0f46_logo02e.webp" },
    { name: "Logo 4", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/635844c31346815157d31d56_logo02c.webp" },
    { name: "Logo 5", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/635844d7afaacaa6eef6157b_logo05c.webp" },
    { name: "Baskin Robbins", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/642863376251930b5e454c59_baskin-robbins.avif" },
    { name: "Well.ca", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/64286509835fa9303b677188_WellCa.avif" },
    { name: "Tricon", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/642864ee13003e4f61cf0ec3_Tricon.avif" },
    { name: "Parents", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/642865100da4497713f73d3d_Parents.avif" },
    { name: "Unicef", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/642865196251932b5e4571e6_Unicef.avif" },
    { name: "Leapfrog", url: "https://cdn.prod.website-files.com/6322067826f43f0806c08b96/642865015fbce2e5ef52139d_Leapfrog.avif" },
];

const PartnersSection = () => {
    return (
        <section className="w-full bg-bg-light pt-12 md:pt-24 pb-8 md:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16 px-6 md:px-12 lg:px-20">
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

                {/* Content: Text, Logos, Button */}
                <div className="flex flex-col items-center justify-center gap-10 md:gap-14 px-4 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-black leading-tight tracking-tight">
                            Some Of The World's <br className="hidden md:block" />
                            Biggest Brands.
                        </p>
                    </motion.div>

                    {/* Icons Marquee */}
                    <div className="w-full overflow-hidden relative py-4">
                        <style>
                            {`
                                @keyframes partners-marquee {
                                    from { transform: translateX(0); }
                                    to { transform: translateX(-50%); }
                                }
                                .partners-container {
                                    display: flex;
                                    width: max-content;
                                    animation: partners-marquee 35s linear infinite;
                                    will-change: transform;
                                }
                            `}
                        </style>
                        <div className="partners-container gap-16 md:gap-32 py-10">
                            {/* Duplicating once for seamless loop with -50% translate */}
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-16 md:gap-32">
                                    {partners.map((partner, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-center px-4"
                                        >
                                            <div
                                                className="w-36 h-24 md:w-52 md:h-32 flex items-center justify-center p-4 md:p-6 group cursor-pointer"
                                            >
                                                <img
                                                    src={partner.url}
                                                    alt={partner.name}
                                                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                                                    style={{ filter: "brightness(0) saturate(100%) invert(53%) sepia(48%) saturate(1633%) hue-rotate(314deg) brightness(102%) contrast(101%)" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.a
                        href="/hire-talent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border-2 border-secondary rounded-full overflow-hidden transition-all duration-300 hover:bg-secondary hover:scale-105"
                        role="button"
                    >
                        <span className="relative z-10 text-xl font-bold font-heading uppercase tracking-widest text-secondary group-hover:text-white transition-colors duration-300">
                            Work with Us
                        </span>
                        <div className="relative z-10 w-6 h-6 text-secondary group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-full h-full">
                                <path d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l146.7 0L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 205.3 288 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z" />
                            </svg>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;