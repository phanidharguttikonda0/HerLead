import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import BlogsSection from './sections/BlogsSection';
import TestimonialSection from './sections/TestimonialSection';
import ProcessSections from './sections/ProcessSections';
import PartnersSection from './sections/PartnersSection';
import LegacySection from './sections/LegacySection';

const Home = () => {
    return (
        <div className="min-h-screen">
            <section id="hero">
                <HeroSection />
            </section>
            {/* <section id="about">
                <AboutSection />
            </section> */}
            <section id="services">
                <ServicesSection />
            </section>
            <section id="legacy">
                <LegacySection />
            </section>
            <section id="testimonials">
                <TestimonialSection />
            </section>
            <section id="process">
                <ProcessSections />
            </section>
            {/* <section id="blogs">
                <BlogsSection />
            </section> */}
            <section id="partners">
                <PartnersSection />
            </section>
        </div>
    );
};

export default Home;
