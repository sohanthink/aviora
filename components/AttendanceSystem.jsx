import React from 'react'
import { MdAccessTime, MdDashboard, MdCheckCircle, MdBarChart, MdLocationOn, MdMap } from 'react-icons/md'
import Link from 'next/link'
import { RiWhatsappLine } from "react-icons/ri"

const AttendanceSystem = () => {
    const benefits = [
        {
            icon: <MdAccessTime className="text-4xl" />,
            title: "Real-Time Clock In/Out",
            description: "Employees clock in and out instantly with GPS verification. Automated time tracking eliminates manual timesheets and reduces errors."
        },
        {
            icon: <MdLocationOn className="text-4xl" />,
            title: "Location Tracking",
            description: "See exactly where employees clock in and out from. GPS coordinates and location names captured automatically for complete accountability."
        },
        {
            icon: <MdDashboard className="text-4xl" />,
            title: "Admin Attendance Matrix",
            description: "Visual dashboard showing real-time attendance status with location data. See who's working, track hours, locations, and optimize workforce allocation."
        },
        {
            icon: <MdBarChart className="text-4xl" />,
            title: "Comprehensive Reports",
            description: "Generate detailed attendance reports with location data for payroll processing, audits, and performance analysis. Export data in multiple formats."
        }
    ];

    return (
        <section className="py-16 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                        Smart Attendance System
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary max-w-3xl mx-auto">
                        Track attendance in real-time with <span className="font-bold">automated clock in/out</span> and comprehensive <span className="font-bold">admin dashboard matrix</span> for complete workforce visibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-[#E4E4E4]/5 to-[#E4E4E4]/10 border border-gray-300 rounded-lg p-6 text-center hover:scale-105 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                        >
                            <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                            <p className="text-gray-300 text-sm font-light leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#E4E4E4]/5 border border-gray-300 rounded-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                                Employee Clock In/Out
                            </h3>
                            <p className="text-gray-300 mb-6 font-light">
                                Simple, intuitive interface for employees to clock in and out with a single tap. GPS location verification ensures accurate attendance tracking. Works seamlessly on mobile devices for field workers.
                            </p>
                            <ul className="space-y-3 text-gray-300 mb-6">
                                <li className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">GPS-verified location tracking for clock in/out</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Admin sees exact location coordinates and address</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Mobile-friendly interface</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Automatic break time tracking</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                                Admin Attendance Matrix
                            </h3>
                            <p className="text-gray-300 mb-6 font-light">
                                Powerful dashboard showing real-time attendance status of all employees. View current clock-in status, total hours worked, attendance history, and generate reports instantly. Perfect for payroll processing and workforce management.
                            </p>
                            <ul className="space-y-3 text-gray-300 mb-6">
                                <li className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Real-time attendance status view with location map</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">See clock in/out locations for each employee</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Weekly and monthly reports with location data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <MdCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-light">Export data for payroll systems</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="https://wa.me/message/3V4KLRGQ6IBEP1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors duration-300 justify-center"
                    >
                        <RiWhatsappLine className="text-xl" />
                        See Attendance System Demo
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AttendanceSystem

