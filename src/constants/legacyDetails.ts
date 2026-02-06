export interface LegacyItemDetail {
    slug: string;
    title: string;
    heroImage: string;
    heroVideo?: string;
    tagline: string;
    description: string;
    overview: {
        title: string;
        content: string[];
    };
    features: {
        icon: string;
        title: string;
        description: string;
    }[];
    approach: {
        title: string;
        steps: {
            number: string;
            title: string;
            description: string;
        }[];
    };
    outcomes: {
        title: string;
        points: string[];
    };
    stats: {
        number: string;
        label: string;
        icon: string;
    }[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    whyChooseUs: {
        title: string;
        description: string;
        icon: string;
    }[];
    gallery?: string[];
}

export const legacyDetails: Record<string, LegacyItemDetail> = {
    "pr-media-services": {
        slug: "pr-media-services",
        title: "Public Relations & Media Service",
        heroImage: "/images/service-legacy/pr1.jpg",
        heroVideo: "/videos/pr.webm",
        tagline: "We don't chase headlines; we control narratives with credibility, influence, and precision.",
        description: "Strategic PR that shapes perception, builds authority, and transforms how the world sees your brand.",
        overview: {
            title: "The Art of Influence",
            content: [
                "In a world where attention is currency and credibility is power, we help you own the narrative. Our PR & Media services are designed to position you as the authority in your space through strategic media placements, influencer collaborations, and reputation management.",
                "We don't just get you coverage—we get you the right coverage. The kind that builds trust, drives conversation, and creates lasting brand equity."
            ]
        },
        features: [
            {
                icon: "01",
                title: "Public Relations (PR)",
                description: "Strategic positioning that shapes how your brand is perceived across all touchpoints. We craft narratives that resonate and stories that stick."
            },
            {
                icon: "02",
                title: "Media Outreach & Monitoring",
                description: "Proactive media engagement and real-time tracking to ensure your message reaches the right audiences through trusted channels."
            },
            {
                icon: "03",
                title: "Influencer PR & Collaborations",
                description: "Authentic partnerships with voices that matter. We connect you with influencers who align with your values and amplify your impact."
            },
            {
                icon: "04",
                title: "Event Publicity",
                description: "Maximum visibility for your events through coordinated PR campaigns that drive attendance, engagement, and media coverage."
            },
            {
                icon: "05",
                title: "Press Release Writing & Distribution",
                description: "Compelling press materials crafted to capture attention and distributed to the right media outlets for maximum reach."
            },
            {
                icon: "06",
                title: "Reputation & Crisis Management",
                description: "Protect and enhance your brand reputation. Swift, strategic response when it matters most, with long-term reputation building."
            }
        ],
        approach: {
            title: "Our PR Method",
            steps: [
                {
                    number: "01",
                    title: "Brand Audit & Positioning",
                    description: "We analyze your current perception, identify opportunities, and craft a strategic positioning that sets you apart."
                },
                {
                    number: "02",
                    title: "Media Strategy Development",
                    description: "Custom PR roadmap aligned with your goals, target audience, and the media landscape relevant to your industry."
                },
                {
                    number: "03",
                    title: "Execution & Amplification",
                    description: "Coordinated campaigns across earned, owned, and shared media to maximize reach and impact."
                },
                {
                    number: "04",
                    title: "Monitor & Optimize",
                    description: "Continuous tracking of media mentions, sentiment analysis, and campaign refinement for sustained results."
                }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: [
                "Established authority and credibility in your industry",
                "Consistent positive media coverage and brand mentions",
                "Strategic relationships with key media and influencers",
                "Protected and enhanced brand reputation",
                "Measurable increase in brand awareness and trust"
            ]
        },
        stats: [
            { number: '300+', label: 'Media Placements', icon: '📰' },
            { number: '95%', label: 'Positive Coverage', icon: '⭐' },
            { number: '8+', label: 'Years in PR', icon: '💼' },
            { number: '150+', label: 'Media Contacts', icon: '🤝' },
        ],
        testimonial: {
            quote: "HerLead's PR expertise transformed our media presence. We went from zero coverage to being featured in top-tier publications within 3 months. Their strategic approach and media relationships are unmatched.",
            author: "Priya Sharma",
            role: "Founder, TechVision India"
        },
        whyChooseUs: [
            {
                title: 'Proven Media Network',
                description: 'Established relationships with top-tier journalists, editors, and influencers across industries',
                icon: '🎯'
            },
            {
                title: 'Strategic Storytelling',
                description: 'We craft narratives that resonate with media and audiences, ensuring maximum impact',
                icon: '📈'
            },
            {
                title: 'Crisis-Ready Team',
                description: '24/7 reputation monitoring and rapid response protocols to protect your brand',
                icon: '💬'
            },
        ],
        gallery: ["/images/service-legacy/pr1.jpg", "/images/service-legacy/pr2.jpg"]
    },
    "brand-creation": {
        slug: "brand-creation",
        title: "Make Me The Brand",
        heroImage: "/images/service-legacy/brand.webp",
        heroVideo: "/videos/brand.webm",
        tagline: "We build brands from the ground up that are clear, credible, and impossible to ignore.",
        description: "Complete brand creation and identity development that transforms businesses into unforgettable brands.",
        overview: {
            title: "Building Brands That Last",
            content: [
                "Your brand is more than a logo or a color scheme. It's the essence of who you are, what you stand for, and how you make people feel. We build complete brand identities that resonate deeply and stand the test of time.",
                "From visual identity to brand messaging, we create cohesive systems that ensure every touchpoint reinforces your unique position in the market."
            ]
        },
        features: [
            {
                icon: "01",
                title: "Brand Identity",
                description: "Complete identity system including naming, logo design, color palette, and typography that captures your essence."
            },
            {
                icon: "02",
                title: "Visual Branding",
                description: "Stunning visual assets that make you instantly recognizable—from business cards to billboards."
            },
            {
                icon: "03",
                title: "Messaging & Positioning",
                description: "Clear, compelling brand voice and messaging framework that connects with your audience on an emotional level."
            },
            {
                icon: "04",
                title: "Brand Guidelines",
                description: "Comprehensive brand book ensuring consistency across all platforms and applications."
            },
            {
                icon: "05",
                title: "Videography",
                description: "Premium video content that brings your brand story to life with cinematic quality and strategic storytelling."
            }
        ],
        approach: {
            title: "Our Brand Building Process",
            steps: [
                {
                    number: "01",
                    title: "Discovery & Research",
                    description: "Deep dive into your business, audience, competitors, and market positioning opportunities."
                },
                {
                    number: "02",
                    title: "Strategy & Conceptualization",
                    description: "Brand strategy development including positioning, personality, and visual direction."
                },
                {
                    number: "03",
                    title: "Design & Development",
                    description: "Creation of all brand assets with multiple rounds of refinement to perfection."
                },
                {
                    number: "04",
                    title: "Launch & Implementation",
                    description: "Strategic brand rollout with comprehensive guidelines for consistent application."
                }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: [
                "A distinctive brand identity that stands out in your market",
                "Consistent visual and verbal brand presence",
                "Increased brand recognition and recall",
                "Professional brand assets ready for any application",
                "Clear brand strategy guiding all future decisions"
            ]
        },
        stats: [
            { number: '200+', label: 'Brands Created', icon: '🎨' },
            { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
            { number: '6+', label: 'Years Experience', icon: '💼' },
            { number: '50+', label: 'Brand Identities', icon: '✨' },
        ],
        testimonial: {
            quote: "HerLead didn't just create a logo—they created our entire brand identity. The process was collaborative, insightful, and the results exceeded our wildest expectations. We now have a brand we're truly proud of.",
            author: "Rajesh Kumar",
            role: "CEO, GreenTech Solutions"
        },
        whyChooseUs: [
            {
                title: 'Brand Strategy Experts',
                description: 'We don\'t just design—we strategize. Every element is purposeful and aligned with your business goals',
                icon: '🎯'
            },
            {
                title: 'Complete Brand Systems',
                description: 'From naming to visual identity to brand voice, we deliver comprehensive brand ecosystems',
                icon: '📈'
            },
            {
                title: 'Timeless Design',
                description: 'We create brands that stand the test of time, not just follow fleeting trends',
                icon: '💬'
            },
        ],
        gallery: ["/images/service-legacy/brand.webp"]
    },
    "web-design": {
        slug: "web-design",
        title: "Website & Digital Experience",
        heroImage: "/images/service-legacy/web.webp",
        tagline: "Your website speaks the same language as your brand—clear, current, and conversion-ready.",
        description: "Premium website design and development that converts visitors into customers and browsers into believers.",
        overview: {
            title: "Your Digital Headquarters",
            content: [
                "Your website is often the first real interaction someone has with your brand. It needs to be flawless. We create digital experiences that are beautiful, functional, and strategically designed to drive results.",
                "Whether you're starting from scratch or reimagining an existing site, we build with purpose—balancing aesthetics with user experience and brand alignment with conversion optimization."
            ]
        },
        features: [
            {
                icon: "01",
                title: "Website Designing",
                description: "Custom, award-worthy designs that reflect your brand and captivate your audience."
            },
            {
                icon: "02",
                title: "Website Redesign & Development",
                description: "Modern, responsive development using the latest technologies for speed, security, and scalability."
            },
            {
                icon: "03",
                title: "UX/UI Strategy",
                description: "User-centered design that creates intuitive journeys and delightful interactions."
            },
            {
                icon: "04",
                title: "Website Content Structuring",
                description: "Strategic content architecture that guides users and search engines to what matters most."
            }
        ],
        approach: {
            title: "Our Web Design Process",
            steps: [
                {
                    number: "01",
                    title: "Strategy & Planning",
                    description: "Goal definition, audience research, competitive analysis, and sitemap development."
                },
                {
                    number: "02",
                    title: "Design & Prototyping",
                    description: "Wireframing, visual design, and interactive prototypes for validation before development."
                },
                {
                    number: "03",
                    title: "Development & Integration",
                    description: "Clean code, CMS integration, and functionality implementation with best practices."
                },
                {
                    number: "04",
                    title: "Testing & Launch",
                    description: "Rigorous QA, performance optimization, and smooth deployment with post-launch support."
                }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: [
                "A website that truly represents your brand",
                "Improved user experience and engagement metrics",
                "Higher conversion rates and lead generation",
                "Mobile-optimized, fast-loading pages",
                "Easy-to-manage content system"
            ]
        },
        stats: [
            { number: '150+', label: 'Websites Built', icon: '🌐' },
            { number: '99%', label: 'Uptime Guarantee', icon: '⭐' },
            { number: '5+', label: 'Years in Web Dev', icon: '💼' },
            { number: '40+', label: 'Happy Clients', icon: '😊' },
        ],
        testimonial: {
            quote: "Our new website is a game-changer. HerLead delivered a beautiful, fast, and conversion-optimized site that perfectly represents our brand. Traffic and leads have increased significantly since launch.",
            author: "Anita Desai",
            role: "Marketing Director, StyleHub"
        },
        whyChooseUs: [
            {
                title: 'Conversion-Focused Design',
                description: 'Beautiful websites that drive results—every element is optimized for user action',
                icon: '🎯'
            },
            {
                title: 'Lightning-Fast Performance',
                description: 'Speed matters. We build sites that load instantly and rank well in search engines',
                icon: '📈'
            },
            {
                title: 'Ongoing Support',
                description: 'Launch is just the beginning. We provide continuous support and optimization',
                icon: '💬'
            },
        ],
        gallery: ["/images/service-legacy/web.webp"]
    },
    "paid-ads": {
        slug: "paid-ads",
        title: "Paid Advertising",
        heroImage: "/images/service-legacy/ads.webp",
        tagline: "The momentum builder giving your brand instant visibility while everything else compounds.",
        description: "Strategic paid advertising campaigns that drive immediate results and sustainable growth.",
        overview: {
            title: "Accelerate Your Growth",
            content: [
                "While organic strategies build over time, paid ads deliver instant visibility and measurable results. We create campaigns that not only drive traffic but attract the right traffic—people who convert.",
                "Our approach combines data-driven strategy with creative excellence to maximize ROI across all major advertising platforms."
            ]
        },
        features: [
            {
                icon: "01",
                title: "Meta Ads",
                description: "Comprehensive Facebook and Instagram advertising strategies for maximum reach and engagement."
            },
            {
                icon: "02",
                title: "Google Ads",
                description: "Search and display campaigns that capture high-intent users at the perfect moment."
            },
            {
                icon: "03",
                title: "Facebook Ads",
                description: "Targeted campaigns leveraging advanced audience segmentation and retargeting."
            },
            {
                icon: "04",
                title: "Instagram Ads",
                description: "Visually stunning ads optimized for Instagram's unique platform and audience."
            },
            {
                icon: "05",
                title: "LinkedIn Ads",
                description: "B2B-focused campaigns targeting decision-makers and professionals."
            }
        ],
        approach: {
            title: "Our Advertising Method",
            steps: [
                {
                    number: "01",
                    title: "Audience & Market Research",
                    description: "Deep analysis of your target audience, competitors, and market opportunities."
                },
                {
                    number: "02",
                    title: "Campaign Strategy",
                    description: "Custom advertising strategy aligned with your goals and budget."
                },
                {
                    number: "03",
                    title: "Creative Development",
                    description: "Compelling ad copy and visuals designed to capture attention and drive action."
                },
                {
                    number: "04",
                    title: "Optimization & Scaling",
                    description: "Continuous testing, refinement, and scaling of winning campaigns."
                }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: [
                "Immediate increase in brand visibility",
                "High-quality leads and conversions",
                "Measurable ROI on ad spend",
                "Data-driven insights about your audience",
                "Scalable growth through proven campaigns"
            ]
        },
        stats: [
            { number: '₹5Cr+', label: 'Ad Spend Managed', icon: '💰' },
            { number: '400%', label: 'Avg. ROI Increase', icon: '⭐' },
            { number: '7+', label: 'Years in Paid Ads', icon: '💼' },
            { number: '100+', label: 'Campaigns Run', icon: '🚀' },
        ],
        testimonial: {
            quote: "HerLead's paid advertising expertise is phenomenal. They optimized our campaigns, reduced our cost per acquisition by 60%, and scaled our revenue 3x in just 6 months. Best investment we've made.",
            author: "Vikram Singh",
            role: "Growth Manager, EduTech Pro"
        },
        whyChooseUs: [
            {
                title: 'Data-Driven Optimization',
                description: 'Every decision backed by analytics. We continuously test and refine for maximum ROI',
                icon: '🎯'
            },
            {
                title: 'Multi-Platform Expertise',
                description: 'Master advertisers across Google, Meta, LinkedIn, and emerging platforms',
                icon: '📈'
            },
            {
                title: 'Transparent Reporting',
                description: 'Real-time dashboards and detailed monthly reports—you always know where your money goes',
                icon: '💬'
            },
        ],
        gallery: ["/images/service-legacy/ads.webp"]
    },
    "corporate-training": {
        slug: "corporate-training",
        title: "Corporate Training & Development",
        heroImage: "/images/service-legacy/training.webp",
        tagline: "We shape people and organizations through systems of clarity, control, and consistent growth.",
        description: "Transformative corporate training programs that build leaders, strengthen teams, and drive organizational excellence.",
        overview: {
            title: "Invest In Your People",
            content: [
                "Your organization is only as strong as your people. We design and deliver training programs that don't just educate—they transform. From leadership development to team productivity, we create learning experiences that stick.",
                "Each program is customized to your organization's unique challenges, culture, and goals, ensuring practical application and measurable impact."
            ]
        },
        features: [
            {
                icon: "01",
                title: "Corporate Trainings",
                description: "Custom training programs addressing your specific organizational needs and challenges."
            },
            {
                icon: "02",
                title: "Leadership & Communication Training",
                description: "Develop leaders who inspire, communicate effectively, and drive results."
            },
            {
                icon: "03",
                title: "Team Productivity & Culture Workshops",
                description: "Build high-performing teams with strong collaboration and positive culture."
            },
            {
                icon: "04",
                title: "Personal Branding for Professionals",
                description: "Empower your employees to build powerful personal brands that reflect well on your organization."
            }
        ],
        approach: {
            title: "Our Training Method",
            steps: [
                {
                    number: "01",
                    title: "Needs Assessment",
                    description: "Comprehensive analysis of current skills, gaps, and desired outcomes."
                },
                {
                    number: "02",
                    title: "Program Design",
                    description: "Custom curriculum development with interactive modules and practical exercises."
                },
                {
                    number: "03",
                    title: "Delivery & Engagement",
                    description: "Dynamic training sessions with expert facilitators and engaging content."
                },
                {
                    number: "04",
                    title: "Follow-up & Reinforcement",
                    description: "Post-training support, resources, and measurement to ensure lasting impact."
                }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: [
                "Increased employee engagement and satisfaction",
                "Improved leadership capabilities across all levels",
                "Enhanced team collaboration and productivity",
                "Stronger organizational culture and values alignment",
                "Measurable improvement in key performance metrics"
            ]
        },
        stats: [
            { number: '80+', label: 'Companies Trained', icon: '🏢' },
            { number: '97%', label: 'Satisfaction Rate', icon: '⭐' },
            { number: '10+', label: 'Years Training', icon: '💼' },
            { number: '5000+', label: 'Professionals Trained', icon: '👥' },
        ],
        testimonial: {
            quote: "The leadership training from HerLead transformed our management team. The practical frameworks and engaging delivery created lasting behavioral change. Our team productivity increased by 35% post-training.",
            author: "Meera Patel",
            role: "HR Director, InfoSys Global"
        },
        whyChooseUs: [
            {
                title: 'Customized Programs',
                description: 'No cookie-cutter solutions. Every training is tailored to your organization\'s unique needs',
                icon: '🎯'
            },
            {
                title: 'Expert Facilitators',
                description: 'Industry veterans with real-world experience, not just theoretical knowledge',
                icon: '📈'
            },
            {
                title: 'Measurable Impact',
                description: 'Pre and post-training assessments to track improvement and ROI',
                icon: '💬'
            },
        ],
        gallery: ["/images/service-legacy/training.webp"]
    },
    "career-mastery": {
        slug: "career-mastery",
        title: "Talent, Recruitment & Career Readiness",
        heroImage: "/images/service-legacy/talent.webp",
        tagline: "A comprehensive One-Month Live Training Program designed to bridge the gap between talent and opportunity.",
        description: "Intensive career development program that transforms job seekers into confident, interview-ready professionals.",
        overview: {
            title: "Your Career Transformation",
            content: [
                "The job market is competitive, but preparation makes all the difference. Our Career Readiness program is a comprehensive one-month journey that equips you with everything you need to land your dream role.",
                "From resume optimization to interview mastery, we cover every aspect of the job search process with hands-on training, personalized feedback, and real-world practice."
            ]
        },
        features: [
            {
                icon: "01",
                title: "One-Month Live Training Program",
                description: "Intensive, instructor-led program covering all aspects of career readiness and job search strategy."
            },
            {
                icon: "02",
                title: "Mock Interviews with Personal Feedback",
                description: "Realistic interview simulations with detailed feedback to build confidence and improve performance."
            },
            {
                icon: "03",
                title: "Professional Grooming and Appearance Training",
                description: "Master the art of professional presentation, from dress code to body language."
            },
            {
                icon: "04",
                title: "Resume Building & Job Search",
                description: "Craft compelling resumes and learn proven strategies for finding and landing opportunities."
            }
        ],
        approach: {
            title: "The 4-Week Journey",
            steps: [
                {
                    number: "Week 1",
                    title: "Foundation & Self-Assessment",
                    description: "Discover your strengths, define your career goals, and build a compelling personal brand."
                },
                {
                    number: "Week 2",
                    title: "Resume & Application Mastery",
                    description: "Create standout resumes, cover letters, and LinkedIn profiles that get noticed."
                },
                {
                    number: "Week 3",
                    title: "Interview Skills & Communication",
                    description: "Master common interview questions, behavioral techniques, and professional communication."
                },
                {
                    number: "Week 4",
                    title: "Practice & Refinement",
                    description: "Mock interviews, feedback sessions, and final preparations for real opportunities."
                }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: [
                "Professional resume and LinkedIn profile",
                "Confidence in any interview situation",
                "Clear personal brand and career narrative",
                "Professional appearance and communication skills",
                "Job search strategy and networking skills",
                "Placement support and ongoing guidance"
            ]
        },
        stats: [
            { number: '500+', label: 'Candidates Trained', icon: '🎓' },
            { number: '85%', label: 'Placement Rate', icon: '⭐' },
            { number: '4+', label: 'Years Running', icon: '💼' },
            { number: '200+', label: 'Partner Companies', icon: '🤝' },
        ],
        testimonial: {
            quote: "This program changed my career trajectory. The mock interviews, resume feedback, and professional grooming gave me the confidence to ace my interviews. I landed my dream job within 2 weeks of completing the program!",
            author: "Sneha Reddy",
            role: "Software Engineer, Tech Mahindra"
        },
        whyChooseUs: [
            {
                title: 'Industry-Aligned Training',
                description: 'Current hiring trends and real interview questions from top companies',
                icon: '🎯'
            },
            {
                title: 'Personal Attention',
                description: 'Small batch sizes ensure personalized feedback and one-on-one coaching',
                icon: '📈'
            },
            {
                title: 'Placement Support',
                description: 'Job referrals, interview scheduling, and salary negotiation guidance',
                icon: '💬'
            },
        ],
        gallery: ["/images/service-legacy/talent.webp"]
    },
    "brand-identity": {
        slug: "brand-identity",
        title: "Brand Identity",
        heroImage: "/images/service-legacy/brand.webp",
        heroVideo: "/videos/brand.webm",
        tagline: "Your identity is your signature. Make it unforgettable.",
        description: "Complete brand identity systems that capture your essence and make you instantly recognizable in any market.",
        overview: {
            title: "The Foundation of Your Brand",
            content: [
                "Brand identity is more than just a logo—it's the complete visual and verbal system that defines who you are. It's the personality, the promise, and the perception you create in the minds of your audience.",
                "We craft comprehensive identity systems that include naming strategy, logo design, color psychology, typography selection, and brand voice development. Every element works together to tell your unique story."
            ]
        },
        features: [
            {
                icon: "✨",
                title: "Brand Naming & Strategy",
                description: "Strategic naming that resonates with your audience and stands out in your market."
            },
            {
                icon: "🎯",
                title: "Logo Design & Variations",
                description: "Iconic logo design with multiple variations for different applications."
            },
            {
                icon: "🎨",
                title: "Color Palette Development",
                description: "Strategic color systems based on psychology and industry standards."
            },
            {
                icon: "📝",
                title: "Typography System",
                description: "Carefully selected typefaces that reflect your brand personality."
            }
        ],
        approach: {
            title: "Our Identity Development Process",
            steps: [
                { number: "01", title: "Discovery", description: "Deep dive into your business and values." },
                { number: "02", title: "Strategy", description: "Positioning and creative direction development." },
                { number: "03", title: "Design", description: "Creative directions with logo concepts and palettes." },
                { number: "04", title: "Refinement", description: "Iterative refinement based on feedback." }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: ["Distinctive brand signature", "Cohesive visual presence", "Instant market recognition"]
        },
        stats: [
            { number: '150+', label: 'Identities', icon: '🎨' },
            { number: '98%', label: 'Satisfaction', icon: '⭐' }
        ],
        testimonial: {
            quote: "The identity system HerLead created transformed how our customers perceive us. We finally have a brand that feels authentic.",
            author: "Sarah Chen",
            role: "Founder, Bloom Digital"
        },
        whyChooseUs: [
            { title: 'Strategic Core', description: 'Design backed by deep market research', icon: '🎯' },
            { title: 'Versatility', description: 'Systems that work across all platforms', icon: '📈' }
        ],
        gallery: ["/images/service-legacy/brand.webp"]
    },
    "visual-branding": {
        slug: "visual-branding",
        title: "Visual Branding",
        heroImage: "/images/service-legacy/brand.webp",
        tagline: "Make every visual touchpoint a brand statement.",
        description: "Stunning visual assets that bring your brand to life across all platforms and create instant recognition.",
        overview: {
            title: "Visual Excellence",
            content: [
                "Visual branding is the consistent application of your brand elements across every touchpoint—from business cards to billboards, social media to storefronts.",
                "We create comprehensive visual asset libraries that ensure your brand looks professional, cohesive, and compelling everywhere it appears."
            ]
        },
        features: [
            {
                icon: "📇",
                title: "Business Collateral",
                description: "Professional business cards, letterheads, and stationery that make powerful first impressions."
            },
            {
                icon: "📄",
                title: "Marketing Materials",
                description: "Brochures, flyers, and posters designed to capture attention and communicate effectively."
            },
            {
                icon: "💻",
                title: "Digital Assets",
                description: "Social media templates and digital graphics optimized for online platforms."
            }
        ],
        approach: {
            title: "Our Visual Branding Process",
            steps: [
                { number: "01", title: "Audit", description: "Review existing assets and identify needs." },
                { number: "02", title: "System Design", description: "Establish visual design principles and templates." },
                { number: "03", title: "Asset Creation", description: "Produce all required visual materials." }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: ["Consistent brand look", "Professional collateral", "Memorable visual presence"]
        },
        stats: [
            { number: '500+', label: 'Assets Created', icon: '📈' },
            { number: '100%', label: 'Consistency', icon: '✨' }
        ],
        testimonial: {
            quote: "HerLead's visual branding made our small business look like an international corporation. The consistency is incredible.",
            author: "Mark Thompson",
            role: "Owner, TechEdge"
        },
        whyChooseUs: [
            { title: 'Cohesive Design', description: 'Unified visuals across all mediums', icon: '🎯' },
            { title: 'Premium Quality', description: 'Cinema-grade assets for every need', icon: '💎' }
        ],
        gallery: ["/images/service-legacy/brand.webp"]
    },
    "messaging-positioning": {
        slug: "messaging-positioning",
        title: "Messaging & Positioning",
        heroImage: "/images/service-legacy/brand.webp",
        tagline: "The right words in the right place create unstoppable brands.",
        description: "Strategic messaging frameworks that position your brand perfectly and create emotional connections.",
        overview: {
            title: "Strategic Communication",
            content: [
                "Your brand's position in the market and the messages you communicate are just as important as how you look.",
                "We develop comprehensive messaging frameworks that include your brand story, value propositions, and key messages."
            ]
        },
        features: [
            {
                icon: "🎯",
                title: "Positioning Strategy",
                description: "Clear statement defining your unique place in the market and target audience."
            },
            {
                icon: "📖",
                title: "Brand Story",
                description: "Compelling narrative that explains your origin, mission, and vision."
            },
            {
                icon: "💎",
                title: "Value Proposition",
                description: "Articulation of the unique value you provide and why customers should choose you."
            }
        ],
        approach: {
            title: "Our Messaging Process",
            steps: [
                { number: "01", title: "Research", description: "Deep analysis of market and target audience." },
                { number: "02", title: "Workshop", description: "Collaborative sessions to define unique value." },
                { number: "03", title: "Crafting", description: "Developing core messages and brand story." }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: ["Clear market position", "Emotional connection", "Consistent brand voice"]
        },
        stats: [
            { number: '100+', label: 'Brands Positioned', icon: '🎯' },
            { number: '95%', label: 'Message Clarity', icon: '💬' }
        ],
        testimonial: {
            quote: "Finally, we have words that actually sell our vision. HerLead captured our soul in a few perfectly chosen sentences.",
            author: "Elena Rossi",
            role: "Director, LuxeLiving"
        },
        whyChooseUs: [
            { title: 'Psychology-First', description: 'Messaging that understands human behavior', icon: '🧠' },
            { title: 'Competitive Edge', description: 'Strategic positioning that stands out', icon: '🚀' }
        ],
        gallery: ["/images/service-legacy/brand.webp"]
    },
    "brand-guidelines": {
        slug: "brand-guidelines",
        title: "Brand Guidelines",
        heroImage: "/images/service-legacy/brand.webp",
        tagline: "Consistency creates recognition. Guidelines ensure it.",
        description: "Comprehensive brand guideline documents that ensure perfect consistency across all platforms.",
        overview: {
            title: "The Brand Bible",
            content: [
                "Brand guidelines are the instruction manual for your brand. They document every aspect of your identity.",
                "We create detailed, beautiful guideline documents that ensure everyone knows exactly how to represent your brand."
            ]
        },
        features: [
            {
                icon: "📐",
                title: "Identity Standards",
                description: "Documentation of logo usage, color systems, and typography rules."
            },
            {
                icon: "💬",
                title: "Voice Standards",
                description: "Communication guidelines including tone, voice, and key messages."
            },
            {
                icon: "📱",
                title: "Application Rules",
                description: "Real-world examples showing correct brand application everywhere."
            }
        ],
        approach: {
            title: "Our Guidelines Process",
            steps: [
                { number: "01", title: "Planning", description: "Outline all elements that need documentation." },
                { number: "02", title: "Creation", description: "Write clear, detailed rules for each element." },
                { number: "03", title: "Layout", description: "Design the guideline document to be beautiful." }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: ["End-to-end consistency", "Empowered internal teams", "Protected brand equity"]
        },
        stats: [
            { number: '120+', label: 'Guides Created', icon: '📖' },
            { number: '100%', label: 'Recognition', icon: '✨' }
        ],
        testimonial: {
            quote: "These guidelines are so clear that our new vendors get everything right the first time. They saved us countless hours.",
            author: "James Wilson",
            role: "CMO, GlobalCorp"
        },
        whyChooseUs: [
            { title: 'Practical Focus', description: 'Rules that are actually easy to follow', icon: '🛠️' },
            { title: 'Future-Proof', description: 'Guidelines that grow with your business', icon: '🌱' }
        ],
        gallery: ["/images/service-legacy/brand.webp"]
    },
    "videography": {
        slug: "videography",
        title: "Videography",
        heroImage: "/images/service-legacy/brand.webp",
        heroVideo: "/videos/brand.webm",
        tagline: "Stories that move. Videos that convert.",
        description: "Premium video production that brings your brand story to life with cinematic quality.",
        overview: {
            title: "Cinematic Storytelling",
            content: [
                "Video is the most engaging form of content. We create videos that don't just look beautiful—they achieve results.",
                "From brand films to social content, we handle every aspect of production with cinematic quality and strategic thinking."
            ]
        },
        features: [
            {
                icon: "🎬",
                title: "Brand Films",
                description: "Cinematic videos that tell your story and create emotional connection."
            },
            {
                icon: "📹",
                title: "Product Videos",
                description: "Engaging demonstrations and explainer videos that convert."
            },
            {
                icon: "📱",
                title: "Social Content",
                description: "Short-form video content optimized for modern social platforms."
            }
        ],
        approach: {
            title: "Our Video Process",
            steps: [
                { number: "01", title: "Concept", description: "Define objectives and creative direction." },
                { number: "02", title: "Production", description: "Professional filming with cinema-grade equipment." },
                { number: "03", title: "Post-Production", description: "Expert editing, color grading, and sound design." }
            ]
        },
        outcomes: {
            title: "What You'll Achieve",
            points: ["High engagement rates", "Cinematic brand image", "Increased conversions"]
        },
        stats: [
            { number: '300+', label: 'Videos Shot', icon: '🎥' },
            { number: '10M+', label: 'Total Views', icon: '🚀' }
        ],
        testimonial: {
            quote: "The brand film HerLead produced brought me to tears. They truly captured our why. It's the best investment we've made.",
            author: "Anita Roy",
            role: "CEO, Hope Foundation"
        },
        whyChooseUs: [
            { title: 'Cinema Grade', description: 'High-end production for every budget', icon: '🎥' },
            { title: 'Viral Strategy', description: 'Designed for shares and engagement', icon: '🔥' }
        ],
        gallery: ["/images/service-legacy/brand.webp"]
    },
    // ==================== PR & MEDIA TAGS ====================
    "public-relations": {
        slug: "public-relations",
        title: "Public Relations (PR)",
        heroImage: "/images/service-legacy/pr1.jpg",
        tagline: "Strategic storytelling that builds trust and authority.",
        description: "We craft narratives that resonate with the media and your audience, ensuring your brand story is told exactly how it should be.",
        overview: {
            title: "Traditional & Modern PR",
            content: ["Public Relations is about managing your brand's reputation and building relationships with the public. We combine classic PR techniques with modern digital strategies."],
        },
        features: [{ icon: "📢", title: "Media Relations", description: "Building lasting connections with journalists and editors." }],
        approach: { title: "Our PR Approach", steps: [{ number: "01", title: "Narrative", description: "Finding your unique story." }] },
        outcomes: { title: "The Result", points: ["Brand Authority", "Trust building", "Earned media"] },
        stats: [{ number: "500+", label: "Press Releases", icon: "📰" }],
        testimonial: { quote: "HerLead made us an industry voice.", author: "A. Khan", role: "CEO" },
        whyChooseUs: [{ title: "Deep Networks", description: "Access to top-tier media.", icon: "🌐" }],
        gallery: ["/images/service-legacy/pr1.jpg"]
    },
    "media-outreach-monitoring": {
        slug: "media-outreach-monitoring",
        title: "Media Outreach & Monitoring",
        heroImage: "/images/service-legacy/pr1.jpg",
        tagline: "Always visible, always ahead of the curve.",
        description: "Protecting your narrative through proactive outreach and 24/7 media monitoring across all digital and print channels.",
        overview: { title: "Intelligence & Impact", content: ["We don't just send releases; we monitor the impact and engage with the medium in real-time."] },
        features: [{ icon: "🔍", title: "Real-time Alerts", description: "Instant monitoring of brand mentions." }],
        approach: { title: "Our Cycle", steps: [{ number: "01", title: "Monitoring", description: "Listening to the market." }] },
        outcomes: { title: "The Result", points: ["Crisis prevention", "Insightful reports"] },
        stats: [{ number: "24/7", label: "Monitoring", icon: "⏱️" }],
        testimonial: { quote: "They catch issues before they start.", author: "D. Roy", role: "Marketing Lead" },
        whyChooseUs: [{ title: "Advanced Tools", description: "State-of-the-art tracking software.", icon: "💻" }],
        gallery: ["/images/service-legacy/pr1.jpg"]
    },
    // ==================== WEB DESIGN TAGS ====================
    "website-designing": {
        slug: "website-designing",
        title: "Website Designing",
        heroImage: "/images/service-legacy/web.webp",
        tagline: "Aesthetics meets functionality in every pixel.",
        description: "Bespoke web designs that are visually stunning and conversion-focused, representing your brand in the digital world.",
        overview: { title: "Digital First Impressions", content: ["Your website is your digital flagship store. We ensure it's built to impress and perform."] },
        features: [{ icon: "🎨", title: "Custom UI", description: "Unique designs tailored to your brand identity." }],
        approach: { title: "Design Process", steps: [{ number: "01", title: "Wireframing", description: "Mapping out the user journey." }] },
        outcomes: { title: "The Result", points: ["Modern Aesthetic", "Responsive Layout"] },
        stats: [{ number: "100+", label: "Websites", icon: "🌐" }],
        testimonial: { quote: "Our traffic doubled after the redesign.", author: "J. Doe", role: "Founder" },
        whyChooseUs: [{ title: "User Centric", description: "Driven by user behavior data.", icon: "🎯" }],
        gallery: ["/images/service-legacy/web.webp"]
    },
    "ux-ui-strategy": {
        slug: "ux-ui-strategy",
        title: "UX/UI Strategy",
        heroImage: "/images/service-legacy/web.webp",
        tagline: "The bridge between business goals and user happiness.",
        description: "Data-driven UX/UI strategy that ensures every interaction is intuitive, efficient, and delightful for the user.",
        overview: { title: "Strategic Design", content: ["We look beyond colors to solve problems through strategic design thinking and user testing."] },
        features: [{ icon: "🧠", title: "User Research", description: "Understanding the psychology of your users." }],
        approach: { title: "Strategy Phase", steps: [{ number: "01", title: "Audit", description: "Analyzing current friction points." }] },
        outcomes: { title: "The Result", points: ["Higher Conversion", "Reduced Churn"] },
        stats: [{ number: "40%", label: "ROI uplift", icon: "📈" }],
        testimonial: { quote: "The most intuitive design we've ever used.", author: "S. Gupta", role: "Product Manager" },
        whyChooseUs: [{ title: "Scientific Logic", description: "Design backed by cognitive science.", icon: "🧬" }],
        gallery: ["/images/service-legacy/web.webp"]
    },
    // ==================== PAID ADS TAGS ====================
    "meta-ads": {
        slug: "meta-ads",
        title: "Meta Ads (FB & IG)",
        heroImage: "/images/service-legacy/ads.webp",
        tagline: "Targeting that turns scroll-stoppers into shoppers.",
        description: "Harness the power of Facebook and Instagram's algorithm to reach your perfect customer with high-converting ads.",
        overview: { title: "Algorithm Mastery", content: ["We specialize in visual storytelling and precision targeting on the Meta platform."] },
        features: [{ icon: "📱", title: "Retargeting", description: "Stay in front of your warmest leads." }],
        approach: { title: "Media Buying", steps: [{ number: "01", title: "Testing", description: "Iterative creative A/B testing." }] },
        outcomes: { title: "The Result", points: ["Scalable Sales", "Brand Reach"] },
        stats: [{ number: "10x", label: "Avg ROAS", icon: "💰" }],
        testimonial: { quote: "Best FB ad agency we've worked with.", author: "V. Sharma", role: "E-comm Owner" },
        whyChooseUs: [{ title: "Creative Focus", description: "Ads that actually get clicked.", icon: "📸" }],
        gallery: ["/images/service-legacy/ads.webp"]
    },
    "google-ads": {
        slug: "google-ads",
        title: "Google Ads (SEM)",
        heroImage: "/images/service-legacy/ads.webp",
        tagline: "Appear exactly where your customers are searching.",
        description: "Search Engine Marketing at its finest. We capture high-intent traffic and turn searches into sales.",
        overview: { title: "Intent Marketing", content: ["Position your brand at the top of the SERP when customers search for what you offer."] },
        features: [{ icon: "🔍", title: "Keyword Mastery", description: "Finding the high-intent keywords that convert." }],
        approach: { title: "Search Strategy", steps: [{ number: "01", title: "Setup", description: "Structuring campaigns for quality score." }] },
        outcomes: { title: "The Result", points: ["High-intent Leads", "Fast ROI"] },
        stats: [{ number: "5M+", label: "Ad Clicks", icon: "👆" }],
        testimonial: { quote: "Top position for our core terms.", author: "R. Singh", role: "SaaS Founder" },
        whyChooseUs: [{ title: "Efficiency", description: "Lowest possible CPC for max volume.", icon: "📉" }],
        gallery: ["/images/service-legacy/ads.webp"]
    },
    // ==================== CORPORATE TRAINING TAGS ====================
    "leadership-communication-training": {
        slug: "leadership-communication-training",
        title: "Leadership & Communication",
        heroImage: "/images/service-legacy/training.webp",
        tagline: "Empowering leaders to communicate with impact.",
        description: "Transform your management into a leadership powerhouse through advanced communication and EQ skills.",
        overview: { title: "Soft Skills, Hard Impact", content: ["Leadership is communication. We train the skills that drive culture and results."] },
        features: [{ icon: "🎤", title: "Executive Presence", description: "Commanding the room with confidence." }],
        approach: { title: "Training Path", steps: [{ number: "01", title: "Assessment", description: "Identifying communication gaps." }] },
        outcomes: { title: "The Result", points: ["Unified Teams", "Confident Leads"] },
        stats: [{ number: "5000+", label: "Leaders Trained", icon: "👥" }],
        testimonial: { quote: "Our board meetings are finally productive.", author: "B. Joshi", role: "CEO" },
        whyChooseUs: [{ title: "Interactive", description: "No boring lectures. Pure practice.", icon: "⚡" }],
        gallery: ["/images/service-legacy/training.webp"]
    },
    // ==================== CAREER MASTERY TAGS ====================
    "live-training-program": {
        slug: "live-training-program",
        title: "One-Month Live Program",
        heroImage: "/images/service-legacy/talent.webp",
        tagline: "The ultimate bridge between education and employment.",
        description: "An intensive 30-day program that transforms students into professionals ready for the global market.",
        overview: { title: "Industry Prep", content: ["Learn the skills colleges don't teach you: Networking, Corporate Culture, and Strategic Thinking."] },
        features: [{ icon: "🏫", title: "Live Mentorship", description: "Real-time access to industry veterans." }],
        approach: { title: "Curriculum", steps: [{ number: "01", title: "Mindset", description: "Switching from student to pro." }] },
        outcomes: { title: "The Result", points: ["Job Readiness", "Confidence Boost"] },
        stats: [{ number: "90%", label: "Placement Rate", icon: '🎓' }],
        testimonial: { quote: "I landed a job in 2 weeks.", author: "N. Mehta", role: "Fullstack Dev" },
        whyChooseUs: [{ title: "Real World", description: "Experience over theory.", icon: "💼" }],
        gallery: ["/images/service-legacy/talent.webp"]
    }
};
