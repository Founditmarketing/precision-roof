import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    const reviews = [
        {
            name: "Marcus T.",
            role: "Homeowner",
            text: "Precision Roof Structure replaced our entire roof in 2 days. The crew was incredibly respectful, and the magnetic sweep at the end meant my kids could play in the yard immediately safely. Top tier work.",
            stars: 5,
        },
        {
            name: "Sarah Jenkins",
            role: "Commercial Property Manager",
            text: "As a property manager, finding reliable contractors is a nightmare. Precision handled a massive TPO flat roof repair for us with zero interruption to our tenants. They are our go-to for all 15 of our buildings now.",
            stars: 5,
        },
        {
            name: "David & Laura M.",
            role: "Homeowners",
            text: "After a severe hail storm, they were at our house within 2 hours. They walked us through the entire insurance process and fought to get our roof fully covered. The new architectural shingles look better than the original.",
            stars: 5,
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-sm">Client Success</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Don't Just Take Our Word For It</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative">
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 rotate-180" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.stars)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                                ))}
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-8 italic relative z-10">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark">{review.name}</h4>
                                    <p className="text-sm text-slate-500">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
