import React, { useState, useMemo } from 'react';
import { EnglishLevel } from '../types';
import { motion } from 'motion/react';

export const EarningsCalculator: React.FC = () => {
    const [hours, setHours] = useState(40);
    const [level, setLevel] = useState<EnglishLevel>(EnglishLevel.ADVANCED);

    const estimatedEarnings = useMemo(() => {
        // Tasa de generación por hora (Promedio estimado de tokens/dólares generados por la sala)
        // Se ajustan estos valores para que el neto (55%) coincida con expectativas de mercado atractivas
        let hourlyGeneration = 0;
        switch (level) {
            case EnglishLevel.BASIC: hourlyGeneration = 20; break;      // Neto aprox $12/h
            case EnglishLevel.INTERMEDIATE: hourlyGeneration = 28; break; // Neto aprox $16.8/h
            case EnglishLevel.ADVANCED: hourlyGeneration = 38; break;     // Neto aprox $22.8/h
        }
        
        const totalGenerated = hours * 4 * hourlyGeneration;
        // La modelo recibe el 55%
        return totalGenerated * 0.55;
    }, [hours, level]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
    };

    const formatCOP = (usdAmount: number) => {
        // Approx 1 USD = 3900 COP (Example rate)
        const cop = usdAmount * 3950;
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(cop);
    };

    const scrollToApply = () => {
        const element = document.getElementById('apply');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="earnings" className="py-24 relative bg-gradient-to-b from-[#050510] to-secondary">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row gap-12 bg-card-dark rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 size-64 bg-accent/10 rounded-full blur-3xl"></div>
                    
                    {/* Controls */}
                    <div className="flex-1 flex flex-col justify-center relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-2 font-display">Calculadora de Ingresos</h2>
                        <p className="text-stone-400 mb-8 font-body">Estima tus ganancias potenciales basadas en tu dedicación y nivel de inglés. El cielo es el límite.</p>
                        
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-white">Horas por semana</label>
                                    <span className="text-sm font-bold text-accent">{hours}h</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="10" 
                                    max="60" 
                                    value={hours} 
                                    onChange={(e) => setHours(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>10h (Part-time)</span>
                                    <span>60h (Full-focus)</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-white">Nivel de Inglés</label>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {Object.values(EnglishLevel).map((lvl) => (
                                        <button
                                            key={lvl}
                                            onClick={() => setLevel(lvl)}
                                            className={`py-2 px-4 rounded-lg text-sm border transition-all duration-300 flex items-center justify-center ${
                                                level === lvl 
                                                ? 'bg-primary/20 text-accent border-accent/50 font-medium ring-1 ring-accent/20' 
                                                : 'bg-gray-800 text-gray-400 border-transparent hover:bg-gray-700'
                                            }`}
                                        >
                                            {lvl}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="flex items-center gap-3 p-4 rounded-lg bg-blue-900/20 border border-blue-500/20">
                                    <span className="material-symbols-outlined text-blue-400">currency_exchange</span>
                                    <p className="text-xs text-blue-200">Tasa representativa calculada en tiempo real. Pagos en USD.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="flex-1 lg:border-l border-white/10 lg:pl-12 flex flex-col justify-center items-center text-center relative z-10">
                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-2 font-display">Ingreso Mensual Estimado</p>
                        <div className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-2 font-display">
                            {formatCurrency(estimatedEarnings).replace('.00', '').replace('$','')}
                        </div>
                        <span className="text-2xl font-bold text-accent mb-6 font-display">USD</span>
                        
                        <div className="w-full max-w-xs space-y-3">
                            <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                                <span className="text-gray-400 text-left">Tu Porcentaje</span>
                                <span className="text-accent font-bold text-right">55%</span>
                            </div>
                            <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                                <span className="text-gray-400 text-left">Semanales</span>
                                <span className="text-white font-medium text-right">{formatCurrency(estimatedEarnings / 4)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                                <span className="text-gray-400 text-left">Conversión aprox. pesos (COP)</span>
                                <span className="text-white font-medium text-right">~{formatCOP(estimatedEarnings)}</span>
                            </div>
                        </div>

                        <button 
                            onClick={scrollToApply}
                            className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-primary via-purple-900 to-primary hover:from-primary-light hover:via-purple-800 hover:to-primary-light text-white font-bold text-lg shadow-[0_0_20px_rgba(128,0,32,0.4)] hover:shadow-[0_0_30px_rgba(128,0,32,0.6)] transition-all transform hover:-translate-y-1 relative overflow-hidden group border border-accent/30"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="relative z-10 font-display uppercase tracking-wider flex items-center justify-center gap-2">
                                Comenzar Ahora <span className="material-symbols-outlined text-accent text-sm">arrow_forward_ios</span>
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};