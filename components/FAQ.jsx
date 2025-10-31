"use client"

import React, { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import Link from 'next/link'
import { RiWhatsappLine } from "react-icons/ri"

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How much does the system cost?",
            answer: "Starting from £1,499/year with significant savings on annual billing. However, since this is a fully bespoke solution, the final price depends on your specific requirements. We'll provide a custom quote based on features, customization level, and setup needs. Book a free consultation to get an accurate estimate tailored to your business."
        },
        {
            question: "What's included in the setup?",
            answer: "Everything! We handle your professional website setup (domain.com), management portal configuration (domain.com/login), mobile app access setup, initial data migration, team training, and ongoing support. You'll have a complete, branded solution ready to use. We ensure everything is working perfectly before handover. The mobile app is a central app—we give you access and handle all updates automatically, so you have no hassle."
        },
        {
            question: "How customizable is the system?",
            answer: "Fully customizable. This is a bespoke solution built specifically for your needs. We can add or modify features, customize forms and workflows, integrate with existing systems, adjust branding, and create custom reports. Tell us what you need, and we'll build it. Ongoing customization is also available as your business evolves."
        },
        {
            question: "Do I get a mobile app?",
            answer: "Yes! You get access to our central mobile app (iOS & Android) that's currently under development. Initially launching with merchant/admin access. This allows admins to monitor attendance with location tracking, view appointment completions and locations, and manage operations on-the-go. Employee app access and portal app are coming in future updates. Best part? We handle all app updates automatically—you just use it, no hassle. We upgrade the system on our own and updates are available to you automatically with zero downtime."
        },
        {
            question: "How long does implementation take?",
            answer: "You can start immediately! We'll have your system up and running within 3-5 days. Once you're live, we'll update the system with additional features and customizations one by one as you need them. All updates are deployed automatically with zero downtime, so your operations continue uninterrupted. This approach means you can begin managing your care operations right away while we continue to enhance the system based on your evolving needs."
        },
        {
            question: "What kind of support do you provide?",
            answer: "We offer 24/7 priority support. This includes technical assistance, feature updates, bug fixes, and ongoing customization. Our team is always available to help ensure your system runs smoothly. We also provide regular updates and new features as your business needs evolve."
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely. We use enterprise-grade encryption for all data, both in transit and at rest. Our systems include role-based access controls, audit logs, and secure data storage. Regular security audits ensure ongoing protection of sensitive information. Your data is always safe and accessible only to authorized users."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary">
                        Everything you need to know about our <span className="font-bold">bespoke nursing care management system</span>
                    </p>
                </div>

                <div className="space-y-4 mb-10">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-[#E4E4E4]/5 to-[#E4E4E4]/10 border border-gray-300 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-white font-bold text-lg pr-4">{faq.question}</span>
                                <div className="text-primary flex-shrink-0">
                                    {openIndex === index ? (
                                        <MdExpandLess className="text-2xl" />
                                    ) : (
                                        <MdExpandMore className="text-2xl" />
                                    )}
                                </div>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-gray-300 font-light leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-8 text-center">
                    <h3 className="text-2xl text-white font-bold mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-gray-300 mb-6 font-light">
                        We're here to help! Book a free consultation to discuss your specific needs and get all your questions answered.
                    </p>
                    <Link
                        href="https://wa.me/message/3V4KLRGQ6IBEP1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors duration-300 justify-center"
                    >
                        <RiWhatsappLine className="text-xl" />
                        Book Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FAQ

