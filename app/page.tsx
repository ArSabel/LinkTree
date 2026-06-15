'use client'

import { ExternalLink, Mail, Share2, MessageSquare, Code, Globe } from 'lucide-react'
import { useState } from 'react'

interface Link {
  id: string
  title: string
  description: string
  url: string
  icon: React.ReactNode
  color: string
}

const links: Link[] = [
  {
    id: '1',
    title: 'Sitio Web Oficial',
    description: 'Visita nuestro sitio web principal',
    url: 'https://example.com',
    icon: <Globe className="w-5 h-5" />,
    color: 'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200',
  },
  {
    id: '2',
    title: 'LinkedIn',
    description: 'Síguenos en LinkedIn para actualizaciones profesionales',
    url: 'https://linkedin.com',
    icon: <Share2 className="w-5 h-5" />,
    color: 'from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200',
  },
  {
    id: '3',
    title: 'Twitter / X',
    description: 'Últimas noticias y actualizaciones en tiempo real',
    url: 'https://twitter.com',
    icon: <MessageSquare className="w-5 h-5" />,
    color: 'from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200',
  },
  {
    id: '4',
    title: 'GitHub',
    description: 'Explora nuestros proyectos de código abierto',
    url: 'https://github.com',
    icon: <Code className="w-5 h-5" />,
    color: 'from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200',
  },
  {
    id: '5',
    title: 'Contacto',
    description: 'Envíanos un email con tus preguntas o sugerencias',
    url: 'mailto:contact@example.com',
    icon: <Mail className="w-5 h-5" />,
    color: 'from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200',
  },
]

export default function Page() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-white">YH</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-center text-foreground mb-4 tracking-tight">
          Bienvenido a tu Hub
        </h1>

        <p className="text-xl text-center text-secondary mb-2">
          Todos nuestros recursos y enlaces en un solo lugar
        </p>

        <p className="text-center text-muted-foreground max-w-lg mx-auto">
          Accede fácilmente a nuestros servicios, documentación, redes sociales y más. Tu puerta de entrada a todo lo que ofrecemos.
        </p>
      </div>

      {/* Links Grid */}
      <div className="max-w-2xl mx-auto">
        <div className="grid gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative p-6 rounded-xl border border-border transition-all duration-300 ease-out bg-gradient-to-r ${link.color} shadow-sm hover:shadow-md`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300 text-primary">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-secondary group-hover:text-foreground transition-colors">
                      {link.description}
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-2xl mx-auto mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 Your Company. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 justify-center mt-6 text-muted-foreground hover:text-foreground transition-colors">
          <a href="#" className="text-xs hover:text-primary transition-colors">
            Privacidad
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-xs hover:text-primary transition-colors">
            Términos
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-xs hover:text-primary transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </main>
  )
}
