import React, { useEffect } from 'react';

interface CareersModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    const positions = [
        {
            title: "Modelo de Estudio",
            type: "Presencial (Manizales)",
            desc: "Trabaja desde nuestras instalaciones de lujo con equipos de última generación (4K, Robótica). Accede a estilismo profesional, soporte 24/7 y maximiza tus ingresos en un ambiente seguro y exclusivo.",
            tags: ["Ingresos en USD", "Sin experiencia", "Manizales"]
        },
        {
            title: "Modelo Satélite",
            type: "Remoto / Home Office",
            desc: "Transmite desde la comodidad de tu casa con el respaldo total de nuestra agencia. Te brindamos soporte técnico, asesoría en tráfico y gestión de pagos segura, sin sacrificar tu independencia.",
            tags: ["Flexibilidad", "Soporte Remoto", "Ingresos en USD"]
        },
        {
            title: "Monitor",
            type: "Tiempo Completo / Rotativo",
            desc: "Sé el guía estratégico de nuestras modelos. Buscamos personas con experiencia en la industria, habilidades de liderazgo y nivel de inglés intermedio/avanzado para potenciar el rendimiento del equipo.",
            tags: ["Liderazgo", "Estrategia", "Bilingüe"]
        }
    ];

    const scrollToApply = () => {
        onClose();
        const element = document.getElementById('apply');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const handleShare = async () => {
        const shareUrl = `${window.location.origin}/carreras`;
        const shareData = {
            title: 'Carreras - The Velvet Studio',
            text: 'Únete al equipo de The Velvet Studio. Buscamos modelos y monitores bilingües.',
            url: shareUrl,
        };
        if (navigator.share) {
            try { await navigator.share(shareData); } catch (err) {}
        } else {
            try {
                await navigator.clipboard.writeText(shareUrl);
                alert('¡Enlace copiado al portapapeles!');
            } catch (err) {}
        }
    };

    const handleGoHome = () => {
        onClose();
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300" onClick={onClose}></div>
            
            <div className="relative w-full max-w-4xl bg-[#0e1324] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(75,0,130,0.3)] max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col animate-[fadeIn_0.3s_ease-out]">
                
                {/* Header Image */}
                <div className="relative h-48 shrink-0 overflow-hidden rounded-t-3xl">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Team" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1324] via-[#0e1324]/50 to-transparent"></div>
                    
                    <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
                        <button 
                            onClick={handleGoHome}
                            title="Ir al inicio"
                            className="p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                        >
                            <span className="material-symbols-outlined">home</span>
                        </button>
                        <button 
                            onClick={handleShare}
                            title="Compartir"
                            className="p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                        >
                            <span className="material-symbols-outlined">share</span>
                        </button>
                        <button 
                            onClick={onClose}
                            title="Cerrar"
                            className="p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-all border border-white/5"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div className="absolute bottom-6 left-6 md:left-10">
                        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block font-display">CARRERAS</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white font-display">Únete al Equipo</h2>
                    </div>
                </div>

                <div className="p-6 md:p-10 space-y-8">
                    <p className="text-stone-300 text-lg font-light leading-relaxed border-l-4 border-primary pl-4">
                        ¿Buscas más que un trabajo? En The Velvet Studio construimos carreras. Ofrecemos un ambiente de respeto, crecimiento y tecnología de punta.
                    </p>

                    <div className="grid gap-4">
                        {positions.map((job, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/5 hover:border-accent/30 rounded-xl p-6 transition-all group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white font-display group-hover:text-accent transition-colors">{job.title}</h3>
                                        <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">{job.type}</p>
                                        <p className="text-gray-400 text-sm max-w-xl">{job.desc}</p>
                                        <div className="flex gap-2 mt-3">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-black/30 rounded text-[10px] text-gray-300 border border-white/5">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <button 
                                        onClick={scrollToApply}
                                        className="px-6 py-2 bg-white text-secondary font-bold text-sm rounded-lg hover:bg-accent transition-colors shrink-0 whitespace-nowrap"
                                    >
                                        Aplicar Ahora
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-primary/20 to-purple-900/20 p-6 rounded-xl border border-white/5 text-center">
                        <h4 className="text-white font-bold mb-2">¿No ves tu rol ideal?</h4>
                        <p className="text-gray-400 text-sm mb-4">Siempre buscamos talento excepcional. Envíanos tu propuesta.</p>
                        <a href="mailto:thevelvetstudio8@gmail.com" className="text-accent hover:text-white text-sm font-medium transition-colors border-b border-accent hover:border-white pb-0.5">thevelvetstudio8@gmail.com</a>
                    </div>

                    <div className="text-center pt-8 border-t border-white/10">
                        <button 
                            onClick={onClose}
                            className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white text-sm font-bold uppercase tracking-wider transition-all shadow-lg backdrop-blur-md flex items-center gap-2 mx-auto"
                        >
                            Cerrar y volver al sitio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
