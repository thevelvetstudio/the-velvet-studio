import React, { useEffect, useState } from 'react';

export type LegalSection = 'privacy' | 'terms' | 'compliance';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialSection: LegalSection;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialSection }) => {
    const [activeTab, setActiveTab] = useState<LegalSection>(initialSection);

    useEffect(() => {
        if (isOpen) {
            setActiveTab(initialSection);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen, initialSection]);

    if (!isOpen) return null;

    const tabs: { id: LegalSection; label: string; icon: string }[] = [
        { id: 'privacy', label: 'Privacidad de Datos', icon: 'lock' },
        { id: 'terms', label: 'Términos y Condiciones', icon: 'gavel' },
        { id: 'compliance', label: 'Compliance & Ética', icon: 'verified_user' },
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300" onClick={onClose}></div>
            
            <div className="relative w-full max-w-5xl bg-[#0e1324] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(75,0,130,0.3)] max-h-[90vh] flex flex-col animate-[fadeIn_0.3s_ease-out]">
                
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#050202]/50 rounded-t-3xl">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-accent text-2xl">balance</span>
                        <h2 className="text-xl md:text-2xl font-bold text-white font-display">Información Legal</h2>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                    {/* Sidebar / Tabs */}
                    <div className="w-full md:w-64 bg-black/20 border-b md:border-b-0 md:border-r border-white/10 p-4 space-y-2 shrink-0 overflow-x-auto md:overflow-visible flex md:flex-col gap-2 md:gap-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal ${
                                    activeTab === tab.id 
                                    ? 'bg-primary/20 text-accent border border-accent/20' 
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 bg-[#0e1324]">
                        
                        {activeTab === 'privacy' && (
                            <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
                                <h3 className="text-2xl font-bold text-white font-display mb-4">Política de Privacidad y Tratamiento de Datos</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    En The Velvet Studio, nos tomamos su privacidad con la máxima seriedad. Esta política describe cómo recopilamos, utilizamos y protegemos su información personal en cumplimiento con la Ley 1581 de 2012 (Ley de Habeas Data) de Colombia.
                                </p>
                                
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">1. Recopilación de Datos</h4>
                                    <p className="text-gray-400 text-xs">
                                        Solo recopilamos información estrictamente necesaria para el proceso de contratación y verificación de identidad (Sumsub), incluyendo documentos de identidad, información de contacto y datos bancarios para pagos.
                                    </p>
                                </div>

                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">2. Geo-bloqueo y Anonimato</h4>
                                    <p className="text-gray-400 text-xs">
                                        Garantizamos tecnológicamente que la transmisión de contenido está bloqueada en Colombia para proteger la identidad social de nuestros modelos. Los datos de transmisión están encriptados de extremo a extremo.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'terms' && (
                            <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
                                <h3 className="text-2xl font-bold text-white font-display mb-4">Términos y Condiciones de Uso</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    El uso de la plataforma y servicios de The Velvet Studio implica la aceptación total de los siguientes términos. Estos rigen la relación contractual entre la agencia y el modelo/usuario.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-bold text-lg">01.</span>
                                        <div>
                                            <h5 className="text-white font-bold text-sm">Mayoría de Edad</h5>
                                            <p className="text-gray-400 text-xs mt-1">Es requisito indispensable ser mayor de 18 años. Se realizará una verificación rigurosa de documentos oficiales.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-bold text-lg">02.</span>
                                        <div>
                                            <h5 className="text-white font-bold text-sm">Exclusividad de Contenido</h5>
                                            <p className="text-gray-400 text-xs mt-1">El contenido producido dentro de las instalaciones es propiedad intelectual compartida bajo los acuerdos firmados, respetando siempre los derechos de imagen del modelo.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-accent font-bold text-lg">03.</span>
                                        <div>
                                            <h5 className="text-white font-bold text-sm">Pagos y Facturación</h5>
                                            <p className="text-gray-400 text-xs mt-1">Los cortes de pago se realizan quincenalmente. Las comisiones están sujetas a la TRM del día y a las deducciones legales aplicables.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'compliance' && (
                            <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
                                <h3 className="text-2xl font-bold text-white font-display mb-4">Compliance & Ética Corporativa</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Operamos bajo estrictos estándares internacionales de legalidad y ética. The Velvet Studio tiene una política de tolerancia cero frente a actividades ilícitas.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-red-900/10 border border-red-500/20 p-4 rounded-xl">
                                        <div className="flex items-center gap-2 mb-2 text-red-400">
                                            <span className="material-symbols-outlined">block</span>
                                            <h4 className="font-bold text-sm">Contra la Explotación</h4>
                                        </div>
                                        <p className="text-gray-500 text-xs">Cumplimos rigurosamente con las normativas contra la trata de personas y la explotación sexual. Todo el personal trabaja bajo voluntad propia y contratos transparentes.</p>
                                    </div>

                                    <div className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-xl">
                                        <div className="flex items-center gap-2 mb-2 text-blue-400">
                                            <span className="material-symbols-outlined">description</span>
                                            <h4 className="font-bold text-sm">Reporte Financiero</h4>
                                        </div>
                                        <p className="text-gray-500 text-xs">Realizamos reportes transparentes a las entidades financieras y fiscales correspondientes, asegurando la trazabilidad de todos los ingresos generados.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="mt-8 pt-8 border-t border-white/10 text-center">
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
        </div>
    );
};