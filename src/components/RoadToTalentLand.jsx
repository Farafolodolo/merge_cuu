import { motion } from 'framer-motion'
import { MapPin, Calendar, Trophy, Cpu, Flame } from 'lucide-react'
import birrias from '../imgs/birrias.png'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

export default function RoadToTalentLand() {
  return (
    <section id="talentland" className="relative py-28 overflow-hidden">
      {/* Section background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(29,78,216,0.12) 0%, rgba(139,92,246,0.12) 50%, rgba(6,182,212,0.08) 100%)',
        }}
      />
      <div className="absolute inset-0 cyber-grid-bg opacity-50" />

      {/* Top/bottom glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      {/* Ambient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(29,78,216,0.08) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-6"
        >
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-3">
            // Objetivo principal 2026
          </p>
          <h2 className="section-title">
            <span className="text-white">Destino: </span>
            <span className="text-gradient-tri">Talent Land México 2026</span>
          </h2>
        </motion.div>

        {/* Event details badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(29,78,216,0.2)',
              border: '1px solid rgba(29,78,216,0.5)',
              color: '#60A5FA',
            }}
          >
            <Calendar size={15} />
            7 al 9 de Abril 2026
          </span>
          <span
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(139,92,246,0.2)',
              border: '1px solid rgba(139,92,246,0.5)',
              color: '#C4B5FD',
            }}
          >
            <MapPin size={15} />
            Expo Santa Fe, CDMX
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          El evento que conecta a miles de mentes inquietas. Nuestro objetivo es{' '}
          <span className="text-purple-400 font-semibold">representar a MERGE</span> y traer conocimiento + conexiones
          de vuelta a{' '}
          <span className="text-cyan-400 font-semibold">Chihuahua.</span>
        </motion.p>

        {/* Tacoin card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: image placeholder */}
          <motion.div variants={fadeUp} className="relative group">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(6,182,212,0.4)',
                boxShadow: '0 0 30px rgba(6,182,212,0.2)',
              }}
            >
              <img
                src={birrias}
                alt="Tacoin - MERGE Hackathon Project"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Trophy badge */}
            <div
              className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                boxShadow: '0 0 20px rgba(139,92,246,0.5)',
              }}
            >
              <Trophy size={13} />
              Hackathon
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div variants={fadeUp}>
            <div
              className="rounded-2xl p-7 h-full flex flex-col justify-between"
              style={{
                background: 'rgba(15,15,30,0.8)',
                border: '1px solid rgba(139,92,246,0.35)',
                boxShadow: '0 0 30px rgba(139,92,246,0.1)',
              }}
            >
              {/* Project label */}
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={18} style={{ color: '#8B5CF6' }} />
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">
                  Proyecto Hackathon
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-extrabold mb-4"
                style={{
                  color: '#06B6D4',
                  textShadow: '0 0 20px rgba(6,182,212,0.6)',
                }}
              >
                TACOIN ✦
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-5">
                Participaremos en el desafío de{' '}
                <span className="text-white font-semibold">Banco Azteca</span> dentro del hackathon. Crearemos a{' '}
                <span className="text-purple-300 font-semibold">"Tacoin"</span>, la historia de un trabajador que con
                su liquidación emprende en el mundo de la birria.
              </p>

              {/* Winning phrase */}
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: 'rgba(6,182,212,0.08)',
                  border: '1px solid rgba(6,182,212,0.3)',
                }}
              >
                <Flame size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#06B6D4' }} />
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-white font-semibold">Las mejores carnes y nuestra birria legendaria</span>{' '}
                  con{' '}
                  <span
                    className="font-black text-base"
                    style={{ color: '#06B6D4', textShadow: '0 0 10px rgba(6,182,212,0.7)' }}
                  >
                    BIRRI-CHAIN (Blockchain).
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
