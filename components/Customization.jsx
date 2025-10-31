import React from 'react'
import { MdBuild, MdCheckCircle, MdHandshake, MdSettings } from 'react-icons/md'
import Link from 'next/link'
import { RiWhatsappLine } from "react-icons/ri"

const Customization = () => {
    const processSteps = [
        {
            icon: <MdHandshake className="text-4xl" />,
            step: "1",
            title: "Discovery & Consultation",
            description: "We discuss your specific needs, workflows, and requirements. Every care management business is unique, and we understand that."
        },
        {
            icon: <MdSettings className="text-4xl" />,
            step: "2",
            title: "Custom Development",
            description: "Our team builds your system exactly as you need it. Add or modify features, customize forms, adjust workflows—everything tailored to your operations."
        },
        {
            icon: <MdBuild className="text-4xl" />,
            step: "3",
            title: "Testing & Refinement",
            description: "We test everything with you, gather feedback, and make refinements until it's perfect. Your satisfaction is our priority."
        },
        {
            icon: <MdCheckCircle className="text-4xl" />,
            step: "4",
            title: "Launch & Support",
            description: "We deploy your system, train your team, and provide ongoing support. Your bespoke solution is ready to transform your operations."
        }
    ];

    const customizationOptions = [
        "Custom forms and templates tailored to your care protocols",
        "Workflow adjustments to match your existing processes",
        "Branding and white-label customization",
        "Integration with your existing tools and systems",
        "Additional features based on your specific requirements",
        "Custom reporting and analytics dashboards"
    ];

    return (
        <section className="py-16 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                        Fully Bespoke & Customizable
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary max-w-3xl mx-auto">
                        This isn't a one-size-fits-all solution. We build it <span className="font-bold">YOUR way</span>, tailored to <span className="font-bold">your specific needs</span> and workflows. Tell us what you need, and we'll create it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {processSteps.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#E4E4E4]/5 border border-gray-300 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 relative"
                        >
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                {item.step}
                            </div>
                            <div className="text-primary mb-4 flex justify-center mt-4">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                            <p className="text-gray-300 text-sm font-light">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#E4E4E4]/5 border border-gray-300 rounded-xl p-8 md:p-12 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-white font-bold mb-6">
                                What Can Be Customized?
                            </h3>
                            <p className="text-gray-300 mb-6 font-light">
                                Everything. From the features you need to the way your team interacts with the system, we customize it all to fit your business perfectly.
                            </p>
                            <ul className="space-y-3">
                                {customizationOptions.map((option, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                        <span className="font-light">{option}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8">
                            <h3 className="text-2xl text-white font-bold mb-4">
                                Why Bespoke?
                            </h3>
                            <p className="text-gray-300 mb-4 font-light">
                                Off-the-shelf solutions often force you to change your workflows to fit the software. With our bespoke approach, the software fits you.
                            </p>
                            <div className="space-y-3 text-sm text-gray-300">
                                <div className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span>No compromise on features you need</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span>Workflows that match your processes</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span>Scalable as your business grows</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span>Ongoing customization as needs evolve</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-8 text-center">
                    <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                        Your System, Your Way
                    </h3>
                    <p className="text-gray-300 mb-6 font-light max-w-2xl mx-auto">
                        Ready to get started? Book a free consultation and let's discuss how we can build the perfect care management system for your business.
                    </p>
                    <Link
                        href="https://wa.me/message/3V4KLRGQ6IBEP1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors duration-300 justify-center"
                    >
                        <RiWhatsappLine className="text-xl" />
                        Book Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Customization

