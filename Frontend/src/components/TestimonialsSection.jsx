import { useRef } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "This resume builder completely transformed my job search. The ATS-friendly templates are a game-changer!"
    },
    {
        id: 2,
        name: "David Chen",
        role: "Product Manager",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "I landed interviews at top tech companies thanks to the professional formatting. Highly recommended!"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Simple, fast, and effective. The AI suggestions helped me articulate my achievements perfectly."
    },
    {
        id: 4,
        name: "Michael Chang",
        role: "Data Scientist",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        text: "The best resume tool I've used. Clean designs that actually get read by recruiters."
    },
    {
        id: 5,
        name: "Jessica Lee",
        role: "UX Designer",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        text: "As a designer, I'm picky about aesthetics. These templates are clean, modern, and professional."
    }
];

const TestimonialsSection = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 400; // Adjust scroll amount as needed
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-20   bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-15 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Loved by Professionals
                        </h2>
                        <p className="text-gray-300 max-w-lg">
                            See what our users have to say about their experience building resumes with our AI-powered tool.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-6 md:mt-0">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm group cursor-pointer"
                            aria-label="Scroll left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm group cursor-pointer"
                            aria-label="Scroll right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="min-w-[350px] md:min-w-[400px] p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md snap-start hover:border-white/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border border-white/30"
                                />
                                <div>
                                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-200">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-white leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            <div className="mt-6 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
