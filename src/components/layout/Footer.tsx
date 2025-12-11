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
    <footer className="bg-navy-950 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-white">
                Instituto <span className="text-gold-500">Rodovanski</span>
              </span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed">
              Referência em harmonização íntima e estética no Brasil.
              Transformação com naturalidade, técnica e discrição.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/institutorodovanski"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-all"
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
                    className="text-navy-300 hover:text-gold-500 transition-colors text-sm"
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
                    className="text-navy-300 hover:text-gold-500 transition-colors text-sm"
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
                <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <div className="text-navy-300 text-sm">
                  <p className="font-medium text-white">São Paulo</p>
                  <p>Av. Exemplo, 123 - Jardins</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <div className="text-navy-300 text-sm">
                  <p className="font-medium text-white">Belo Horizonte</p>
                  <p>Rua Exemplo, 456 - Savassi</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 flex-shrink-0" />
                <div className="text-navy-300 text-sm">
                  <p>(11) 9999-9999 | (31) 9999-9999</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm">
              © 2025 Instituto Rodovanski. Todos os direitos reservados.
            </p>
            <p className="text-navy-400 text-sm">
              Responsável Técnica: Dra. Karina Rodovansky - CRM 123456 | RQE 12345
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
