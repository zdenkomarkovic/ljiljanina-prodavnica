'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Category } from '@/types/shop'

export default function MobileMenu({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const close = () => {
    setOpen(false)
    setExpandedId(null)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-warm-700 hover:text-blush transition-colors"
        aria-label={open ? 'Zatvori meni' : 'Otvori meni'}
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-cream border-b border-warm-200 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1 text-sm text-warm-700">
            <Link href="/" onClick={close} className="py-2 hover:text-blush transition-colors">
              Početna
            </Link>

            <div>
              <button
                onClick={() => setExpandedId(expandedId === 'kategorije' ? null : 'kategorije')}
                className="w-full flex items-center justify-between py-2 hover:text-blush transition-colors"
              >
                Kategorije
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${expandedId === 'kategorije' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedId === 'kategorije' && (
                <div className="pl-4 pb-1 flex flex-col gap-1">
                  {categories.map((cat) => (
                    <div key={cat._id}>
                      <Link
                        href={`/kategorije/${cat.slug}`}
                        onClick={close}
                        className="block py-1.5 hover:text-blush transition-colors font-medium"
                      >
                        {cat.name}
                      </Link>
                      {cat.subcategories && cat.subcategories.length > 0 && (
                        <div className="pl-4 flex flex-col gap-0.5">
                          {cat.subcategories.map((sub) => (
                            <Link
                              key={sub._id}
                              href={`/kategorije/${sub.slug}`}
                              onClick={close}
                              className="block py-1 text-warm-500 hover:text-blush transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link href="/kategorije" onClick={close} className="py-1 text-warm-500 hover:text-blush transition-colors">
                    Sve kategorije →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/proizvodi" onClick={close} className="py-2 hover:text-blush transition-colors">
              Svi proizvodi
            </Link>
            <a href="#kontakt" onClick={close} className="py-2 hover:text-blush transition-colors">
              Kontakt
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
