import Image from 'next/image'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'O nama',
  description:
    'Upoznajte Ljiljanu i njenu malu Chogan prodavnicu – miris koji inspiriše, nega koja prija.',
  alternates: {
    canonical: `${SITE_URL}/o-nama`,
  },
}

export default function ONamaPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-warm-900">O nama</h1>
        <p className="text-blush-700 font-serif italic mt-1">
          Ljiljana &mdash; mala Chogan prodavnica
        </p>
      </div>

      <div className="w-64 sm:w-80 mx-auto rounded-2xl overflow-hidden shadow-lg mb-10">
        <Image
          src="/cad0290dc0fd9b671e7d1145de83cf5ea9e2bba1-1254x1254.webp"
          alt="Ljiljana - Chogan prodavnica"
          width={1254}
          height={1254}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="bg-white/60 border border-warm-200 rounded-2xl px-6 py-10 sm:px-10 space-y-6 text-warm-700 leading-relaxed">
        <p>
          <strong className="text-warm-900">Dobro došli u Ljiljaninu malu Chogan prodavnicu.</strong>{' '}
          💜 Ja sam <strong className="text-warm-900">Ljiljana</strong> i ovu malu online
          prodavnicu stvaram sa ljubavlju prema lepim mirisima, nezi i osećaju zadovoljstva koji
          nam pružaju mali rituali svakog dana.
        </p>

        <p>
          <strong className="text-warm-900">Chogan</strong> sam izabrala jer me je privukla
          raznovrsnost proizvoda i mogućnost da svako pronađe nešto za sebe &ndash; od mirisa i
          kozmetike do proizvoda za ličnu negu i dom.
        </p>

        <p>
          Želim da ova prodavnica bude mesto gde ćete se osećati prijatno, gde možete da
          pogledate ponudu, upoznate proizvode i izaberete{' '}
          <strong className="text-warm-900">miris ili proizvod koji odgovara baš vama.</strong> 🌸
        </p>

        <div className="grid sm:grid-cols-3 gap-4 py-2 text-center">
          <div className="rounded-xl bg-blush-50 px-4 py-5">
            <p className="font-serif text-lg text-blush-700">💜 Miris</p>
            <p className="text-sm text-warm-500 mt-1">koji inspiriše</p>
          </div>
          <div className="rounded-xl bg-blush-50 px-4 py-5">
            <p className="font-serif text-lg text-blush-700">✨ Nega</p>
            <p className="text-sm text-warm-500 mt-1">koja prija</p>
          </div>
          <div className="rounded-xl bg-blush-50 px-4 py-5">
            <p className="font-serif text-lg text-blush-700">🌷 Trenuci</p>
            <p className="text-sm text-warm-500 mt-1">koji čine dan lepšim</p>
          </div>
        </div>

        <p>
          Hvala vam što ste posetili <strong className="text-warm-900">Ljiljaninu malu Chogan
          prodavnicu</strong> i što ste deo ove moje male, mirisne priče. 💝
        </p>

        <p className="text-right font-serif text-xl text-blush-700 pt-2">Ljiljana 🌷</p>
      </div>
    </main>
  )
}
