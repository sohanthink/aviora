import React from 'react';
import Image from 'next/image';
import image from "@/public/images/pricing.png";
import Link from 'next/link';

const Pricing = () => {
    const pricingData = {
        basePlan: {
            price: 1599,
            originalPrice: 2099,
            period: 'yearly',
            savings: '24%',
            cta: 'Book A Meeting',
            link: 'https://wa.me/message/3V4KLRGQ6IBEP1'
        },
        features: [
            'Add and manage clients & employees',
            'Unlimited form creation & digital submissions',
            'Automated appointment tracking & reminders',
            'HIPAA-compliant role-based access control',
            'Secure cloud storage with daily backups',
            '24/7 priority support'
        ],
        stats: [
            { value: '87%', label: 'Reduction in admin time' },
            { value: '62%', label: 'Fewer scheduling errors' },
            { value: '4.9/5', label: 'User satisfaction' }
        ]
    };

    return (
        <section className="relative mb-[1050px] md:mb-[450px]">
            {/* Hero Background */}
            <div className="relative h-[300px] md:h-[350px] lg:h-[500px]">
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt="Healthcare professionals using Aviora Portal"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-green-700 opacity-80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-primary leading-tight">
                        Transparent Pricing for Healthcare Excellence
                    </h1>
                    <p className="text-lg md:text-xl mt-4 max-w-2xl font-secondary">
                        Premium features at competitive rates - save {pricingData.savings} with annual billing
                    </p>
                </div>
            </div>

            {/* Pricing Card Section */}
            <div className="container mx-auto max-w-6xl absolute top-[288%] md:top-[135%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 md:p-0">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 rounded-xl overflow-hidden shadow-2xl">
                    {/* Price Card */}
                    <div className="bg-[#E4E4E40D] p-8 md:p-10 text-center text-white flex flex-col items-center justify-center border-r border-gray-700">
                        <h2 className="text-xl font-bold font-primary mb-2">PROFESSIONAL PLAN</h2>
                        <div className="flex items-end justify-center space-x-2 my-4">
                            <span className="text-5xl font-bold font-secondary">£{pricingData.basePlan.price}</span>
                            <span className="text-gray-400 line-through pb-1">£{pricingData.basePlan.originalPrice}</span>
                        </div>
                        <span className='font-bold font-primary text-green-400'>SAVE {pricingData.savings}</span>
                        <span className='text-sm text-gray-300 mt-1'>billed {pricingData.basePlan.period}</span>

                        <div className="mt-6 mb-4 grid grid-cols-2 gap-2 w-full">
                            {pricingData.stats.map((stat, index) => (
                                <div key={index} className="bg-[#ffffff08] p-2 rounded">
                                    <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                                    <div className="text-xs text-gray-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <Link href={pricingData.basePlan.link}>
                            <span className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold transition-colors duration-300 inline-block">
                                {pricingData.basePlan.cta}
                            </span>
                        </Link>
                    </div>

                    {/* Features Card */}
                    <div className='bg-[#E4E4E40D] p-8 md:p-10 text-white md:col-span-2'>
                        <h3 className="text-xl font-bold mb-4">Everything Included:</h3>
                        <ul className="space-y-3">
                            {pricingData.features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <span className="w-5 h-5 bg-green-500 rounded-full mt-1 flex-shrink-0"></span>
                                    <span className='font-secondary text-base'>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-5 border-t border-gray-700">
                            <p className="text-gray-300">
                                <strong>Need more?</strong> Custom enterprise packages available for large healthcare systems with 50+ users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;