import React from 'react'
import Image from 'next/image'
import comma from '@/public/images/client/comma.png'
import client1 from '@/public/images/client/client1.png'
import client2 from '@/public/images/client/client2.png'
import client3 from '@/public/images/client/client3.png'
import client4 from '@/public/images/client/client4.png'

const WhyAvoira = () => {
    const testimonials = [
        {
            id: 1,
            title: 'Michael Johnson',
            subtitle: 'Nursing Manager | St. Mary’s Healthcare',
            clientImg: client2,
            description: 'Reduced scheduling errors by 78% and saved 12+ hours weekly on staff coordination. The automated shift management is a game-changer for our 200+ nurse team.'
        },
        {
            id: 2,
            title: 'Sarah Williams',
            subtitle: 'IT Director | Beacon Health Systems',
            clientImg: client1,
            description: 'Cut onboarding time for new staff by 65% with the intuitive interface. Our compliance audit pass rate improved to 100% thanks to real-time documentation.'
        },
        {
            id: 3,
            title: 'David Chen',
            subtitle: 'Operations Lead | HomeCare Plus',
            clientImg: client4,
            description: 'Custom care plans reduced patient readmissions by 30% in 6 months. The schedule management increased caregiver productivity by 8 hours per week.'
        },
        {
            id: 4,
            title: 'Emily Rodriguez',
            subtitle: 'Marketing Executive | Elderaid Solutions',
            clientImg: client3,
            description: 'Thanks to the clients management system, we can manage all our clients data easily and electronically. The system is very easy to use and the support team is very helpful.'
        }
    ];

    return (
        <section className="py-16 pb-12 md:pb-44 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center relative flex flex-col items-center justify-center mb-12">
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                    Why Aviora Portal
                </h1>
                <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary max-w-2xl">
                    Plans that are carefully crafted to suit <span className="font-bold">your business.</span>
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto'>
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="relative text-center border border-gray-300 rounded-lg p-6 bg-[#E4E4E4]/5 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                    >
                        <Card
                            title={testimonial.title}
                            subtitle={testimonial.subtitle}
                            clientImg={testimonial.clientImg}
                            description={testimonial.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyAvoira

const Card = ({ clientImg, title, subtitle, description }) => {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center font-secondary mb-4'>
                <div className='flex justify-center items-center gap-4'>
                    <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                        <Image
                            src={clientImg}
                            alt="client"
                            layout="fill"
                            objectFit="cover"
                            className="text-white"
                        />
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h3 className='text-white font-bold text-lg md:text-xl'>{title}</h3>
                        <span className='text-gray-300 font-medium text-sm'>{subtitle}</span>
                    </div>
                </div>
                <div className='w-10 h-10 relative'>
                    <Image
                        src={comma}
                        alt="Quote icon"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <p className='text-gray-200 text-left text-sm md:text-base'>{description}</p>
        </div>
    )
}