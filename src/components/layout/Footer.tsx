import { Instagram, Linkedin } from "lucide-react"
import { motion } from "motion/react"
import { useNavigate, useLocation } from "react-router-dom"

const socials = [
    { label: "Instagram", href: "https://www.instagram.com/herlead_official/", Icon: Instagram, colorClass: "text-white", bgClass: "bg-social-instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/herlead/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BW2JOIzsjTBKyCPZW48fBhw%3D%3D", Icon: Linkedin, colorClass: "text-white", bgClass: "bg-social-linkedin" },
]

const buttons = [
    { label: "Request a Quote", bg: "bg-primary", path: "/request-quote" },
    { label: "General Inquiries", bg: "bg-secondary", path: "mailto:info@herleads.com" },
    { label: "I'm an Influencer", bg: "bg-accent-orange", path: "/influencer-partnership" },
    { label: "I Am a Talent", bg: "bg-secondary", path: "/talent-application" },
    { label: "I Need a Talent", bg: "bg-accent-blue", path: "/hire-talent" }
]

const Footer = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isServicePage = pathname.includes('/services')

    return (
        <footer className="w-full bg-bg-light border-t border-text/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Global CTA Buttons - Hide on Service Pages */}
                {!isServicePage && (
                    <div className="w-full pt-16 pb-8 border-b border-text/5">
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            {buttons.map((btn, i) => {
                                const commonClasses = `w-full md:w-auto px-8 py-4 ${btn.bg} text-white rounded-full font-heading font-black text-xs uppercase tracking-[0.15em] hover:scale-105 hover:brightness-110 active:scale-95 transition-all text-center group relative overflow-hidden flex items-center justify-center no-underline`;

                                if (btn.path.startsWith('mailto')) {
                                    return (
                                        <a
                                            key={i}
                                            href={btn.path}
                                            className={commonClasses}
                                        >
                                            <span className="relative z-10">{btn.label}</span>
                                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    );
                                }

                                return (
                                    <button
                                        key={i}
                                        onClick={() => navigate(btn.path)}
                                        className={commonClasses}
                                    >
                                        <span className="relative z-10">{btn.label}</span>
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Main Footer Content */}
                <div className="py-20 md:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                        {/* Left Column - CTA */}
                        <div className="space-y-8">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-main-heading font-heading font-black text-text leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                                Let's <span className="text-primary italic">Create</span><br />
                                Something <span className="text-secondary italic">Great</span>
                            </h2>
                            <p className="text-sm md:text-body-custom font-body text-text max-w-md leading-relaxed font-bold">
                                Ready to elevate your brand? Get in touch and let's start building your digital presence together.
                            </p>
                            <a
                                href="mailto:info@herleads.com"
                                className="group px-8 py-4 bg-secondary text-white rounded-full font-heading font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all inline-flex items-center gap-3 no-underline"
                            >
                                Get In Touch
                                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>

                        {/* Right Column - Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xs font-heading font-black uppercase tracking-wider text-text mb-4 italic">Contact</h3>
                                <div className="space-y-3">
                                    <p className="text-sm md:text-body-custom font-body font-bold text-text">
                                        Udaipur, Rajasthan, India
                                    </p>
                                    <p className="text-sm md:text-body-custom font-body font-bold text-text">
                                        <a href="mailto:info@herleads.com" className="hover:text-primary transition-colors">info@herleads.com</a>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-heading font-black uppercase tracking-wider text-text mb-4 italic">Follow</h3>
                                <div className="flex flex-wrap gap-4">
                                    {socials.map((social, i) => (
                                        <motion.a
                                            key={i}
                                            href={social.href}
                                            aria-label={social.label}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black flex items-center justify-center cursor-pointer transition-colors group ${social.bgClass}`}
                                        >
                                            <social.Icon
                                                size={20}
                                                className={`transition-colors ${social.colorClass}`}
                                            />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-text/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4 text-[10px] md:text-xs font-body font-bold text-text uppercase tracking-widest">
                            <span>© 2026 Her Lead</span>
                            <span className="text-primary italic">•</span>
                            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
                            <span className="text-primary italic">•</span>
                            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
