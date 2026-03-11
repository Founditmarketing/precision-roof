import React from 'react';
import { DollarSign, Clock, Percent } from 'lucide-react';

const Financing: React.FC = () => {
    return (
        <section className="py-20 bg-brand-dark text-white border-y-[6px] border-brand-primary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <div className="lg:w-1/2">
                        <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-sm">Flexible Payment Plans</h2>
                        <h3 className="text-4xl font-heading font-bold mb-6">Protect Your Home Now. Pay Later.</h3>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            A damaged roof can't wait. We've partnered with top lenders to offer flexible, low-interest financing options so you don't have to compromise on quality or safety due to budget constraints.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-xl text-brand-primary border border-white/5">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl">$0 Down Options Available</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-xl text-brand-primary border border-white/5">
                                    <Percent className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl">0% Interest for up to 18 Months</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-xl text-brand-primary border border-white/5">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl">Instant Approvals in Under 5 Minutes</h4>
                                </div>
                            </div>
                        </div>

                        <button className="mt-10 px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                            Apply For Financing
                        </button>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent blur-3xl rounded-full"></div>
                        <img
                            src="/images/modern_estate_roof_1773241896985.png"
                            alt="Beautiful financed roof"
                            className="rounded-2xl shadow-2xl relative z-10 border border-white/10"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Financing;
