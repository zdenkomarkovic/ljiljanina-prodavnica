import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/image'
import type { Product } from '@/types/shop'
import { SOCIAL_INSTAGRAM_DM_URL } from '@/lib/constants'

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images?.[0]
  const price = product.salePrice ?? product.price
  const hasPrice = price != null

  return (
    <div className="group border border-warm-200 rounded-2xl overflow-hidden flex flex-col bg-white hover:shadow-md hover:border-warm-300 transition-all duration-300">
      <Link href={`/proizvodi/${product.slug}`} className="block aspect-square relative bg-warm-50">
        {image ? (
          <Image
            src={urlFor(image).width(400).height(400).fit('crop').url()}
            alt={image.alt ?? product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-warm-300 text-sm">
            Nema slike
          </div>
        )}
        {product.salePrice && (
          <span className="absolute top-2 left-2 bg-blush text-white text-xs px-2.5 py-1 rounded-full font-medium">
            Akcija
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="text-xs text-warm-500 bg-white px-3 py-1 rounded-full border border-warm-200">
              Nije na stanju
            </span>
          </div>
        )}
      </Link>

      <div className="p-3 flex flex-col flex-1 gap-2">
        {product.category && (
          <span className="text-xs text-blush uppercase tracking-widest font-medium">
            {product.category.name}
          </span>
        )}
        <Link
          href={`/proizvodi/${product.slug}`}
          className="font-medium text-sm leading-snug text-warm-900 hover:text-blush transition-colors"
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-2 mt-1">
          {hasPrice ? (
            <>
              <span className="font-semibold text-warm-900">{price!.toLocaleString('sr-RS')} RSD</span>
              {product.salePrice && product.price != null && (
                <span className="text-sm text-warm-300 line-through">
                  {product.price.toLocaleString('sr-RS')} RSD
                </span>
              )}
            </>
          ) : (
            <span className="text-sm text-warm-500 italic">Cena na upit</span>
          )}
        </div>

        <div className="flex gap-2 mt-auto pt-1">
          <Link
            href={`/proizvodi/${product.slug}`}
            className="flex-1 text-xs py-2 text-center border border-warm-200 rounded-xl text-warm-700 hover:border-blush hover:text-blush transition-colors"
          >
            Detalji
          </Link>
          {product.inStock && (
            <a
              href={SOCIAL_INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-xs py-2 bg-blush text-white rounded-xl hover:bg-blush-700 transition-colors font-medium text-center"
              aria-label={`Poruči ${product.name} na Instagramu`}
            >
              Pošalji upit
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
