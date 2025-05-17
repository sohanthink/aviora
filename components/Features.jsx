import React from 'react'
import Image from 'next/image'
import icon1 from '@/public/icons/icon1.png'
import icon2 from '@/public/icons/icon2.png'
import icon3 from '@/public/icons/icon3.png'
import icon4 from '@/public/icons/icon4.png'
import icon5 from '@/public/icons/icon5.png'
import icon6 from '@/public/icons/icon6.png'

const Features = () => {
    return (
        <section id='features' className="py-16 pb-12 md:pb-44 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center relative flex flex-col items-center justify-center">
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                    Features in Detail
                </h1>
                <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary mb-8 sm:mb-12">
                    Plans that are carefully crafted to suit  <span className="font-bold">your business.</span>
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                <Card title='Client Management' icon={icon1} description="Centralize all client information in one secure, easy-to-access system. Track histories and forms with data, medications, and important contacts. Quickly update records and access critical client details when you need them most." />
                <Card title='Employee Scheduling' icon={icon2} description="Streamline your staff management with intelligent scheduling tools. Create, edit, and optimize shifts in seconds, reduce conflicts with automated availability tracking, and ensure perfect coverage for every shift." />
                <Card title='Form Creation & Submission' icon={icon3} description="Digitize and customize all your essential nursing forms with our intuitive form builder. Create some common Forms and submit it to users who need it. Easy and reliable soluations." />
                <Card title='Role-Based Access Control' icon={icon4} description="Protect sensitive data with customizable permission levels. Administrators control exactly what each team member can view and edit, ensuring compliance while maintaining workflow efficiency. Perfect for maintaining HIPAA and privacy standards." />
                <Card title='Secure Data Storage' icon={icon5} description="Enterprise-grade encryption keeps all client and operational data protected. Cloud-based storage with automatic backups means information is always safe and accessible from any authorized device, without compromising security." />
                <Card title='Telehealth & Remote Monitoring' icon={icon6} description="Enhance patient care with integrated telehealth capabilities. Conduct virtual visits, monitor vital signs remotely, and share real-time updates with care teams—keeping clients connected even when they’re not on-site." />
            </div>
        </section>
    )
}

export default Features

export const Card = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center space-y-4 relative text-center border border-gray-300    rounded-lg p-6 bg-[#E4E4E4]/5 shadow-lg transition-transform transform hover:scale-105">
            <div>
                <Image src={icon} alt="Icon" width={50} height={50} className="text-white text-3xl sm:text-4xl" />
            </div>
            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-white font-bold z-50">
                {title}
            </h3>
            <p className="text-gray-300 font-light">{description}</p>
        </div>
    )
}