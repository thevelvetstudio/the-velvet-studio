import { motion } from 'motion/react';
import { GhostCursor } from './GhostCursor';
import type { AnchorClick } from './types';

type HeroSectionProps = {
  onScrollToSection: AnchorClick;
};

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section id="top" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050208]">
      <GhostCursor
        className="absolute inset-0"
        color="#FFD700"
        brightness={0.95}
        edgeIntensity={0.35}
        trailLength={58}
        inertia={0.62}
        grainIntensity={0.045}
        bloomStrength={0.16}
        bloomRadius={1.15}
        bloomThreshold={0.02}
        fadeDelayMs={999999}
        fadeDurationMs={1800}
        zIndex={5}
      />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(128,0,32,0.24),rgba(5,2,8,0)_34%),linear-gradient(180deg,rgba(5,2,8,0.9),#050208)]" />

      <div className="relative z-20 flex min-h-screen w-full items-center justify-center px-6">
        <motion.a
          href="#top"
          onClick={(event) => onScrollToSection(event, 'top')}
          className="flex cursor-pointer items-center justify-center"
          initial={{ opacity: 0, scale: 0.86, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.035 }}
        >
          <img
            src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771385894/The_Velvet_Studio_-_Logo_transparente_sombra_f9abpe.png"
            alt="The Velvet Studio"
            loading="eager"
            className="h-auto w-[min(72vw,390px)] select-none drop-shadow-[0_0_38px_rgba(255,215,0,0.18)]"
            draggable={false}
          />
        </motion.a>
      </div>
    </section>
  );
}
