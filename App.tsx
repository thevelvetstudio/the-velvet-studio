import React, { useState } from 'react';
import { EarningsCalculator } from './components/EarningsCalculator';
import { ApplicationForm } from './components/ApplicationForm';
import { AboutModal } from './components/AboutModal';
import { LocationModal } from './components/LocationModal';
import { CareersModal } from './components/CareersModal';
import { BlogModal } from './components/BlogModal';
import { LegalModal, LegalSection } from './components/LegalModal';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import { HeroSection } from './components/landing/HeroSection';
import { SecuritySection } from './components/landing/SecuritySection';
import { SiteFooter } from './components/landing/SiteFooter';

function App() {
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
    else if (path === '/unete') {
      setTimeout(() => {
        const element = document.getElementById('apply');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
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
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openAboutModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsAboutModalOpen(true);
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

  return (
    <div className="font-body text-slate-900 dark:text-white antialiased overflow-x-hidden">
      {/* Modals */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => closeModal(setIsAboutModalOpen)} />
      <LocationModal isOpen={isLocationModalOpen} onClose={() => closeModal(setIsLocationModalOpen)} />
      <CareersModal isOpen={isCareersModalOpen} onClose={() => closeModal(setIsCareersModalOpen)} />
      <BlogModal isOpen={isBlogModalOpen} onClose={() => closeModal(setIsBlogModalOpen)} />
      <LegalModal isOpen={isLegalModalOpen} onClose={() => closeModal(setIsLegalModalOpen)} initialSection={legalActiveTab} />


      <HeroSection onScrollToSection={scrollToSection} />


      {/* Components */}
     
    </div>
  );
}

export default App;
