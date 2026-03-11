import React from 'react';
import { AlertTriangle, PhoneCall } from 'lucide-react';

const EmergencyBanner: React.FC = () => {
    return (
        <div className="bg-red-600 text-white py-2 px-4 text-center text-sm md:text-base font-medium flex items-center justify-center gap-3 relative z-50 shadow-md">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
            <span>
                <strong>24/7 EMERGENCY REPAIR CALL OUT:</strong> Storm, Wind, or Leak Damage? We dispatch immediately.
            </span>
            <a href="tel:5551234567" className="hidden md:flex ml-4 items-center gap-2 bg-red-700 hover:bg-red-800 px-3 py-1 rounded-full transition-colors font-bold shadow-sm">
                <PhoneCall className="w-4 h-4" /> (555) 123-4567
            </a>
        </div>
    );
};

export default EmergencyBanner;
