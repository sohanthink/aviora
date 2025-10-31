import React from 'react'
import Image from 'next/image'
import icon1 from '@/public/icons/icon1.png'
import icon2 from '@/public/icons/icon2.png'
import icon3 from '@/public/icons/icon3.png'
import icon4 from '@/public/icons/icon4.png'
import icon5 from '@/public/icons/icon5.png'
import icon6 from '@/public/icons/icon6.png'

const Features = () => {
    const features = [
        {
            title: 'Client & Employee Management',
            icon: icon1,
            description: "Comprehensive management system for both clients and employees. Add, edit, and organize client profiles with complete medical histories, care preferences, and contact information. Manage employee details, qualifications, certifications, and employment records—all in one centralized, secure system."
        },
        {
            title: 'Care Plans Creation & Management',
            icon: icon2,
            description: "Create, customize, and manage detailed care plans for each client. Build comprehensive treatment plans with goals, interventions, and progress tracking. Assign care plans to specific employees, track completion status, and maintain full documentation history for compliance and quality assurance."
        },
        {
            title: 'Appointment Scheduling with Location Tracking',
            icon: icon3,
            description: "Intelligent appointment scheduling system that connects employees with clients seamlessly. Schedule appointments between employees and clients, or internal team meetings. Admin can see the exact location where appointments are completed, ensuring accountability and verification. Automated reminders, conflict detection, and calendar synchronization ensure efficient scheduling and reduce no-shows."
        },
        {
            title: 'Attendance System & Matrix',
            icon: icon4,
            description: "Advanced attendance tracking with GPS-enabled clock in/out functionality for employees. Admin can see the exact location where employees clock in and out, providing complete visibility and accountability. Real-time attendance matrix view for admins showing who's currently working, hours logged, attendance patterns, and location data. Generate comprehensive reports for payroll, compliance, and workforce optimization."
        },
        {
            title: 'Form Creation & Digital Submission',
            icon: icon5,
            description: "Powerful form builder to create custom forms tailored to your care operations. Employees can submit forms digitally with instant admin notifications. Track form completion, export data, and maintain digital records—eliminate paper trails and streamline documentation."
        },
        {
            title: 'User Assignment to Employees',
            icon: icon6,
            description: "Efficiently assign clients to specific employees based on skills, availability, and care requirements. Manage assignments with drag-and-drop simplicity, track workload distribution, and ensure optimal client-employee matching for the best care outcomes."
        },
        {
            title: 'Mobile Application (Coming Soon)',
            icon: icon1,
            description: "Get access to our central mobile app (iOS & Android) - currently under development! Initially launching with merchant/admin access. Manage your entire operation from mobile devices—monitor attendance, view location data, track appointments, and manage your team on-the-go. No app store submissions needed—we handle all updates automatically with zero downtime. Employee app access coming in future updates. Portal app currently under development."
        },
        {
            title: 'Role-Based Access Control',
            icon: icon2,
            description: "Protect sensitive data with granular permission levels. Administrators control exactly what each team member can view and edit. Ensure data privacy and security standards while maintaining workflow efficiency across different user roles."
        },
        {
            title: 'Secure Data Storage',
            icon: icon3,
            description: "Enterprise-grade encryption protects all client and operational data. Cloud-based storage with automatic backups ensures information is always safe and accessible from any authorized device. Regular security audits and compliance certifications provide peace of mind."
        },
        {
            title: 'Website + Portal Integration',
            icon: icon4,
            description: "Get your professional website (domain.com) and management portal (domain.com/login) in one seamless solution. Fully branded, customizable website for your business plus integrated admin dashboard. We handle setup, configuration, and ongoing support."
        }
    ];

    return (
        <section id='features' className="py-16 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center relative flex flex-col items-center justify-center">
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                    Complete Feature Set
                </h1>
                <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary mb-8 sm:mb-12">
                    Everything you need to manage your <span className="font-bold">nursing care operations</span> efficiently and compliantly.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        title={feature.title}
                        icon={feature.icon}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Features

export const Card = ({ icon, title, description }) => {
    return (
        <div className="group flex flex-col items-center space-y-4 relative text-center border border-gray-300 rounded-lg p-6 bg-gradient-to-br from-[#E4E4E4]/5 to-[#E4E4E4]/10 shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-primary/50 hover:shadow-primary/20">
            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image src={icon} alt="Icon" width={50} height={50} className="text-white text-3xl sm:text-4xl" />
            </div>
            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-white font-bold z-50 group-hover:text-primary transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-300 font-light leading-relaxed">{description}</p>
        </div>
    )
}