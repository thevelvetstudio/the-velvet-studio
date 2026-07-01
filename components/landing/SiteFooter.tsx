import { motion } from 'motion/react';
import type { LegalClick, ModalClick } from './types';

type SiteFooterProps = {
  onOpenAbout: ModalClick;
  onOpenCareers: ModalClick;
  onOpenBlog: ModalClick;
  onOpenLocation: ModalClick;
  onOpenLegal: LegalClick;
};

export function SiteFooter({ onOpenAbout, onOpenCareers, onOpenBlog, onOpenLocation, onOpenLegal }: SiteFooterProps) {
  return (
    <footer id="contact" className="border-t border-white/5 bg-[#020101] pb-8 pt-16">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }} className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <div className="mb-6 flex items-center gap-3">
              <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-80">
                <div className="-mt-2 flex size-8 items-center justify-center overflow-hidden rounded-full">
                  <img src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771387670/android-chrome-512x512_ksllge.png" alt="The Velvet Studio Logo" loading="lazy" className="h-full w-full object-cover animate-fadeIn" />
                </div>
                <h2 className="text-lg font-bold tracking-tight text-white font-brand">THE VELVET STUDIO</h2>
              </a>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 font-body">
              Redefiniendo el modelaje web en Colombia. Una experiencia de lujo diseñada para tu éxito financiero y personal.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="mb-4 font-bold text-white font-display">Compañía</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-body">
                <li><a href="#" onClick={onOpenAbout} className="transition-colors hover:text-accent">Sobre Nosotros</a></li>
                <li><a href="#" onClick={onOpenCareers} className="transition-colors hover:text-accent">Carreras</a></li>
                <li><a href="#" onClick={onOpenBlog} className="transition-colors hover:text-accent">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white font-display">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-body">
                <li><a href="#" onClick={(event) => onOpenLegal(event, 'privacy')} className="transition-colors hover:text-accent">Privacidad</a></li>
                <li><a href="#" onClick={(event) => onOpenLegal(event, 'terms')} className="transition-colors hover:text-accent">Términos</a></li>
                <li><a href="#" onClick={(event) => onOpenLegal(event, 'compliance')} className="transition-colors hover:text-accent">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white font-display">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-body">
                <li><a href="mailto:thevelvetstudio8@gmail.com" className="flex items-center gap-2 transition-colors hover:text-accent"><span className="material-symbols-outlined text-[16px]">mail</span> thevelvetstudio8@gmail.com</a></li>
                <li><a href="tel:+573207200266" className="flex items-center gap-2 transition-colors hover:text-accent"><span className="material-symbols-outlined text-[16px]">call</span> +57 320 720 0266</a></li>
                <li><a href="#" onClick={onOpenLocation} className="flex items-center gap-2 transition-colors hover:text-accent"><span className="material-symbols-outlined text-[16px]">location_on</span> Manizales, Colombia</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-gray-600 font-body">© 2026 The Velvet Studio. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <span className="size-2 rounded-full bg-green-500" />
            <span className="text-xs text-gray-400 font-body">Sistemas Operativos Operando</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

