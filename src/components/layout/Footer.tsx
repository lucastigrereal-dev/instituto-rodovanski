import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Phone, MapPin, Mail } from 'lucide-react'

const procedures = [
  { href: '/masculino', label: 'Harmonização Masculina' },
  { href: '/feminino', label: 'Harmonização Feminina' },
  { href: '/gluteos', label: 'Preenchimento de Glúteos' },
  { href: '/fullface', label: 'Harmonização Full Face' },
]

const quickLinks = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1B2A4E', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-white">
                Instituto <span style={{ color: '#D4AF37' }}>Goldstein</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: '#9faace' }}>
              Referência em harmonização íntima e estética no Brasil.
              Transformação com naturalidade, técnica e discrição.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/institutogoldstein"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: '#243469', color: '#D4AF37' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4AF37'
                  e.currentTarget.style.color = '#1B2A4E'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#243469'
                  e.currentTarget.style.color = '#D4AF37'
                }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Procedimentos */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Procedimentos
            </h3>
            <ul className="space-y-3">
              {procedures.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors text-sm"
                    style={{ color: '#9faace' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Links Úteis
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors text-sm"
                    style={{ color: '#9faace' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#D4AF37' }} />
                <div className="text-sm" style={{ color: '#9faace' }}>
                  <p className="font-medium text-white">São Paulo</p>
                  <p>Av. Exemplo, 123 - Jardins</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#D4AF37' }} />
                <div className="text-sm" style={{ color: '#9faace' }}>
                  <p className="font-medium text-white">Belo Horizonte</p>
                  <p>Rua Exemplo, 456 - Savassi</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" style={{ color: '#D4AF37' }} />
                <div className="text-sm" style={{ color: '#9faace' }}>
                  <p>(11) 9999-9999 | (31) 9999-9999</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#7989bc' }}>
              © 2025 Instituto Goldstein. Todos os direitos reservados.
            </p>
            <p className="text-sm" style={{ color: '#7989bc' }}>
              Responsável Técnica: Dra. Karina Goldstein - CRM 123456 | RQE 12345
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
