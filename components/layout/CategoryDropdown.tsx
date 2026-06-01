'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import type { Category } from '@/types/shop'

export default function CategoryDropdown({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  const hide = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false)
      setHoveredId(null)
    }, 150)
  }

  const close = () => {
    setOpen(false)
    setHoveredId(null)
  }

  if (categories.length === 0) {
    return (
      <Link href="/kategorije" className="hover:text-blush transition-colors">
        Kategorije
      </Link>
    )
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button className="flex items-center gap-1 hover:text-blush transition-colors">
        Kategorije
        <svg
          className={`w-3 h-3 mt-px transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-warm-200 rounded-2xl shadow-lg py-1.5 z-50">
          {categories.map((cat) => {
            const hasSubs = cat.subcategories && cat.subcategories.length > 0
            const isHovered = hoveredId === cat._id

            return (
              <div
                key={cat._id}
                className="relative"
                onMouseEnter={() => setHoveredId(cat._id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link
                  href={`/kategorije/${cat.slug}`}
                  onClick={close}
                  className={`flex items-center justify-between px-4 py-2 text-sm font-medium text-warm-800 transition-colors ${isHovered ? 'text-blush bg-blush-50' : 'hover:text-blush hover:bg-blush-50'}`}
                >
                  {cat.name}
                  {hasSubs && (
                    <svg className="w-3 h-3 text-warm-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </Link>

                {hasSubs && isHovered && (
                  <div className="absolute top-0 left-full ml-1 w-48 bg-white border border-warm-200 rounded-2xl shadow-lg py-1.5 z-50">
                    {cat.subcategories!.map((sub) => (
                      <Link
                        key={sub._id}
                        href={`/kategorije/${sub.slug}`}
                        onClick={close}
                        className="block px-4 py-2 text-sm text-warm-700 hover:text-blush hover:bg-blush-50 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          <div className="border-t border-warm-100 mt-1 pt-1">
            <Link
              href="/kategorije"
              onClick={close}
              className="block px-4 py-2 text-xs text-warm-500 hover:text-blush hover:bg-blush-50 transition-colors"
            >
              Sve kategorije →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
