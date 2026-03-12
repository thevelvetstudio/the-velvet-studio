import React, { useState } from 'react';
import { Chatbot } from './components/Chatbot';
import { EarningsCalculator } from './components/EarningsCalculator';
import { ApplicationForm } from './components/ApplicationForm';
import { AboutModal } from './components/AboutModal';
import { LocationModal } from './components/LocationModal';
import { CareersModal } from './components/CareersModal';
import { BlogModal } from './components/BlogModal';
import { LegalModal, LegalSection } from './components/LegalModal';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import { motion } from 'motion/react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalActiveTab, setLegalActiveTab] = useState<LegalSection>('privacy');

  React.useEffect(() => {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    const modal = params.get('modal');

    if (path === '/nosotros' || modal === 'about') setIsAboutModalOpen(true);
    else if (path === '/carreras' || modal === 'careers') setIsCareersModalOpen(true);
    else if (path === '/blog' || modal === 'blog') setIsBlogModalOpen(true);
    else if (path === '/legal' || modal === 'legal') setIsLegalModalOpen(true);
    else if (path === '/ubicacion' || modal === 'location') setIsLocationModalOpen(true);
  }, []);

  const closeModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(false);
    window.history.pushState({}, '', '/');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const openAboutModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsAboutModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const openLocationModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLocationModalOpen(true);
  };

  const openCareersModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsCareersModalOpen(true);
  };

  const openBlogModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsBlogModalOpen(true);
  };

  const openLegalModal = (e: React.MouseEvent<HTMLElement>, section: LegalSection) => {
    e.preventDefault();
    setLegalActiveTab(section);
    setIsLegalModalOpen(true);
  };

  const handleShare = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const shareData = {
      title: 'The Velvet Studio',
      text: 'Tu proyección personal, convertida en éxito tangible. Agencia webcam líder en Colombia.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('¡Enlace copiado al portapapeles!');
      } catch (err) {
        console.error('Error copying to clipboard:', err);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-body text-slate-900 dark:text-white antialiased overflow-x-hidden">
      
      {/* WhatsApp Button */}
        <a href="https://wa.me/573207200266?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20personalizada%20sobre%20The%20Velvet%20Studio.%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20interesa%20conocer%20los%20requisitos%20para%20iniciar%20mi%20proceso%20de%20postulaci%C3%B3n.%20Gracias." target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-[60] group flex items-center gap-3">
            
            {/* Tooltip (Texto flotante) */}
            <div className="bg-black/80 backdrop-blur-md border border-green-500/40 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl hidden md:block pointer-events-none">
                Comunícate con nosotros
            </div>

            {/* Botón con Animación de Anillo (Estilo AI) */}
            <div className="relative size-16 rounded-full bg-[#0a0505] border border-white/10 hover:border-green-500/80 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden">
                
                {/* 1. La Onda Expansiva (Ping) */}
                <span 
                    className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping [animation-duration:4s]">
                    </span>

                {/* Icono de WhatsApp */}
                <svg className="size-9 text-[#25D366] relative z-10 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </div>
        </a>

      {/* Modals */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => closeModal(setIsAboutModalOpen)} />
      <LocationModal isOpen={isLocationModalOpen} onClose={() => closeModal(setIsLocationModalOpen)} />
      <CareersModal isOpen={isCareersModalOpen} onClose={() => closeModal(setIsCareersModalOpen)} />
      <BlogModal isOpen={isBlogModalOpen} onClose={() => closeModal(setIsBlogModalOpen)} />
      <LegalModal isOpen={isLegalModalOpen} onClose={() => closeModal(setIsLegalModalOpen)} initialSection={legalActiveTab} />


      <div className="fixed top-0 z-50 w-full border-b border-[#800020]/20 bg-[#050202]/90 backdrop-blur-md">
        <div className="flex flex-col md:flex-row h-auto md:h-20 items-center justify-between px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-0.5 pb-0 md:py-0 gap-0 md:gap-0">
            <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
    {/* Envolvemos todo en un enlace para que sea clickable */}
    <a 
        href="#top" 
        onClick={(e) => scrollToSection(e, 'top')} 
        className="flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer"
    >
        {/* Nuevo Logo Header */}
        <div className="flex items-center justify-center size-10 overflow-hidden rounded-full">
            <img 
                src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771387670/android-chrome-512x512_ksllge.png" 
                alt="The Velvet Studio" 
                loading="lazy"
                className="w-full h-full object-cover animate-fadeIn"
            />
        </div>

        {/* Bloque de Texto - Visible en todas las pantallas */}
        <div className="flex flex-col justify-center mt-[5px]">
            <h2 className="text-white text-base md:text-lg font-bold tracking-tight font-brand leading-none mt-2.5 md:mt-1">THE VELVET</h2>
            <span className="text-accent text-[7px] md:text-[8px] tracking-[0.3em] uppercase font-display mt-0 md:-mt-2">Studio</span>
        </div>
    </a>
</div>
            
            {/* Nav - Visible en todas las pantallas */}
            <div className="-mt-[26px] md:mt-0 flex items-end md:items-center gap-1.5 sm:gap-4 lg:gap-8 w-full md:w-auto justify-between md:justify-end">
                <nav className="flex items-center gap-2.5 sm:gap-3 lg:gap-6 pl-2 md:pl-0 mb-1.5 md:mb-0">
                    <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="text-stone-300 hover:text-accent transition-colors text-[10px] sm:text-xs lg:text-sm font-medium whitespace-nowrap">Inicio</a>
                    <a href="#" onClick={openAboutModal} className="text-gray-300 hover:text-accent transition-colors text-[10px] sm:text-xs lg:text-sm font-medium whitespace-nowrap">Nosotros</a>
                    <a href="#security" onClick={(e) => scrollToSection(e, 'security')} className="text-gray-300 hover:text-accent transition-colors text-[10px] sm:text-xs lg:text-sm font-medium whitespace-nowrap">Seguridad</a>
                    <a href="#earnings" onClick={(e) => scrollToSection(e, 'earnings')} className="text-gray-300 hover:text-accent transition-colors text-[10px] sm:text-xs lg:text-sm font-medium whitespace-nowrap">Ganancias</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-300 hover:text-accent transition-colors text-[10px] sm:text-xs lg:text-sm font-medium whitespace-nowrap">Contacto</a>
                </nav>
                <div className="flex flex-col md:flex-row items-center gap-0.5 md:gap-2 lg:gap-4">
                    <button 
                        onClick={handleShare}
                        className="-mt-1 md:mt-0 flex items-center justify-center text-gray-300 hover:text-accent transition-colors p-1 lg:p-2 rounded-full hover:bg-white/5"
                        title="Compartir página"
                        aria-label="Compartir página"
                    >
                        <span className="material-symbols-outlined text-[18px] sm:text-[20px] lg:text-[24px] leading-none">share</span>
                    </button>
                    <a href="#apply" onClick={(e) => scrollToSection(e, 'apply')} className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-7 px-3 sm:h-8 sm:px-4 lg:h-10 lg:px-6 bg-white text-primary hover:bg-accent hover:text-secondary transition-all duration-300 text-[10px] sm:text-xs lg:text-sm font-bold shadow-lg whitespace-nowrap">
                        <span>Únete</span>
                    </a>
                </div>
            </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBixMbXvIIf3xesDca1UWfkEqe6T50gBBgx5QVh2OSogcv2Rgexj8sOc9xqpno85o__3KRKz6Ug1MRHXKGCwg69rZJWDKCYfdg81Zr4eXjap1m5fy00ogBQPwo2eeOxMEr4HiMxt3Zq9fNMcxlMqbLQyfO7Weogsi3_tMOMZ2XLSZf6wPszr8m-OJ5Q19FgIHj2zTu32hiZMdNfrI96FGzFDJ9cNwC96mE0crcmcRzQ2yki2hpoPYyypnwjC11Ar8I5MiO9q12m9dRI" 
                alt="Sophisticated studio" 
                loading="lazy"
                className="w-full h-full object-cover opacity-60 animate-fadeIn" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-secondary/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center max-w-5xl">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6 flex flex-col items-center gap-6"
            >
                
                {/* HERO LOGO SVG - Exact replica of the "Red V" image */}
                    {/* Nuevo Logo Hero (Grande) */}
                    <a 
                        href="#top" 
                        onClick={(e) => scrollToSection(e, 'top')}
                        className="flex flex-col items-center justify-center mb-8 mt-12 md:mt-0 lg:mt-20 transition-transform duration-500 hover:scale-105 cursor-pointer"
                    >
                        <img 
                            src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771385894/The_Velvet_Studio_-_Logo_transparente_sombra_f9abpe.png" 
                            alt="The Velvet Studio" 
                            loading="lazy"
                            className="w-64 md:w-80 h-auto drop-shadow-2xl animate-fadeIn"
                        />
                    </a>

                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/50 px-4 py-1.5 backdrop-blur-sm mt-0">
                    <span className="material-symbols-outlined text-accent text-[18px]">verified</span>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider font-display">AGENCIA WEBCAM LIDER EN COLOMBIA</span>
                </div>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-6 drop-shadow-2xl font-display"
            >
                Tu proyección personal, convertida en <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-accent">éxito tangible</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed font-body"
            >
                Gana en dólares con el respaldo de la agencia más exclusiva. Cámaras robóticas IA y calidad 4K para una ventaja competitiva inmediata. Seguridad, privacidad y crecimiento profesional en un solo lugar.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
                <a href="#apply" onClick={(e) => scrollToSection(e, 'apply')} className="h-14 px-8 rounded-full bg-primary hover:bg-red-700 text-white font-bold text-lg shadow-[0_0_20px_rgba(128,0,32,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    Inicia tu Proceso de Selección
                    <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <button 
                  onClick={openAboutModal}
                  className="h-14 px-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-lg backdrop-blur-sm transition-all flex items-center justify-center"
                >
                    Conoce más
                </button>
            </motion.div>
        </div>
      </div>

      {/* Security Section */}
      <section id="security" className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-accent/5 blur-[100px]"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-12 items-start justify-between mb-16"
            >
                <div className="max-w-xl">
                    <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-2 font-display">Seguridad y Privacidad</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Protección Integral 360°</h3>
                    <p className="text-gray-400 font-body">Tu seguridad y privacidad son nuestra prioridad absoluta. Utilizamos tecnología de punta para garantizar tu tranquilidad mientras construyes tu imperio.</p>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                    <span className="material-symbols-outlined">shield_lock</span>
                    <span className="text-sm">Certificado SSL & Encriptación E2E</span>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: 'fingerprint', title: 'Verificación Sumsub', desc: 'Sistema avanzado de verificación biométrica de identidad para asegurar que solo interactúas con usuarios verificados.' },
                    { icon: 'public_off', title: 'Geo-bloqueo VPN', desc: 'Tecnología de bloqueo geográfico para proteger tu privacidad. Tu contenido no será visible en Colombia o regiones restringidas.' },
                    { icon: 'trending_up', title: 'Acompañamiento Estratégico', desc: 'Asesoría en imagen y comunicación persuasiva y cultural para conectar con audiencias internacionales. Formación continua para tu desarrollo profesional.' }
                ].map((item, index) => (
                    <motion.div 
                        key={item.title} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="group p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="size-14 rounded-xl bg-gradient-to-br from-red-900 to-black flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(128,0,0,0.5)]">
                            <span className="material-symbols-outlined text-white text-3xl">{item.icon}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-body">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Components */}
      <Testimonials />
      <EarningsCalculator />
      <FAQ />
      <ApplicationForm />

      {/* Footer */}
      <footer id="contact" className="bg-[#020101] border-t border-white/5 pt-16 pb-8">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-6 lg:px-12"
        >
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                <div className="max-w-xs">
                    <div className="flex items-center gap-3 mb-6">
                        {/* Envolvemos todo en un enlace <a> */}
                        <a 
                            href="#top"
                            onClick={(e) => {
                                e.preventDefault(); // Evita el salto brusco
                                window.scrollTo({ top: 0, behavior: 'smooth' }); // Sube suavemente
                            }}
                            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            {/* INICIO DEL LOGO */}
                            <div className="flex items-center justify-center size-8 rounded-full overflow-hidden -mt-2">
                                <img 
                                    src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771387670/android-chrome-512x512_ksllge.png" 
                                    alt="The Velvet Studio Logo" 
                                    loading="lazy"
                                    className="w-full h-full object-cover animate-fadeIn"
                                />
                            </div>
                            {/* FIN DEL LOGO */}
                            
                            <h2 className="text-white text-lg font-bold tracking-tight font-brand">THE VELVET STUDIO</h2>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed font-body">
                        Redefiniendo el modelaje web en Colombia. Una experiencia de lujo diseñada para tu éxito financiero y personal.
                    </p>
                </div>
                
                <div className="flex gap-16 flex-wrap">
                    <div>
                        <h4 className="text-white font-bold mb-4 font-display">Compañía</h4>
                        <ul className="space-y-2 text-sm text-gray-500 font-body">
                            <li><a href="#" onClick={openAboutModal} className="hover:text-accent transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" onClick={openCareersModal} className="hover:text-accent transition-colors">Carreras</a></li>
                            <li><a href="#" onClick={openBlogModal} className="hover:text-accent transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 font-display">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500 font-body">
                            <li><a href="#" onClick={(e) => openLegalModal(e, 'privacy')} className="hover:text-accent transition-colors">Privacidad</a></li>
                            <li><a href="#" onClick={(e) => openLegalModal(e, 'terms')} className="hover:text-accent transition-colors">Términos</a></li>
                            <li><a href="#" onClick={(e) => openLegalModal(e, 'compliance')} className="hover:text-accent transition-colors">Compliance</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 font-display">Contacto</h4>
                        <ul className="space-y-2 text-sm text-gray-500 font-body">
                            <li><a href="mailto:thevelvetstudio8@gmail.com" className="hover:text-accent transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">mail</span> thevelvetstudio8@gmail.com</a></li>
                            <li><a href="tel:+573207200266" className="hover:text-accent transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">call</span> +57 320 720 0266</a></li>
                            <li><a href="#" onClick={openLocationModal} className="hover:text-accent transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">location_on</span> Manizales, Colombia</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-xs font-body">© 2026 The Velvet Studio. Todos los derechos reservados.</p>
                <div className="flex gap-4">
                    <span className="size-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-gray-400 font-body">Sistemas Operativos Operando</span>
                </div>
            </div>
        </motion.div>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;