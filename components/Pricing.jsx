import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    const pricingData = {
        basePlan: {
            price: 1499,
            originalPrice: 2099,
            period: 'yearly',
            savings: '24%',
            cta: 'Book A Meeting',
            link: 'https://wa.me/message/3V4KLRGQ6IBEP1'
        },
        features: [
            'Complete client & employee management system',
            'Care plans creation and management',
            'Appointment scheduling with location tracking (employees & clients)',
            'Attendance system with GPS clock in/out & location matrix',
            'Form creation & digital submission',
            'User assignment to employees',
            'Mobile app access (central app - iOS & Android) - No hassle, we handle all updates',
            'Professional website + Management portal setup',
            'GPS location tracking for appointments & attendance',
            'Secure cloud storage with daily backups',
            'Full customization based on your requirements',
            '24/7 priority support & ongoing updates'
        ],
        stats: [
            { value: '87%', label: 'Reduction in admin time' },
            // { value: '62%', label: 'Fewer scheduling errors' },
            { value: '4.9/5', label: 'User satisfaction' }
        ]
    };

    return (
        <section id='pricing' className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                        Bespoke Pricing Tailored to Your Needs
                    </h1>
                    <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary max-w-3xl mx-auto">
                        Starting from £{pricingData.basePlan.price}/year - <span className="font-bold">Every package is fully customized</span> based on your requirements. Website, portal, mobile app, and all features included.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {/* Price Card */}
                    <div className="bg-[#E4E4E4]/5 border border-gray-300 rounded-xl p-8 text-center text-white hover:border-primary/50 transition-all duration-300">
                        <div className="mb-6">
                            <span className="bg-primary/20 text-primary px-3 py-1.5 rounded-full text-sm font-semibold border border-primary/30 inline-block">
                                Fully Bespoke
                            </span>
                        </div>
                        <h2 className="text-xl font-bold font-primary mb-4">Starting From</h2>
                        <div className="flex items-end justify-center gap-2 mb-3">
                            <span className="text-5xl md:text-6xl font-bold font-secondary">£{pricingData.basePlan.price}</span>
                            <span className="text-gray-400 line-through text-xl pb-1">£{pricingData.basePlan.originalPrice}</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold font-primary text-primary text-lg">SAVE {pricingData.savings}</span>
                            <p className="text-sm text-gray-300 mt-1">billed {pricingData.basePlan.period}</p>
                        </div>
                        <p className="text-xs text-gray-400 mb-6 px-2">
                            *Final price customized based on your specific requirements
                        </p>
                        <Link
                            href={pricingData.basePlan.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300 inline-block text-center"
                        >
                            Get Custom Quote
                        </Link>
                    </div>

                    {/* Features Card */}
                    <div className="lg:col-span-2 bg-[#E4E4E4]/5 border border-gray-300 rounded-xl p-6 md:p-8 text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-6">Everything Included:</h3>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {pricingData.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="w-5 h-5 bg-primary rounded-full mt-0.5 flex-shrink-0"></span>
                                    <span className="font-secondary text-sm md:text-base text-gray-300 leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-700">
                            {pricingData.stats.map((stat, index) => (
                                <div key={index} className="bg-[#ffffff08] p-4 rounded-lg text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Setup Info */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 md:p-8 mb-6">
                        <h3 className="text-white font-bold text-lg md:text-xl mb-4">What's Included in Setup:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start gap-2">
                                <span className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                                <span className="text-sm text-gray-300">Professional website design & deployment</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                                <span className="text-sm text-gray-300">Management portal configuration</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                                <span className="text-sm text-gray-300">Mobile app access & setup (central app, no hassle)</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                                <span className="text-sm text-gray-300">Team training & onboarding</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base text-center max-w-2xl mx-auto">
                        <strong className="text-white">Remember:</strong> Every package is <strong className="text-primary">fully customizable</strong> based on your specific needs. We tailor features, workflows, and design to match your business perfectly. Book a consultation to discuss your requirements and get an accurate quote.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;