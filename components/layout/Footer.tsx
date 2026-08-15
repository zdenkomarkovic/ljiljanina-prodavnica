import { SOCIAL_INSTAGRAM, SOCIAL_INSTAGRAM_HANDLE } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-warm-200 bg-warm-50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div id="kontakt" className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Naziv */}
          <div>
            <h3 className="font-serif font-semibold text-warm-900 mb-3">
              {process.env.NEXT_PUBLIC_SITE_NAME ?? 'Prodavnica'}
            </h3>
            <p className="text-sm text-warm-500 leading-relaxed">
              Kozmetika, dodaci i suplementi za svakodnevnu negu i zdravlje.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-warm-500 mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+381646664852"
                  className="flex items-center gap-2 text-sm text-warm-700 hover:text-blush transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.606.356-1.158.906-1.41l2.674-1.19a1.125 1.125 0 0 1 1.332.318l1.676 2.21a1.125 1.125 0 0 1-.091 1.494L7.5 9a11.25 11.25 0 0 0 7.5 7.5l1.24-1.247a1.125 1.125 0 0 1 1.494-.091l2.21 1.676a1.125 1.125 0 0 1 .318 1.332l-1.19 2.674a1.125 1.125 0 0 1-1.41.906C7.697 20.517 3.483 16.303 2.25 6.338Z" />
                  </svg>
                  +381 64 666 4852
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-warm-700 hover:text-blush transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                  </svg>
                  @{SOCIAL_INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigacija */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-warm-500 mb-4">Navigacija</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Početna' },
                { href: '/o-nama', label: 'O nama' },
                { href: '/kategorije', label: 'Kategorije' },
                { href: '/proizvodi', label: 'Svi proizvodi' },
                { href: '/korpa', label: 'Korpa' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-warm-500 hover:text-blush transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warm-500">
          <span>&copy; {year} {process.env.NEXT_PUBLIC_SITE_NAME ?? 'Prodavnica'}. Sva prava zadržana.</span>
          <a
            href="https://manikamwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blush transition-colors"
          >
            Izrada: Manikam Web Solutions
          </a>
        </div>

      </div>
    </footer>
  )
}
