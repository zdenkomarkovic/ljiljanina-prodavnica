import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import type { Category } from '@/types/shop'

export default function CategoryList({
  categories,
  simple = false,
}: {
  categories: Category[]
  simple?: boolean
}) {
  if (categories.length === 0) {
    return <p className="text-warm-500 text-sm py-8 text-center">Nema kategorija.</p>
  }

  if (simple) {
    return (
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Link
            key={cat._id}
            href={`/kategorije/${cat.slug}`}
            className="px-4 py-2 border border-warm-200 rounded-xl text-sm text-warm-700 font-medium hover:border-blush hover:text-blush transition-colors bg-white"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat._id}
          href={`/kategorije/${cat.slug}`}
          className="group border border-warm-200 rounded-2xl overflow-hidden hover:border-warm-300 hover:shadow-md bg-white transition-all duration-300"
        >
          {cat.image ? (
            <div className="aspect-video relative bg-warm-50">
              <Image
                src={urlFor(cat.image).width(400).height(225).fit('crop').url()}
                alt={cat.image.alt ?? cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="aspect-video bg-warm-50 flex items-center justify-center text-warm-300 text-sm">
              Nema slike
            </div>
          )}
          <div className="p-3">
            <p className="font-serif font-medium text-sm text-warm-900 group-hover:text-blush transition-colors">{cat.name}</p>
            {cat.description && (
              <p className="text-xs text-warm-500 mt-1 line-clamp-2">{cat.description}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
