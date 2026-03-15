import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Instagram, Twitter, Menu, X } from 'lucide-react'
import logo from '../imgs/logo.png'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#problema', label: 'Problema' },
  { href: '#vision', label: 'Visión' },
  { href: '#talentland', label: 'Talent Land' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#patrocinios', label: 'Patrocinios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-purple-900/20' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex-shrink-0">
          <img
            src={logo}
            alt="MERGE Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.instagram.com/merge_cuu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-gray-700/50 text-gray-400 hover:text-pink-400 hover:border-pink-500/50 hover:shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-all duration-300"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://x.com/merge_cuu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-gray-700/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            <Twitter size={18} />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-gray-800/50"
          >
            <div className="px-4 py-4 flex flex-col gap-2 bg-gray-950/95 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/60 transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-4 pt-2">
                <a href="https://www.instagram.com/merge_cuu" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram size={16} /> Instagram
                </a>
                <a href="https://x.com/merge_cuu" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter size={16} /> X
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
