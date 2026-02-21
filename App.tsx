import React, { useState } from 'react';
import { Chatbot } from './components/Chatbot';
import { EarningsCalculator } from './components/EarningsCalculator';
import { ApplicationForm } from './components/ApplicationForm';
import { AboutModal } from './components/AboutModal';
import { LocationModal } from './components/LocationModal';
import { CareersModal } from './components/CareersModal';
import { BlogModal } from './components/BlogModal';
import { LegalModal, LegalSection } from './components/LegalModal';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalActiveTab, setLegalActiveTab] = useState<LegalSection>('privacy');

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
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
      <LocationModal isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} />
      <CareersModal isOpen={isCareersModalOpen} onClose={() => setIsCareersModalOpen(false)} />
      <BlogModal isOpen={isBlogModalOpen} onClose={() => setIsBlogModalOpen(false)} />
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} initialSection={legalActiveTab} />


      {/* Header */}
      <div className="fixed top-0 z-50 w-full border-b border-[#800020]/20 bg-[#050202]/90 backdrop-blur-md">
        <div className="flex h-20 items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
    {/* Envolvemos todo en un enlace para que sea clickable */}
    <a 
        href="#top" 
        onClick={(e) => scrollToSection(e, 'top')} 
        className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
    >
        {/* Nuevo Logo Header */}
        <div className="flex items-center justify-center size-10 overflow-hidden rounded-full">
            <img 
                src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771387670/android-chrome-512x512_ksllge.png" 
                alt="The Velvet Studio" 
                className="w-full h-full object-cover"
            />
        </div>

        {/* Bloque de Texto */}
        <div className="flex flex-col mt-3">
            <h2 className="text-white text-lg font-bold tracking-tight font-brand leading-none">THE VELVET</h2>
            <span className="text-accent text-[8px] tracking-[0.3em] uppercase font-display">Studio</span>
        </div>
    </a>
