import React from 'react';
import { Shield, Award, ThumbsUp, CheckCircle, Flame } from 'lucide-react';

const TrustBadges: React.FC = () => {
    return (
        <div className="bg-white border-b border-slate-200 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-slate-500">
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                        <Shield className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-700">Fully Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                        <Award className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-700">BBB A+ Rated</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                        <Flame className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-700">Owens Corning Preferred</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                        <ThumbsUp className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-700">100% Satisfaction</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                        <CheckCircle className="w-8 h-8 text-brand-primary" />
                        <span className="font-bold text-sm uppercase tracking-wider text-slate-700">Lifetime Warranties</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustBadges;
