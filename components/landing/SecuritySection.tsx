import { motion } from 'motion/react';

const securityItems = [
  { icon: 'fingerprint', title: 'Verificación Sumsub', desc: 'Sistema avanzado de verificación biométrica de identidad para asegurar que solo interactúas con usuarios verificados.' },
  { icon: 'public_off', title: 'Geo-bloqueo VPN', desc: 'Tecnología de bloqueo geográfico para proteger tu privacidad. Tu contenido no será visible en Colombia o regiones restringidas.' },
  { icon: 'trending_up', title: 'Acompañamiento Estratégico', desc: 'Asesoría en imagen y comunicación persuasiva y cultural para conectar con audiencias internacionales. Formación continua para tu desarrollo profesional.' },
];

export function SecuritySection() {
  return (
    <section id="security" className="relative overflow-hidden bg-background-dark py-24">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-full w-1/4 bg-accent/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-16 flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-accent font-display">Seguridad y Privacidad</h2>
            <h3 className="mb-4 text-3xl font-bold text-white font-display md:text-4xl">Protección Integral 360°</h3>
            <p className="text-gray-400 font-body">Tu seguridad y privacidad son nuestra prioridad absoluta. Utilizamos tecnología de punta para garantizar tu tranquilidad mientras construyes tu imperio.</p>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <span className="material-symbols-outlined">shield_lock</span>
            <span className="text-sm">Certificado SSL & Encriptación E2E</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {securityItems.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.15 }} className="group rounded-2xl border border-white/5 bg-card-dark p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-900 to-black transition-shadow group-hover:shadow-[0_0_15px_rgba(128,0,0,0.5)]">
                <span className="material-symbols-outlined text-3xl text-white">{item.icon}</span>
              </div>
              <h4 className="mb-3 text-xl font-bold text-white font-display">{item.title}</h4>
              <p className="text-sm leading-relaxed text-gray-400 font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

