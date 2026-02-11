import { FormPageLayout, FormGroup, FormField, SubmitButton } from '../../components/layout/FormPageLayout';

const RequestQuotePage = () => {
    return (
        <FormPageLayout
            hero={{
                title: <>Begin Your <br /> <span className="text-[0.9em]">Partnership With Us</span></>,
                subtext: (
                    <p className="text-xl md:text-3xl font-body font-black leading-relaxed text-black">
                        At HerLead, we support brands that are ready to grow with clarity and confidence.
                    </p>
                ),
                image: "/images/forms/3.webp",
                imageAlt: "Partnership Hero"
            }}
            message={{
                subtitle: "A Thoughtful Start",
                title: "We help businesses strengthen their presence, tell their story with purpose, and build the right teams.",
                description: (
                    <div className="space-y-4">
                        <p>
                            Our approach is thoughtful, practical, and focused on what truly moves the business forward.
                        </p>
                        <p>
                            When you reach out to HerLead, you’re starting a conversation not a sales process. We take the time to understand your goals and explore whether we are the right partner to support your journey.
                        </p>
                        <p className="font-medium">
                            If you are building something meaningful and looking for experienced guidance, we welcome you to connect with us.
                        </p>
                    </div>
                ),
                footer: <p className="font-heading font-black uppercase tracking-widest text-lg text-secondary">Growth. Clarity. Confidence.</p>
            }}
            formTitle="Request a Quote"
        >
            <FormGroup number="01" title="Your Profile">
                <FormField label="Your Name *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Full Name"
                    />
                </FormField>
                <FormField label="Company / Brand Name *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Business Entity"
                    />
                </FormField>
                <FormField label="Your Role / Designation *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. CEO, Marketing Head"
                    />
                </FormField>
                <FormField label="Contact Number *">
                    <input
                        type="tel"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="+1 234 567 890"
                    />
                </FormField>
                <FormField label="Business Email Address *" fullWidth>
                    <input
                        type="email"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="email@company.com"
                    />
                </FormField>
            </FormGroup>

            <FormGroup number="02" title="Requirements">
                <FormField label="Industry *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. Fintech, Retail"
                    />
                </FormField>
                <FormField label="Areas where you need strategic support *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. Branding, Hiring, Operations"
                    />
                </FormField>
                <FormField label="Please share a brief overview of your requirement or current challenge *" fullWidth>
                    <textarea
                        required
                        rows={4}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black resize-none"
                        placeholder="Tell us about the problem we are solving..."
                    />
                </FormField>
                <FormField label="Any additional context you’d like to share?" fullWidth>
                    <textarea
                        rows={3}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black resize-none"
                        placeholder="Goals, timeline, or specific preferences..."
                    />
                </FormField>
            </FormGroup>

            <SubmitButton
                text="Submit Inquiry"
                onClick={() => alert('Inquiry Sent!')}
            />
        </FormPageLayout>
    );
};

export default RequestQuotePage;
