import React from 'react';
import Image from 'next/image';
import image from "@/public/images/pricing.png";

const Pricing = () => {
    return (
        <section className="relative mb-[550px] md:mb-72">
            {/* Background Section */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt="Pricing Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className="absolute inset-0 bg-green-700 opacity-80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold font-primary">
                        Simple pricing for your business
                    </h1>
                    <p className="text-[14px] md:text-[18px] font-secondary lg:text-[20px] mt-2">
                        Plans that are carefully crafted to suit your business.
                    </p>
                </div>
            </div>

            {/* Pricing Card Section */}
            <div className="container mx-auto max-w-5xl absolute top-[200%] md:top-[110%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 rounded-lg">
                    <div className="bg-[#E4E4E40D] p-10 text-center text-white md:col-span-1">
                        <h2 className="text-lg font-bold font-secondary">Starting From</h2>
                        <div className="flex items-center justify-center space-x-2 mt-4">
                            <span className="text-5xl font-bold font-secondary">£1099</span>
                            <span className="text-gray-400 line-through">£1590</span>
                        </div>
                        <button className="btn-secondary mt-6">
                            Book A Meeting Call
                        </button>
                    </div>

                    <div className='bg-[#E4E4E40D] p-8 text-white md:col-span-2 flex flex-col justify-center rounded-lg'>
                        <p className="text-gray-300 mt-4 font-secondary">
                            Access these features when you get this pricing package for your business.
                        </p>
                        <ul className="mt-6 space-y-5">
                            <li className="flex items-center space-x-2">
                                <span className="w-5 h-5 bg-green-500 rounded-full"></span>
                                <span className='font-secondary font-light text-[18px]'>Type 1 details about advantage</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-5 h-5 bg-green-500 rounded-full"></span>
                                <span className='font-secondary font-light text-[18px]'>Type 2 details about advantage</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-5 h-5 bg-green-500 rounded-full"></span>
                                <span className='font-secondary font-light text-[18px]'>Type 3 details about advantage</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-5 h-5 bg-green-500 rounded-full"></span>
                                <span className='font-secondary font-light text-[18px]'>24/7 support and consulting</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;