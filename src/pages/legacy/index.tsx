import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { legacyDetails } from '../../constants/legacyDetails';
import { ArrowRight, Sparkles } from 'lucide-react';

const LegacyDetail = () => {
    const { slug } = useParams();
    const detail = legacyDetails[slug as string] || legacyDetails["pr-media-services"];

    return (
        <main className="bg-white min-h-screen pt-12 md:pt-16 pb-0">
            {/* Hero Section */}
            <section className="relative py-16 md:py-40 px-6 md:px-20 overflow-hidden bg-secondary">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-5xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-black border-2 border-white rounded-full mb-8">
                            <Sparkles size={18} className="text-white animate-pulse" />
                            <span className="text-xs md:text-sm font-heading font-black text-white uppercase tracking-widest">Premium Service</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] tracking-tight mb-6">
                            <span className="text-white block mb-2">
                                {detail.title.split(' ').slice(0, -1).join(' ')}
                            </span>
                            <span className="text-black">
                                {detail.title.split(' ').slice(-1)}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl lg:text-2xl font-body leading-relaxed text-white max-w-3xl mx-auto">
                            {detail.overview.content[0]}
                        </p>
                    </div>
                </div>
            </section>

            {/* Visual Showcase - Image Gallery */}
            <section className="py-12 md:py-20 px-6 md:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-4 text-black">
                            Our <span className="text-secondary">Work</span> in Action
                        </h2>
                        <p className="text-lg md:text-xl font-body text-gray-600 max-w-3xl mx-auto">
                            See the quality and excellence we bring to every project
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Image 1 */}
                        <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                            <img
                                src={`/images/service-legacy/${slug || 'media'}.webp`}
                                alt="Service showcase 1"
                                className="w-full h-[350px] md:h-[450px] object-contain group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/service-legacy/media.webp';
                                }}
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                            <img
                                src="/images/service-legacy/training.webp"
                                alt="Service showcase 2"
                                className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features - Two Column Layout */}
            <section className="py-12 md:py-20 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-black">
                        What We <span className="text-secondary">Offer</span>
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        <p className="text-xl md:text-2xl font-body text-gray-700 leading-relaxed">
                            {detail.overview.content[0]}
                        </p>
                        {detail.overview.content.slice(1).map((paragraph, i) => (
                            <p key={i} className="text-base md:text-lg font-body text-gray-600 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {detail.features.slice(0, 6).map((feature, i) => (
                        <div
                            key={i}
                            className="group relative bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-100 hover:border-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                        >
                            {/* Number Badge */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-heading font-black text-lg">{i + 1}</span>
                            </div>

                            {/* Decorative Corner Accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-3xl rounded-tr-3xl"></div>

                            <div className="relative">
                                {/* Title with Underline */}
                                <div className="mb-4">
                                    <h3 className="text-2xl md:text-3xl font-heading font-black text-black mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <div className="w-16 h-1 bg-secondary rounded-full group-hover:w-24 transition-all duration-300"></div>
                                </div>

                                <p className="text-base md:text-lg font-body text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us - Premium Cards */}
            <section className="py-12 md:py-20 px-6 md:px-20 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 text-black">
                            Why Choose <span className="text-secondary">Us</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-body text-gray-600 max-w-3xl mx-auto">
                            Experience the difference of working with industry leaders
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {detail.whyChooseUs.map((item, i) => (
                            <div
                                key={i}
                                className="group relative bg-white rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-secondary"
                            >
                                {/* Icon with Background */}
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 md:w-28 md:h-28 bg-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                        <span className="text-5xl md:text-6xl">{item.icon}</span>
                                    </div>
                                    {/* Decorative Ring */}
                                    <div className="absolute -inset-2 border-2 border-gray-200 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                                </div>

                                <div className="relative">
                                    <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 text-black group-hover:text-secondary transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-base md:text-lg font-body text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-12 md:py-32 px-6 md:px-20 bg-secondary text-white overflow-hidden">
                <TiltCard />
            </section>
        </main>
    );
};

// Interactive 3D Tilt Card Component
const TiltCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            if (!cardRef.current || isMobile) return;

            const rect = cardRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;

            // Calculate rotation based on mouse position
            const rotateYValue = (mouseX / rect.width) * 20; // Max 20 degrees
            const rotateXValue = -(mouseY / rect.height) * 20; // Max 20 degrees

            setRotation({ rotateX: rotateXValue, rotateY: rotateYValue });
        };

        const handleMouseLeave = () => {
            if (isMobile) return;
            setRotation({ rotateX: 0, rotateY: 0 });
        };

        // Only add mouse event listeners if not mobile
        if (!isMobile) {
            window.addEventListener('mousemove', handleMouseMove);
            if (cardRef.current) {
                cardRef.current.addEventListener('mouseleave', handleMouseLeave);
            }
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkMobile);
            if (cardRef.current) {
                cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isMobile]);

    return (
        <div
            ref={cardRef}
            className="max-w-4xl mx-auto text-center relative z-10"
            style={isMobile ? {} : { perspective: '1000px' }}
        >
            <div
                style={isMobile ? {} : {
                    transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.1s ease-out',
                }}
                className="space-y-12 p-8 md:p-12 rounded-3xl bg-black border-2 border-white"
            >
                <h2
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight"
                    style={isMobile ? {} : { transform: 'translateZ(50px)' }}
                >
                    Ready to <span className="text-white">Transform</span> Your Business?
                </h2>

                <p
                    className="text-xl md:text-2xl font-body text-gray-100 max-w-2xl mx-auto"
                    style={isMobile ? {} : { transform: 'translateZ(30px)' }}
                >
                    Join hundreds of successful businesses who have elevated their brand with our expertise
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                    style={isMobile ? {} : { transform: 'translateZ(60px)' }}
                >
                    <Link
                        to="/request-quote"
                        className="group px-10 py-5 bg-white text-secondary rounded-full font-heading font-black text-sm uppercase tracking-wider hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2"
                    >
                        Request a Quote
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/"
                        className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-heading font-black text-sm uppercase tracking-wider hover:bg-white hover:text-secondary transition-all inline-block"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LegacyDetail;
