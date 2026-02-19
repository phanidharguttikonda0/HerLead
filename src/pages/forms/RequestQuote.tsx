import { useState } from 'react';
import { useEmailSender } from '../../hooks/useEmailSender';
import { FormPageLayout, FormGroup, FormField, SubmitButton } from '../../components/layout/FormPageLayout';

const RequestQuotePage = () => {
    const { sendEmail, loading } = useEmailSender();
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        role: '',
        contact: '',
        email: '',
        industry: '',
        supportAreas: '',
        requirement: '',
        additionalContext: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.companyName) {
            alert('Please fill in all required fields.');
            return;
        }

        const response = await sendEmail(formData);
        alert(response.message);
        if (response.success) {
            setFormData({
                name: '',
                companyName: '',
                role: '',
                contact: '',
                email: '',
                industry: '',
                supportAreas: '',
                requirement: '',
                additionalContext: ''
            });
        }
    };

    return (
        <FormPageLayout
            hero={{
                title: <>Begin Your <br /> <span className="text-[0.9em]">Partnership With Us</span></>,
                subtext: (
                    <p className="text-xl md:text-3xl font-heading font-black leading-tight text-black">
                        At HerLead, we support brands that are ready to grow with clarity and confidence.
                    </p>
                ),
                image: "/images/forms/request_quote.jpg",
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
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Full Name"
                    />
                </FormField>
                <FormField label="Company / Brand Name *">
                    <input
                        type="text"
                        required
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Business Entity"
                    />
                </FormField>
                <FormField label="Your Role / Designation *">
                    <input
                        type="text"
                        required
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. CEO, Marketing Head"
                    />
                </FormField>
                <FormField label="Contact Number *">
                    <input
                        type="tel"
                        required
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="+1 234 567 890"
                    />
                </FormField>
                <FormField label="Business Email Address *" fullWidth>
                    <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. Fintech, Retail"
                    />
                </FormField>
                <FormField label="Areas where you need strategic support *">
                    <input
                        type="text"
                        required
                        name="supportAreas"
                        value={formData.supportAreas}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. Branding, Hiring, Operations"
                    />
                </FormField>
                <FormField label="Please share a brief overview of your requirement or current challenge *" fullWidth>
                    <textarea
                        required
                        rows={4}
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black resize-none"
                        placeholder="Tell us about the problem we are solving..."
                    />
                </FormField>
                <FormField label="Any additional context you’d like to share?" fullWidth>
                    <textarea
                        rows={3}
                        name="additionalContext"
                        value={formData.additionalContext}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black resize-none"
                        placeholder="Goals, timeline, or specific preferences..."
                    />
                </FormField>
            </FormGroup>

            <SubmitButton
                text={loading ? "Sending..." : "Submit Inquiry"}
                onClick={handleSubmit}
            />
        </FormPageLayout>
    );
};

export default RequestQuotePage;
