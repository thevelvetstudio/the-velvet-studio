import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
    {
        id: 1,
        quote: "Antes trabajaba en otra agencia donde me sentía como un número más. Desde que entré a The Velvet Studio, mi facturación se triplicó en 3 meses gracias a su asesoría estratégica y al equipo 4K. La privacidad que me garantizan me da mucha paz.",
        author: "Valeria M.",
        role: "Modelo de Estudio",
        earnings: "+$4,500 USD/mes",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "Empecé como modelo satélite porque quería trabajar desde casa. El soporte técnico 24/7 y las capacitaciones en seducción y psicología del usuario hicieron que mis ingresos superaran mis expectativas. Es una agencia que realmente se preocupa por tu crecimiento.",
        author: "Camila R.",
        role: "Modelo Satélite",
        earnings: "+$3,200 USD/mes",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "El nivel de profesionalismo aquí no tiene comparación. Las instalaciones son de lujo, el ambiente es súper respetuoso y el acompañamiento psicológico me ha ayudado a mantener un equilibrio perfecto entre mi vida personal y profesional.",
        author: "Sofía T.",
        role: "Modelo Top",
        earnings: "+$8,000 USD/mes",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section id="testimonials" className="py-24 bg-background-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block font-display">Casos de Éxito</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display">Resultados Tangibles</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="relative h-[450px] md:h-[350px] overflow-hidden rounded-3xl border border-white/10 bg-card-dark/80 backdrop-blur-xl shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 flex flex-col md:flex-row items-center p-8 md:p-12 gap-8"
                            >
                                {/* Imagen de la modelo */}
                                <div className="shrink-0 relative">
                                    <div className="size-24 md:size-40 rounded-full overflow-hidden border-2 border-accent/50 p-1">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <img 
                                                src={testimonials[currentIndex].image} 
                                                alt={testimonials[currentIndex].author} 
                                                loading="lazy"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap border border-white/20 shadow-lg">
                                        {testimonials[currentIndex].earnings}
                                    </div>
                                </div>

                                {/* Testimonio */}
                                <div className="flex-1 text-center md:text-left">
                                    <span className="material-symbols-outlined text-4xl text-accent/30 mb-4 block">format_quote</span>
                                    <p className="text-stone-300 text-base md:text-lg lg:text-xl font-light italic leading-relaxed mb-6 font-body">
                                        "{testimonials[currentIndex].quote}"
                                    </p>
                                    <div>
                                        <h4 className="text-white font-bold text-lg font-display tracking-wide">{testimonials[currentIndex].author}</h4>
                                        <p className="text-accent text-sm font-medium uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots de navegación */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index 
                                    ? 'w-8 bg-accent' 
                                    : 'w-2 bg-white/20 hover:bg-white/40'
                                }`}
                                aria-label={`Ver testimonio ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
