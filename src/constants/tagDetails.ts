export interface TagDetail {
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
    whatWeOffer: {
        title: string;
        description: string;
        icon: string;
    }[];
    workInAction: {
        title: string;
        images: string[];
        description: string;
    };
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
}

export const tagDetails: Record<string, TagDetail> = {
    // ==================== BRAND CREATION TAGS ====================
    "brand-identity": {
        slug: "brand-identity",
        title: "Brand Identity",
        heroImage: "/images/tags/brand-identity-hero.webp",
        tagline: "Your identity is your signature. Make it unforgettable.",
        description: "Complete brand identity systems that capture your essence and make you instantly recognizable in any market.",
        overview: {
            title: "The Foundation of Your Brand",
            content: [
                "Brand identity is more than just a logo—it's the complete visual and verbal system that defines who you are. It's the personality, the promise, and the perception you create in the minds of your audience.",
                "We craft comprehensive identity systems that include naming strategy, logo design, color psychology, typography selection, and brand voice development. Every element works together to tell your unique story and create lasting impressions."
            ]
        },
        whatWeOffer: [
            {
                title: "Brand Naming & Strategy",
                description: "Strategic naming that resonates with your audience and stands out in your market. We research, test, and validate names that are memorable, meaningful, and legally available.",
                icon: "✨"
            },
            {
                title: "Logo Design & Variations",
                description: "Iconic logo design with multiple variations for different applications. From primary marks to simplified versions, we ensure your logo works everywhere.",
                icon: "🎯"
            },
            {
                title: "Color Palette Development",
                description: "Strategic color systems based on psychology, industry standards, and brand personality. Primary, secondary, and accent colors with specific usage guidelines.",
                icon: "🎨"
            },
            {
                title: "Typography System",
                description: "Carefully selected typefaces that reflect your brand personality. Complete hierarchy system for headings, body text, and special applications.",
                icon: "📝"
            },
            {
                title: "Brand Voice & Tone",
                description: "Defined communication style that ensures consistency across all touchpoints. From formal to friendly, we articulate exactly how your brand speaks.",
                icon: "💬"
            },
            {
                title: "Visual Identity Elements",
                description: "Supporting graphic elements, patterns, icons, and imagery style that complement your core identity and add visual richness.",
                icon: "🖼️"
            }
        ],
        workInAction: {
            title: "Our Brand Identity Work",
            images: [
                "/images/work/brand-identity-1.webp",
                "/images/work/brand-identity-2.webp",
                "/images/work/brand-identity-3.webp",
                "/images/work/brand-identity-4.webp"
            ],
            description: "From startups to established businesses, we've created brand identities that stand the test of time and drive recognition."
        },
        approach: {
            title: "Our Identity Development Process",
            steps: [
                {
                    number: "01",
                    title: "Discovery & Research",
                    description: "Deep dive into your business, values, audience, and competitive landscape. We uncover what makes you unique and how to express it visually."
                },
                {
                    number: "02",
                    title: "Strategy & Conceptualization",
                    description: "Brand positioning, personality definition, and creative direction development. We establish the strategic foundation before any design begins."
                },
                {
                    number: "03",
                    title: "Design Exploration",
                    description: "Multiple creative directions with logo concepts, color palettes, and typography options. We explore diverse approaches to find the perfect fit."
                },
                {
                    number: "04",
                    title: "Refinement & Finalization",
                    description: "Iterative refinement based on feedback, testing across applications, and finalizing all identity elements to perfection."
                },
                {
                    number: "05",
                    title: "Delivery & Guidelines",
                    description: "Complete brand identity package with all files, formats, and comprehensive usage guidelines for consistent application."
                }
            ]
        },
        outcomes: {
            title: "What You'll Receive",
            points: [
                "Complete brand identity system with all source files",
                "Primary and secondary logo variations",
                "Strategic color palette with codes and usage rules",
                "Typography system with font files and licenses",
                "Brand voice and messaging framework",
                "Visual identity elements and patterns",
                "Comprehensive brand guidelines document",
                "File formats for print, digital, and web use"
            ]
        },
        stats: [
            { number: '150+', label: 'Identities Created', icon: '🎨' },
            { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
            { number: '8+', label: 'Years Experience', icon: '💼' },
            { number: '25+', label: 'Industries Served', icon: '🌐' }
        ]
    },

    "visual-branding": {
        slug: "visual-branding",
        title: "Visual Branding",
        heroImage: "/images/tags/visual-branding-hero.webp",
        tagline: "Make every visual touchpoint a brand statement.",
        description: "Stunning visual assets that bring your brand to life across all platforms and create instant recognition.",
        overview: {
            title: "Visual Excellence Across All Touchpoints",
            content: [
                "Visual branding is where your identity comes to life. It's the consistent application of your brand elements across every touchpoint—from business cards to billboards, social media to storefronts.",
                "We create comprehensive visual asset libraries that ensure your brand looks professional, cohesive, and compelling everywhere it appears. Every piece is designed with purpose and aligned with your brand strategy."
            ]
        },
        whatWeOffer: [
            {
                title: "Business Collateral Design",
                description: "Professional business cards, letterheads, envelopes, and stationery that make powerful first impressions and reinforce your brand identity.",
                icon: "📇"
            },
            {
                title: "Marketing Materials",
                description: "Brochures, flyers, posters, and promotional materials designed to capture attention and communicate your message effectively.",
                icon: "📄"
            },
            {
                title: "Digital Assets",
                description: "Social media templates, email signatures, presentation decks, and digital graphics optimized for online platforms.",
                icon: "💻"
            },
            {
                title: "Packaging Design",
                description: "Product packaging that stands out on shelves, tells your brand story, and creates memorable unboxing experiences.",
                icon: "📦"
            },
            {
                title: "Environmental Graphics",
                description: "Signage, wayfinding, office branding, and environmental design that creates immersive brand experiences.",
                icon: "🏢"
            },
            {
                title: "Brand Photography Direction",
                description: "Photography style guides and art direction to ensure all visual content aligns with your brand aesthetic.",
                icon: "📸"
            }
        ],
        workInAction: {
            title: "Visual Branding Portfolio",
            images: [
                "/images/work/visual-branding-1.webp",
                "/images/work/visual-branding-2.webp",
                "/images/work/visual-branding-3.webp",
                "/images/work/visual-branding-4.webp"
            ],
            description: "A showcase of cohesive visual systems that elevate brands across print, digital, and environmental applications."
        },
        approach: {
            title: "Our Visual Branding Process",
            steps: [
                {
                    number: "01",
                    title: "Audit & Planning",
                    description: "Review existing assets, identify needs, and create a comprehensive plan for all required visual materials."
                },
                {
                    number: "02",
                    title: "Design System Development",
                    description: "Establish visual design principles, templates, and patterns that ensure consistency across all applications."
                },
                {
                    number: "03",
                    title: "Asset Creation",
                    description: "Design and produce all required visual materials following the established system and brand guidelines."
                },
                {
                    number: "04",
                    title: "Review & Refinement",
                    description: "Collaborative review process with iterations to ensure every asset meets quality standards and brand alignment."
                },
                {
                    number: "05",
                    title: "Delivery & Templates",
                    description: "Final files in all required formats plus editable templates for future internal use and consistency."
                }
            ]
        },
        outcomes: {
            title: "What You'll Receive",
            points: [
                "Complete library of branded visual assets",
                "Print-ready business collateral files",
                "Digital asset templates for social media",
                "Marketing material designs and templates",
                "Packaging designs with production specs",
                "Photography and imagery guidelines",
                "Editable templates for ongoing use",
                "All files in multiple formats (AI, PSD, PDF, PNG, JPG)"
            ]
        },
        stats: [
            { number: '500+', label: 'Assets Created', icon: '🎨' },
            { number: '100%', label: 'Brand Consistency', icon: '⭐' },
            { number: '6+', label: 'Years Designing', icon: '💼' },
            { number: '200+', label: 'Happy Clients', icon: '😊' }
        ]
    },

    "messaging-positioning": {
        slug: "messaging-positioning",
        title: "Messaging & Positioning",
        heroImage: "/images/tags/messaging-positioning-hero.webp",
        tagline: "The right words in the right place create unstoppable brands.",
        description: "Strategic messaging frameworks that position your brand perfectly and create emotional connections with your audience.",
        overview: {
            title: "Words That Win Hearts and Minds",
            content: [
                "Your brand's position in the market and the messages you communicate are just as important as how you look. Strategic messaging and positioning define what you stand for, who you serve, and why you matter.",
                "We develop comprehensive messaging frameworks that include your brand story, value propositions, key messages, and communication guidelines. Every word is chosen strategically to resonate with your audience and differentiate you from competitors."
            ]
        },
        whatWeOffer: [
            {
                title: "Brand Positioning Strategy",
                description: "Clear positioning statement that defines your unique place in the market, target audience, and competitive advantage.",
                icon: "🎯"
            },
            {
                title: "Brand Story Development",
                description: "Compelling narrative that explains your origin, mission, and vision in a way that creates emotional connection.",
                icon: "📖"
            },
            {
                title: "Value Proposition Framework",
                description: "Crystal-clear articulation of the unique value you provide and why customers should choose you over alternatives.",
                icon: "💎"
            },
            {
                title: "Messaging Architecture",
                description: "Hierarchical message framework from core brand promise to supporting messages for different audiences and contexts.",
                icon: "🏗️"
            },
            {
                title: "Tagline & Slogan Creation",
                description: "Memorable, meaningful taglines that capture your brand essence and stick in people's minds.",
                icon: "✨"
            },
            {
                title: "Communication Guidelines",
                description: "Detailed guidelines on tone, voice, language, and messaging do's and don'ts for consistent communication.",
                icon: "📋"
            }
        ],
        workInAction: {
            title: "Messaging Success Stories",
            images: [
                "/images/work/messaging-1.webp",
                "/images/work/messaging-2.webp",
                "/images/work/messaging-3.webp"
            ],
            description: "Strategic messaging frameworks that have helped brands clarify their position and connect deeply with their audiences."
        },
        approach: {
            title: "Our Messaging Development Process",
            steps: [
                {
                    number: "01",
                    title: "Market & Audience Research",
                    description: "Deep analysis of your market, competitors, and target audience to identify positioning opportunities and messaging gaps."
                },
                {
                    number: "02",
                    title: "Positioning Workshop",
                    description: "Collaborative sessions to define your unique value, differentiation, and ideal market position."
                },
                {
                    number: "03",
                    title: "Message Development",
                    description: "Crafting core messages, brand story, value propositions, and supporting messages for different audiences."
                },
                {
                    number: "04",
                    title: "Testing & Validation",
                    description: "Testing messages with target audiences and stakeholders to ensure clarity, resonance, and differentiation."
                },
                {
                    number: "05",
                    title: "Framework Finalization",
                    description: "Complete messaging framework with guidelines, examples, and templates for consistent application."
                }
            ]
        },
        outcomes: {
            title: "What You'll Receive",
            points: [
                "Clear brand positioning statement",
                "Compelling brand story and narrative",
                "Value proposition framework",
                "Core messaging architecture",
                "Taglines and key phrases",
                "Audience-specific messaging",
                "Communication tone and voice guidelines",
                "Message testing results and insights",
                "Comprehensive messaging playbook"
            ]
        },
        stats: [
            { number: '100+', label: 'Brands Positioned', icon: '🎯' },
            { number: '95%', label: 'Message Clarity', icon: '⭐' },
            { number: '7+', label: 'Years Experience', icon: '💼' },
            { number: '50+', label: 'Industries', icon: '🌐' }
        ]
    },

    "brand-guidelines": {
        slug: "brand-guidelines",
        title: "Brand Guidelines",
        heroImage: "/images/tags/brand-guidelines-hero.webp",
        tagline: "Consistency creates recognition. Guidelines ensure it.",
        description: "Comprehensive brand guideline documents that ensure perfect brand consistency across all applications and teams.",
        overview: {
            title: "Your Brand's Rulebook",
            content: [
                "Brand guidelines are the instruction manual for your brand. They document every aspect of your brand identity and provide clear rules for how to use it correctly across all applications.",
                "We create detailed, beautiful guideline documents that are both comprehensive and easy to use. Whether it's your internal team, external partners, or vendors, everyone will know exactly how to represent your brand with consistency and confidence."
            ]
        },
        whatWeOffer: [
            {
                title: "Visual Identity Standards",
                description: "Complete documentation of logo usage, color systems, typography, spacing rules, and visual elements with clear do's and don'ts.",
                icon: "📐"
            },
            {
                title: "Brand Voice & Messaging",
                description: "Communication guidelines including tone, voice, key messages, and writing style with examples and templates.",
                icon: "💬"
            },
            {
                title: "Application Examples",
                description: "Real-world examples showing correct brand application across business cards, websites, social media, advertising, and more.",
                icon: "📱"
            },
            {
                title: "Asset Library",
                description: "Organized library of all brand assets with file naming conventions and version control systems.",
                icon: "📚"
            },
            {
                title: "Digital Brand Portal",
                description: "Optional online brand portal where team members can access guidelines, download assets, and stay updated.",
                icon: "🌐"
            },
            {
                title: "Training & Onboarding",
                description: "Brand guidelines training sessions for your team to ensure everyone understands and can apply the standards.",
                icon: "🎓"
            }
        ],
        workInAction: {
            title: "Brand Guidelines We've Created",
            images: [
                "/images/work/guidelines-1.webp",
                "/images/work/guidelines-2.webp",
                "/images/work/guidelines-3.webp",
                "/images/work/guidelines-4.webp"
            ],
            description: "Beautiful, comprehensive brand guideline documents that empower teams to maintain brand consistency."
        },
        approach: {
            title: "Our Guidelines Development Process",
            steps: [
                {
                    number: "01",
                    title: "Content Planning",
                    description: "Outline all elements that need documentation based on your brand complexity and usage scenarios."
                },
                {
                    number: "02",
                    title: "Documentation Creation",
                    description: "Write clear, detailed guidelines for each brand element with visual examples and usage rules."
                },
                {
                    number: "03",
                    title: "Design & Layout",
                    description: "Design the guideline document itself to be beautiful, on-brand, and easy to navigate."
                },
                {
                    number: "04",
                    title: "Review & Refinement",
                    description: "Collaborative review to ensure completeness, clarity, and practical usability."
                },
                {
                    number: "05",
                    title: "Delivery & Training",
                    description: "Final guidelines in multiple formats plus optional training sessions for your team."
                }
            ]
        },
        outcomes: {
            title: "What You'll Receive",
            points: [
                "Comprehensive brand guidelines document (PDF)",
                "Logo usage rules and variations",
                "Color palette with codes and applications",
                "Typography system and hierarchy",
                "Visual elements and patterns",
                "Brand voice and messaging guidelines",
                "Application examples across mediums",
                "Asset library organization system",
                "Editable source files for updates",
                "Optional digital brand portal access"
            ]
        },
        stats: [
            { number: '120+', label: 'Guidelines Created', icon: '📖' },
            { number: '100%', label: 'Brand Consistency', icon: '⭐' },
            { number: '5+', label: 'Years Experience', icon: '💼' },
            { number: '90%', label: 'Team Adoption', icon: '👥' }
        ]
    },

    "videography": {
        slug: "videography",
        title: "Videography",
        heroImage: "/images/tags/videography-hero.webp",
        heroVideo: "/videos/videography-hero.webm",
        tagline: "Stories that move. Videos that convert.",
        description: "Premium video production that brings your brand story to life with cinematic quality and strategic storytelling.",
        overview: {
            title: "The Power of Moving Pictures",
            content: [
                "Video is the most engaging form of content, and when done right, it's incredibly powerful for building brand awareness, explaining complex ideas, and driving conversions. We create videos that don't just look beautiful—they achieve business objectives.",
                "From brand films to product demos, testimonial videos to social content, we handle every aspect of video production with cinematic quality and strategic thinking. Every frame is crafted to tell your story and move your audience to action."
            ]
        },
        whatWeOffer: [
            {
                title: "Brand Films & Commercials",
                description: "Cinematic brand videos that tell your story, showcase your values, and create emotional connection with your audience.",
                icon: "🎬"
            },
            {
                title: "Product & Service Videos",
                description: "Engaging product demonstrations, explainer videos, and service showcases that educate and convert.",
                icon: "📹"
            },
            {
                title: "Testimonial & Case Studies",
                description: "Authentic customer testimonials and case study videos that build trust and social proof.",
                icon: "💬"
            },
            {
                title: "Social Media Content",
                description: "Short-form video content optimized for Instagram, TikTok, LinkedIn, and other social platforms.",
                icon: "📱"
            },
            {
                title: "Corporate & Event Coverage",
                description: "Professional coverage of corporate events, conferences, and important company milestones.",
                icon: "🎥"
            },
            {
                title: "Animation & Motion Graphics",
                description: "Custom animations, motion graphics, and visual effects that enhance your video content.",
                icon: "✨"
            }
        ],
        workInAction: {
            title: "Our Video Production Work",
            images: [
                "/images/work/video-1.webp",
                "/images/work/video-2.webp",
                "/images/work/video-3.webp",
                "/images/work/video-4.webp"
            ],
            description: "From brand films to social content, our video work combines cinematic quality with strategic storytelling."
        },
        approach: {
            title: "Our Video Production Process",
            steps: [
                {
                    number: "01",
                    title: "Concept & Strategy",
                    description: "Define video objectives, target audience, key messages, and creative direction aligned with your brand."
                },
                {
                    number: "02",
                    title: "Pre-Production Planning",
                    description: "Scriptwriting, storyboarding, location scouting, casting, and detailed production planning."
                },
                {
                    number: "03",
                    title: "Production & Filming",
                    description: "Professional filming with cinema-grade equipment, experienced crew, and attention to every detail."
                },
                {
                    number: "04",
                    title: "Post-Production",
                    description: "Expert editing, color grading, sound design, motion graphics, and final polish."
                },
                {
                    number: "05",
                    title: "Delivery & Optimization",
                    description: "Final videos in all required formats, optimized for different platforms and use cases."
                }
            ]
        },
        outcomes: {
            title: "What You'll Receive",
            points: [
                "Professional video content in multiple formats",
                "Platform-optimized versions (YouTube, Instagram, etc.)",
                "Raw footage and project files",
                "Subtitles and captions",
                "Thumbnail images and promotional stills",
                "Usage rights and licensing",
                "Video hosting and embedding support",
                "Performance tracking recommendations"
            ]
        },
        stats: [
            { number: '300+', label: 'Videos Produced', icon: '🎬' },
            { number: '10M+', label: 'Total Views', icon: '⭐' },
            { number: '8+', label: 'Years Experience', icon: '💼' },
            { number: '95%', label: 'Client Satisfaction', icon: '😊' }
        ]
    }
};
