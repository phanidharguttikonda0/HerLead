import { FormPageLayout, FormGroup, FormField, SubmitButton } from '../../components/layout/FormPageLayout';

const InfluencerPage = () => {
    return (
        <FormPageLayout
            hero={{
                title: <>Influencer Partnerships <br /> <span className="text-[0.8em] flex items-center gap-4">Expression of Interest</span></>,
                subtext: (
                    <p className="text-xl md:text-3xl font-body font-black leading-relaxed text-black italic">
                        Okay!!! So you’re here.
                    </p>
                ),
                image: "/images/forms/4.webp",
                imageAlt: "Influencer Hero"
            }}
            message={{
                subtitle: "The Vibe",
                title: "That tells us you know your worth.",
                description: (
                    <div className="space-y-4">
                        <p>
                            At HerLead, we’re always watching for creators who understand the power of their voice and know how to use it with intention. This isn’t about noise or chasing brand tags; it’s about presence, consistency, and real influence.
                        </p>
                        <p className="font-bold">
                            Bring what you’ve got.
                        </p>
                        <p>
                            We review every submission, and when the alignment hits, we’ll reach out. Simple. Selective. Worth it.
                        </p>
                    </div>
                ),
                footer: <p className="font-heading font-black uppercase tracking-widest text-lg text-secondary">Presence. Passion. Power.</p>
            }}
            formTitle="Application Form"
        >
            <FormGroup number="01" title="Profile">
                <FormField label="Your Name *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Legal Name"
                    />
                </FormField>
                <FormField label="Creator / Public Name *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="@handle or Brand Name"
                    />
                </FormField>
                <FormField label="Email Address *">
                    <input
                        type="email"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="hello@example.com"
                    />
                </FormField>
                <FormField label="Contact Number / WhatsApp *">
                    <input
                        type="tel"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="+1 234 567 890"
                    />
                </FormField>
                <FormField label="Primary Platform *" hint="(Instagram / YouTube / LinkedIn / X / Facebook / Podcast / Other)" fullWidth>
                    <div className="relative">
                        <select className="w-full bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold appearance-none cursor-pointer hover:border-black">
                            <option>Instagram</option>
                            <option>YouTube</option>
                            <option>LinkedIn</option>
                            <option>TikTok / X</option>
                            <option>Facebook</option>
                            <option>Podcast</option>
                            <option>Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <span className="block w-2 h-2 border-b-2 border-r-2 border-black rotate-45"></span>
                        </div>
                    </div>
                </FormField>
            </FormGroup>

            <FormGroup number="02" title="Reach">
                <FormField label="Portfolio / Profile Link(s) *" hint="(Please include your primary platform or media kit)" fullWidth>
                    <input
                        type="url"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="https://"
                    />
                </FormField>
                <FormField label="Content Focus *" hint="(Fashion, Beauty, Lifestyle, Tech, etc.)">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Your Niche"
                    />
                </FormField>
                <FormField label="Audience Scale *" hint="(Under 10K / 10K-50K / 50K-100K / 100K-500K / 500K+)">
                    <div className="relative">
                        <select className="w-full bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold appearance-none cursor-pointer hover:border-black">
                            <option>Under 10K</option>
                            <option>10K–50K</option>
                            <option>50K–100K</option>
                            <option>100K–500K</option>
                            <option>500K+</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <span className="block w-2 h-2 border-b-2 border-r-2 border-black rotate-45"></span>
                        </div>
                    </div>
                </FormField>
                <FormField label="Audience Profile *" hint="(Primary geography, age group, niche)" fullWidth>
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Describe your community"
                    />
                </FormField>
            </FormGroup>

            <FormGroup number="03" title="Vision">
                <FormField label="Collaboration Formats of Interest *" hint="(Brand Campaigns, Editorial Features, PR Gifting, Events, Partnerships)" fullWidth>
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="What excites you?"
                    />
                </FormField>
                <FormField label="Overview of your work and creative approach *" hint="(Your voice, aesthetic, and what defines your content)" fullWidth>
                    <textarea
                        required
                        rows={4}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black resize-none"
                        placeholder="Define your artistic fingerprint..."
                    />
                </FormField>
                <FormField label="What draws you to PR-led brand collaborations? *" fullWidth>
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Your motivation"
                    />
                </FormField>
                <FormField label="Additional context you would like to share?" fullWidth>
                    <textarea
                        rows={3}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black resize-none"
                        placeholder="Anything else we should know..."
                    />
                </FormField>
            </FormGroup>

            <SubmitButton
                text="Submit Profile"
                onClick={() => alert('Submission Received!')}
            />
        </FormPageLayout>
    );
};

export default InfluencerPage;
