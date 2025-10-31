import React from 'react'
import { MdTrendingUp, MdAccessTime, MdErrorOutline, MdAttachMoney, MdPeople, MdBarChart } from 'react-icons/md'
import Link from 'next/link'
import { RiWhatsappLine } from "react-icons/ri"

const Benefits = () => {
    const stats = [
        {
            icon: <MdAccessTime className="text-5xl" />,
            value: "87%",
            label: "Reduction in Admin Time",
            description: "Automate routine tasks and focus on what matters—patient care"
        },
        {
            icon: <MdErrorOutline className="text-5xl" />,
            value: "94%",
            label: "Fewer Scheduling Errors",
            description: "Intelligent scheduling eliminates conflicts and double-bookings"
        },
        {
            icon: <MdPeople className="text-5xl" />,
            value: "4.9/5",
            label: "User Satisfaction",
            description: "Rated highly by care managers and healthcare professionals"
        },
        {
            icon: <MdTrendingUp className="text-5xl" />,
            value: "65%",
            label: "Faster Onboarding",
            description: "Intuitive interface reduces training time for new staff"
        }
    ];

    const benefits = [
        {
            icon: <MdAttachMoney className="text-4xl" />,
            title: "Reduce Operational Costs",
            description: "Automate manual processes, reduce paperwork, and eliminate redundant tasks. Save on administrative overhead while improving efficiency."
        },
        {
            icon: <MdBarChart className="text-4xl" />,
            title: "Improve Compliance & Reporting",
            description: "Automated tracking and comprehensive reports ensure you stay compliant with regulations. Generate audit-ready documentation effortlessly."
        },
        {
            icon: <MdPeople className="text-4xl" />,
            title: "Enhance Care Quality",
            description: "Better organization and easier access to client information enables your team to provide more personalized, effective care."
        },
        {
            icon: <MdAccessTime className="text-4xl" />,
            title: "Increase Team Productivity",
            description: "Streamlined workflows, digital forms, and mobile access mean your team spends less time on admin and more time with clients."
        }
    ];

    return (
        <section className="py-16 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                        Proven Results & ROI
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary max-w-3xl mx-auto">
                        See how our bespoke care management system delivers <span className="font-bold">measurable improvements</span> to your operations and bottom line.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-[#E4E4E4]/5 to-[#E4E4E4]/10 border border-gray-300 rounded-xl p-6 text-center hover:scale-110 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
                        >
                            <div className="text-primary mb-4 flex justify-center group-hover:scale-125 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl text-primary font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                                {stat.label}
                            </div>
                            <p className="text-gray-300 text-sm font-light leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-[#E4E4E4]/5 to-[#E4E4E4]/10 border border-gray-300 rounded-xl p-8 hover:scale-[1.02] hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                        >
                            <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-300 font-light leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl text-white font-bold mb-2">
                                100+
                            </div>
                            <div className="text-gray-300 font-light">
                                Hours Saved Monthly
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl text-white font-bold mb-2">
                                30%
                            </div>
                            <div className="text-gray-300 font-light">
                                Reduction in Paperwork
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl text-white font-bold mb-2">
                                50%
                            </div>
                            <div className="text-gray-300 font-light">
                                Faster Client Onboarding
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="text-center mt-10">
                    <Link
                        href="https://wa.me/message/3V4KLRGQ6IBEP1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors duration-300 justify-center"
                    >
                        <RiWhatsappLine className="text-xl" />
                        Calculate Your ROI
                    </Link>
                </div> */}
            </div>
        </section>
    )
}

export default Benefits

