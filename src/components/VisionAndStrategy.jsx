import { motion } from 'framer-motion'
import { Terminal, Users, Building2, Quote } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const pillars = [
  {
    icon: Terminal,
    title: 'Hackathons',
    subtitle: '(aprendizaje aplicado)',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.12)',
    border: 'rgba(139,92,246,0.35)',
  },
  {
    icon: Users,
    title: 'Conferencias y workshops',
    subtitle: 'Conocimiento en acción',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.12)',
    border: 'rgba(6,182,212,0.35)',
  },
  {
    icon: Building2,
    title: 'Vinculación con empresas',
    subtitle: 'tecnológicas',
    color: '#1D4ED8',
    bg: 'rgba(29,78,216,0.15)',
    border: 'rgba(29,78,216,0.4)',
  },
]

export default function VisionAndStrategy() {
  return (
    <section id="vision" className="relative py-28 bg-gray-950 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-6"
        >
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">// Roadmap estratégico</p>
          <h2 className="section-title text-gradient">Nuestra Visión y Estrategia</h2>
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Buscamos que los jóvenes{' '}
          <span className="text-purple-400 font-semibold">construyan, no solo aprendan</span>, utilizando Blockchain
          como herramienta de impacto real y conectando estudiantes con empresas desde temprano.
        </motion.p>

        {/* Pillars grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-300"
              style={{
                background: p.bg,
                border: `1px solid ${p.border}`,
              }}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 0 30px ${p.color}30, inset 0 0 20px ${p.color}08` }}
              />

              {/* Number badge */}
              <span
                className="absolute top-4 right-4 text-xs font-mono opacity-40"
                style={{ color: p.color }}
              >
                0{i + 1}
              </span>

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${p.color}20`, border: `1px solid ${p.color}50` }}
              >
                <p.icon size={28} style={{ color: p.color }} />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Blockquote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="relative max-w-2xl mx-auto"
        >
          <div
            className="relative rounded-2xl p-8 text-center"
            style={{
              background: 'rgba(139,92,246,0.08)',
              border: '1px solid rgba(139,92,246,0.3)',
              boxShadow: '0 0 40px rgba(139,92,246,0.1)',
            }}
          >
            <Quote
              size={32}
              className="mx-auto mb-4 opacity-40"
              style={{ color: '#8B5CF6' }}
            />
            <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              "No solo formar, sino{' '}
              <span
                style={{
                  color: '#8B5CF6',
                  textShadow: '0 0 15px rgba(139,92,246,0.6)',
                }}
              >
                proyectar talento.
              </span>
              "
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
