import Image from 'next/image'
import React from 'react'

import bannerImage from '../public/images/banner.png'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center justify-between p-4 h-auto md:h-[80vh]'>
            <div className='space-y-5 text-center md:text-left'>
                <h1 className='text-[40px] md:text-[70px] text-white font-bold leading-tight md:leading-20 font-display'>
                    Transform Your <span className='text-primary'>Nursing Care Operations</span> with Ease.
                </h1>
                <h3 className='text-[18px] md:text-[22px] text-white font-light font-secondary'>
                    <span className='font-bold'>All-in-one</span> platform to <span className='font-bold'>manage clients, employees, appointments,</span> and <span className='font-bold'>forms.</span> Built for modern <span className='font-bold'>domiciliary</span> and <span className='font-bold'>home care </span>services.
                </h3>
                <div className='gap-3 md:gap-5 flex flex-col md:flex-row justify-center md:justify-start'>
                    <Link className="btn-primary" href='#'>
                        Book An Appointment
                    </Link>
                    <Link className="btn-secondary" href='#'>
                        Contact
                    </Link>
                </div>
            </div>
            <div className='w-full md:w-auto flex justify-center'>
                <Image src={bannerImage} alt='Banner Image' width={1000} className='max-w-full h-auto' />
            </div>
        </div>
    )
}

export default Banner