import React, { useEffect } from 'react';

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
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
            <div className="relative w-full max-w-5xl bg-[#0e1324] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(75,0,130,0.3)] max-h-[90vh] overflow-y-auto custom-scrollbar animate-[fadeIn_0.3s_ease-out]">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-all border border-white/5"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Header Image/Gradient Area */}
            <div className="relative h-48 md:h-64 overflow-hidden rounded-t-3xl">
                {/* 1. Fondos (Gradientes e Imagen) */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-900 to-background-dark opacity-80"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598550476439-cce8bd2deb1d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0e1324] to-transparent"></div>

                {/* 2. NUEVO: Logo Centrado */}
                {/* Usamos 'pointer-events-none' para que el logo no bloquee clics si cubre algo */}
                {/* 2. NUEVO: Logo Centrado Arriba y Más Grande */}
                {/* Cambié 'items-center' por 'items-start' y añadí 'pt-1' para subirlo */}
                <div className="absolute inset-0 flex items-start justify-center z-10 pointer-events-none pt-1 md:pt-12">
                    <img 
                        src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771403608/The_Velvet_Studio_-_Logo_transparente_sombra_-_Variaci%C3%B3n_ytidgu.png" 
                        alt="Logo Velvet" 
                        /* Aumenté el tamaño: de w-24/w-32 a w-60/w-80 */
                        className="w-60 md:w-80 opacity-90 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                    />
                </div>

                {/* 3. Contenido de Texto (Abajo a la izquierda) */}
                <div className="absolute bottom-0 left-6 md:left-12 z-20">
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/30 px-3 py-1 backdrop-blur-md mb-3">
                        <span className="material-symbols-outlined text-accent text-sm">verified</span>
                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider font-display">Tecnología & Distinción</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white font-display drop-shadow-lg">
                        Sobre Nosotros
                    </h2>
                    <p className="text-gray-300 font-light text-sm md:text-base mt-1">La Evolución de la Industria Webcam</p>
                </div>
            </div>

                {/* Body Content */}
                <div className="p-6 md:p-12 space-y-12">
                    
                    {/* Intro */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-4 border-accent pl-6">
                            En <strong className="text-white">The Velvet Studio</strong>, no solo gestionamos talento; redefinimos el estándar de la industria webcam bajo una premisa de exclusividad, elegancia y tecnología de punta. Con sede en Manizales, nuestra agencia boutique nace para transformar la creación de contenido en vivo en una carrera profesional de alto impacto y un estilo de vida superior.
                        </p>
                    </div>

                    {/* Innovation Section */}
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-700"></div>
                        
                        <div className="relative z-10">
                            <div className="size-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                                <span className="material-symbols-outlined text-white">smart_toy</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-display">Innovación Visual sin Precedentes</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Nos diferenciamos por ofrecer una experiencia visual superior. Somos pioneros en la implementación de <span className="text-white font-medium">tecnología robótica integrada con Inteligencia Artificial</span>, permitiendo encuadres inteligentes y dinámicos que resaltan lo mejor de cada modelo.
                            </p>
                        </div>
                        <div className="relative z-10 border-l border-white/10 md:pl-8">
                            <p className="text-gray-400 text-sm leading-relaxed">
                                En un mundo saturado de contenido, nosotros garantizamos la máxima fidelidad con transmisiones en <span className="text-accent font-bold">ultra alta definición 4K</span>, asegurando que cada detalle proyecte el profesionalismo y la calidad que exigen los mercados internacionales más exclusivos.
                            </p>
                            <div className="mt-4 flex gap-3">
                                <span className="px-3 py-1 rounded bg-white/10 text-xs text-white border border-white/10">4K UHD</span>
                                <span className="px-3 py-1 rounded bg-white/10 text-xs text-white border border-white/10">AI Tracking</span>
                                <span className="px-3 py-1 rounded bg-white/10 text-xs text-white border border-white/10">Robotics</span>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy & Mission Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-display">
                                <span className="material-symbols-outlined text-accent">diamond</span>
                                Nuestra Filosofía
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                El nombre <span className="italic text-white">"Velvet"</span> (Terciopelo) representa nuestra esencia: el equilibrio perfecto entre un trato humano y cercano con la solidez y vanguardia de una infraestructura de clase mundial.
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                No somos una plataforma de paso; somos arquitectos de marcas personales exitosas.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-display">
                                <span className="material-symbols-outlined text-accent">flag</span>
                                Nuestra Misión
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Empoderar a nuestros modelos a través de herramientas tecnológicas disruptivas y una curaduría de imagen impecable. En The Velvet Studio, convertimos tu talento en un activo financiero de alto rendimiento bajo el estándar más alto de la industria.
                            </p>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="space-y-6">
                        <h3 className="text-center text-xl font-bold text-white font-display uppercase tracking-widest">¿Por qué elegir The Velvet Studio?</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: 'video_camera_front',
                                    title: 'Ecosistema Tecnológico',
                                    desc: 'Cámaras robóticas IA y calidad 4K para una ventaja competitiva inmediata.'
                                },
                                {
                                    icon: 'trending_up',
                                    title: 'Acompañamiento Estratégico',
                                    desc: 'Asesoría en imagen y comunicación persuasiva y cultural para conectar con audiencias internacionales. Formación continua para tu desarrollo profesional.'
                                },
                                {
                                    icon: 'security',
                                    title: 'Privacidad y Respaldo',
                                    desc: 'Un entorno seguro, legal y diseñado para que tu única preocupación sea brillar.'
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-background-dark p-6 rounded-xl border border-white/5 hover:border-accent/40 transition-colors">
                                    <span className="material-symbols-outlined text-accent mb-3 text-3xl">{item.icon}</span>
                                    <h4 className="text-white font-bold mb-2 font-display text-sm">{item.title}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="text-center py-8">
                        <p className="text-lg md:text-2xl text-gray-200 font-display italic font-light">
                            "No buscamos solo visibilidad; buscamos distinción.<br className="hidden md:block"/> <span className="text-accent font-bold not-italic mt-2 inline-block">Bienvenida a la era Velvet.</span>"
                        </p>
                    </div>

                    {/* CTA */}
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
