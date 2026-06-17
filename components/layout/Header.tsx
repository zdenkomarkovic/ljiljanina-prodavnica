import Link from 'next/link'
import Image from 'next/image'
import { getAllCategories } from '@/lib/sanity/queries'
import CategoryDropdown from './CategoryDropdown'
import MobileMenu from './MobileMenu'

export default async function Header() {
  const categories = await getAllCategories()

  return (
    <header className="sticky top-0 z-40 border-b border-warm-200 bg-cream/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.jpg"
            alt={process.env.NEXT_PUBLIC_SITE_NAME ?? 'Prodavnica'}
            width={40}
            height={40}
            className="rounded-full object-cover ring-2 ring-warm-200"
          />
          <span className="font-serif font-semibold text-lg tracking-tight hidden sm:block text-warm-900">
            {process.env.NEXT_PUBLIC_SITE_NAME ?? 'Prodavnica'}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-warm-700">
          <Link href="/" className="hover:text-blush transition-colors">
            Početna
          </Link>
          <CategoryDropdown categories={categories} />
          <Link href="/proizvodi" className="hover:text-blush transition-colors">
            Svi proizvodi
          </Link>
          <a href="#kontakt" className="hover:text-blush transition-colors">
            Kontakt
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <MobileMenu categories={categories} />
        </div>
      </div>
    </header>
  )
}
