import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const team = [
  {
    name: 'Grace Rodríguez',
    role: 'Co-Founder | Community Lead',
    color: '#8B5CF6',
  },
  {
    name: 'Mayrim Rodríguez',
    role: 'Co-Founder | Community Lead',
    color: '#06B6D4',
  },
  {
    name: 'David Portillo',
    role: 'Tech & Innovation',
    color: '#1D4ED8',
  },
  {
    name: 'Leunam Díaz',
    role: 'Tech & Innovation',
    color: '#8B5CF6',
  },
]

function getAvatarUrl(name) {
  const encoded = encodeURIComponent(name)
  return `https://ui-avatars.com/api/?name=${encoded}&background=0D8ABC&color=fff&size=200&bold=true`
}

export default function TeamGallery() {
  return (
    <section id="equipo" className="relative py-28 bg-gray-950 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-3">// El equipo</p>
          <h2 className="section-title text-gradient">El Equipo Detrás de MERGE</h2>
        </motion.div>

        {/* Team grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden text-center cursor-default"
              style={{
                background: 'rgba(15,15,30,0.7)',
                border: `1px solid rgba(${member.color === '#8B5CF6' ? '139,92,246' : member.color === '#06B6D4' ? '6,182,212' : '29,78,216'}, 0.2)`,
                transition: 'all 0.3s ease',
              }}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${member.color}60, 0 0 25px ${member.color}25`,
                }}
              />

              {/* Top gradient accent */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }}
              />

              {/* Avatar */}
              <div className="pt-8 pb-2 px-6 flex justify-center">
                <div
                  className="relative w-24 h-24 rounded-full overflow-hidden"
                  style={{
                    border: `3px solid ${member.color}60`,
                    boxShadow: `0 0 20px ${member.color}40`,
                  }}
                >
                  <img
                    src={getAvatarUrl(member.name)}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="px-6 pb-7 pt-3">
                <h3 className="text-white font-bold text-lg leading-tight mb-1">{member.name}</h3>
                <p
                  className="text-sm font-medium font-mono"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
