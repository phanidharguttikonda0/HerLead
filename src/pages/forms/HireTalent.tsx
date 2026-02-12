import { FormPageLayout, FormGroup, FormField, SubmitButton } from '../../components/layout/FormPageLayout';

const HireTalentPage = () => {
    return (
        <FormPageLayout
            hero={{
                title: <>Hire Talent. <br /> <span className="">Retire Headaches.</span></>,
                subtext: (
                    <p className="text-xl md:text-3xl font-heading font-black leading-tight text-black">
                        We don’t send “almost right.” <br />
                        We send people who actually fit.
                    </p>
                ),
                image: "/images/forms/talent.png",
                imageAlt: "Hire Talent Hero"
            }}
            message={{
                subtitle: "Find the Talent",
                title: <>Oh dear hiring managers!!! <br /> We understand this journey all too well.</>,
                description: (
                    <div className="space-y-4">
                        <p className="font-bold">
                            At HerLead, we know hiring isn’t just about filling a role; it’s about finding people you can rely on.
                        </p>
                        <p>
                            That’s why our candidates are carefully developed before they reach you. They are clear about their skills, aware of their responsibilities, and honest about what they can deliver. When a HerLead candidate commits, they know what they’re promising—so you get talent that aligns, performs, and stays.
                        </p>
                    </div>
                )
            }}
            extraSection={
                <section className="py-16 md:py-24 px-6 md:px-20 bg-[#F7F7F7] text-black overflow-hidden relative border-t border-[#EBEBEB]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                            <div className="space-y-8 md:space-y-12">
                                <div>
                                    <h3 className="text-secondary uppercase tracking-[0.3em] font-black text-sm mb-4">Find the Talent (Staffing Service)</h3>
                                    <h2 className="text-3xl md:text-6xl font-heading font-black uppercase tracking-tighter leading-[0.9]">
                                        One Requirement. <br />
                                        <span className="text-black">The Right Talent.</span>
                                    </h2>
                                </div>

                                <div className="space-y-6 md:space-y-8">
                                    <p className="text-base md:text-2xl font-body leading-relaxed text-black">
                                        We deliver pre-screened, well-prepared, deployment-ready talent aligned to your business reality.
                                        <br />
                                        <span className="font-bold text-secondary italic">HerLead Staffing is built by leadership, not guesswork.</span>
                                    </p>

                                    <div className="grid gap-4 md:gap-6">
                                        <div className="flex gap-4 items-start border-l-2 border-secondary pl-6">
                                            <p className="text-sm md:text-lg font-medium">With 10000+ successful staffing placements across India and global markets, HerLead delivers talent that businesses can rely on—from leadership roles to large-scale ground staffing.</p>
                                        </div>
                                        <div className="flex gap-4 items-start border-l-2 border-secondary pl-6">
                                            <p className="text-sm md:text-lg font-medium">Built by a CHRO & HR Head who understands HR beyond theory, our staffing ecosystem is designed to solve real hiring problems before they appear.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                                {[
                                    { title: "Leadership & Management", icon: "01", span: "row-span-1" },
                                    { title: "HR & Operations", icon: "02", span: "row-span-1" },
                                    { title: "Marketing & Growth", icon: "03", span: "sm:col-span-2" },
                                    { title: "Sales & Business", icon: "04", span: "row-span-1" },
                                    { title: "Tech & Digital", icon: "05", span: "row-span-1" },
                                    { title: "Admin & Back Office", icon: "06", span: "sm:col-span-2" },
                                    { title: "Staffing (Bulk)", icon: "07", span: "row-span-1" },
                                    { title: "Ground Workforce", icon: "08", span: "row-span-1" }
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className={`bg-white group hover:bg-secondary p-6 rounded-2xl border-2 border-black transition-all duration-300 flex flex-col justify-between ${item.span}`}
                                    >
                                        <div className="text-[10px] font-heading font-black text-secondary group-hover:text-white transition-colors mb-4">{item.icon}</div>
                                        <h4 className="text-sm md:text-lg font-heading font-black uppercase tracking-tight group-hover:text-white transition-colors leading-none">
                                            {item.title}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 max-w-4xl mx-auto">
                        <div className="border-t-2 border-dashed border-[#EBEBEB] pt-10 text-center">
                            <p className="text-black font-body font-bold italic text-sm md:text-xl leading-relaxed">
                                "Whether you need one critical hire or bulk staffing, we build pipelines for your exact needs."
                            </p>
                        </div>
                    </div>
                </section>
            }
            formTitle="Talent Request"
        >
            <FormGroup number="01" title="Company Profile">
                <FormField label="Your Name *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl md:text-2xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Full Name"
                    />
                </FormField>
                <FormField label="Company Name *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Business Entity"
                    />
                </FormField>
                <FormField label="Work Email *">
                    <input
                        type="email"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="email@company.com"
                    />
                </FormField>
                <FormField label="WhatsApp / Contact *">
                    <input
                        type="tel"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="+1 234 567 890"
                    />
                </FormField>
                <FormField label="Company Location *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="City, Country"
                    />
                </FormField>
                <FormField label="Company Website *">
                    <input
                        type="url"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="https://"
                    />
                </FormField>
                <FormField label="Industry / Business Type *" fullWidth>
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. Fintech, Healthcare, E-commerce"
                    />
                </FormField>
            </FormGroup>

            <FormGroup number="02" title="Requirements">
                <FormField label="What kind of hiring support are you looking for? *" hint="(Permanent / Contract / Leadership / Bulk / Confidential)">
                    <select className="w-full bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold appearance-none cursor-pointer hover:border-black">
                        <option>Permanent</option>
                        <option>Contract</option>
                        <option>Leadership</option>
                        <option>Bulk</option>
                        <option>Confidential</option>
                    </select>
                </FormField>
                <FormField label="Experience level required *" hint="(Fresher / Mid / Senior / Leadership)">
                    <select className="w-full bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold appearance-none cursor-pointer hover:border-black">
                        <option>Fresher</option>
                        <option>Mid</option>
                        <option>Senior</option>
                        <option>Leadership</option>
                    </select>
                </FormField>
                <FormField label="Roles you’re hiring for *" hint="(Titles with brief context clarity in, quality out.)" fullWidth>
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. Creative Design Manager"
                    />
                </FormField>
                <FormField label="Number of positions *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="e.g. 3"
                    />
                </FormField>
                <FormField label="Budget *">
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="Target Range"
                    />
                </FormField>
            </FormGroup>

            <FormGroup number="03" title="Strategy">
                <FormField label="Work model *" hint="(Onsite / Hybrid / Remote / Flexible)">
                    <select className="w-full bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold appearance-none cursor-pointer hover:border-black">
                        <option>Onsite</option>
                        <option>Hybrid</option>
                        <option>Remote</option>
                        <option>Flexible</option>
                    </select>
                </FormField>
                <FormField label="Hiring Urgency *" hint="(Immediate / 15–30 days / 30–60 days / Planned)">
                    <select className="w-full bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold appearance-none cursor-pointer hover:border-black">
                        <option>Immediate</option>
                        <option>15–30 days</option>
                        <option>30–60 days</option>
                        <option>Planned</option>
                    </select>
                </FormField>
                <FormField label="What matters most in this hire? *" hint="(Skill, ownership, mindset, speed, culture, be honest.)" fullWidth>
                    <input
                        type="text"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="I am looking for..."
                    />
                </FormField>
                <FormField label="Upload the Job Description (JD) *" hint="(Paste link to Drive/Dropbox or similar here)" fullWidth>
                    <input
                        type="url"
                        required
                        className="bg-transparent border-b-2 border-black py-4 focus:border-secondary transition-all outline-none text-xl font-bold placeholder:text-black/30 hover:border-black"
                        placeholder="https://drive.google.com/..."
                    />
                </FormField>
            </FormGroup>

            <SubmitButton
                text="Send Hiring Request"
                onClick={() => alert('Request Sent!')}
            />
        </FormPageLayout>
    );
};

export default HireTalentPage;
