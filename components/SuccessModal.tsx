import React, { useEffect } from 'react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
    
    // Prevent scrolling when modal is open
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

    const socialIcons = [
        { name: 'WhatsApp', href: 'https://wa.me/573207200266?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20personalizada%20sobre%20The%20Velvet%20Studio.%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20interesa%20conocer%20los%20requisitos%20para%20iniciar%20mi%20proceso%20de%20postulaci%C3%B3n.%20Gracias.', target: '_blank', icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /> },
        { name: 'Instagram', href: 'https://instagram.com/thevelvetstudio.co', target: '_blank', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path> },
        { name: 'TikTok', href: 'https://tiktok.com/@thevelvetstudio.co', target: '_blank', icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.8.2-.67.33-1.24.93-1.51 1.62-.28.53-.35 1.13-.35 1.72.01.64.18 1.29.5 1.83.54.82 1.43 1.39 2.39 1.54.91.13 1.86-.1 2.62-.61.64-.42 1.08-1.06 1.3-1.8.12-.41.17-.83.17-1.25.02-3.97.01-7.93.01-11.9z"></path> },
        { name: 'Twitter', href: 'https://twitter.com/thevelvetstudi', target: '_blank', icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path> },
        { name: 'YouTube', href: 'https://www.youtube.com/@TheVelvetStudioManizales', target: '_blank', icon: <path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z"/> },
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop - Darker and blurred to match the image's immersive feel */}
            <div 
                className="absolute inset-0 bg-[#02040a]/98 backdrop-blur-md animate-fadeIn"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl bg-transparent flex flex-col items-center justify-center text-center animate-scaleIn z-10">
                
                {/* Icon Circle */}
                <div className="size-24 rounded-full border border-accent/30 bg-[#0a0f1c] flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(255,215,0,0.05)] relative">
                     <div className="absolute inset-0 rounded-full border border-accent/10 blur-[1px]"></div>
                     <span className="material-symbols-outlined text-4xl text-accent font-light">check</span>
                </div>

                {/* Title - Big Bold Typography */}
                <h2 className="text-4xl md:text-6xl font-black font-display text-white mb-6 uppercase tracking-widest drop-shadow-2xl leading-tight">
                    ¡Postulación <br className="md:hidden" /> Recibida!
                </h2>

                {/* Body Text */}
                <p className="text-stone-300 font-body text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
                    Tu camino hacia el éxito tangible ha comenzado. Nuestro equipo de selección revisará tu perfil y se pondrá en contacto contigo vía WhatsApp en menos de 24 horas.
                </p>

                {/* Disclaimer Text - Increased size */}
                <p className="text-xs md:text-sm text-gray-400 font-body tracking-wider mb-12">
                    Revisa tu bandeja de spam si no recibes respuesta pronto.
                </p>

                {/* Social Media Section */}
                <div className="flex flex-col items-center gap-6 mb-12">
                    <span className="text-accent text-sm font-bold uppercase tracking-[0.3em] font-display">SÍGUENOS</span>
                    <div className="flex items-center gap-5">
                        {socialIcons.map((social) => (
                            <a key={social.name} href={social.href} target={social.target} rel="noreferrer" aria-label={social.name} className="flex items-center justify-center size-11 rounded-full border border-white/30 text-white hover:border-accent hover:text-accent transition-all duration-300">
                                <svg className={`size-5 md:size-6 ${social.name === 'YouTube' ? 'scale-125' : ''}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    {social.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
                    {/* Primary Button - Matched with Application Form Button style */}
                    <button 
                        onClick={onClose}
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(75,0,130,0.4)] hover:shadow-[0_0_30px_rgba(75,0,130,0.6)] transition-all transform hover:-translate-y-1 relative overflow-hidden group border border-white/10 min-w-[240px] font-display"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Volver al inicio
                        </span>
                    </button>
                </div>
            </div>
            
            <style>{`
                @keyframes scaleIn {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
};