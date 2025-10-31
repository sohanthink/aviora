import React from 'react'
import { MdPhoneIphone, MdAndroid, MdCheckCircle, MdLocationOn, MdNotifications, MdLock } from 'react-icons/md'
import Link from 'next/link'
import { RiWhatsappLine } from "react-icons/ri"

const MobileApp = () => {
    const features = [
        {
            icon: <MdLocationOn className="text-3xl" />,
            title: "Location-Based Services",
            description: "GPS tracking for field visits and attendance verification"
        },
        {
            icon: <MdNotifications className="text-3xl" />,
            title: "Push Notifications",
            description: "Instant alerts for appointments, care plan updates, and assignments"
        },
        {
            icon: <MdLock className="text-3xl" />,
            title: "Secure Access",
            description: "Biometric login and encrypted data transmission"
        },
        {
            icon: <MdCheckCircle className="text-3xl" />,
            title: "Offline Mode",
            description: "Work without internet connection, sync when online"
        }
    ];

    const mobileFeatures = [
        "View and update client profiles on-the-go",
        "Clock in/out with GPS verification",
        "Access care plans and submit forms",
        "Check and manage appointments",
        "Receive real-time notifications",
        "Admin dashboard on mobile devices"
    ];

    return (
        <section className="py-16 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex justify-center gap-4 mb-4">
                        <MdPhoneIphone className="text-5xl text-primary animate-bounce" style={{ animationDelay: '0s' }} />
                        <MdAndroid className="text-5xl text-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                    <div className="inline-block mb-3">
                        <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/30">
                            Under Development
                        </span>
                    </div>
                    <h2 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                        Mobile Application
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary max-w-3xl mx-auto">
                        You get access to our <span className="font-bold">central mobile app</span> (iOS & Android) - currently under development! Initially launching with <span className="font-bold">merchant/admin access</span>. No app store submissions needed—we handle everything. We upgrade the system automatically, and you get all updates with zero downtime. Portal app coming soon. Take your care management on-the-go with no hassle!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    <div className="bg-gradient-to-br from-[#E4E4E4]/5 to-[#E4E4E4]/10 border border-gray-300 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-2xl md:text-3xl text-white font-bold">
                                Merchant/Admin Mobile App
                            </h3>
                            <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-semibold">Phase 1</span>
                        </div>
                        <p className="text-gray-300 mb-6 font-light">
                            Manage your entire operation from your mobile device. Monitor attendance with location tracking, view appointment completions and locations, approve requests, view reports, and stay connected with your team—all from your smartphone.
                        </p>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                <span className="font-light">Monitor attendance with real-time location data</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                <span className="font-light">View appointment completions and locations</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                <span className="font-light">Access admin dashboard on-the-go</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-[#E4E4E4]/5 to-[#E4E4E4]/10 border border-gray-300 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative">
                        <div className="absolute top-4 right-4">
                            <span className="bg-gray-600/50 text-gray-400 px-3 py-1 rounded-full text-xs font-semibold">Coming Soon</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl text-white font-bold mb-6">
                            Employee Mobile App
                        </h3>
                        <p className="text-gray-300 mb-6 font-light">
                            Employee mobile app coming in future updates. This will empower employees with access to client profiles, care plans, clock in/out, form submission, and appointment management on-the-go.
                        </p>
                        <ul className="space-y-4 mb-6 opacity-75">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MdCheckCircle className="text-gray-500 mt-1 flex-shrink-0" />
                                <span className="font-light">Access client profiles and care plans</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MdCheckCircle className="text-gray-500 mt-1 flex-shrink-0" />
                                <span className="font-light">Clock in/out with GPS verification</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MdCheckCircle className="text-gray-500 mt-1 flex-shrink-0" />
                                <span className="font-light">Submit forms and check appointments</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#E4E4E4]/5 border border-gray-300 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300"
                        >
                            <div className="text-primary mb-4 flex justify-center">
                                {feature.icon}
                            </div>
                            <h4 className="text-white font-bold text-base mb-2">{feature.title}</h4>
                            <p className="text-gray-300 text-sm font-light">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-8 text-center backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
                    <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                        Central Mobile App - Zero Hassle for You
                    </h3>
                    <p className="text-gray-300 mb-6 font-light max-w-2xl mx-auto">
                        Our central mobile app (iOS & Android) is under development! Once ready, you'll simply get access—no app store submissions, no individual app development needed. We handle all system upgrades automatically. Updates are deployed seamlessly with zero downtime, so you always have the latest features without any hassle. Just use it and let us handle the rest!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                            <MdCheckCircle className="text-primary" />
                            <span>Simple access - no app store needed</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                            <MdCheckCircle className="text-primary" />
                            <span>Automatic updates - zero downtime</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                            <MdCheckCircle className="text-primary" />
                            <span>We handle all upgrades for you</span>
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
                        Request Mobile App Preview
                    </Link>
                </div> */}
            </div>
        </section>
    )
}

export default MobileApp

