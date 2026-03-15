import { motion } from 'framer-motion'
import { Ticket, Hotel, Wallet, Eye, Rocket, Users, Heart } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const supportOptions = [
  {
    icon: Ticket,
    title: 'Entradas al evento',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.35)',
  },
  {
    icon: Hotel,
    title: 'Hospedaje del equipo',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.35)',
  },
  {
    icon: Wallet,
    title: 'Viáticos básicos',
    color: '#1D4ED8',
    bg: 'rgba(29,78,216,0.12)',
    border: 'rgba(29,78,216,0.4)',
  },
]

const roi = [
  { icon: Eye, text: 'Visibilidad de marca con talento joven' },
  { icon: Rocket, text: 'Posicionamiento como aliado de innovación' },
  { icon: Users, text: 'Acceso temprano a estudiantes de tecnología' },
  { icon: Heart, text: 'Relación a largo plazo con la comunidad' },
]

export default function Sponsorship() {
  return (
    <section id="patrocinios" className="relative py-28 overflow-hidden">
      {/* Layered background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(9,9,18,1) 0%, rgba(20,10,40,0.5) 50%, rgba(9,9,18,1) 100%)',
        }}
      />
      <div className="absolute inset-0 cyber-grid-bg opacity-50" />

      {/* Ambient orbs */}
      <div
        className="absolute top-10 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-4"
        >
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">// Colaboración</p>
          <h2 className="section-title text-gradient">¿Cómo nos pueden apoyar?</h2>
          <p className="text-gray-400 text-lg mt-2">
            Opciones de colaboración con{' '}
            <span className="text-purple-400 font-semibold">flexibilidad total</span> para el sponsor.
          </p>
        </motion.div>

        {/* Support options */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid sm:grid-cols-3 gap-6 mt-14 mb-16"
        >
          {supportOptions.map((opt) => (
            <motion.div
              key={opt.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative group rounded-2xl p-7 flex flex-col items-center text-center overflow-hidden transition-all duration-300"
              style={{ background: opt.bg, border: `1px solid ${opt.border}` }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 0 30px ${opt.color}25, inset 0 0 20px ${opt.color}05` }}
              />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${opt.color}20`, border: `1px solid ${opt.color}50` }}
              >
                <opt.icon size={28} style={{ color: opt.color }} />
              </div>
              <h3 className="text-white font-bold text-xl">{opt.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-3xl mx-auto mb-20"
        >
          <motion.h3
            variants={fadeUp}
            className="text-center text-2xl font-bold text-white mb-8"
          >
            ¿Qué se obtiene a cambio?
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {roi.map((item) => (
              <motion.div
                key={item.text}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-xl p-4 transition-all duration-200"
                style={{
                  background: 'rgba(139,92,246,0.06)',
                  border: '1px solid rgba(139,92,246,0.2)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.35)' }}
                >
                  <item.icon size={18} style={{ color: '#8B5CF6' }} />
                </div>
                <p className="text-gray-300 text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final giant neon statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center"
        >
          <div
            className="inline-block rounded-2xl px-8 py-10"
            style={{
              background: 'rgba(6,182,212,0.05)',
              border: '1px solid rgba(6,182,212,0.25)',
              boxShadow: '0 0 60px rgba(6,182,212,0.1), 0 0 120px rgba(139,92,246,0.05)',
            }}
          >
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
              style={{
                color: '#06B6D4',
                textShadow:
                  '0 0 20px rgba(6,182,212,1), 0 0 50px rgba(6,182,212,0.7), 0 0 100px rgba(6,182,212,0.3)',
              }}
            >
              NO PATROCINAN UN VIAJE,
              <br />
              <span
                style={{
                  color: '#8B5CF6',
                  textShadow:
                    '0 0 20px rgba(139,92,246,1), 0 0 50px rgba(139,92,246,0.7), 0 0 100px rgba(139,92,246,0.3)',
                }}
              >
                INVIERTEN EN TALENTO.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
