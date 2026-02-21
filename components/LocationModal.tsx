import React, { useEffect } from 'react';

interface LocationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl bg-[#0e1324] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(139,0,0,0.2)] max-h-[90vh] overflow-y-auto custom-scrollbar animate-[fadeIn_0.3s_ease-out] flex flex-col">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-primary/20 hover:text-red-400 transition-all border border-white/5 backdrop-blur-sm"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Header Image Area */}
                <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-t-3xl shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0e1324]"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1629814596180-2d88d308064d?q=80&w=2070&auto=format&fit=crop" 
                        alt="Manizales Catedral" 
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-900/30 mix-blend-overlay"></div>
                    
                    <div className="absolute bottom-6 left-6 md:left-10 z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-accent text-xl">location_on</span>
                            <span className="text-xs font-bold text-accent uppercase tracking-[0.2em] font-display">Headquarters</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white font-display drop-shadow-xl">
                            Manizales
                        </h2>
                        <p className="text-gray-200 font-light text-sm md:text-lg tracking-wide">Colombia • Eje Cafetero</p>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-10 space-y-8">
                    
                    {/* Description */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1 space-y-4">
                            <h3 className="text-xl font-bold text-white font-display border-b border-white/10 pb-2">Ubicación Estratégica</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Nuestra sede principal se encuentra en el corazón del Eje Cafetero. Manizales ofrece el equilibrio perfecto entre calidad de vida, seguridad y privacidad.
                            </p>
                            <ul className="space-y-3 pt-2">
                                {[
                                    { icon: 'verified_user', text: 'Zona Segura y Exclusiva' },
                                    { icon: 'router', text: 'Fibra Óptica Dedicada' },
                                    { icon: 'cottage', text: 'Instalaciones de Lujo' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Map Container */}
                        <div className="md:col-span-2 h-64 md:h-full min-h-[250px] rounded-2xl overflow-hidden border border-white/10 relative group">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63632.75836896263!2d-75.55280244795995!3d5.068696803875868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476ffa6d23f791%3A0x627df8fb95b28121!2sManizales%2C%20Caldas!5e0!3m2!1ses!2sco!4v1709920000000!5m2!1ses!2sco&dark=true" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) hue-rotate(180deg)' }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="group-hover:filter-none transition-all duration-700"
                            ></iframe>
                            
                            {/* Map Overlay Text */}
                            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full border border-white/10 pointer-events-none">
                                The Velvet Studio HQ
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-6 border-t border-white/5">
                        <p className="text-xs text-gray-500">Visitas solo con cita previa verificada.</p>
                        <button 
                            onClick={onClose}
                            className="px-6 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white text-xs md:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                        >
                            Cerrar y volver al sitio
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};