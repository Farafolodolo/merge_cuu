import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function HeroSection() {
  const handleScrollToTalentLand = () => {
    const el = document.querySelector('#talentland')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cyber-grid-bg pt-16 pb-24"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.18) 0%, rgba(6,182,212,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-24 h-24 border-l-2 border-t-2 border-purple-500/30 rounded-tl-xl pointer-events-none" />
      <div className="absolute bottom-24 right-8 w-24 h-24 border-r-2 border-b-2 border-cyan-500/30 rounded-br-xl pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '2s', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Label badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6 mt-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Comunidad Tecnológica · Chihuahua, México
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
        >
          <span className="text-gradient">MERGE:</span>{' '}
          <span className="text-white">Conectando personas,</span>
          <br />
          <span className="text-white">Chihuahua en </span>
          <span className="text-gradient">crecimiento.</span>
        </motion.h1>

        {/* H2 */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
        >
          No somos solo aprendizaje pasivo,{' '}
          <span className="neon-text-cyan font-bold">somos ejecución y visibilidad.</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Comunidad que conecta estudiantes de tecnología y blockchain con empresas y ecosistemas.{' '}
          <span className="text-purple-400 font-medium">Enfoque: Chihuahua</span>{' '}
          <span className="text-cyan-400">→</span>{' '}
          <span className="text-cyan-400 font-medium">impacto nacional e internacional.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleScrollToTalentLand}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary text-base sm:text-lg"
          >
            Conoce nuestro camino a Talent Land
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
