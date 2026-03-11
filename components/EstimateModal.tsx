import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Home, Building2, MapPin, Calendar, CheckCircle } from 'lucide-react';

interface EstimateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: '',
        age: '',
        zip: '',
        name: '',
        email: '',
        phone: ''
    });

    if (!isOpen) return null;

    const handleNext = () => setStep(prev => prev + 1);
    const handlePrev = () => setStep(prev => prev - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(5); // Success step
    };

    const updateForm = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl relative z-10 overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-brand-dark p-6 text-white flex justify-between items-center">
                    <div>
                        <h3 className="font-heading font-bold text-xl">Instant Estimate Calculator</h3>
                        {step < 5 && <p className="text-brand-primary text-sm mt-1">Step {step} of 4</p>}
                    </div>
                    <button onClick={onClose} className="text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Progress Bar */}
                {step < 5 && (
                    <div className="w-full bg-slate-100 h-1.5">
                        <div
                            className="bg-brand-primary h-1.5 transition-all duration-300"
                            style={{ width: `${(step / 4) * 100}%` }}
                        ></div>
                    </div>
                )}

                {/* Body */}
                <div className="p-8 pb-10 flex-grow">

                    {step === 1 && (
                        <div className="animate-fade-in-up">
                            <h4 className="text-2xl font-bold text-brand-dark mb-6 text-center">What type of property is this for?</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => { updateForm('type', 'Residential'); handleNext(); }}
                                    className={`p-6 border-2 rounded-2xl flex flex-col items-center gap-4 transition-all ${formData.type === 'Residential' ? 'border-brand-primary bg-brand-primary/5 text-brand-dark' : 'border-slate-200 hover:border-brand-primary/50 text-slate-500'}`}
                                >
                                    <Home className={`w-12 h-12 ${formData.type === 'Residential' ? 'text-brand-primary' : 'text-slate-400'}`} />
                                    <span className="font-bold text-lg">Residential</span>
                                </button>
                                <button
                                    onClick={() => { updateForm('type', 'Commercial'); handleNext(); }}
                                    className={`p-6 border-2 rounded-2xl flex flex-col items-center gap-4 transition-all ${formData.type === 'Commercial' ? 'border-brand-primary bg-brand-primary/5 text-brand-dark' : 'border-slate-200 hover:border-brand-primary/50 text-slate-500'}`}
                                >
                                    <Building2 className={`w-12 h-12 ${formData.type === 'Commercial' ? 'text-brand-primary' : 'text-slate-400'}`} />
                                    <span className="font-bold text-lg">Commercial</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-fade-in-up">
                            <h4 className="text-2xl font-bold text-brand-dark mb-6 text-center">How old is your current roof?</h4>
                            <div className="space-y-3">
                                {['Under 10 Years', '10 - 15 Years', '15 - 20 Years', 'Over 20 Years (or Leaking)'].map((ageOption) => (
                                    <button
                                        key={ageOption}
                                        onClick={() => { updateForm('age', ageOption); handleNext(); }}
                                        className={`w-full p-4 border-2 rounded-xl text-left font-semibold transition-all flex items-center gap-3 ${formData.age === ageOption ? 'border-brand-primary bg-brand-primary/5 text-brand-dark' : 'border-slate-200 hover:border-brand-primary/50 text-slate-600'}`}
                                    >
                                        <Calendar className={`w-5 h-5 ${formData.age === ageOption ? 'text-brand-primary' : 'text-slate-400'}`} />
                                        {ageOption}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-fade-in-up">
                            <h4 className="text-2xl font-bold text-brand-dark mb-6 text-center">Where is the project located?</h4>
                            <div>
                                <label className="block font-bold text-slate-700 mb-2">Zip Code</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        value={formData.zip}
                                        onChange={(e) => updateForm('zip', e.target.value)}
                                        placeholder="Enter 5-digit zip code"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-brand-primary outline-none transition-colors text-lg font-medium"
                                        maxLength={5}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={handleNext}
                                disabled={formData.zip.length < 5}
                                className="w-full mt-6 bg-brand-primary text-brand-dark py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continue <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="animate-fade-in-up">
                            <h4 className="text-2xl font-bold text-brand-dark mb-2 text-center">Where should we send your estimate?</h4>
                            <p className="text-center text-slate-500 mb-6">Your data is secure and will never be shared.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block font-bold text-slate-700 mb-1 text-sm">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => updateForm('name', e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700 mb-1 text-sm">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => updateForm('email', e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700 mb-1 text-sm">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => updateForm('phone', e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-primary outline-none transition-colors"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-brand-dark text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center shadow-xl hover:bg-slate-800 transition-colors"
                                >
                                    Get My Free Estimate
                                </button>
                            </form>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="animate-fade-in-up text-center py-8">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h4 className="text-3xl font-bold text-brand-dark mb-4">Request Received!</h4>
                            <p className="text-slate-600 text-lg mb-8">
                                Thanks {formData.name.split(' ')[0] || 'there'}! Our estimators will review your details and contact you within 24 hours with your preliminary assessment and to schedule a free drone inspection.
                            </p>
                            <button
                                onClick={onClose}
                                className="bg-slate-100 text-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-slate-200 transition-colors"
                            >
                                Return to Website
                            </button>
                        </div>
                    )}

                </div>

                {/* Footer controls */}
                {step > 1 && step < 5 && (
                    <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-start">
                        <button
                            onClick={handlePrev}
                            className="text-slate-500 font-medium flex items-center gap-1 hover:text-brand-dark transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default EstimateModal;
