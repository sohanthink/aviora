import React from 'react'
import Image from 'next/image'
import comma from '@/public/images/client/comma.png'
import client1 from '@/public/images/client/client1.png'

const WhyAvoira = () => {
    const testimonials = [
        {
            id: 1,
            title: 'Michael Johnson',
            subtitle: 'Nursing Manager',
            clientImg: client1,
            description: 'A game-changer for our sales team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.'
        },
        {
            id: 2,
            title: 'Sarah Williams',
            subtitle: 'IT Director',
            clientImg: client1,
            description: 'The platform has transformed our workflow. The intuitive interface and powerful tools have significantly boosted our productivity.'
        },
        {
            id: 3,
            title: 'David Chen',
            subtitle: 'Operations Lead',
            clientImg: client1,
            description: 'Exceptional service and support. The customization options allowed us to tailor the solution perfectly to our business needs.'
        },
        {
            id: 4,
            title: 'Emily Rodriguez',
            subtitle: 'Marketing Executive',
            clientImg: client1,
            description: 'Reliable performance and excellent uptime. Our team can always count on Aviora Portal when we need it most.'
        }
    ];

    return (
        <section className="py-16 pb-20 md:pb-56 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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