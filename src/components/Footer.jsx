import { Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative py-10 px-4"
      style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(139,92,246,0.2)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center sm:text-left font-mono">
          <span style={{ color: '#8B5CF6' }}>MERGE CUU</span>{' '}
          <span className="text-gray-600">©</span>{' '}
          2026.{' '}
          <span className="text-gray-500">Agradecemos de su tiempo :)</span>
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/merge_cuu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-pink-400 transition-colors duration-200 group"
          >
            <Instagram
              size={16}
              className="group-hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.8)] transition-all duration-200"
            />
            <span>Instagram</span>
          </a>
          <span className="text-gray-700">·</span>
          <a
            href="https://x.com/merge_cuu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-200 group"
          >
            <Twitter
              size={16}
              className="group-hover:drop-shadow-[0_0_6px_rgba(6,182,212,0.8)] transition-all duration-200"
            />
            <span>X (Twitter)</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
