import { motion } from 'motion/react';

import { Instagram, Linkedin } from "lucide-react";

import { socialPosts } from "../../../constants/socials";

const BlogsSection = () => {
    return (
        <section className="relative w-full bg-bg-light overflow-hidden pb-4 md:pb-6 pt-8">
            {/* SOCIAL CTA */}
            <div className="w-full py-12 md:py-16 flex flex-col items-center">
                <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-6 mb-16">
                    {socialPosts.slice(0, 2).map((post) => (
                        <div
                            key={post.id}
                            className="w-[90vw] md:w-[380px] lg:w-[420px] will-change-transform transform-gpu"
                            style={{
                                transform: `rotate(${post.rotation}deg)`,
                                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                            }}
                        >
                            <div className="bg-white rounded-3xl p-3 border border-black/5 shadow-xl">
                                <div className="w-full aspect-square rounded-[1.25rem] overflow-hidden bg-secondary/20">
                                    <img
                                        src={post.animation}
                                        alt="Social post"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Footer */}
                <div className="flex flex-col items-center text-center py-12">
                    <div className="px-6 py-2 bg-white rounded-full mb-6 shadow-sm border border-black/5">
                        <span className="text-[10px] font-bold text-black tracking-widest uppercase italic">
                            @herlead_official — <span className="text-primary font-black uppercase">Stay</span> <span className="text-secondary font-black uppercase">Connected</span>
                        </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-black text-black tracking-tighter uppercase mb-10 leading-[1.1] md:leading-none">
                        and obviously you follow <br className="hidden md:block" />
                        our <span className="text-secondary italic">social media</span>
                    </h3>

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
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-lg group ${social.bgClass}`}
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