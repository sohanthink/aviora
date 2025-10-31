import React from 'react'
import { MdLocationOn, MdCheckCircle, MdMap, MdVisibility } from 'react-icons/md'
import Link from 'next/link'
import { RiWhatsappLine } from "react-icons/ri"

const AppointmentLocationTracking = () => {
    const features = [
        {
            icon: <MdLocationOn className="text-4xl" />,
            title: "GPS Location Capture",
            description: "Automatic GPS coordinates and address capture when appointments are completed. Know exactly where care services were delivered."
        },
        {
            icon: <MdVisibility className="text-4xl" />,
            title: "Admin Visibility",
            description: "View location data for every completed appointment in real-time. Complete transparency and accountability for all care services."
        },
        {
            icon: <MdMap className="text-4xl" />,
            title: "Interactive Map View",
            description: "Visual map showing all appointment locations. Easy to identify patterns, verify service delivery, and optimize route planning."
        }
    ];

    return (
        <section className="py-16 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                        Appointment Location Tracking
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary max-w-3xl mx-auto">
                        See exactly <span className="font-bold">where appointments are completed</span>. Admin can view the exact location of every completed appointment, ensuring <span className="font-bold">accountability and verification</span> of care services delivered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-[#E4E4E4]/5 to-[#E4E4E4]/10 border border-gray-300 rounded-lg p-6 text-center hover:scale-105 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                        >
                            <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                            <p className="text-gray-300 text-sm font-light leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-[#E4E4E4]/5 to-[#E4E4E4]/10 border border-gray-300 rounded-xl p-8 md:p-12 hover:border-primary/30 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-white font-bold mb-6">
                                Complete Location Transparency
                            </h3>
                            <p className="text-gray-300 mb-6 font-light leading-relaxed">
                                When an employee completes an appointment, the system automatically captures the GPS location. Admin can see:
                            </p>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Exact GPS coordinates (latitude & longitude)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Physical address where appointment was completed</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Visual map showing appointment location</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Location data integrated with attendance tracking</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8">
                            <h3 className="text-2xl text-white font-bold mb-4">
                                Why Location Tracking?
                            </h3>
                            <p className="text-gray-300 mb-4 font-light">
                                Location tracking provides complete accountability and verification that care services are being delivered at the correct locations.
                            </p>
                            <div className="space-y-3 text-sm text-gray-300">
                                <div className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span>Verify service delivery at correct locations</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span>Optimize route planning and efficiency</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span>Maintain accurate service records</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span>Build trust with clients through transparency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="https://wa.me/message/3V4KLRGQ6IBEP1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors duration-300 justify-center hover:scale-105 transform"
                    >
                        <RiWhatsappLine className="text-xl" />
                        See Location Tracking Demo
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AppointmentLocationTracking

