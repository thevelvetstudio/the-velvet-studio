import React, { useEffect } from 'react';

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    const posts = [
        {
            title: "Dominando el Algoritmo: Secretos del Tráfico Orgánico",
            category: "Estrategia",
            date: "Mar 15, 2024",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            excerpt: "Deja de depender de la suerte. Aprende cómo funcionan los algoritmos de las plataformas top y qué horarios, etiquetas y comportamientos te posicionan en la primera página."
        },
        {
            title: "Salud Mental y 'Burnout': Guía de Supervivencia",
            category: "Bienestar",
            date: "Feb 28, 2024",
            image: "https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=2070&auto=format&fit=crop",
            excerpt: "El modelaje webcam es exigente. Descubre técnicas de desconexión digital y manejo emocional para mantener tu energía vibrante y evitar el agotamiento profesional."
        },
        {
            title: "Finanzas Inteligentes: De Tokens a Inversiones Reales",
            category: "Finanzas",
            date: "Feb 10, 2024",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
            excerpt: "No solo se trata de ganar, sino de multiplicar. Consejos prácticos sobre ahorro, impuestos y cómo diversificar tus ingresos en dólares para asegurar tu futuro."
        },
        {
            title: "El Poder del 'Branding' Personal en Redes Sociales",
            category: "Marketing",
            date: "Ene 25, 2024",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
            excerpt: "Cómo construir una marca personal irresistible en Twitter e Instagram sin comprometer tu privacidad, atrayendo usuarios premium directo a tu sala."
        }
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300" onClick={onClose}></div>
            
            <div className="relative w-full max-w-6xl bg-[#0e1324] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(75,0,130,0.3)] max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col animate-[fadeIn_0.3s_ease-out]">
                
                {/* Header */}
                <div className="p-6 md:p-8 flex justify-between items-end border-b border-white/10 sticky top-0 bg-[#0e1324]/95 backdrop-blur z-20">
                    <div>
                        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1 block font-display">The Velvet Insider</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white font-display">Blog & Novedades</h2>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {posts.map((post, idx) => (
                        <div key={idx} className="group bg-black/20 rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all cursor-pointer flex flex-col">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase font-bold text-white border border-white/10">
                                    {post.category}
                                </div>
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1324] to-transparent opacity-80"></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-gray-500 text-xs mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[14px]">calendar_today</span> {post.date}
                                </div>
                                <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-accent transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <span className="text-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Leer Artículo <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6 md:p-10 pt-0">
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
