'use client'

import Link from 'next/link'
import { useCart } from '@/lib/cart/CartContext'

export default function CartIcon() {
  const { totalItems } = useCart()

  return (
    <Link
      href="/korpa"
      aria-label="Korpa"
      className="relative flex items-center text-warm-700 hover:text-blush transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 0 1-8 0" />
      </svg>

      {totalItems > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold bg-blush text-white rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
