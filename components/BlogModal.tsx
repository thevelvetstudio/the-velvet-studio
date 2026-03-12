import React, { useEffect, useState } from 'react';

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Post {
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt: string;
    content: React.ReactNode;
}

const posts: Post[] = [
    {
        title: "Dominando el Algoritmo: Secretos del Tráfico Orgánico",
        category: "Estrategia",
        date: "Mar 15, 2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        excerpt: "Deja de depender de la suerte. Aprende cómo funcionan los algoritmos de las plataformas top y qué horarios, etiquetas y comportamientos te posicionan en la primera página.",
        content: (
            <>
                <p className="mb-4">El tráfico orgánico es el santo grial de la industria webcam. Mientras que el tráfico pagado puede darte un impulso inicial, es el posicionamiento orgánico el que construye carreras a largo plazo y audiencias leales.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">1. La Consistencia es el Rey</h4>
                <p className="mb-4">Los algoritmos de las plataformas principales premian la previsibilidad. Transmitir en horarios fijos y consistentes le dice al sistema que eres una creadora confiable, lo que aumenta tus posibilidades de ser recomendada en la página principal.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">2. El Poder de las Etiquetas (Tags)</h4>
                <p className="mb-4">No uses etiquetas genéricas. Investiga qué términos están buscando los usuarios premium. Mezcla etiquetas de alta competencia con nichos específicos donde puedas dominar rápidamente.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">3. Interacción en los Primeros 15 Minutos</h4>
                <p className="mb-4">El algoritmo evalúa tu desempeño en los primeros minutos de tu transmisión. Fomenta la interacción inmediata: saluda a tus regulares, haz preguntas abiertas y mantén la energía alta desde el segundo uno.</p>
                <div className="bg-primary/20 border-l-4 border-primary p-4 my-8 rounded-r-lg">
                    <p className="text-white font-medium italic">"El éxito orgánico no ocurre de la noche a la mañana. Es el resultado de aplicar estrategias inteligentes de forma consistente."</p>
                </div>
            </>
        )
    },
    {
        title: "Salud Mental y 'Burnout': Guía de Supervivencia",
        category: "Bienestar",
        date: "Feb 28, 2024",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
        excerpt: "El modelaje webcam es exigente. Descubre técnicas de desconexión digital y manejo emocional para mantener tu energía vibrante y evitar el agotamiento profesional.",
        content: (
            <>
                <p className="mb-4">El modelaje webcam puede ser emocional y mentalmente agotador. Estar "encendida" y disponible para tu audiencia durante horas requiere una energía inmensa. El <em>burnout</em> es real, pero prevenible.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Reconoce las Señales</h4>
                <p className="mb-4">La apatía hacia la transmisión, la irritabilidad con los usuarios, el cansancio crónico y la pérdida de creatividad son las primeras banderas rojas. No las ignores.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Establece Límites Inquebrantables</h4>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-stone-300">
                    <li>Define horarios estrictos de conexión y desconexión.</li>
                    <li>No respondas mensajes de usuarios fuera de tu horario laboral.</li>
                    <li>Ten un espacio físico dedicado solo para transmitir, separado de tu área de descanso.</li>
                </ul>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">La Importancia del "Tiempo Fuera"</h4>
                <p className="mb-4">En The Velvet Studio, priorizamos el bienestar de nuestras modelos. Fomentamos días libres obligatorios y ofrecemos apoyo psicológico. Tu salud mental es tu activo más valioso; protégela.</p>
            </>
        )
    },
    {
        title: "Finanzas Inteligentes: De Tokens a Inversiones Reales",
        category: "Finanzas",
        date: "Feb 10, 2024",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
        excerpt: "No solo se trata de ganar, sino de multiplicar. Consejos prácticos sobre ahorro, impuestos y cómo diversificar tus ingresos en dólares para asegurar tu futuro.",
        content: (
            <>
                <p className="mb-4">Generar altos ingresos es solo el primer paso. La verdadera riqueza se construye sabiendo cómo administrar, proteger y multiplicar ese capital. La industria webcam ofrece una oportunidad única de capitalización rápida, pero requiere inteligencia financiera.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">La Regla del 50/30/20 Adaptada</h4>
                <p className="mb-4">Debido a la naturaleza variable de los ingresos, sugerimos una estructura más conservadora: 50% para gastos fijos e impuestos, 20% para estilo de vida y un agresivo 30% destinado exclusivamente a ahorro e inversión.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Diversificación de Ingresos</h4>
                <p className="mb-4">No dependas de una sola plataforma. Diversifica creando contenido pasivo (venta de videos, fan clubs) que genere ingresos incluso cuando no estás transmitiendo en vivo.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Legalidad y Transparencia</h4>
                <p className="mb-4">Pagar impuestos no es una pérdida, es el pase de entrada a la economía formal. Te permite adquirir propiedades, acceder a créditos y construir un patrimonio sólido y legal. En The Velvet Studio, contamos con asesoría contable especializada para nuestras modelos.</p>
            </>
        )
    },
    {
        title: "El Poder del 'Branding' Personal en Redes Sociales",
        category: "Marketing",
        date: "Ene 25, 2024",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        excerpt: "Cómo construir una marca personal irresistible en Twitter e Instagram sin comprometer tu privacidad, atrayendo usuarios premium directo a tu sala.",
        content: (
            <>
                <p className="mb-4">Tu sala de transmisión es tu tienda, pero tus redes sociales son tu vitrina global. Un branding personal fuerte es lo que diferencia a una modelo promedio de una modelo Top.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Define tu Arquetipo</h4>
                <p className="mb-4">¿Eres la chica de al lado, la dominatrix inalcanzable, o la intelectual seductora? Define tu personaje y mantén la coherencia en todas tus plataformas. La confusión mata la conversión.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Twitter (X) vs. Instagram</h4>
                <p className="mb-4">Usa Twitter para contenido más explícito, interacción directa y networking con otras modelos. Usa Instagram para mostrar tu estilo de vida, estética y crear una conexión más aspiracional (siempre respetando las normas de la comunidad).</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">El Embudo de Ventas</h4>
                <p className="mb-4">Tus redes sociales tienen un solo objetivo: llevar tráfico a tus plataformas de monetización. Usa llamados a la acción (CTAs) claros y enlaces organizados (como Linktree) para facilitar que tus seguidores se conviertan en clientes de pago.</p>
            </>
        )
    },
    {
        title: "Iluminación y Set: Crea una Experiencia Cinematográfica",
        category: "Producción",
        date: "Abr 05, 2024",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
        excerpt: "La calidad visual de tu transmisión es tu primera carta de presentación. Aprende a usar la iluminación a tu favor para destacar tus mejores ángulos y crear una atmósfera envolvente.",
        content: (
            <>
                <p className="mb-4">En un mar de transmisiones estándar, la calidad visual es lo que detiene el scroll del usuario. No necesitas equipos de Hollywood, sino entender cómo funciona la luz y cómo usarla para crear una estética premium.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">La Regla de los Tres Puntos</h4>
                <p className="mb-4">Luz principal, luz de relleno y luz de contra. Esta técnica básica separa tu silueta del fondo y le da profundidad a tu imagen, evitando que te veas plana y dándote un aspecto profesional y tridimensional.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Psicología del Color en tu Set</h4>
                <p className="mb-4">Los tonos cálidos (rojos, naranjas) invitan a la intimidad y la pasión, mientras que los tonos fríos (azules, púrpuras) dan un aire de misterio y exclusividad. Usa luces LED inteligentes para cambiar el "mood" de tu sala según el tipo de show que estés realizando.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Menos es Más en el Fondo</h4>
                <p className="mb-4">Un set desordenado distrae. Mantén un fondo limpio, con elementos decorativos intencionales que refuercen tu arquetipo (plantas, luces de neón, texturas de terciopelo). Cada elemento en cámara debe tener un propósito estético.</p>
            </>
        )
    },
    {
        title: "Psicología del Usuario: Convirtiendo Espectadores en Clientes VIP",
        category: "Ventas",
        date: "Abr 12, 2024",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop",
        excerpt: "El verdadero secreto de las top models no es solo su apariencia, es su capacidad para conectar. Descubre cómo leer a tus usuarios y ofrecerles exactamente lo que buscan.",
        content: (
            <>
                <p className="mb-4">La industria webcam no vende solo contenido explícito; vende compañía, fantasía y conexión humana. Entender qué busca realmente el usuario detrás de la pantalla es tu mayor ventaja competitiva para fidelizar clientes de alto valor.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Escucha Activa y Memoria</h4>
                <p className="mb-4">Muchas veces, los usuarios que más gastan son los que más necesitan ser escuchados. Presta atención a los detalles que comparten sobre su vida y recuérdalos en su próxima visita. Eso crea una lealtad inquebrantable que ninguna otra modelo podrá romper.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">El Arte de la Anticipación</h4>
                <p className="mb-4">No entregues todo de inmediato. El deseo se construye en la espera. Aprende a alargar el juego previo verbal y visual para aumentar el valor percibido de tus shows privados y mantener al usuario enganchado por más tiempo.</p>
                <h4 className="text-xl font-bold text-white mt-8 mb-4 font-display">Categorización Rápida de Clientes</h4>
                <p className="mb-4">Identifica rápidamente si un usuario busca una experiencia de "novia virtual", dominación, o simplemente un show rápido. Adapta tu discurso, tu tono de voz y tu lenguaje corporal a su fantasía específica desde el primer minuto.</p>
            </>
        )
    }
];

