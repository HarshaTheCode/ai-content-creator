import React from 'react';
import SpotlightCard from './ui/SpotlightCard';
import ScrollAnimation from './ui/ScrollAnimation';

const FeaturesSection = () => {
    const features = [
        {
            title: "ATS-Friendly Architecture",
            description: "Beat the bots. Our resumes are engineered with clean code and standardized formatting to ensure you pass Applicant Tracking Systems every time."
        },
        {
            title: "AI-Powered Content",
            description: "Writer's block is history. Generate professional summaries and bullet points tailored to your industry with advanced AI assistance."
        },
        {
            title: "Instant Professional Formatting",
            description: "Focus on your experience, not the margins. We handle the layout, typography, and spacing automatically for a polished look."
        }
    ];

    return (
        <section className="py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-20">
                    <ScrollAnimation animation="fade-up" delay={0}>
                        <span className="inline-block py-1 px-3 rounded-full bg-white text-black text-xs font-bold mb-6">
                            Platform
                        </span>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fade-up" delay={100}>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                            Engineered for Success
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fade-up" delay={200}>
                        <p className="text-xl text-zinc-400 max-w-2xl">
                            We don't just build resumes; we build careers. Experience the difference of a platform designed for the modern job market.
                        </p>
                    </ScrollAnimation>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <ScrollAnimation key={index} animation="fade-up" delay={300 + (index * 100)} className="h-full">
                            <SpotlightCard className="h-full">
                                <div className="flex flex-col gap-6">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800/50 text-white ring-1 ring-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-white">
                                            {feature.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