</div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
                <nav className="flex gap-6">
                    <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="text-gray-300 hover:text-accent transition-colors text-sm font-medium">Inicio</a>
                    <a href="#" onClick={openAboutModal} className="text-gray-300 hover:text-accent transition-colors text-sm font-medium">Nosotros</a>
                    <a href="#security" onClick={(e) => scrollToSection(e, 'security')} className="text-gray-300 hover:text-accent transition-colors text-sm font-medium">Seguridad</a>
                    <a href="#earnings" onClick={(e) => scrollToSection(e, 'earnings')} className="text-gray-300 hover:text-accent transition-colors text-sm font-medium">Ganancias</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-300 hover:text-accent transition-colors text-sm font-medium">Contáctanos</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={handleShare}
                        className="text-gray-300 hover:text-accent transition-colors p-2 rounded-full hover:bg-white/5"
                        title="Compartir página"
                        aria-label="Compartir página"
                    >
                        <span className="material-symbols-outlined">share</span>
                    </button>
                    <a href="#apply" onClick={(e) => scrollToSection(e, 'apply')} className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white text-primary hover:bg-accent hover:text-secondary transition-all duration-300 text-sm font-bold shadow-lg">
                        <span>Únete</span>
                    </a>
                </div>
            </div>

            {/* Mobile Nav Toggle */}
            <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className="material-symbols-outlined">menu</span>
            </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="lg:hidden bg-[#050202] border-b border-white/10 py-4 px-6 absolute w-full left-0 top-20 flex flex-col gap-4 shadow-xl">
                 <a href="#top" className="text-gray-300 hover:text-accent font-medium" onClick={(e) => scrollToSection(e, 'top')}>Inicio</a>
                 <a href="#" className="text-gray-300 hover:text-accent font-medium" onClick={openAboutModal}>Nosotros</a>
                 <a href="#security" className="text-gray-300 hover:text-accent font-medium" onClick={(e) => scrollToSection(e, 'security')}>Seguridad</a>
                 <a href="#earnings" className="text-gray-300 hover:text-accent font-medium" onClick={(e) => scrollToSection(e, 'earnings')}>Ganancias</a>
                 <a href="#contact" className="text-gray-300 hover:text-accent font-medium" onClick={(e) => scrollToSection(e, 'contact')}>Contáctanos</a>
                 <button onClick={handleShare} className="text-gray-300 hover:text-accent font-medium text-left flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">share</span> Compartir
                 </button>
                 <a href="#apply" className="text-accent font-bold" onClick={(e) => scrollToSection(e, 'apply')}>Únete Ahora</a>
            </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBixMbXvIIf3xesDca1UWfkEqe6T50gBBgx5QVh2OSogcv2Rgexj8sOc9xqpno85o__3KRKz6Ug1MRHXKGCwg69rZJWDKCYfdg81Zr4eXjap1m5fy00ogBQPwo2eeOxMEr4HiMxt3Zq9fNMcxlMqbLQyfO7Weogsi3_tMOMZ2XLSZf6wPszr8m-OJ5Q19FgIHj2zTu32hiZMdNfrI96FGzFDJ9cNwC96mE0crcmcRzQ2yki2hpoPYyypnwjC11Ar8I5MiO9q12m9dRI" 
                alt="Sophisticated studio" 
                className="w-full h-full object-cover opacity-60" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-secondary/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center max-w-5xl">
            <div className="mb-2 flex flex-col items-center gap-6 animate-[fadeIn_0.5s_ease-out]">
                
                {/* HERO LOGO SVG - Exact replica of the "Red V" image */}
                    {/* Nuevo Logo Hero (Grande) */}
                    <div className="flex flex-col items-center justify-center mb-8 mt-12 md:mt-0 lg:mt-20 transition-transform duration-500 hover:scale-105">
                        <img 
                            src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771385894/The_Velvet_Studio_-_Logo_transparente_sombra_f9abpe.png" 
                            alt="The Velvet Studio" 
                            className="w-64 md:w-80 h-auto drop-shadow-2xl"
                        />
                    </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/50 px-4 py-1.5 backdrop-blur-sm mt-0">
                    <span className="material-symbols-outlined text-accent text-[18px]">verified</span>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider font-display">AGENCIA WEBCAM LIDER EN COLOMBIA</span>
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-6 drop-shadow-2xl font-display">
                Tu proyección personal, convertida en <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-accent">éxito tangible</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed font-body">
                Gana en dólares con el respaldo de la agencia más exclusiva. Cámaras robóticas IA y calidad 4K para una ventaja competitiva inmediata. Seguridad, privacidad y crecimiento profesional en un solo lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
            </div>
        </div>
      </div>

      {/* Security Section */}
      <section id="security" className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-accent/5 blur-[100px]"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-16">
                <div className="max-w-xl">
                    <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-2 font-display">Seguridad y Privacidad</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Protección Integral 360°</h3>
                    <p className="text-gray-400 font-body">Tu seguridad y privacidad son nuestra prioridad absoluta. Utilizamos tecnología de punta para garantizar tu tranquilidad mientras construyes tu imperio.</p>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                    <span className="material-symbols-outlined">shield_lock</span>
                    <span className="text-sm">Certificado SSL & Encriptación E2E</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: 'fingerprint', title: 'Verificación Sumsub', desc: 'Sistema avanzado de verificación biométrica de identidad para asegurar que solo interactúas con usuarios verificados.' },
                    { icon: 'public_off', title: 'Geo-bloqueo VPN', desc: 'Tecnología de bloqueo geográfico para proteger tu privacidad. Tu contenido no será visible en Colombia o regiones restringidas.' },
                    { icon: 'support_agent', title: 'Soporte Pineapple', desc: 'Apoyo integral en salud mental y bienestar. Acceso 24/7 a profesionales para mantener un equilibrio saludable.' }
                ].map((item) => (
                    <div key={item.title} className="group p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="size-14 rounded-xl bg-gradient-to-br from-red-900 to-black flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(128,0,0,0.5)]">
                            <span className="material-symbols-outlined text-white text-3xl">{item.icon}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-body">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Components */}
      <EarningsCalculator />
      <ApplicationForm />

      {/* Footer */}
      <footer id="contact" className="bg-[#020101] border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6 lg:px-12">
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
                                    className="w-full h-full object-cover"
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
        </div>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;