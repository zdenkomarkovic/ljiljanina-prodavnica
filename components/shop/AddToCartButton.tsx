import type { Product } from '@/types/shop'

const INSTAGRAM_DM_URL = 'https://ig.me/m/ljiljanina_chogan.prodavnica'

export default function AddToCartButton({ product }: { product: Product }) {
  if (!product.inStock) {
    return (
      <button disabled className="w-full py-3 border border-warm-200 rounded-xl text-warm-300 cursor-not-allowed">
        Nije na stanju
      </button>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-warm-600">
        Za narudžbinu pošaljite poruku na Instagram i navedite naziv proizvoda:{' '}
        <span className="font-semibold text-warm-900">{product.name}</span>
      </p>
      <a
        href={INSTAGRAM_DM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 bg-blush text-white rounded-xl hover:bg-blush-700 transition-colors font-medium text-center flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
        </svg>
        Pošalji upit na Instagramu
      </a>
    </div>
  )
}
