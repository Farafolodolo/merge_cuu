import { motion } from 'framer-motion'
import { Zap, Unlink } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cards = [
  {
    icon: Zap,
    title: 'Talento existente',
    body: 'Talento joven con interés en tecnología y blockchain. Mucho aprendizaje teórico, poco impacto real.',
    accentColor: '#8B5CF6',
  },
  {
    icon: Unlink,
    title: 'Desconexión',
    body: 'Poca conexión directa entre estudiantes y empresas.',
    accentColor: '#06B6D4',
  },
]

export default function TheProblem() {
  return (
    <section id="problema" className="relative py-28 cyber-grid-bg overflow-hidden">
      {/* Glow top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-3">// El contexto actual</p>
          <h2 className="section-title text-gradient">¿Qué está pasando hoy?</h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid sm:grid-cols-2 gap-6 mb-16"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="card-cyber group relative overflow-hidden"
            >
              {/* Card top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500 group-hover:opacity-100 opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${card.accentColor}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `rgba(${card.accentColor === '#8B5CF6' ? '139,92,246' : '6,182,212'}, 0.15)`,
                  border: `1px solid ${card.accentColor}40`,
                }}
              >
                <card.icon size={22} style={{ color: card.accentColor }} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Big statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="text-center"
        >
          <div className="inline-block relative">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              El talento existe,{' '}
              <span
                className="font-black"
                style={{
                  color: '#06B6D4',
                  textShadow: '0 0 20px rgba(6,182,212,0.8), 0 0 40px rgba(6,182,212,0.4)',
                }}
              >
                PERO LA CONEXIÓN NO SIEMPRE.
              </span>
            </p>
            {/* Underline glow */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-3 h-1 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)',
                boxShadow: '0 0 12px rgba(6,182,212,0.6)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  )
}
