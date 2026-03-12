import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
    {
        question: "¿Necesito experiencia previa para postularme?",
        answer: "No, no necesitas experiencia previa. En The Velvet Studio contamos con un equipo de profesionales que te guiarán desde el primer día, brindándote capacitación en manejo de cámaras, expresión corporal, y estrategias de crecimiento."
    },
    {
        question: "¿Cómo garantizan mi privacidad y seguridad?",
        answer: "Tu seguridad es nuestra prioridad. Utilizamos tecnología de geo-bloqueo para que tu contenido no sea visible en Colombia o en las regiones que decidas restringir. Además, contamos con verificación biométrica y encriptación de extremo a extremo."
    },
    {
        question: "¿Cuáles son los horarios de trabajo?",
        answer: "Ofrecemos flexibilidad horaria para que puedas adaptar tus transmisiones a tu estilo de vida. Sin embargo, recomendamos bloques de conexión estratégicos para maximizar tus ingresos, los cuales definiremos juntos en tu plan de crecimiento."
    },
    {
        question: "¿Cómo y cuándo recibo mis pagos?",
        answer: "Garantizamos pagos puntuales, transparentes y en dólares (o su equivalente en moneda local, según prefieras). Los cortes y fechas de pago se te explicarán detalladamente durante tu proceso de inducción, asegurando total claridad."
    },
    {
        question: "¿Qué porcentaje de comisión maneja la agencia?",
        answer: "Manejamos porcentajes altamente competitivos en la industria, diseñados para que tu crecimiento financiero sea real y escalable. El porcentaje exacto dependerá de tu modalidad (Estudio o Satélite) y se discutirá de forma transparente en tu entrevista."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-[#020101] relative overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 blur-[120px]"></div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block font-display">Resolviendo Dudas</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display">Preguntas Frecuentes</h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl bg-card-dark/50 backdrop-blur-sm overflow-hidden"
                        >
                            <button 
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-white font-display font-bold text-sm md:text-base pr-4">{faq.question}</span>
                                <span className={`material-symbols-outlined text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-5 text-gray-400 font-body text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
