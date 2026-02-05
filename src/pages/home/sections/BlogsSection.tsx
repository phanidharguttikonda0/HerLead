import { motion } from 'motion/react';
import Lottie from "lottie-react";
import { Instagram, Linkedin } from "lucide-react";
import { blogPosts } from "../../../constants/blogs";
import { socialPosts } from "../../../constants/socials";

const BlogsSection = () => {
    return (
        <section className="relative w-full bg-bg-light overflow-hidden pb-4 md:pb-6 pt-8">
            {/* SECTION HEADER (Centered) */}
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='inline-flex items-center justify-center gap-3 md:gap-6 mb-8'
                >
                    <div className='w-12 md:w-20 h-[2px] bg-secondary' />
                    <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-section-label font-heading font-black uppercase tracking-[0.2em] text-secondary'>
                        Publications
                    </h2>
                    <div className='w-12 md:w-20 h-[2px] bg-secondary' />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-heading font-black text-black leading-[1.1] md:leading-none tracking-tighter uppercase"
                >
                    You read our <br className="hidden md:block" />
                    publications right?
                </motion.h2>
            </div>

            {/* BLOG CARDS */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 mb-24">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative w-full will-change-transform transform-gpu"
                    >
                        <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden bg-black mb-8 border-2 border-black">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                loading="lazy"
                            />
                            <div className="absolute top-6 left-6 px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest skew-x-[-10deg] rounded-sm">
                                {post.tag}
                            </div>
                        </div>
                        <div className="relative">
                            <h3 className="text-2xl md:text-3xl font-black text-black leading-[1.1] tracking-tighter uppercase group-hover:text-secondary transition-colors">
                                {post.title}
                            </h3>
                            <p className="mt-4 text-sm md:text-body-custom text-black font-bold leading-relaxed ">
                                {post.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* SOCIAL CTA */}
            <div className="w-full py-12 md:py-16 flex flex-col items-center border-t-2 border-black">
                <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6 mb-16">
                    {socialPosts.slice(0, 2).map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: post.rotation }}
                            viewport={{ once: true }}
                            className="w-[90vw] md:w-[380px] lg:w-[420px] will-change-transform transform-gpu"
                        >
                            <div className="bg-white rounded-[2.5rem] p-3 border-2 border-black">
                                <div className="w-full aspect-square rounded-[1.8rem] overflow-hidden bg-bg-light border border-black">
                                    <Lottie
                                        animationData={post.animation}
                                        loop={true}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Footer */}
                <div className="flex flex-col items-center text-center py-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-6 py-2 border-2 border-black rounded-full mb-6"
                    >
                        <span className="text-[10px] font-bold text-black tracking-widest uppercase italic">
                            @herlead_official — <span className="text-primary font-black uppercase">Stay</span> <span className="text-secondary font-black uppercase">Connected</span>
                        </span>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-black text-black tracking-tighter uppercase mb-10 leading-[1.1] md:leading-none"
                    >
                        and obviously you follow <br className="hidden md:block" />
                        our <span className="text-secondary italic">social media</span>
                    </motion.h3>

                    {/* Social Icon Row */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {[
                            { Icon: Instagram, colorClass: "text-white", bgClass: "bg-social-instagram", label: "Instagram", href: "https://www.instagram.com/herlead_official/" },
                            { Icon: Linkedin, colorClass: "text-white", bgClass: "bg-social-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/herlead/" },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                aria-label={social.label}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-black flex items-center justify-center cursor-pointer transition-colors group ${social.bgClass}`}
                            >
                                <social.Icon
                                    size={24}
                                    className={`transition-colors ${social.colorClass}`}
                                />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;