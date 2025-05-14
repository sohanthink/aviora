import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-gray-300 py-20">
            <div className="container mx-auto px-10">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white">aviora</h2>
                        <p className="text-sm mt-2 text-gray-400">
                            Transforming nursing care operations with ease.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Footer Links */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Contact Us
                        </a>
                    </div>
                    <div className="text-center md:text-right">
                        © 2025 aviora AI. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;