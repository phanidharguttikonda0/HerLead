export interface ServiceDetail {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    heroVideo?: string;
    stats?: { label: string; value: string }[];
    features: { title: string; desc: string; image: string }[];
    gallery: string[];
    process: { step: string; title: string; desc: string }[];
    method: { title: string; description: string; buttonText: string };
    outcomes: string[];
    faqs?: { q: string; a: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
    "pr-media-services": {
        slug: "pr-media-services",
        title: "PR & Media Services",
        subtitle: "Because in today’s world, visibility isn’t a luxury — it’s survival.",
        description: "In the age of digital dominance, Public Relations (PR) has evolved into the new marketing strategy, one that shapes perception, builds trust, and establishes long-term brand authority. Consumers today don’t just buy products; they buy stories, reputations, and experiences. PR bridges the gap between what you do and how the world perceives it. Our PR & Media Services are designed to help businesses across industries develop, communicate, and manage a strong and authentic brand image. We don’t just promote your business; we create a brand presence that inspires trust and drives growth.",
        heroImage: "/images/services/hero-pr.png",
        heroVideo: "/videos/pr1.mp4",
        gallery: ["/images/service-details/pr1.jpg"],
        features: [
            {
                title: "1. Strategic PR Planning",
                desc: "We start with understanding who you are, what you represent, and where you want to go. Includes Market and competitor research, Message positioning and audience profiling, Strategic communication plan, and Brand story and content narrative development.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Brand Creation & Development",
                desc: "Your brand is your identity — we help you build it from the ground up. Includes Business name and brand identity creation, Logo design, color palette, and visual guidelines, Brand storytelling and communication tone, Reputation positioning and market differentiation.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Digital PR & Online Presence",
                desc: "We establish your digital footprint across all key platforms. Includes Social media branding and management, Influencer marketing and collaborations, SEO-driven PR campaigns and article placements, Online reputation management and media features, Blog, podcast, and YouTube presence development.",
                image: "/images/services/feature-3.webp"
            },
            {
                title: "4. Offline PR & Events",
                desc: "Offline exposure still holds unmatched power when done right. Includes Corporate events and brand activations, Product launches and media meetups, Sponsorships, collaborations, and award ceremonies, Industry networking and partnership opportunities.",
                image: "/images/services/feature-4.webp"
            },
            {
                title: "5. Media & Visual Production",
                desc: "We make your brand camera-ready with world-class visual content. Includes Professional photoshoots (product, corporate, team), Brand storytelling videos and commercials, Testimonial and case study video production, Behind-the-scenes and culture-based media content, Visual campaigns that reflect your values and professionalism.",
                image: "/images/services/feature-5.webp"
            }
        ],
        process: [
            { step: "01", title: "Discovery", desc: "Understanding the soul of your business and market positioning." },
            { step: "02", title: "Strategy", desc: "Crafting your story and defining your unique brand identity." },
            { step: "03", title: "Execution", desc: "Launching integrated campaigns that turn your business into a story worth sharing." }
        ],
        method: {
            title: "Our PR Method.",
            description: "A strategic framework that transforms your business into a trusted brand story worth sharing.",
            buttonText: "Build Your Brand Story"
        },
        outcomes: [
            "Increased Credibility",
            "Market Dominance",
            "Global Recognition",
            "Long-term Authority"
        ],
        faqs: [
            {
                q: "What exactly do your PR & Media Services include?",
                a: "Our services cover brand creation, strategy development, digital and offline PR, photoshoots, content creation, event collaborations, video marketing, and reputation management."
            },
            {
                q: "Can you help create our business or brand name?",
                a: "Yes. We specialize in brand naming and identity development, ensuring your name reflects your values and resonates with your audience."
            },
            {
                q: "How is PR different from marketing?",
                a: "Marketing promotes your product; PR builds your reputation. It’s about credibility, relationships, and long-term trust not just sales."
            },
            {
                q: "Do you handle social media and influencer marketing?",
                a: "Absolutely. Social media visibility and influencer collaborations are core parts of our digital PR strategy."
            },
            {
                q: "Will you help us with content like testimonials and videos?",
                a: "Yes. We handle everything from video shoot direction to testimonial collection and storytelling content."
            }
        ]
    },
    "seo": {
        slug: "seo",
        title: "Search Engine Optimization",
        subtitle: "Credibility starts with being found first and being trusted.",
        description: "SEO remains the foundation of digital visibility because credibility starts with being found first and being trusted. At HerLead, we treat SEO as a long-term authority-building tool, not a short-term traffic hack. By optimizing your content, structure, and search presence, we position your brand as the most relevant answer when your audience is actively looking. While trends come and go, strong SEO ensures your brand stands out consistently, earns trust organically, and stays discoverable long after ads stop running.",
        heroImage: "/images/service-details/s1.jpeg",
        gallery: ["/images/service-details/s2.jpeg"],
        features: [
            {
                title: "1. Technical SEO Audit",
                desc: "We dive deep into your site's architecture to solve speed, crawling, and indexing bottlenecks that hold you back.",
                image: "/images/services/feature-seo-1.webp"
            },
            {
                title: "2. Strategic Keyword Research",
                desc: "Identifying the high-intent terms your audience uses, ensuring you appear when the transition from lead to customer happens.",
                image: "/images/services/feature-seo-2.webp"
            },
            {
                title: "3. On-Page Content Optimization",
                desc: "Refining your brand voice and content structure to satisfy both human readers and search engine algorithms simultaneously.",
                image: "/images/services/feature-seo-3.webp"
            },
            {
                title: "4. Authority Link Building",
                desc: "Earning high-quality backlinks that act as 'votes of confidence' from the web, boosting your domain's credibility.",
                image: "/images/services/feature-seo-4.webp"
            }
        ],
        process: [
            { step: "01", title: "Discovery", desc: "Full audit of your current search performance and competitor landscape." },
            { step: "02", title: "Strategy", desc: "Developing a custom keyword roadmap and content strategy aligned with your business goals." },
            { step: "03", title: "Execution", desc: "Implementing technical fixes, content updates, and continuous optimization for sustainable growth." }
        ],
        method: {
            title: "Our SEO Method.",
            description: "A data-driven approach designed to build lasting search authority and organic visibility.",
            buttonText: "Dominate Search Results"
        },
        outcomes: [
            "Organic Traffic Growth",
            "Page One Rankings",
            "Higher Conversion Intent",
            "Sustainable Digital Assets",
            "Market Credibility"
        ],
        faqs: [
            {
                q: "How long does it take to see SEO results?",
                a: "SEO is a long-term strategy. Significant impact usually appears within 3–6 months as search engines recognize and reward your growing authority."
            },
            {
                q: "Is SEO better than Paid Ads?",
                a: "Paid Ads provide immediate traffic, but SEO builds a lasting asset. SEO ensures you remain visible even when your ad budget stops, leading to a much higher ROI over time."
            },
            {
                q: "What is Technical SEO?",
                a: "It's the foundation of your site. We optimize site speed, mobile responsiveness, and clean code to make it easy for Google to find and rank your content."
            },
            {
                q: "Do you guarantee the #1 ranking on Google?",
                a: "No ethical SEO can guarantee the top spot due to algorithm changes. However, we guarantee a massive increase in organic visibility and improved rankings for your core business terms."
            },
            {
                q: "How often will I receive progress reports?",
                a: "We provide monthly detailed reports that track keyword rankings, traffic growth, and tangible conversion metrics so you can see the real-world impact."
            }
        ]
    },
    "influencer-marketing": {
        slug: "influencer-marketing",
        title: "Influencer Marketing",
        subtitle: "It's never about numbers—it’s about alignment and authority.",
        description: "At HerLead, influencer marketing is never about numbers—it’s about alignment and authority. When you work with us, expect carefully curated creators who reflect your brand values, audience, and positioning. We manage everything from influencer identification and outreach to collaboration strategy, content direction, and performance tracking.",
        heroImage: "/images/services/brand.webp",
        heroVideo: "/videos/brand.webm",
        gallery: ["/images/service-details/influencer.webp"],
        features: [
            {
                title: "1. Full-Service Management",
                desc: "Executing A-Z management of your campaign: from sourcing influencers and contract negotiations to content approvals and reporting.",
                image: "/images/services/feature-inf-1.webp"
            },
            {
                title: "2. Brand Ambassador Programs",
                desc: "Developing long-term relationships and trust through celebrity and influencer programs that amplify your brand message.",
                image: "/images/services/feature-inf-2.webp"
            },
            {
                title: "3. Whitelisting & Paid Social",
                desc: "Supporting reach and impressions by targeting relevant audiences who are most likely to engage with your brand.",
                image: "/images/services/feature-inf-3.webp"
            },
            {
                title: "4. User Generated Content (UGC)",
                desc: "Accessing thousands of creators who create native-to-platform assets that convert for your organic and paid social.",
                image: "/images/services/feature-inf-4.webp"
            }
        ],
        process: [
            { step: "01", title: "Identification", desc: "Finding the right influencers based on audience demographics, engagement rate, and brand fit." },
            { step: "02", title: "Planning & Creation", desc: "Developing a strategy and working with influencers to create content that aligns with your message." },
            { step: "03", title: "Outreach & Analytics", desc: "Negotiating collaboration terms and measuring success through reach, engagement, and conversions." }
        ],
        method: {
            title: "Our Influencer Method.",
            description: "A precision-based system that connects your brand with creators who truly align with your values.",
            buttonText: "Find Your Influencers"
        },
        outcomes: [
            "Authentic Audience Trust",
            "High-Impact Content Assets",
            "Targeted Market Reach",
            "Scalable Brand Awareness",
            "Measurable ROI"
        ],
        faqs: [
            {
                q: "What types of influencers do you work with?",
                a: "We have the largest database of influencers, celebrities, and athletes across North America, covering dozens of niches from Beauty and Tech to Wellness and Business."
            },
            {
                q: "How do you find the right influencer for my brand?",
                a: "We vet influencers based on audience demographics, engagement rates, brand sentiment, and past performance to ensure a perfect alignment with your values."
            },
            {
                q: "What is whitelisting and why is it important?",
                a: "Whitelisting allows us to run ads through an influencer's handle. Since only 10-20% of an audience sees organic posts, this ensures your message reaches the right audience consistently."
            },
            {
                q: "Can you handle gifting campaigns?",
                a: "Yes. We curate lists of influencers likely to use your product daily and manage the entire premium unboxing experience to drive authentic excitement."
            },
            {
                q: "How do you measure the success of a campaign?",
                a: "We track reach, impressions, engagement rates, click-throughs, and conversions, providing monthly in-depth reporting to show tangible results."
            }
        ]
    },
    "brand-creation": {
        slug: "brand-creation",
        title: "Brand Creation",
        subtitle: "Strategy first, identity next, impact always.",
        description: "Brand Creation at HerLead goes beyond logos and color palettes. We shape brands from the inside out—strategy first, identity next, impact always. Alongside defining your positioning, messaging, and visual identity, we strategically optimize your social media presence to reflect authority, consistency, and clarity. Every platform, every visual, and every word is designed to build recognition and make you the go-to name in your space.",
        heroImage: "/images/services/5.webp",
        heroVideo: "/videos/influencer.mp4",
        gallery: ["/images/service-details/brand.webp"],
        features: [
            {
                title: "1. Brand Positioning & Messaging",
                desc: "Defining your unique market space and crafting a voice that commands attention and speaks directly to your audience's needs.",
                image: "/images/services/feature-bc-1.webp"
            },
            {
                title: "2. Visual Identity System",
                desc: "Going beyond logos to create a comprehensive visual ecosystem including color palettes, typography, and imagery guidelines.",
                image: "/images/services/feature-bc-2.webp"
            },
            {
                title: "3. Social Media Optimization",
                desc: "Strategically aligning your social profiles to reflect authority, ensuring consistency in every post, visual, and interaction.",
                image: "/images/services/feature-bc-3.webp"
            },
            {
                title: "4. Brand Authority Guidelines",
                desc: "Providing a complete blueprint for your team to maintain clarity and impact across all future platforms and content.",
                image: "/images/services/feature-bc-4.webp"
            }
        ],
        process: [
            { step: "01", title: "Strategic Discovery", desc: "Uncovering your core values, audience behavior, and market opportunities to set the foundation." },
            { step: "02", title: "Identity Development", desc: "Crafting the visual and verbal elements that turn your strategy into a recognizable brand." },
            { step: "03", title: "Impact Deployment", desc: "Optimizing your digital touchpoints for instant recognition and long-term authority." }
        ],
        method: {
            title: "Our Branding Method.",
            description: "A strategic framework that builds brands from the inside out—strategy first, identity next, impact always.",
            buttonText: "Create Your Brand"
        },
        outcomes: [
            "Clear Market positioning",
            "Commanding Visual Authority",
            "Consistent Social Presence",
            "Increased Brand Recall",
            "High Trust Alignment"
        ],
        faqs: [
            {
                q: "Is brand creation just about a logo?",
                a: "No. A logo is just one piece. We focus on the strategy first—defining who you are and how you speak—before building the visuals that represent that identity."
            },
            {
                q: "How do you help with social media authority?",
                a: "We don't just 'post'; we optimize your profiles. This includes your bio, highlights, visual style, and tone of voice so every platform feels like a natural extension of your brand."
            },
            {
                q: "How long does the branding process take?",
                a: "Typically, a full brand creation cycle takes 4–6 weeks, moving from deep strategy discovery to final visual deployment and social optimization."
            },
            {
                q: "Will I get a brand guide to follow?",
                a: "Yes. Every project includes a 'Brand Bible' that outlines your fonts, colors, messaging rules, and social media guidelines to ensure you stay consistent."
            },
            {
                q: "Can you rebrand an existing business?",
                a: "Absolutely. We specialize in taking existing businesses and reshaping them to better align with their evolving mission and modern market expectations."
            }
        ]
    },
    "paid-ads": {
        slug: "paid-ads",
        title: "Paid Ads",
        subtitle: "The starting push every brand needs.",
        description: "No matter what people say, paid ads are the starting push every brand needs. At HerLead, we use paid media as the momentum builder, giving your brand instant visibility while everything else compounds. From Meta, Google, Facebook, Instagram, to LinkedIn ads, we run tightly structured, data-led campaigns designed to test, learn, and scale. Paid ads don’t replace strategy—they accelerate it. When done right, they create traction, validate messaging, and put your brand in front of the right audience from day one.",
        heroImage: "/images/service-details/ads.jpg",
        gallery: ["/images/service-details/aaa.jpg"],
        features: [
            {
                title: "1. Meta Ads (Instagram & Facebook)",
                desc: "Interrupting the scroll with high-impact visuals and pinpoint targeting to build community and drive awareness.",
                image: "/images/services/feature-ads-1.webp"
            },
            {
                title: "2. Google Search & Display",
                desc: "Capturing intent by appearing exactly when your audience is looking for solutions, ensuring top-of-page visibility.",
                image: "/images/services/feature-ads-2.webp"
            },
            {
                title: "3. LinkedIn Advertising",
                desc: "B2B precision targeting to reach decision-makers and C-suite executives in a professional, authority-driven environment.",
                image: "/images/services/feature-ads-3.webp"
            },
            {
                title: "4. Multi-Platform Retargeting",
                desc: "Staying top-of-mind by strategically following your warmest leads until they are ready to convert.",
                image: "/images/services/feature-ads-4.webp"
            }
        ],
        process: [
            { step: "01", title: "Targeting & Setup", desc: "Defining your ideal audience personas and setting up precise tracking for measurable results." },
            { step: "02", title: "Creative Testing", desc: "Running multiple ad variations to find the messaging and visuals that resonate most with your market." },
            { step: "03", title: "Scaling & Optimization", desc: "Funneling budget into winning campaigns to maximize ROI and sustain market momentum." }
        ],
        method: {
            title: "Our Ads Method.",
            description: "A test-and-scale approach that turns ad spend into predictable growth and market momentum.",
            buttonText: "Launch Your Campaign"
        },
        outcomes: [
            "Instant Market Visibility",
            "Validated Messaging",
            "Consistent Lead Flow",
            "Accelerated Brand Growth",
            "Data-Backed Scaling"
        ],
        faqs: [
            {
                q: "Do I need a huge budget to start with Paid Ads?",
                a: "No. We start with a test-and-learn phase to find what works efficiently, then scale the budget as we see the results coming in."
            },
            {
                q: "Which platform is best for my brand?",
                a: "It depends on your goal. Meta is great for visual awareness and B2C, while Google captures active intent, and LinkedIn is king for B2B authority."
            },
            {
                q: "How long before I see results from ads?",
                a: "Unlike SEO, ads provide instant traffic. You'll see data within 24–48 hours, and we typically find the winning strategy within the first 14 days."
            },
            {
                q: "Do ads replace organic growth?",
                a: "No. Ads accelerate your strategy. They work best when paired with a strong brand identity and organic presence to build long-term trust."
            },
            {
                q: "How do you ensure my budget isn't wasted?",
                a: "We use data-led management, daily monitoring, and strict A/B testing to ensure your budget is always prioritized toward the highest-performing audiences."
            }
        ]
    },
    "find-talent": {
        slug: "find-talent",
        title: "Find the Talent Staffing Service",
        subtitle: "One Requirement. The Right Talent.",
        description: "Oh dear hiring managers!!! We understand this journey all too well. At HerLead, we know hiring isn’t just about filling a role; it’s about finding people you can rely on. That’s why our candidates are carefully developed before they reach you. They are clear about their skills, aware of their responsibilities, and honest about what they can deliver. When a HerLead candidate commits, they know what they’re promising—so you get talent that aligns, performs, and stays.\n\nWith 10,000+ successful placements across India and global markets, HerLead delivers talent that businesses can rely on—from leadership roles to large-scale ground staffing. Built by a CHRO & HR Head who understands HR beyond theory, our staffing ecosystem is designed to solve real hiring problems before they appear.",
        heroImage: "/images/services/talent.webp",
        gallery: ["/images/service-details/talent.jpg"],
        features: [
            {
                title: "1. Leadership & Tech Roles",
                desc: "Filling critical gaps in Management, Marketing, Tech, and Digital roles with high-performance candidates.",
                image: "/images/services/feature-talent-1.webp"
            },
            {
                title: "2. Operations & Sales Talent",
                desc: "Providing reliable teams for HR, Business Development, Logistics, and Supply Chain excellence.",
                image: "/images/services/feature-talent-2.webp"
            },
            {
                title: "3. Ground Staffing Solutions",
                desc: "Managing large-scale field operations, warehouse staffing, and on-site teams with precision.",
                image: "/images/services/feature-talent-3.webp"
            },
            {
                title: "4. CHRO-Grade Evaluation",
                desc: "Every candidate goes through an elite screening system developed by industry leaders, not just basic filters.",
                image: "/images/services/feature-talent-4.webp"
            }
        ],
        process: [
            { step: "01", title: "Precision Screening", desc: "Using CHRO-level insights to identify talent that fits your business reality, not just the JD." },
            { step: "02", title: "Candidate Polishing", desc: "Ensuring every candidate is clear on their responsibilities and deployment-ready before meeting you." },
            { step: "03", title: "Global Deployment", desc: "Placing talent across India, US, UK, and UAE markets with long-term retention as the priority." }
        ],
        method: {
            title: "Our Talent Method.",
            description: "A CHRO-grade system that delivers deployment-ready talent who commit, perform, and stay.",
            buttonText: "Find Your Team"
        },
        outcomes: [
            "10,000+ Successful Placements",
            "Zero Guesswork Hiring",
            "Deployment-Ready Talent",
            "Reduced Attrition Rates",
            "Global Market Reach"
        ],
        faqs: [
            {
                q: "How is HerLead different from other staffing agencies?",
                a: "Most focus on speed; we focus on precision. Our system is built by a CHRO who knows that hiring the wrong person fast is a costly mistake. We deliver filtered, polished talent."
            },
            {
                q: "What levels of staffing do you provide?",
                a: "We cover everything from C-suite Leadership and Tech roles to bulk Ground Staffing for warehouses, field work, and logistics operations."
            },
            {
                q: "Which markets do you serve?",
                a: "We have a massive database and proven success across India and global markets including the US, UK, and UAE."
            },
            {
                q: "Do you help startups or only large enterprises?",
                a: "We work with both. From high-growth startups needing their first key hires to large enterprises requiring on-site field teams at scale."
            },
            {
                q: "How do you ensure candidates stay?",
                a: "Our candidates are developed to be honest about their skills and responsibilities. They don't just 'fill a role'; they commit to it because they understand the reality of the work."
            }
        ]
    },
    "social-media": {
        slug: "social-media",
        title: "Social Media Management",
        subtitle: "A presence that feels active, thoughtful, and trusted.",
        description: "Not every brand needs to be online all the time—just in the right way. At HerLead, we fix scattered and inconsistent social media and turn it into a clear, reliable presence. We manage your platforms so your brand stays visible, relevant, and aligned, without demanding your constant attention. The result is a presence that feels active, thoughtful, and trusted even when you’re not posting every day.",
        heroImage: "/images/service-details/media.webp",
        heroVideo: "/videos/vintage.mp4",
        gallery: ["/images/service-details/review.png"],
        features: [
            {
                title: "1. Brand Tone & Messaging",
                desc: "Developing a consistent voice that ensures every post, reply, and caption feels like a natural extension of your brand identity.",
                image: "/images/services/feature-sm-1.webp"
            },
            {
                title: "2. Content Curation & Scheduling",
                desc: "Fixing scattered posting schedules with a clear, reliable content calendar that maintains visibility without the noise.",
                image: "/images/services/feature-sm-2.webp"
            },
            {
                title: "3. Visual Grid Optimization",
                desc: "Turning inconsistent visuals into a clean, aesthetic grid that builds instant recognition and trust for new followers.",
                image: "/images/services/feature-sm-3.webp"
            },
            {
                title: "4. Meaningful Engagement",
                desc: "Managing community interactions to ensure your brand remains active and responsive without demanding your constant attention.",
                image: "/images/services/feature-sm-4.webp"
            }
        ],
        process: [
            { step: "01", title: "Alignment Audit", desc: "Analyzing your current presence to identify and fix scattered or inconsistent messaging." },
            { step: "02", title: "System Setup", desc: "Setting up a reliable management workflow and content pillars that align with your business reality." },
            { step: "03", title: "Continuous Presence", desc: "Managing daily operations to ensure your brand stays visible, relevant, and trusted over the long term." }
        ],
        method: {
            title: "Our Social Method.",
            description: "A systematic approach that transforms scattered posting into a clear, trusted brand presence.",
            buttonText: "Fix Your Presence"
        },
        outcomes: [
            "Consistent Brand Voice",
            "Professional Visual Grid",
            "Increased Follower Trust",
            "Clear Authority Positioning",
            "Stress-Free Management"
        ],
        faqs: [
            {
                q: "Do we need to post every day to stay relevant?",
                a: "No. We believe in quality over noise. We focus on a consistent, thoughtful presence that builds trust even with a less frequent posting schedule."
            },
            {
                q: "Can you manage multiple platforms at once?",
                a: "Yes. We handle Instagram, Facebook, LinkedIn, and more, ensuring your brand story remains consistent across every digital touchpoint."
            },
            {
                q: "Will you match my brand voice?",
                a: "Absolutely. Our first step is a deep dive into your brand tone to ensure every caption and interaction sounds exactly like you."
            },
            {
                q: "Do you create the visuals as well?",
                a: "Yes. We align your visuals with your brand identity to create a cohesive and professional look across all your social channels."
            },
            {
                q: "How do I know the management is working?",
                a: "We provide regular reports tracking engagement, growth, and how effectively your social presence is building authority in your space."
            }
        ]
    },
    "web-design": {
        slug: "web-design",
        title: "Website Design",
        subtitle: "Clear, current, and conversion-ready.",
        description: "You can say all the right things on social media, but if your website doesn’t back it up, trust breaks instantly. An outdated, misaligned website quietly costs you credibility, clients, and conversions. At HerLead, we redesign and develop websites that match your voice, values, and growth stage. From structure and UX to content flow and visual identity, we ensure your website speaks the same language as your brand—clear, current, and conversion-ready.",
        heroImage: "/images/service-details/website1.png",
        gallery: ["/images/service-details/website2.avif"],
        features: [
            {
                title: "1. Website Redesign & Development",
                desc: "Transforming outdated sites into high-performance digital homes that reflect your current brand authority.",
                image: "/images/services/feature-web-1.webp"
            },
            {
                title: "2. UX/UI Strategy",
                desc: "Designing intuitive user journeys that guide visitors naturally toward your core message and conversions.",
                image: "/images/services/feature-web-2.webp"
            },
            {
                title: "3. Website Content Structuring",
                desc: "Organizing your messaging and assets so your brand speaks clearly and effectively across every page.",
                image: "/images/services/feature-web-3.webp"
            },
            {
                title: "4. Responsive & Mobile Optimization",
                desc: "Ensuring your site looks premium and functions perfectly on every device, from mobile to desktop.",
                image: "/images/services/feature-web-4.webp"
            }
        ],
        process: [
            { step: "01", title: "Audit & Analysis", desc: "Evaluating your current site's performance and identifying where your brand message is falling short." },
            { step: "02", title: "Strategy & Design", desc: "Mapping out the UX/UI and content structure to ensure every pixel serves your business goals." },
            { step: "03", title: "Development & Launch", desc: "Building your new digital HQ and optimizing it for speed, SEO, and long-term conversions." }
        ],
        method: {
            title: "Our Web Method.",
            description: "A conversion-focused process that transforms outdated sites into high-performance digital homes.",
            buttonText: "Redesign Your Site"
        },
        outcomes: [
            "Strong Brand Credibility",
            "Higher Visitor Retention",
            "Improved Lead Conversion",
            "Seamless User Experience",
            "Modern Technical Foundation"
        ],
        faqs: [
            {
                q: "Why is a professional website important for my brand?",
                a: "Your website is your digital HQ. If it looks outdated or is hard to navigate, it breaks the trust you’ve built on social media. A professional site validates your authority."
            },
            {
                q: "Can you redesign my existing website?",
                a: "Yes. We specialize in taking misaligned or outdated sites and rebuilding them to match your current voice, values, and market positioning."
            },
            {
                q: "What is UX/UI Strategy?",
                a: "It's about the feeling and flow of your site. We design layouts that aren't just pretty, but are strategically built to guide your users to take action."
            },
            {
                q: "Will my website work on all devices?",
                a: "Absolutely. We build with a mobile-first approach, ensuring your premium brand experience translates perfectly to phones, tablets, and desktops."
            },
            {
                q: "How do you help with content structuring?",
                a: "We organize your information so it’s easy for visitors to find exactly what they need, while ensuring your brand story is told consistently across the entire site."
            }
        ]
    },
    "career-mastery": {
        slug: "career-mastery",
        title: "Career Confidence & Interview Mastery",
        subtitle: "Don't just be prepared—be Ready to Own it.",
        description: "This is not a basic course or a generic program. When we promise career readiness, it becomes our responsibility to make you truly interview-ready—not just prepared, but confident, clear, and credible. This program is built for candidates who have the right skills yet struggle to express their value in interviews or understand why they aren’t getting selected despite being a strong fit on paper. We break down real hiring expectations, refine how you communicate your experience, and help you show up with presence and clarity. The goal is simple: when opportunity comes, you are ready to own it.",
        heroImage: "/images/service-details/career.jpg",
        gallery: ["/images/service-details/career1.png"],
        features: [
            {
                title: "1. Interview Strategy & Mock Sessions",
                desc: "Intensive mock trials with real-world feedback to refine your answers, tone, and delivery until they are second nature.",
                image: "/images/services/feature-cm-1.webp"
            },
            {
                title: "2. Personal Branding (Resume & LinkedIn)",
                desc: "Aligning your digital and physical profiles so they speak the same language of authority and capability as you do in person.",
                image: "/images/services/feature-cm-2.webp"
            },
            {
                title: "3. Communication & Presence",
                desc: "Developing the verbal and non-verbal skills needed to show up with clarity and confidence in any professional high-stakes environment.",
                image: "/images/services/feature-cm-3.webp"
            },
            {
                title: "4. Decoding Hiring Expectations",
                desc: "Getting inside the mind of the recruiter to understand exactly what triggers selection and how to address 'hidden' hiring criteria.",
                image: "/images/services/feature-cm-4.webp"
            }
        ],
        process: [
            { step: "01", title: "Discovery & Gap Analysis", desc: "Identifying the specific disconnect between your skills and your interview performance." },
            { step: "02", title: "The Mastery Phase", desc: "Refining your narrative and practicing high-impact communication through intensive mastery sessions." },
            { step: "03", title: "Ownership & Deployment", desc: "Final mock trials and confidence building to ensure you are ready to walk into any room and own the opportunity." }
        ],
        method: {
            title: "Our Career Method.",
            description: "A mastery-driven program that transforms interview anxiety into unshakable confidence and clarity.",
            buttonText: "Own Your Interview"
        },
        outcomes: [
            "Unshakable Interview Confidence",
            "Clear Value Articulation",
            "Aligned Professional Identity",
            "Inside-Track Hiring Insights",
            "Higher Selection Rates"
        ],
        faqs: [
            {
                q: "How is this different from a generic career course?",
                a: "Generic courses give you tips; we give you mastery. We take personal responsibility for your readiness, breaking down real-world hiring filters and refining your presence until it's undeniable."
            },
            {
                q: "I’m a great fit on paper but I’m not getting selected. Can you help?",
                a: "That is exactly why this program exists. We find the 'silent gaps' in your communication or presence that are currently costing you the role and fix them."
            },
            {
                q: "Will this help with my LinkedIn and Resume?",
                a: "Yes. We ensure your personal brand is consistent across all touchpoints so that the version of you on paper matches the expert who shows up in the interview."
            },
            {
                q: "Do you offer mock interview sessions?",
                a: "Mock sessions are the core of the program. We don't just talk about interviews; we do them, providing rigorous feedback to ensure you're ready for the real thing."
            },
            {
                q: "Is this suitable for senior roles or only entry-level?",
                a: "This is for anyone who has the skills but wants to own the interview. We tailor the 'expectations' and 'presence' training to match the specific seniority of the roles you are targeting."
            }
        ]
    },
    "corporate-training": {
        slug: "corporate-training",
        title: "Corporate Training & Development",
        subtitle: "Practical. People-focused. Performance-driven.",
        description: "We’ve seen even well-known brands struggle not because their people lacked talent, but because teams were never developed the right way. Traditional training often feels like classroom teaching, creating distance instead of understanding. At HerLead, our approach is practical and people-focused. We design training that reflects real workplace challenges, strengthens communication, builds leadership maturity, and helps teams work better together. The goal is simple: healthier teams, clearer thinking, and performance that lasts.",
        heroImage: "/images/service-details/training.avif",
        gallery: ["/images/service-details/training1.jpg"],
        features: [
            {
                title: "1. Leadership & Employer Development",
                desc: "Moving from managing to leading. We help leaders implement policies effectively while building trust and credibility.",
                image: "/images/services/feature-ct-1.webp"
            },
            {
                title: "2. Team Professionalism & Culture",
                desc: "Mastering core principles of workplace culture, accountability, and effective communication for sustainable success.",
                image: "/images/services/feature-ct-2.webp"
            },
            {
                title: "3. Flexible Training Modes",
                desc: "Offering In-Person, Virtual, and Hybrid programs tailored to your office dynamics and industry requirements.",
                image: "/images/services/feature-ct-3.webp"
            },
            {
                title: "4. Mindset & Productivity Transformation",
                desc: "Focusing on 'truth over theory' to improve employee engagement, retention, and ground-level performance.",
                image: "/images/services/feature-ct-4.webp"
            }
        ],
        process: [
            { step: "01", title: "Culture Audit", desc: "Understanding your current team dynamics, industry challenges, and specific leadership gaps." },
            { step: "02", title: "Custom Module Design", desc: "Crafting interactive, results-driven content that reflects your company's values and goals." },
            { step: "03", title: "Deployment & Follow-up", desc: "Delivering high-impact training with post-session evaluations to ensure long-term behavioral change." }
        ],
        method: {
            title: "Our Training Method.",
            description: "A people-focused framework designed to strengthen teams, build leadership, and drive lasting performance.",
            buttonText: "Transform Your Team"
        },
        outcomes: [
            "Stronger Leadership Maturity",
            "Improved Team Communication",
            "Higher Employee Retention",
            "Professional Accountability",
            "Sustainable Growth Culture"
        ],
        faqs: [
            {
                q: "Is your training just theoretical?",
                a: "No. We focus on truth over theory. We use real-world scenarios and practical solutions that employees can apply immediately to their daily work."
            },
            {
                q: "Do you offer virtual training for remote teams?",
                a: "Yes. We have dedicated virtual modules designed to keep distributed and hybrid teams engaged and aligned with your corporate values."
            },
            {
                q: "Can you customize the training for my industry?",
                a: "Absolutely. Every program is tailored to your specific industry dynamics, team size, and corporate culture to ensure maximum relevance."
            },
            {
                q: "What is the main focus of your leadership training?",
                a: "We help leaders understand the difference between managing and leading, focusing on policy implementation, trust-building, and communication."
            },
            {
                q: "Do you provide post-training evaluations?",
                a: "Yes. We include performance evaluations and follow-ups to measure the impact of the training on team engagement and productivity."
            }
        ]
    }
};
