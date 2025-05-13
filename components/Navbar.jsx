import Image from 'next/image';
import React from 'react';
import logo from '../public/images/logowhite.png';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="container mx-auto flex justify-between items-center p-4 text-white font-secondary">
            <div className="text-xl font-bold">
                <Image src={logo} alt='logo' width={150} />
            </div>
            <div className="flex gap-14 font-medium">
                <a href="#home" className="text-white hover:underline">Solution</a>
                <a href="#about" className="text-white hover:underline">Services & Support</a>
                <a href="#contact" className="text-white hover:underline">Why aviora?</a>
            </div>
            <div>
                <Link className="btn-primary" href='#'>
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