export const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose }) => {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            const params = new URLSearchParams(window.location.search);
            const postTitle = params.get('post');
            if (postTitle) {
                const post = posts.find(p => p.title === postTitle);
                if (post) setSelectedPost(post);
            }
        } else {
            document.body.style.overflow = 'unset';
            // Reset selected post when modal closes
            setTimeout(() => setSelectedPost(null), 300);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleShare = async (title?: string) => {
        const shareUrl = title 
            ? `${window.location.origin}/blog?post=${encodeURIComponent(title)}`
            : `${window.location.origin}/blog`;

        const shareData = {
            title: title || 'Blog - The Velvet Studio',
            text: title ? `Lee este artículo: ${title}` : 'Descubre las últimas novedades y consejos en el blog de The Velvet Studio.',
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
            
            <div className="relative w-full max-w-6xl bg-[#0e1324] border border-white/10 border-t-white/20 border-l-white/20 rounded-3xl shadow-[0_0_50px_rgba(75,0,130,0.3)] max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col animate-scaleIn">
                
                {/* Header */}
                <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/10 sticky top-0 bg-[#0e1324]/95 backdrop-blur z-20">
                    <div>
                        {selectedPost ? (
                            <button 
                                onClick={() => setSelectedPost(null)}
                                className="flex items-center gap-2 text-stone-400 hover:text-accent transition-colors font-display text-sm uppercase tracking-wider font-bold"
                            >
                                <span className="material-symbols-outlined text-sm">arrow_back</span> Volver al Blog
                            </button>
                        ) : (
                            <>
                                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1 block font-display">The Velvet Insider</span>
                                <h2 className="text-3xl md:text-4xl font-black text-white font-display">Blog & Novedades</h2>
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={handleGoHome}
                            title="Ir al inicio"
                            className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">home</span>
                        </button>
                        <button 
                            onClick={() => handleShare(selectedPost?.title)}
                            title="Compartir"
                            className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">share</span>
                        </button>
                        <button 
                            onClick={onClose}
                            title="Cerrar"
                            className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-10">
                    {selectedPost ? (
                        /* Single Post View */
                        <div className="max-w-4xl mx-auto animate-fadeIn">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs uppercase font-bold border border-accent/30">
                                        {selectedPost.category}
                                    </span>
                                    <span className="text-stone-400 text-sm flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">calendar_today</span> {selectedPost.date}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black text-white font-display leading-tight mb-6">
                                    {selectedPost.title}
                                </h1>
                            </div>
                            
                            <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 relative border border-white/10">
                                <img src={selectedPost.image} alt={selectedPost.title} loading="lazy" className="w-full h-full object-cover animate-fadeIn" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1324] via-transparent to-transparent opacity-60"></div>
                            </div>
                            
                            <div className="prose prose-invert prose-lg max-w-none text-stone-300 font-body leading-relaxed">
                                <p className="text-xl text-stone-200 font-light italic mb-8 border-l-4 border-accent pl-6">
                                    {selectedPost.excerpt}
                                </p>
                                {selectedPost.content}
                            </div>

                            {/* Article Footer Actions */}
                            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <button 
                                    onClick={() => handleShare(selectedPost.title)}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors font-bold text-sm uppercase tracking-wider"
                                >
                                    <span className="material-symbols-outlined text-[18px]">share</span> Compartir Artículo
                                </button>
                                <button 
                                    onClick={handleGoHome}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/50 text-white transition-colors font-bold text-sm uppercase tracking-wider"
                                >
                                    <span className="material-symbols-outlined text-[18px]">home</span> Ir al Inicio
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Blog List View */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {posts.map((post, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => setSelectedPost(post)}
                                    className="group bg-black/20 rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all cursor-pointer flex flex-col"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase font-bold text-white border border-white/10">
                                            {post.category}
                                        </div>
                                        <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 animate-fadeIn" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1324] to-transparent opacity-80"></div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="text-stone-500 text-xs mb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[14px]">calendar_today</span> {post.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-accent transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-stone-400 text-sm leading-relaxed mb-4 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Leer Artículo <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {!selectedPost && (
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
                )}
            </div>
        </div>
    );
};
