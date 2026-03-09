import React, { useState } from 'react';
import { SuccessModal } from './SuccessModal';

// REEMPLAZA ESTA URL CON LA URL DE TU APLICACIÓN WEB DE GOOGLE APPS SCRIPT
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0Pro1j_Xx9btBEQulFlf4LofGkzqm2PQjq7xHmmjrSeU9_UzAuhyr3LnkXQn5zYeb/exec"; 

export const ApplicationForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        roles: [] as string[],
        name: '',
        email: '',
        phone: '',
        city: '',
        age: '',
        instagram: '',
        referrals: [] as string[],
        dataAuth: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'roles' | 'referrals') => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const list = prev[field];
            if (checked) {
                return { ...prev, [field]: [...list, value] };
            } else {
                return { ...prev, [field]: list.filter(item => item !== value) };
            }
        });
    };

    const handleAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, dataAuth: e.target.checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.dataAuth) {
            alert("Debes autorizar el tratamiento de datos para continuar.");
            return;
        }

        setIsSubmitting(true);

        try {
            // We use mode: 'no-cors' and Content-Type: 'text/plain' to avoid CORS preflight issues with Google Apps Script
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(formData)
            });

            // Since 'no-cors' returns an opaque response, we assume success if no network error occurred.
            setIsSubmitting(false);
            setShowSuccess(true);
            
            // Reset form
            setFormData({
                roles: [],
                name: '',
                email: '',
                phone: '',
                city: '',
                age: '',
                instagram: '',
                referrals: [],
                dataAuth: false
            });

        } catch (error) {
            console.error("Error submitting form:", error);
            setIsSubmitting(false);
            alert("Hubo un error al enviar tu postulación. Por favor intenta nuevamente o contáctanos por WhatsApp.");
        }
    };

    return (
        <section id="apply" className="pt-24 pb-16 relative bg-background-dark overflow-hidden">
            <div className="absolute inset-0 bg-secondary/10"></div>
            <div className="absolute -left-20 top-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>

            {/* Success Modal */}
            <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-accent text-sm font-bold uppercase tracking-widest mb-3 block font-display">Postulación Exclusiva</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display">Comienza tu Legado</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light font-body">
                            Da el primer paso hacia una carrera de éxito en la industria webcam. Completa el formulario para iniciar tu proceso de selección.
                        </p>
                    </div>

                    <div className="rounded-3xl p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative mb-12">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
                        </div>

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="pb-4">
                                <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide mb-4 block font-display">Selecciona tu Rol</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { val: 'estudio', label: 'Quiero ser modelo de estudio' },
                                        { val: 'satelite', label: 'Quiero ser modelo satélite' },
                                        { val: 'monitor', label: 'Quiero ser monitor' }
                                    ].map((role) => (
                                        <label key={role.val} className="flex items-center gap-3 cursor-pointer group p-4 rounded-xl border border-white/10 bg-background-dark/40 hover:border-accent/40 transition-all">
                                            <input 
                                                type="checkbox" 
                                                name="role" 
                                                value={role.val} 
                                                checked={formData.roles.includes(role.val)}
                                                onChange={(e) => handleCheckboxChange(e, 'roles')}
                                                className="custom-checkbox appearance-none size-5 border border-white/40 rounded bg-transparent checked:bg-accent checked:border-accent focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer relative" 
                                            />
                                            <span className="text-[10px] md:text-[11px] font-display font-bold text-gray-400 uppercase tracking-wider leading-tight">{role.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: 'Nombre Completo', name: 'name', icon: 'person', type: 'text', placeholder: 'Ej. Ana García' },
                                    { label: 'Correo Electrónico', name: 'email', icon: 'mail', type: 'email', placeholder: 'ejemplo@correo.com' },
                                    { label: 'Teléfono / WhatsApp', name: 'phone', icon: 'chat', type: 'tel', placeholder: '+57 300 000 0000' },
                                    { label: 'Ciudad de residencia', name: 'city', icon: 'location_on', type: 'text', placeholder: 'Ciudad de residencia' },
                                    { label: 'Edad', name: 'age', icon: 'cake', type: 'number', placeholder: 'Ej. 21', min: 18 },
                                ].map((field) => (
                                    <div key={field.label} className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide font-display">{field.label}</label>
                                        <div className="relative group">
                                            <span className="material-symbols-outlined absolute left-4 top-3.5 text-gray-500 group-focus-within:text-accent transition-colors">{field.icon}</span>
                                            <input 
                                                type={field.type} 
                                                name={field.name}
                                                value={(formData as any)[field.name]}
                                                onChange={handleInputChange}
                                                min={field.min}
                                                required
                                                className="w-full pl-12 pr-4 py-3.5 bg-background-dark/50 border border-white/10 rounded-xl focus:border-accent/50 focus:ring-1 focus:ring-accent/50 text-white placeholder-gray-600 outline-none transition-all" 
                                                placeholder={field.placeholder} 
                                            />
                                        </div>
                                    </div>
                                ))}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide font-display">Instagram</label>
                                    <div className="relative group">
                                        <span className="material-symbols-outlined absolute left-4 top-3.5 text-gray-500 group-focus-within:text-accent transition-colors">photo_camera</span>
                                        <input 
                                            type="text" 
                                            name="instagram"
                                            value={formData.instagram}
                                            onChange={handleInputChange}
                                            className="w-full pl-12 pr-4 py-3.5 bg-background-dark/50 border border-white/10 rounded-xl focus:border-accent/50 focus:ring-1 focus:ring-accent/50 text-white placeholder-gray-600 outline-none transition-all" 
                                            placeholder="@usuario (Perfil Público)" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide mb-4 block font-display">¿POR QUÉ MEDIO TE ENTERASTE DE NOSOTROS?</label>
                                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                                    {['REDES SOCIALES', 'REFERIDA', 'BUSCADOR DE GOOGLE'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                                            <input 
                                                type="checkbox" 
                                                name="referral" 
                                                value={opt}
                                                checked={formData.referrals.includes(opt)}
                                                onChange={(e) => handleCheckboxChange(e, 'referrals')}
                                                className="custom-checkbox appearance-none size-5 border border-white/40 rounded bg-transparent checked:bg-accent checked:border-accent focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer relative" 
                                            />
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider font-display">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    id="data-treatment" 
                                    checked={formData.dataAuth}
                                    onChange={handleAuthChange}
                                    required 
                                    className="custom-checkbox appearance-none size-5 border border-white/40 rounded bg-transparent checked:bg-accent checked:border-accent focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer relative" 
                                />
                                <label htmlFor="data-treatment" className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider cursor-pointer font-bold font-display">
                                    AUTORIZO EL TRATAMIENTO DE DATOS PERSONALES
                                </label>
                            </div>

                            <div className="pt-6">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold text-lg shadow-[0_0_20px_rgba(75,0,130,0.4)] hover:shadow-[0_0_30px_rgba(75,0,130,0.6)] transition-all transform hover:-translate-y-1 relative overflow-hidden group border border-white/10 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                    <span className="relative z-10 flex items-center justify-center gap-2 font-display uppercase tracking-wider">
                                        {isSubmitting ? (
                                            <>
                                                Enviando <span className="animate-spin material-symbols-outlined text-sm">progress_activity</span>
                                            </>
                                        ) : (
                                            <>
                                                Enviar Postulación <span className="material-symbols-outlined">send</span>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10 mt-6 text-center">
                                {[
                                    { icon: 'lock', text: 'SSL Secure 256-bit', color: 'text-green-400' },
                                    { icon: 'verified_user', text: 'Verificación Sumsub™', color: 'text-blue-400' },
                                    { icon: 'gavel', text: 'Ley 1581 Habeas Data', color: 'text-accent' }
                                ].map((badge) => (
                                    <div key={badge.text} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                                        <span className={`material-symbols-outlined ${badge.color} text-lg`}>{badge.icon}</span>
                                        <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider font-display">{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] font-display">Síguenos</span>
                        <div className="flex items-center gap-5">
                            {[
                                { name: 'WhatsApp', href: 'https://wa.me/573207200266?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20personalizada%20sobre%20The%20Velvet%20Studio.%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20interesa%20conocer%20los%20requisitos%20para%20iniciar%20mi%20proceso%20de%20postulaci%C3%B3n.%20Gracias.', target: '_blank', icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /> },
                                { name: 'Instagram', href: 'https://instagram.com/thevelvetstudio.co', target: '_blank', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path> },
                                { name: 'TikTok', href: 'https://tiktok.com/@thevelvetstudio.co', target: '_blank', icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.8.2-.67.33-1.24.93-1.51 1.62-.28.53-.35 1.13-.35 1.72.01.64.18 1.29.5 1.83.54.82 1.43 1.39 2.39 1.54.91.13 1.86-.1 2.62-.61.64-.42 1.08-1.06 1.3-1.8.12-.41.17-.83.17-1.25.02-3.97.01-7.93.01-11.9z"></path> },
                                { name: 'Twitter', href: 'https://twitter.com/thevelvetstudi', target: '_blank', icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path> },
                                { name: 'YouTube', href: 'https://www.youtube.com/@TheVelvetStudioManizales', target: '_blank', icon: <path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z"/> },
                            ].map((social) => (
                                <a key={social.name} href={social.href} target={social.target} rel="noreferrer" aria-label={social.name} className="flex items-center justify-center size-11 rounded-full border border-white/30 text-white hover:border-accent hover:text-accent transition-all duration-300">
                                    <svg className={`size-5 md:size-6 ${social.name === 'YouTube' ? 'scale-125' : ''}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
