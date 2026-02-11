import type { ServiceDetail } from './serviceDetails';
import { prCards, brandCards, webCards, adsCards, trainingCards, talentCards, prStyle, brandStyle, webStyle, adsStyle, trainingStyle, talentStyle } from './serviceDetails';

export const legacyDetails: Record<string, ServiceDetail> = {
    "public-relations": {
        agencyStyle: prStyle,
        agencyCards: prCards,
        slug: "public-relations",
        title: "Public Relations",
        subtitle: "Where public relations meets strategy, your story finds its audience",
        description: "As a full-service public relations agency, bold storytelling and smart strategy are at the core of everything we do. The cherry on top? Media coverage that moves the needle and makes your brand newsworthy.",
        heroVideo: "/images/legacy/p1.webm",
        heroImage: "/images/legacy/p2.png",
        features: [
            {
                title: "1. Strategic PR Planning",
                desc: "Market and competitor research, message positioning, and brand storytelling strategy.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Brand Creation & Development",
                desc: "Naming, logo design, and brand identity built from the ground up.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Digital PR & Online Presence",
                desc: "Social media management, influencer collaborations, and online reputation growth.",
                image: "/images/services/feature-3.webp"
            },
            {
                title: "4. Offline PR & Events",
                desc: "Corporate events, product launches, and strategic offline networking opportunities.",
                image: "/images/services/feature-4.webp"
            },
            {
                title: "5. Media & Visual Production",
                desc: "Professional photoshoots, brand videos, and high-impact visual campaigns.",
                image: "/images/services/feature-5.webp"
            }
        ],
        gallery: ["/images/legacy/p2.png"],
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
        ]
    },
    "media-outreach-monitoring": {
        agencyStyle: prStyle,
        agencyCards: prCards,
        slug: "media-outreach-monitoring",
        title: "Media Outreach & Monitoring",
        subtitle: "What we do best",
        description: "Media Outreach & Monitoring is how your brand earns meaningful attention and stays ahead of the conversation. We connect you with the right media outlets and track every mention to measure real impact.",
        heroImage: "/images/legacy/m1.jpg",
        features: [
            {
                title: "1. Personalized Outreach",
                desc: "Connecting your brand with the right journalists, editors, and high-impact media outlets.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Strategic Monitoring",
                desc: "Real-time tracking of every mention, article, and feature your brand receives across platforms.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Impact Analytics",
                desc: "Measuring the reach and sentiment of your media coverage to clarify your PR journey.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/m2.jpg"],
        process: [
            { step: "01", title: "Targeting", desc: "Identifying the most relevant journalists and media houses for your brand." },
            { step: "02", title: "Outreach", desc: "Pitching your stories to earn high-authority placements and mentions." },
            { step: "03", title: "Monitoring", desc: "Continuous tracking and reporting on your brand's media presence." }
        ],
        method: {
            title: "Our Outreach Method.",
            description: "A precision-focused approach to earning and tracking the visibility your brand deserves.",
            buttonText: "Start Your Outreach"
        },
        outcomes: [
            "Earned Media Authority",
            "Broad Market Visibility",
            "Strategic Media Relations",
            "Clear Impact Reports"
        ]
    },
    "influencer-pr-collaborations": {
        agencyStyle: prStyle,
        agencyCards: prCards,
        slug: "influencer-pr-collaborations",
        title: "Influencer PR & Collaborations",
        subtitle: "Influencer PR & Collaborations That Actually Hit Different",
        description: "Influence today isn’t about who shouts the loudest, it’s about who connects the deepest. We build partnerships that feel real, intentional, and completely aligned with your brand’s energy, making people stop scrolling and start paying attention.",
        heroImage: "/images/legacy/i1.jpg",
        features: [
            {
                title: "1. Curated Creator Networks",
                desc: "We focus on creators who already speak your audience’s language and can tell your story authentically.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Strategic Campaign Direction",
                desc: "Every collaboration is crafted to look beautiful online and deliver measurable results for your brand.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. End-to-End Management",
                desc: "Our team handles everything from finding the perfect creators to managing every stage of the collaboration.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/i2.jpg"],
        process: [
            { step: "01", title: "Alignment", desc: "Finding creators who match your brand's energy and core values." },
            { step: "02", title: "Strategy", desc: "Developing a creative direction that feels authentic and non-scripted." },
            { step: "03", title: "Amplification", desc: "Managing the rollout to ensure maximum engagement and visibility." }
        ],
        method: {
            title: "Our Connection Method.",
            description: "A focus on deep connection over loud numbers to create lasting brand impact.",
            buttonText: "Partner with Creators"
        },
        outcomes: [
            "Authentic Audience Trust",
            "High-Engagement Content",
            "Dominant Social Presence",
            "Measurable ROI"
        ]
    },
    "event-publicity": {
        agencyStyle: prStyle,
        agencyCards: prCards,
        slug: "event-publicity",
        title: "Event Publicity",
        subtitle: "Event Publicity That Turns Moments Into Media Moments",
        description: "We don’t just plan publicity, we engineer buzz. Every event we work on is designed to make headlines, fill rooms, and flood social feeds with genuine excitement and cultural impact.",
        heroImage: "/images/legacy/e2.jpg",
        heroVideo: "/videos/pr.webm",
        features: [
            {
                title: "1. Media Strategy & Buzz",
                desc: "Amplifying your story at every touchpoint through exclusive previews and red-carpet coordination.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Precision Management",
                desc: "Managing press access, influencer attendance, and brand partnerships that elevate your visibility.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Cultural Storytelling",
                desc: "Turning events into conversations through high-stakes live coverage and post-event narrative building.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/e2.jpg"],
        process: [
            { step: "01", title: "Discovery", desc: "Understanding what makes your event special and who needs to see it." },
            { step: "02", title: "Strategy", desc: "Crafting a precision-based media plan to engineer excitement and buzz." },
            { step: "03", title: "Execution", desc: "Managing live coverage and media access to ensure your event dominates social feeds." }
        ],
        method: {
            title: "Our Buzz Method.",
            description: "A blend of creativity and precision to transform your hosting into a headline-making event.",
            buttonText: "Engineer Your Buzz"
        },
        outcomes: [
            "Headline-Making Coverage",
            "Maximum Social Reach",
            "High-Impact Influence",
            "Strategic Reputation Growth"
        ]
    },
    "press-release-writing": {
        agencyStyle: prStyle,
        agencyCards: prCards,
        slug: "press-release-writing",
        title: "Press Release Writing & Distribution",
        subtitle: "Press Release Writing & Distribution That Makes Headlines Happen",
        description: "Every story has power when it’s told the right way. We turn brand announcements into newsroom-ready stories that grab attention, earn coverage, and position your brand as a trusted industry voice.",
        heroImage: "/images/legacy/p1.jpg",
        features: [
            {
                title: "1. Editorial News Writing",
                desc: "Crafting credible, newsroom-ready stories that capture your unique brand narrative and perspective.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Strategic Media Angle",
                desc: "Identifying the precise angle that resonates with journalists, editors, and industry publications.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Targeted Distribution",
                desc: "Reaching a verified network of journalists and digital platforms for maximum brand exposure.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/p2.jpg"],
        process: [
            { step: "01", title: "Angle Discovery", desc: "Finding the most compelling hook to resonate with media and readers." },
            { step: "02", title: "Professional Copy", desc: "Writing clear, credible press materials that sound like they belong in a newsroom." },
            { step: "03", title: "Global Distribution", desc: "Pushing your story through a network of verified publishers and journalists." }
        ],
        method: {
            title: "Our Editorial Method.",
            description: "A combination of editorial expertise and targeted distribution to bridge your brand to the newsroom.",
            buttonText: "Publish Your Story"
        },
        outcomes: [
            "Newsroom-Ready Authority",
            "Verified Media Exposure",
            "Strong Brand Credibility",
            "Trackable Headline Results"
        ]
    },
    "reputation-crisis-management": {
        agencyStyle: prStyle,
        agencyCards: prCards,
        slug: "reputation-crisis-management",
        title: "Reputation & Crisis Management",
        subtitle: "Protecting What You’ve Built with Precision",
        description: "In the digital age, perception is everything. We help you stay ahead of the narrative, protecting your reputation, restoring trust, and rebuilding confidence when it matters most through strategic speed and sensitivity.",
        heroImage: "/images/legacy/r1.jpg",
        features: [
            {
                title: "1. Strategic Risk Assessment",
                desc: "Identifying potential threats before they escalate, ensuring your brand stays bulletproof.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Real-Time Crisis Response",
                desc: "Speed and precision in managing viral moments or stories to protect your brand's integrity.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Long-Term Reputation Building",
                desc: "Restoring authority and rebuilding public confidence through authentic and intentional communication.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/r2.jpg"],
        process: [
            { step: "01", title: "Monitoring", desc: "Active listening and trend analysis to spot risks early." },
            { step: "02", title: "Containment", desc: "Strategic response frameworks to neutralize threats and control the narrative." },
            { step: "03", title: "Recovery", desc: "Intentional brand storytelling to restore trust and rebuild credibility." }
        ],
        method: {
            title: "Our Protective Method.",
            description: "A combination of strategy, speed, and sensitivity to bring calm and clarity to every situation.",
            buttonText: "Protect Your Narrative"
        },
        outcomes: [
            "Protected Brand Integrity",
            "Restored Public Trust",
            "Controlled Search Presence",
            "Resilient Market Reputation"
        ]
    },
    "brand-identity": {
        agencyStyle: brandStyle,
        agencyCards: brandCards,
        slug: "brand-identity",
        title: "Brand Identity",
        subtitle: "We help brands own their space",
        description: "Branding goes deeper than design; it’s a direction. We shape brands from the inside out — strategy first, identity next, impact always to ensure you become the go-to name in your space.",
        heroImage: "/images/legacy/b2.png",
        heroVideo: "/videos/brand.webm",
        features: [
            {
                title: "1. Brand Positioning & Strategy",
                desc: "Uncovering what makes your company unique and nailing your story, messaging, and market fit.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Visual Identity & Logo Design",
                desc: "Crafting distinct identities rooted in emotion, focusing on bold typography and purposeful imagery.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Custom Branded Style Guides",
                desc: "Building visual identity kits that empower teams to maintain consistency across all mediums.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/b2.png"],
        process: [
            { step: "01", title: "Strategy", desc: "Insight-driven discovery to build a high-performing brand architecture." },
            { step: "02", title: "Identity", desc: "Bold design ideas translated into a distinct and memorable visual system." },
            { step: "03", title: "Impact", desc: "Deploying your brand with consistency and clarity across every digital touchpoint." }
        ],
        method: {
            title: "Our Elevation Method.",
            description: "A 360° approach to help your business stand out online, offline, and everywhere in between.",
            buttonText: "Request a Quote"
        },
        outcomes: [
            "Gain Customer Trust",
            "Boost Brand Awareness",
            "Fuel Customer Loyalty",
            "Increase Marketing ROI"
        ]
    },
    "visual-branding": {
        agencyStyle: brandStyle,
        agencyCards: brandCards,
        slug: "visual-branding",
        title: "Visual Branding",
        subtitle: "Unmistakably Yours",
        description: "We design cohesive visual systems that reflect your brand’s personality across every touchpoint. From palettes to typography, every detail is crafted for consistency, professionalism, and impact.",
        heroImage: "/images/legacy/v1.jpeg",
        features: [
            {
                title: "1. Distinctive Color Palettes",
                desc: "Strategic color systems based on emotion and industry standards to make your brand instantly recognizable.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Precision Typography",
                desc: "Carefully selected typefaces that reflect your brand's voice and ensure clarity across all digital mediums.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Brand Imagery & Elements",
                desc: "Thoughtfully crafted visual elements and imagery guidelines that capture your brand's unique essence.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/v2.avif"],
        process: [
            { step: "01", title: "Curation", desc: "Selecting the visual building blocks that best represent your brand values." },
            { step: "02", title: "Design", desc: "Developing a unified look and feel that translates perfectly across all platforms." },
            { step: "03", title: "Refinement", desc: "Polishing every detail to ensure a premium and professional brand presence." }
        ],
        method: {
            title: "Our Visual Method.",
            description: "A focus on creating familiar, credible, and unmistakable visual identities for growing brands.",
            buttonText: "Elevate Your Look"
        },
        outcomes: [
            "Instant Brand Recognition",
            "Professional Credibility",
            "Cohesive Visual Story",
            "Unmistakable Identity"
        ]
    },
    "messaging-positioning": {
        agencyStyle: brandStyle,
        agencyCards: brandCards,
        slug: "messaging-positioning",
        title: "Messaging & Positioning",
        subtitle: "Clarity, Confidence, and Purpose",
        description: "Consistency in communication builds authority. We define what you stand for, how you sound, and how you differentiate yourself with a narrative that makes your audience understand not just what you do, but why it matters.",
        heroImage: "/images/legacy/mm1.jpg",
        features: [
            {
                title: "1. Brand Voice & Tone",
                desc: "Developing a unique verbal identity that resonates with your audience and reflects your core values consistently.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Strategic Differentiation",
                desc: "Positioning your brand as a unique leader by highlighting the specific value only you bring to the market.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Core Narrative Development",
                desc: "Crafting a compelling brand story that bridges the gap between your vision and your customer’s needs.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/mm2.jpg"],
        process: [
            { step: "01", title: "Audit", desc: "Analyzing your current messaging to find gaps and opportunities for professional growth." },
            { step: "02", title: "Strategy", desc: "Defining the unique value proposition and the narrative hooks that make you memorable." },
            { step: "03", title: "Alignment", desc: "Ensuring your new messaging is unified across all marketing materials and team interactions." }
        ],
        method: {
            title: "Our Narrative Method.",
            description: "An intentional focus on shaping messages that connect deeply and reinforce your long-term authority.",
            buttonText: "Nail Your Story"
        },
        outcomes: [
            "Clear Brand Voice",
            "Strong Market Distinction",
            "Unified Brand Message",
            "Deep Audience Connection"
        ]
    },
    "brand-guidelines": {
        agencyStyle: brandStyle,
        agencyCards: brandCards,
        slug: "brand-guidelines",
        title: "Brand Guidelines",
        subtitle: "A Clear Framework for Consistency",
        description: "Consistency is the backbone of brand strength. We document your visual identity, tone of voice, and design standards to ensure every interaction with your brand is as professional and impactful as the first.",
        heroImage: "/images/legacy/v1.jpeg",
        features: [
            {
                title: "1. Visual Standard Manual",
                desc: "Comprehensive documentation of logo usage, type scales, and color systems for pixel-perfect implementation.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Verbal Identity Kit",
                desc: "Defining your tone of voice and messaging style to ensure internal teams share a unified brand personality.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Digital Asset Management",
                desc: "Setting the rules for how your brand appears on web, social, and print, protecting your visual integrity.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/bb1.jpg"],
        process: [
            { step: "01", title: "Codification", desc: "Turning your visual and verbal identity into a set of set-in-stone rules." },
            { step: "02", title: "Documentation", desc: "Creating a professional, easy-to-use guide for internal teams and external partners." },
            { step: "03", title: "Empowerment", desc: "Providing the tools needed to maintain brand recognition and trust for the long haul." }
        ],
        method: {
            title: "Our Framework Method.",
            description: "A reference-first approach that ensures your brand is communicated accurately and professionally by anyone, anywhere.",
            buttonText: "Secure Your Standards"
        },
        outcomes: [
            "Unified Brand Presence",
            "Internal Team Alignment",
            "Long-Term Brand Strength",
            "Professional Partner Readiness"
        ]
    },
    "videography": {
        agencyStyle: brandStyle,
        agencyCards: brandCards,
        slug: "videography",
        title: "Videography Production",
        subtitle: "Transforming Stories into Visual Experiences",
        description: "Motion tells stories that static images can't. We create high-quality video content that captures attention, communicates your message with clarity, and builds a deep emotional connection with your audience.",
        heroVideo: "/images/legacy/aa.mp4",
        heroImage: "/images/legacy/aa1.jpg",
        features: [
            {
                title: "1. Brand Films & Commercials",
                desc: "Cinematic storytelling that captures the essence of your brand and positions you as a premium industry leader.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Social Media Video Content",
                desc: "High-impact, scroll-stopping snippets designed specifically for engagement on platforms like Instagram, TikTok, and LinkedIn.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Corporate & Event Coverage",
                desc: "Professional documentation of your biggest moments, turning events into long-term marketing assets.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/aa1.jpg"],
        process: [
            { step: "01", title: "Creative Concept", desc: "Defining the narrative and storyboard to ensure every second serves your brand strategy." },
            { step: "02", title: "Production", desc: "Professional filming with high-end equipment to capture your story in the best light." },
            { step: "03", title: "Post-Production", desc: "Expert editing, color grading, and sound design to create a polished final product." }
        ],
        method: {
            title: "Our Motion Method.",
            description: "A focus on creating videos that leave a lasting impression and support your overall brand strategy through visual excellence.",
            buttonText: "Start Your Production"
        },
        outcomes: [
            "Strong Emotional Connection",
            "High-Engagement Metrics",
            "Premium Brand Perception",
            "Lasting Visual Impact"
        ]
    },
    "website-designing": {
        agencyStyle: webStyle,
        agencyCards: webCards,
        slug: "website-designing",
        title: "Website Designing",
        subtitle: "We help businesses use their website as a growth engine",
        description: "Your website is your brand’s online base. We build and redesign websites that match your voice, values, and growth stage, ensuring your digital HQ is clear, current, and conversion-ready.",
        heroImage: "/images/legacy/w.jpg",
        features: [
            {
                title: "1. Strategic UI/UX Design",
                desc: "Blending art and strategy to create world-class user experiences that turn clicks into customers.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Conversion Rate Optimization",
                desc: "Implementing data-driven strategies to maximize the effectiveness and reach of your digital presence.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Full-Stack Development",
                desc: "A full-service approach to building dynamic, functional tools that are instrumental to your brand's success.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/w1.avif"],
        process: [
            { step: "01", title: "Structure", desc: "Defining the information architecture and content flow to align with your brand voice." },
            { step: "02", title: "Design", desc: "Crafting pixel-perfect visuals that put the 'fun' in functionality and build instant trust." },
            { step: "03", title: "Launch", desc: "Deploying a high-performance growth engine that speaks your language and drives results." }
        ],
        method: {
            title: "Our Digital Method.",
            description: "A combination of customer conversion strategies and a passion for aesthetically pleasing designs.",
            buttonText: "Build Your Digital HQ"
        },
        outcomes: [
            "Increased Credibility",
            "Higher Conversion Rates",
            "Memorable User Experience",
            "Scalable Growth Foundation"
        ]
    },
    "website-redesign-development": {
        agencyStyle: webStyle,
        agencyCards: webCards,
        slug: "website-redesign-development",
        title: "Website Redesign & Development",
        subtitle: "Modern, High-Performing Digital Experiences",
        description: "An outdated website signals that your brand is standing still. We transform existing sites into modern experiences that reflect your growth and ambition through improved structure and seamless functionality.",
        heroVideo: "/images/legacy/wr.mp4",
        heroImage: "/images/legacy/wr1.jpg",
        features: [
            {
                title: "1. Performance Auditing",
                desc: "Evaluating what's working and identifying the bottlenecks holding your current website back.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Visual & Functional Refresh",
                desc: "Rebuilding with refined design and seamless functionality to enhance credibility and user experience.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Growth-Ready Architecture",
                desc: "Ensuring your website is aligned with your brand's next stage of growth and scalability.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/wr1.jpg"],
        process: [
            { step: "01", title: "Analyze", desc: "Identifying friction points and opportunities in your current digital presence." },
            { step: "02", title: "Reconstruct", desc: "Redeveloping the core structure and visual identity for modern standards." },
            { step: "03", title: "Scale", desc: "Launching a faster, smarter website ready to support your long-term ambitions." }
        ],
        method: {
            title: "Our Transformation Method.",
            description: "A focus on turning stagnation into momentum through thoughtful redesign and technical excellence.",
            buttonText: "Transform Your Site"
        },
        outcomes: [
            "Refreshed Brand Image",
            "Improved Load Speeds",
            "Enhanced Mobile Experience",
            "Higher Strategic Engagement"
        ]
    },
    "ux-ui-strategy": {
        agencyStyle: webStyle,
        agencyCards: webCards,
        slug: "ux-ui-strategy",
        title: "UX/UI Strategy",
        subtitle: "Intuitive, Engaging, and Effortless Experiences",
        description: "An effective digital experience guides users to take specific actions. We design every interaction with your user in mind, ensuring your website looks compelling and functions with clarity and purpose.",
        heroImage: "/images/legacy/ux1.jpg",
        features: [
            {
                title: "1. User Journey Mapping",
                desc: "Designing path-to-action journeys that reduce friction and guide visitors smoothly toward meaningful conversion.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Information Architecture",
                desc: "Organizing your content flow based on how real people think, browse, and act online for maximum clarity.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Conversion UX Design",
                desc: "Creating high-performing landing pages that turn the casually interested into loyal brand customers.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/ux2.jpg"],
        process: [
            { step: "01", title: "Discovery", desc: "Understanding your audience's behavior to eliminate digital corners." },
            { step: "02", title: "Prototype", desc: "Building intuitive interfaces that prioritize usability and focused engagement." },
            { step: "03", title: "Optimize", desc: "Refining every touchpoint to ensure you make the most of every ad dollar spent." }
        ],
        method: {
            title: "Our Intuitive Method.",
            description: "A focus on creating digital spaces that feel effortless to navigate while driving real-world results.",
            buttonText: "Refine Your Experience"
        },
        outcomes: [
            "Increased Conversion Rates",
            "Enhanced User Engagement",
            "Reduced Bounce Rates",
            "Optimized Campaign ROI"
        ]
    },
    "website-content-structuring": {
        agencyStyle: webStyle,
        agencyCards: webCards,
        slug: "website-content-structuring",
        title: "Website Content Structuring",
        subtitle: "Organized, Intentional, and Action-Oriented",
        description: "Website Content Structuring at HerLead ensures your message is organized and easy for visitors to understand. We plan and arrange your content to guide users naturally through your website, leading them toward action with clarity.",
        heroVideo: "/images/legacy/ww.mp4",
        heroImage: "/images/legacy/ww1.jpg",
        features: [
            {
                title: "1. Strategic Content Flow",
                desc: "Planning the sequence of information to guide users naturally from initial interest to final conversion.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Page Hierarchy Planning",
                desc: "Defining clear structures and prioritizing key messages to ensure effortless navigation and readability.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Engagement Optimization",
                desc: "Arranging elements to keep visitors interested and focused on the information that matters most to your brand.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/ww1.jpg"],
        process: [
            { step: "01", title: "Assessment", desc: "Evaluating your existing content to identify priorities and message clarity." },
            { step: "02", title: "Architecture", desc: "Building the skeletal structure of your pages to ensure a logical and engaging flow." },
            { step: "03", title: "Integration", desc: "Deploying your structured content to create a website that communicates with purpose." }
        ],
        method: {
            title: "Our Structure Method.",
            description: "A focus on organizing complexity into clarity to ensure your message is never lost in the noise.",
            buttonText: "Structure Your Story"
        },
        outcomes: [
            "Simplified User Journeys",
            "Strong Message Hierarchy",
            "Increased Reader Retention",
            "Clearer Path to Action"
        ]
    },
    "meta-ads": {
        agencyStyle: adsStyle,
        agencyCards: adsCards,
        slug: "meta-ads",
        title: "Meta Ads",
        subtitle: "Precision, Impact, and Measurable Growth",
        description: "Meta Ads at HerLead are designed to put your brand in front of the right audience with precision. We create data-driven campaigns across Meta platforms to increase visibility and drive measurable growth.",
        heroImage: "/images/legacy/mt1.jpg",
        features: [
            {
                title: "1. Precision Audience Targeting",
                desc: "Reaching the exact people most likely to engage with your brand using advanced demographic and behavioral data.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Strategic Creative Direction",
                desc: "Developing high-impact visual and copy strategies that stop the scroll and capture genuine attention.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Real-Time Tracking & Optimization",
                desc: "Continuous performance monitoring to ensure every dollar of your investment delivers maximum results.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/legacy/mt2.jpg"],
        process: [
            { step: "01", title: "Targeting", desc: "Defining the ideal audience profile to ensure your ads hit the right mark." },
            { step: "02", title: "Strategy", desc: "Crafting the creative hooks and narrative that drive clicks and conversions." },
            { step: "03", title: "Scale", desc: "Managing and optimizing campaigns to turn your ad spend into a powerful growth engine." }
        ],
        method: {
            title: "Our Precision Method.",
            description: "A data-first approach to Meta platforms that focuses on attracting high-quality leads over simple reach.",
            buttonText: "Scale Your Ads"
        },
        outcomes: [
            "Increased Brand Visibility",
            "Quality Lead Generation",
            "High Campaign Growth",
            "Measurable ROI"
        ]
    },
    "google-ads": {
        agencyStyle: adsStyle,
        agencyCards: adsCards,
        slug: "google-ads",
        title: "Google Ads",
        subtitle: "Precision, Relevance, and Intent",
        description: "There’s more to Google than meets the eye. We create high-performing campaigns ranked by intent and quality, ensuring your products get the visibility they need at the exact moment people are searching for them.",
        heroImage: "/images/services/ads.webp",
        features: [
            {
                title: "1. Intent-Based Targeting",
                desc: "Reaching potential customers at the exact moment they express interest through search intent and relevance.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Strategic PPC Management",
                desc: "Expertly managing Search, Display, and Video campaigns to optimize every dollar of your ad spend.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Measurable ROI Tracking",
                desc: "Witinessing the instant impact of highly-targeted ads with clear, data-driven reporting on conversions and growth.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/service-legacy/ads.webp"],
        process: [
            { step: "01", title: "Analysis", desc: "Identifying high-value keywords and competitor gaps to sharpen your bid strategy." },
            { step: "02", title: "Deployment", desc: "Launching newsroom-ready copy and creative across Search and Display networks." },
            { step: "03", title: "Optimization", desc: "Scaling high-performing ads while cutting waste to drive a superior return on investment." }
        ],
        method: {
            title: "Our Intent Method.",
            description: "A precision-focused approach that combines editorial expertise with technical bidding to capture the right audience.",
            buttonText: "Boost My ROI"
        },
        outcomes: [
            "Immediate Search Visibility",
            "High-Quality Conversions",
            "Lower Acquisition Costs",
            "Dominant Market Relevance"
        ]
    },
    "facebook-ads": {
        agencyStyle: adsStyle,
        agencyCards: adsCards,
        slug: "facebook-ads",
        title: "Facebook Ads",
        subtitle: "Tapping Into Facebook’s Advertising Potential",
        description: "Facebook is the largest social community on the internet with over 3 billion monthly users. We create impression-leaving image and video ads that capture your audience’s attention and catapult your brand to immense recognizability.",
        heroImage: "/images/services/ads.webp",
        features: [
            {
                title: "1. Micro-Targeting",
                desc: "Connecting your brand with the exact target audience among 3 billion users using precise demographic data.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Specific Ad Objectives",
                desc: "Highly customized campaigns tailored to accomplish your unique business goals, from awareness to conversions.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Robust Analytics",
                desc: "Using Facebook’s suite of analytics to track, measure, and optimize your ad performance in real-time.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/service-legacy/ads.webp"],
        process: [
            { step: "01", title: "Segmentation", desc: "Identifying the highly specific audience groups that fit your brand perfectly." },
            { step: "02", title: "Creative", desc: "Developing compelling image, video, and carousel ads that shine the spotlight on your brand." },
            { step: "03", title: "Remarketing", desc: "Strategic retargeting of potential customers until your brand becomes their go-to choice." }
        ],
        method: {
            title: "Our Social Method.",
            description: "An innovative focus on catapulting brands to immense recognizability through the largest social community.",
            buttonText: "Drive Conversions Now"
        },
        outcomes: [
            "Increased Site Traffic",
            "Highly Personalized Reach",
            "Strategic Remarketing Impact",
            "Measurable Brand Authority"
        ]
    },
    "instagram-ads": {
        agencyStyle: adsStyle,
        agencyCards: adsCards,
        slug: "instagram-ads",
        title: "Instagram Ads",
        subtitle: "Visual Storytelling that Stops the Scroll",
        description: "Instagram is where your brand comes to life visually. At HerLead, we create stunning, high-impact ads that don't just sit in the feed—they capture imagination and turn followers into loyal customers through beautiful storytelling.",
        heroImage: "/images/services/media.webp",
        features: [
            {
                title: "1. Aesthetic Ad Creative",
                desc: "Designing visuals that match the high-end, aspirational energy of Instagram to make your brand impossible to ignore.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Story & Reels Mastery",
                desc: "Capturing attention in full-screen, vertical formats where users are most engaged and ready to discover new brands.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Direct-to-Consumer Growth",
                desc: "HerLead helps you bridge the gap between a visual spark and a completed purchase with seamless call-to-actions.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/service-legacy/media.webp"],
        process: [
            { step: "01", title: "Visual Strategy", desc: "Defining the 'vibe' and aesthetic that will resonate deepest with your Instagram audience." },
            { step: "02", title: "Creative Build", desc: "Producing stunning images and videos that feel natural yet premium in the user's feed." },
            { step: "03", title: "Growth Loop", desc: "HerLead optimizes every campaign to ensure your brand keeps growing with every interaction." }
        ],
        method: {
            title: "Our Visual-First Method.",
            description: "A focus on creating beautiful, high-performing digital assets that turn the Instagram app into your storefront.",
            buttonText: "Elevate Your Instagram"
        },
        outcomes: [
            "Premium Brand Aesthetic",
            "High Story Engagement",
            "Increased Direct Sales",
            "Better Audience Trust"
        ]
    },
    "linkedin-ads": {
        agencyStyle: adsStyle,
        agencyCards: adsCards,
        slug: "linkedin-ads",
        title: "LinkedIn Ads",
        subtitle: "B2B Authority & Professional Precision",
        description: "LinkedIn is the world's premier professional network. HerLead helps you reach decision-makers and high-value leads with laser-focused ads that establish your authority and drive professional growth.",
        heroImage: "/images/services/brand.webp",
        features: [
            {
                title: "1. Professional Targeting",
                desc: "Reaching the right people by job title, industry, and company size to ensure your message hits the decision-makers.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Sponsored Content",
                desc: "Positioning your brand as a thought leader in the professional feed with insights that matter to your peers.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. High-Value Lead Gen",
                desc: "HerLead uses advanced conversion tools to turn professional networking into a stream of qualified business opportunities.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/service-legacy/training.webp"],
        process: [
            { step: "01", title: "Authority Audit", desc: "Mapping out your professional strengths to create an ad narrative that commands respect." },
            { step: "02", title: "Launch", desc: "Deploying targeted ads that speak the language of business and solve professional pain points." },
            { step: "03", title: "Optimization", desc: "HerLead continuously refines your targeting to ensure you get the best return on your B2B ad spend." }
        ],
        method: {
            title: "Our Professional Method.",
            description: "A precision-focused approach to B2B marketing that positions your brand as a trusted industry authority.",
            buttonText: "Scale Your Authority"
        },
        outcomes: [
            "Decision-Maker Reach",
            "Higher Quality B2B Leads",
            "Enhanced Industry Authority",
            "Professional Market Growth"
        ]
    },
    "corporate-trainings": {
        agencyStyle: trainingStyle,
        agencyCards: trainingCards,
        slug: "corporate-trainings",
        title: "Corporate Trainings",
        subtitle: "Shaping People and Organizations",
        description: "Excellence is not an accident—it's a system. HerLead provides comprehensive corporate training programs designed to align your workforce with your company's highest ambitions, fostering a culture of clarity and control.",
        heroImage: "/images/services/training.webp",
        features: [
            {
                title: "1. Strategic Skill Development",
                desc: "Equipping teams with the technical and soft skills needed to navigate a rapidly evolving corporate landscape.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Organizational Alignment",
                desc: "Ensuring every member of your team understands and executes the brand's vision with precision and purpose.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Scalable Learning Systems",
                desc: "HerLead helps you build sustainable training frameworks that grow as your organization expands.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/services/brand.webp"],
        process: [
            { step: "01", title: "Discovery", desc: "Identifying the specific knowledge gaps and cultural needs within your organization." },
            { step: "02", title: "Curated Content", desc: "Developing training materials that are specifically tailored to your industry and team dynamic." },
            { step: "03", title: "Impact Analysis", desc: "HerLead measures the growth of your team to ensure every session delivers measurable value." }
        ],
        method: {
            title: "Our Training Method.",
            description: "A focus on systems of clarity and control to turn personnel into your organization's greatest asset.",
            buttonText: "Train Your Team"
        },
        outcomes: [
            "Increased Workforce Efficiency",
            "Strong Team Alignment",
            "Sustainable Talent Growth",
            "Enhanced Corporate Culture"
        ]
    },
    "leadership-communication-training": {
        agencyStyle: trainingStyle,
        agencyCards: trainingCards,
        slug: "leadership-communication-training",
        title: "Leadership & Communication",
        subtitle: "Lead with Power and Clarity",
        description: "True leadership is the ability to communicate vision with unshakable confidence. HerLead's leadership programs refine your voice and strategy to ensure you lead your organization with authority.",
        heroImage: "/images/services/brand.webp",
        features: [
            {
                title: "1. Executive Presence",
                desc: "Developing the physical and verbal confidence needed to command respect in any boardroom or digital space.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Persuasive Narrative",
                desc: "Learning the art of storytelling to inspire teams and influence stakeholders with clarity and purpose.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Strategic Communication",
                desc: "HerLead teaches you how to bridge the gap between complex ideas and decisive action through effective speech.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/services/training.webp"],
        process: [
            { step: "01", title: "Audit", desc: "Analyzing your current leadership style to find opportunities for more powerful communication." },
            { step: "02", title: "Practice", desc: "Live coaching sessions that put your communication skills to the test in real-world scenarios." },
            { step: "03", title: "Scale", desc: "HerLead empowers you to cascade this clarity throughout your entire organization." }
        ],
        method: {
            title: "Our Leadership Method.",
            description: "An intentional focus on the psychology of communication to build leaders who resonate and inspire.",
            buttonText: "Evolve Your Leadership"
        },
        outcomes: [
            "Enhanced Executive Presence",
            "Persuasive Storytelling Skills",
            "Stronger Organizational Influence",
            "Decisive Communication Power"
        ]
    },
    "team-productivity-culture": {
        agencyStyle: trainingStyle,
        agencyCards: trainingCards,
        slug: "team-productivity-culture",
        title: "Productivity & Culture",
        subtitle: "Building High-Performing Communities",
        description: "Culture is the silent driver of every result. HerLead helps you engineer a workplace environment where productivity and purpose go hand-in-hand, making your company the destination for top talent.",
        heroImage: "/images/services/web.webp",
        features: [
            {
                title: "1. Efficiency Workflows",
                desc: "Eliminating digital friction and streamlining team interactions for maximum output with minimum stress.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Values-Driven Culture",
                desc: "Defining and embedding the core principles that make your team a unified force for brand growth.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Employee Engagement",
                desc: "HerLead designs feedback and recognition loops that keep your team motivated and aligned with long-term goals.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/services/training.webp"],
        process: [
            { step: "01", title: "Assessment", desc: "Measuring your current culture pulse to identify bottlenecks and morale boosters." },
            { step: "02", title: "Framework", desc: "Designing rituals and workflows that encourage high-performance habits daily." },
            { step: "03", title: "Integration", desc: "HerLead helps you roll out these changes for a seamless shift toward a more productive future." }
        ],
        method: {
            title: "Our Culture Method.",
            description: "A focus on engineering human connection to unlock the hidden potential within every team.",
            buttonText: "Shape Your Culture"
        },
        outcomes: [
            "Higher Employee Retention",
            "Streamlined Team Workflows",
            "Positive Brand Reputation",
            "Increased Overall Output"
        ]
    },
    "personal-branding-professionals": {
        agencyStyle: trainingStyle,
        agencyCards: trainingCards,
        slug: "personal-branding-professionals",
        title: "Personal Branding",
        subtitle: "Be the Go-To Name in Your Industry",
        description: "In the professional world, your name is your most valuable asset. HerLead helps you build a personal brand that reflects your expertise, authority, and unique value to become impossible to ignore.",
        heroImage: "/images/services/influencer.webp",
        features: [
            {
                title: "1. Professional Identity",
                desc: "Defining your unique professional narrative to differentiate you from the competition in any market.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Digital Presence Audit",
                desc: "Optimizing your LinkedIn and social profiles to ensure they reflect your authority and expertise accurately.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Thought Leadership",
                desc: "HerLead guides you in creating content that positions you as a trusted voice and industry leader.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/services/brand.webp"],
        process: [
            { step: "01", title: "定位 (Positioning)", desc: "Uncovering the specific value you bring to your peers and the wider market." },
            { step: "02", title: "Polish", desc: "Refining your visual and verbal presentation to match your professional ambition." },
            { step: "03", title: "Broadcast", desc: "HerLead helps you strategically share your story to build recognized authority." }
        ],
        method: {
            title: "Our Authority Method.",
            description: "A focus on individual excellence to turn your professional experience into a powerful personal brand.",
            buttonText: "Build Your Authority"
        },
        outcomes: [
            "Enhanced Industry Authority",
            "Improved Career Opportunities",
            "Stronger Professional Network",
            "Clear Individual Narrative"
        ]
    },
    "live-training-program": {
        agencyStyle: talentStyle,
        agencyCards: talentCards,
        slug: "live-training-program",
        title: "Live Training Program",
        subtitle: "Bridge the Gap to Your Dream Career",
        description: "Opportunity favors the prepared. HerLead's intensive one-month live training program is designed to transform high-potential talent into career-ready professionals through real-world guidance.",
        heroImage: "/images/services/talent.webp",
        features: [
            {
                title: "1. Real-World Skill Lab",
                desc: "Interactive sessions that go beyond theory to teach the practical skills needed in today's job market.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Mentorship Access",
                desc: "Direct guidance from industry experts who understand what recruiters are really looking for right now.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Professional Stamina",
                desc: "HerLead builds your confidence and resilience to ensure you're ready for the intensity of high-level careers.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/services/job.webp"],
        process: [
            { step: "01", title: "Enrollment", desc: "Assessing your current trajectory to tailor the training to your professional goals." },
            { step: "02", title: "Intensive", desc: "Four weeks of deep-dive sessions covering everything from communication to technical execution." },
            { step: "03", title: "Graduation", desc: "HerLead provides you with the certification and confidence to land your dream opportunity." }
        ],
        method: {
            title: "Our Bridge Method.",
            description: "A one-month deep dive that turns theoretical knowledge into professional career readiness.",
            buttonText: "Start Your Training"
        },
        outcomes: [
            "Job Market Readiness",
            "Practical Skills Mastery",
            "Direct Industry Insights",
            "Career Confidence Boost"
        ]
    },
    "mock-interviews-feedback": {
        agencyStyle: talentStyle,
        agencyCards: talentCards,
        slug: "mock-interviews-feedback",
        title: "Mock Interviews",
        subtitle: "Perfect Your First Impression",
        description: "The interview is where your career begins. HerLead provides realistic mock interview sessions with personal feedback to ensure you walk into every room prepared, confident, and credible.",
        heroImage: "/images/services/job.webp",
        features: [
            {
                title: "1. Realistic Scenarios",
                desc: "Simulating high-pressure interview environments to help you overcome nerves and think clearly on your feet.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Personalized Feedback",
                desc: "Detailed coaching on your answers, body language, and professional presence after every mock session.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Strategy Coaching",
                desc: "HerLead helps you frame your experience in a way that resonates with hiring managers and solves their needs.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/services/talent.webp"],
        process: [
            { step: "01", title: "Matching", desc: "Aligning your mock session with the specific industry or role you are aiming for." },
            { step: "02", title: "Execution", desc: "A deep-dive interview session that covers technical, behavioral, and cultural fit." },
            { step: "03", title: "Analysis", desc: "HerLead provides a comprehensive breakdown of your strengths and areas for improvement." }
        ],
        method: {
            title: "Our Performance Method.",
            description: "A focus on intentional preparation to turn interview anxiety into professional authority.",
            buttonText: "Schedule a Session"
        },
        outcomes: [
            "Polished Verbal Delivery",
            "Confident Body Language",
            "Better Behavioral Answers",
            "Reduced Interview Nerves"
        ]
    },
    "professional-grooming-training": {
        agencyStyle: talentStyle,
        agencyCards: talentCards,
        slug: "professional-grooming-training",
        title: "Professional Grooming",
        subtitle: "Appearance and Presence Mastery",
        description: "You are the face of your professional brand. HerLead's grooming and appearance training ensures your visual presentation matches your professional ambition and industry standards.",
        heroImage: "/images/services/influencer.webp",
        features: [
            {
                title: "1. Visual Branding Audit",
                desc: "Evaluating your current professional wardrobe and appearance to ensure it reflects your desired authority.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Industry-Standard Styling",
                desc: "Guided styling sessions to help you dress for the role you want while maintaining your unique identity.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Presence & Etiquette",
                desc: "HerLead teaches you the subtle art of professional manners and non-verbal cues that build instant trust.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/services/brand.webp"],
        process: [
            { step: "01", title: "Consultation", desc: "Understanding your professional goals and the visual standards of your specific industry." },
            { step: "02", title: "Transformation", desc: "Practical styling and grooming workshops to elevate your daily professional presence." },
            { step: "03", title: "Mastery", desc: "HerLead provides you with a long-term plan to maintain a premium and professional image." }
        ],
        method: {
            title: "Our Presence Method.",
            description: "A focus on visual excellence to ensure you look, feel, and act like the professional you were meant to be.",
            buttonText: "Elevate Your Look"
        },
        outcomes: [
            "Polished Professional Image",
            "Industry-Aligned Styling",
            "Increased Self-Confidence",
            "Strong Non-Verbal Presence"
        ]
    },
    "resume-building-job-search": {
        agencyStyle: talentStyle,
        agencyCards: talentCards,
        slug: "resume-building-job-search",
        title: "Resume & Job Search",
        subtitle: "Get Noticed by the Right People",
        description: "Your resume is your gatekeeper. HerLead helps you craft powerful professional documents and job search strategies that cut through the noise and land you the opportunities you deserve.",
        heroImage: "/images/services/job.webp",
        features: [
            {
                title: "1. ATS-Optimized Resumes",
                desc: "Writing resumes that are both human-ready and machine-optimized to ensure you get past the initial screening.",
                image: "/images/services/feature-1.webp"
            },
            {
                title: "2. Strategic Job Mapping",
                desc: "Identifying the hidden job market and using LinkedIn and networking to find roles that aren't public yet.",
                image: "/images/services/feature-2.webp"
            },
            {
                title: "3. Cover Letter Crafting",
                desc: "HerLead helps you write persuasive cover letters that bridge your past experience to your future potential.",
                image: "/images/services/feature-3.webp"
            }
        ],
        gallery: ["/images/services/talent.webp"],
        process: [
            { step: "01", title: "Audit", desc: "Reviewing your current professional history to extract the high-value impact stories." },
            { step: "02", title: "Creation", desc: "Developing a suite of professional documents including resumes, bios, and LinkedIn copy." },
            { step: "03", title: "Strategy", desc: "HerLead builds you a 90-day job search roadmap to turn applications into offers." }
        ],
        method: {
            title: "Our Opportunity Method.",
            description: "A focus on strategic self-marketing to turn your experience into a compelling case for employment.",
            buttonText: "Build Your Resume"
        },
        outcomes: [
            "High-Impact Resumes",
            "Hidden Market Access",
            "Faster Offer Turnaround",
            "Strategic Search Skills"
        ]
    }
};
