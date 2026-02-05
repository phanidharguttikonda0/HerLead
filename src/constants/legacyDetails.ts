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
    }
};
