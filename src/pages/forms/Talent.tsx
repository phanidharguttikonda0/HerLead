import { useState } from 'react';
import { useEmailSender } from '../../hooks/useEmailSender';
import { FormPageLayout, FormGroup, FormField, SubmitButton } from '../../components/layout/FormPageLayout';

const TalentPage = () => {
    const { sendEmail, loading } = useEmailSender();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contact: '',
        location: '',
        relocation: 'Yes, absolutely',
        currentCompany: '',
        designation: '',
        totalExperience: '',
        nextGoal: '',
        employmentStatus: 'Employed',
        noticePeriod: '',
        resumeLink: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!formData.fullName || !formData.email || !formData.contact) {
            alert('Please fill in all required fields.');
            return;
        }

        const response = await sendEmail(formData);
        alert(response.message);
        if (response.success) {
            setFormData({
                fullName: '',
                email: '',
                contact: '',
                location: '',
                relocation: 'Yes, absolutely',
                currentCompany: '',
                designation: '',
                totalExperience: '',
                nextGoal: '',
                employmentStatus: 'Employed',
                noticePeriod: '',
                resumeLink: ''
            });
        }
    };

    return (
        <FormPageLayout
            hero={{
                title: <>{'Fine!!!'} <br /> <span>Impress Us.</span></>,
                subtext: (
                    <div className="space-y-4">
                        <p className="text-xl md:text-3xl font-heading font-black leading-tight text-black">
                            Yes, we’ll ask for your resume.
                        </p>
                        <p className="text-base md:text-xl font-bold text-black border-l-4 border-secondary pl-6">
                            No, we won’t judge you for the font. Probably.
                        </p>
                    </div>
                ),
                image: "/images/forms/iam_talent.jpeg",
                imageAlt: "Talent Hero"
            }}
            message={{
                subtitle: "The Real Situation",
                title: "You didn’t land here by accident and no, this isn’t another “upload CV, wait forever” situation.",
                description: (
                    <div className="space-y-4">
                        <p>
                            At HerLead, we take talent seriously (and careers personally). This space is for people who know they have more to offer than their current role, title, or job portal luck suggests. If you’ve got skills, intent, and the ability to show up when it matters, you’re exactly who we’re looking for.
                        </p>
                        <p>
                            We don’t just scan resumes, we actually look at potential. And if you want to go a step further, our Interview-Ready Selection Mode lets you demonstrate what you can do in a real evaluation-style process.
                        </p>
                        <p>
                            No hype. No false promises. Just real consideration, real opportunities, and a fair shot to prove yourself.
                        </p>
                    </div>
                ),
                footer: <p className="font-heading font-black uppercase tracking-widest text-lg text-secondary">Bring your best. We’re paying attention.</p>
            }}
            formTitle="The Application"
        >
            <FormGroup number="01" title="Identity">
                <FormField label="Full Name *">
                    <input
                        type="text"
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="John Doe"
                    />
                </FormField>
                <FormField label="Email Address *">
                    <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="john@example.com"
                    />
                </FormField>
                <FormField label="Phone / WhatsApp *">
                    <input
                        type="tel"
                        required
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="+1 234 567 890"
                    />
                </FormField>
                <FormField label="Current Location *">
                    <input
                        type="text"
                        required
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Dubai, UAE"
                    />
                </FormField>
            </FormGroup>

            <FormGroup number="02" title="Career Status">
                <FormField label="Relocation? *">
                    <div className="relative">
                        <select
                            name="relocation"
                            value={formData.relocation}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold appearance-none cursor-pointer hover:border-black"
                        >
                            <option>Yes, absolutely</option>
                            <option>Maybe / Depending on offer</option>
                            <option>No</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <span className="block w-2 h-2 border-b-2 border-r-2 border-black rotate-45"></span>
                        </div>
                    </div>
                </FormField>
                <FormField label="Current Company *">
                    <input
                        type="text"
                        required
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Company Name"
                    />
                </FormField>
                <FormField label="Current Designation *">
                    <input
                        type="text"
                        required
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Senior Manager"
                    />
                </FormField>
                <FormField label="Total Experience *">
                    <input
                        type="text"
                        required
                        name="totalExperience"
                        value={formData.totalExperience}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. 5 Years"
                    />
                </FormField>
            </FormGroup>

            <FormGroup number="03" title="Ambitions">
                <FormField label="The Next Goal *" hint="Specifics only. “Anything” is not an answer." fullWidth>
                    <input
                        type="text"
                        required
                        name="nextGoal"
                        value={formData.nextGoal}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="I am aiming for..."
                    />
                </FormField>
                <FormField label="Employment Status *">
                    <div className="relative">
                        <select
                            name="employmentStatus"
                            value={formData.employmentStatus}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold appearance-none cursor-pointer hover:border-black"
                        >
                            <option>Employed</option>
                            <option>Freelancing</option>
                            <option>Not Working</option>
                            <option>Serving Notice Period</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <span className="block w-2 h-2 border-b-2 border-r-2 border-black rotate-45"></span>
                        </div>
                    </div>
                </FormField>
                <FormField label="Notice Period *">
                    <input
                        type="text"
                        required
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. 30 Days / Immediate"
                    />
                </FormField>
                <FormField label="Resume / Portfolio Link *" fullWidth>
                    <input
                        type="url"
                        required
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="https://drive.google.com/..."
                    />
                </FormField>
            </FormGroup>

            <SubmitButton
                text={loading ? "Sending..." : "Submit Application"}
                onClick={handleSubmit}
            />
        </FormPageLayout>
    );
};

export default TalentPage;
