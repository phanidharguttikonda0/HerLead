import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { legacyDetails } from '../../constants/legacyDetails';
import { Check, ArrowRight, Sparkles, Star } from 'lucide-react';

const LegacyDetail = () => {
    const { slug } = useParams();
    const detail = legacyDetails[slug as string] || legacyDetails["pr-media-services"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <main className="bg-white text-black min-h-screen pt-24 md:pt-32 pb-0">
            {/* Hero Section - Two Column Layout */}
            <section className="py-16 md:py-24 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-tight tracking-tight text-black mb-8">
                            {detail.title}
                        </h1>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Right Column - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-heading font-black mb-6 text-black">
                            Why {detail.title.toLowerCase()}?
                        </h2>
                        <div className="space-y-4 text-base md:text-lg font-body leading-relaxed text-black/80">
                            {detail.overview.content.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features - Vibrant Colored Cards */}
            <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {detail.features.slice(0, 3).map((feature, i) => {
                        const bgClasses = ['bg-secondary', 'bg-primary', 'bg-accent-blue'];

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className={`relative rounded-3xl p-8 md:p-10 text-white overflow-hidden group cursor-pointer ${bgClasses[i % 3]}`}
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Icon Circle */}
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 mx-auto">
                                    <span className={`text-2xl font-heading font-black ${i === 0 ? 'text-secondary' : i === 1 ? 'text-primary' : 'text-accent-blue'}`}>
                                        {feature.icon}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-heading font-black text-center mb-4 leading-tight">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Service Cards - Alternating Layout (First Image) */}
            <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                    {/* Image Card */}
                    <div className="relative rounded-3xl p-8 md:p-12 flex items-center justify-center bg-primary">
                        <div className="bg-white p-4 shadow-2xl transform hover:rotate-2 transition-transform duration-300">
                            <img
                                src={detail.heroImage}
                                alt={detail.title}
                                className="w-full h-64 object-cover"
                            />
                        </div>

                        {/* Decorative Stars */}
                        <Star className="absolute top-8 right-8 text-white/30" size={24} fill="currentColor" />
                        <Sparkles className="absolute bottom-8 left-8 text-white/30" size={20} />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-heading font-black text-black">
                            {detail.features[0].title}
                        </h3>
                        <p className="text-base md:text-lg font-body leading-relaxed text-black/70">
                            {detail.features[0].description}
                        </p>
                        <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black rounded-full font-heading font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all">
                            Learn more
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>

                {/* Additional Features - Text Only */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {detail.features.slice(1, 5).map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 border-2 border-black/10 rounded-2xl hover:border-secondary transition-colors"
                        >
                            <div className="text-4xl font-heading font-black text-secondary/20 mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl md:text-2xl font-heading font-black mb-3 text-black">
                                {feature.title}
                            </h4>
                            <p className="text-sm md:text-base font-body leading-relaxed text-black/70">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Image Collage Section with Background (Second Image) */}
            <section className="relative py-24 px-6 md:px-20 overflow-hidden bg-secondary">
                {/* Decorative Elements */}
                <Star className="absolute top-20 left-20 text-white/20" size={40} fill="currentColor" />
                <Sparkles className="absolute top-40 right-40 text-white/20" size={32} />
                <Star className="absolute bottom-20 left-1/3 text-white/20" size={28} fill="currentColor" />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-4 shadow-2xl transform hover:scale-105 transition-transform"
                            >
                                <img
                                    src={detail.heroImage}
                                    alt={detail.title}
                                    className="w-full h-96 object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-white space-y-6"
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight">
                                How using {detail.title.toLowerCase()} can benefit your business
                            </h2>
                            <p className="text-base md:text-lg font-body leading-relaxed">
                                {detail.description}
                            </p>
                            <button className="px-8 py-4 bg-primary text-white rounded-full font-heading font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-primary transition-all">
                                Work with us
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats/Impact Section */}
            <section className="py-24 px-6 md:px-20 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
                            Our <span className="text-secondary">Impact</span>
                        </h2>
                        <p className="text-lg md:text-xl font-body text-white/70">
                            Numbers that speak louder than words
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {detail.stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center p-8 border-2 border-white/20 rounded-2xl hover:border-secondary transition-colors group"
                            >
                                <div className="text-5xl mb-4">{stat.icon}</div>
                                <div className="text-5xl md:text-6xl font-heading font-black text-secondary mb-3 group-hover:scale-110 transition-transform">
                                    {stat.number}
                                </div>
                                <div className="text-base md:text-lg font-body text-white/80">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="relative py-24 px-6 md:px-20 bg-primary overflow-hidden">
                {/* Decorative Quote Marks */}
                <div className="absolute top-10 left-10 text-white/10 text-[15rem] font-heading font-black leading-none">"</div>
                <div className="absolute bottom-10 right-10 text-white/10 text-[15rem] font-heading font-black leading-none rotate-180">"</div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="text-white" size={32} fill="currentColor" />
                            ))}
                        </div>

                        <p className="text-2xl md:text-4xl font-heading font-black text-white leading-relaxed italic">
                            "{detail.testimonial.quote}"
                        </p>

                        <div className="pt-8">
                            <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
                            <p className="text-xl font-heading font-black text-white">
                                {detail.testimonial.author}
                            </p>
                            <p className="text-base font-body text-white/80">
                                {detail.testimonial.role}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 px-6 md:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 text-black">
                            Why Choose <span className="text-secondary">Us</span>?
                        </h2>
                        <p className="text-lg md:text-xl font-body text-black/70 max-w-3xl mx-auto">
                            We don't just deliver services—we deliver transformation
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {detail.whyChooseUs.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="text-center p-8 bg-bg-light rounded-2xl hover:shadow-xl transition-shadow"
                            >
                                <div className="text-6xl mb-6">{item.icon}</div>
                                <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 text-black">
                                    {item.title}
                                </h3>
                                <p className="text-base md:text-lg font-body text-black/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Timeline */}
            <section className="py-24 px-6 md:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-black text-black mb-16 text-center"
                    >
                        {detail.approach.title}
                    </motion.h2>

                    <div className="space-y-12">
                        {detail.approach.steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="flex gap-8 items-start"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white font-heading font-black text-2xl">
                                    {step.number}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-black mb-3 text-black">
                                        {step.title}
                                    </h3>
                                    <p className="text-base md:text-lg font-body leading-relaxed text-black/70">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes - Colored Cards */}
            <section className="py-24 px-6 md:px-20 bg-bg-light">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-black text-black mb-4 text-center"
                    >
                        {detail.outcomes.title}
                    </motion.h2>
                    <p className="text-center text-lg text-black/60 mb-16 font-body">
                        Measurable results that transform your business
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {detail.outcomes.points.map((point, i) => {
                            const bgClasses = ['bg-secondary', 'bg-primary', 'bg-accent-blue', 'bg-accent-orange', 'bg-secondary', 'bg-accent-blue'];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-8 rounded-2xl text-white ${bgClasses[i % 6]}`}
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <Check size={20} className="text-black" strokeWidth={3} />
                                        </div>
                                        <p className="text-lg md:text-xl font-body font-bold leading-relaxed">
                                            {point}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 px-6 md:px-20 bg-secondary text-white overflow-hidden">
                {/* Decorative Stars */}
                <Star className="absolute top-10 right-20 text-white/20" size={48} fill="currentColor" />
                <Sparkles className="absolute bottom-20 left-20 text-white/20" size={40} />

                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-black leading-tight"
                    >
                        Ready to transform your business?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl font-body"
                    >
                        Let's discuss how we can help you achieve extraordinary results.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                    >
                        <Link
                            to="/request-quote"
                            className="px-10 py-5 bg-white text-secondary rounded-full font-heading font-black text-sm uppercase tracking-wider hover:scale-105 transition-transform inline-block"
                        >
                            Request a quote
                        </Link>
                        <Link
                            to="/"
                            className="px-10 py-5 border-2 border-white text-white rounded-full font-heading font-black text-sm uppercase tracking-wider hover:bg-white hover:text-secondary transition-all inline-block"
                        >
                            Back to home
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default LegacyDetail;
