import { motion } from 'motion/react';
import type { AnchorClick, ModalClick } from './types';

type SiteHeaderProps = {
  onScrollToSection: AnchorClick;
  onOpenAbout: ModalClick;
  onShare: (event: React.MouseEvent<HTMLElement>) => void | Promise<void>;
};

export function SiteHeader({ onScrollToSection, onOpenAbout, onShare }: SiteHeaderProps) {
  const navItems = [
    { label: 'Inicio', href: '#top', action: (event: React.MouseEvent<HTMLAnchorElement>) => onScrollToSection(event, 'top') },
    { label: 'Nosotros', href: '#', action: onOpenAbout },
    { label: 'Seguridad', href: '#security', action: (event: React.MouseEvent<HTMLAnchorElement>) => onScrollToSection(event, 'security') },
    { label: 'Ganancias', href: '#earnings', action: (event: React.MouseEvent<HTMLAnchorElement>) => onScrollToSection(event, 'earnings') },
    { label: 'Contacto', href: '#contact', action: (event: React.MouseEvent<HTMLAnchorElement>) => onScrollToSection(event, 'contact') },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed top-0 z-50 w-full border-b border-primary/20 bg-background-dark/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-auto max-w-7xl flex-col items-center justify-between gap-0 px-3 pb-0 pt-0.5 sm:px-6 md:h-20 md:flex-row md:py-0 lg:px-12">
        <div className="flex shrink-0 items-center gap-3 self-start md:self-auto">
          <a href="#top" onClick={(event) => onScrollToSection(event, 'top')} className="flex cursor-pointer items-center gap-1.5 transition-opacity hover:opacity-80">
            <div className="flex size-10 items-center justify-center overflow-hidden rounded-full">
              <img src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771387670/android-chrome-512x512_ksllge.png" alt="The Velvet Studio" loading="lazy" className="h-full w-full object-cover animate-fadeIn" />
            </div>
            <div className="mt-[5px] flex flex-col justify-center">
              <h2 className="mt-2.5 text-base font-bold leading-none tracking-tight text-white font-brand md:mt-1 md:text-lg">THE VELVET</h2>
              <span className="mt-0 text-[7px] uppercase tracking-[0.3em] text-accent font-display md:-mt-2 md:text-[8px]">Studio</span>
            </div>
          </a>
        </div>

        <div className="-mt-[26px] flex w-full items-end justify-between gap-1.5 sm:gap-4 md:mt-0 md:w-auto md:items-center md:justify-end lg:gap-8">
          <nav className="mb-1.5 flex items-center gap-2.5 pl-2 sm:gap-3 md:mb-0 md:pl-0 lg:gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={item.action} className="whitespace-nowrap text-[10px] font-medium text-stone-300 transition-colors hover:text-accent sm:text-xs lg:text-sm">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-0.5 md:flex-row md:gap-2 lg:gap-4">
            <button onClick={onShare} className="-mt-1 flex items-center justify-center rounded-full p-1 text-gray-300 transition-colors hover:bg-white/5 hover:text-accent md:mt-0 lg:p-2" title="Compartir página" aria-label="Compartir página">
              <span className="material-symbols-outlined text-[18px] leading-none sm:text-[20px] lg:text-[24px]">share</span>
            </button>
            <a href="/unete" onClick={(event) => onScrollToSection(event, 'apply')} className="flex h-7 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white px-3 text-[10px] font-bold text-primary shadow-lg transition-all duration-300 hover:bg-accent hover:text-secondary sm:h-8 sm:px-4 sm:text-xs lg:h-10 lg:px-6 lg:text-sm">
              Únete
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

