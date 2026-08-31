import Image from 'next/image'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'O nama',
  description:
    'Upoznajte Ljiljanu i njenu malu Chogan prodavnicu – miris, nega i briga o sebi, sa ljubavlju.',
  alternates: {
    canonical: `${SITE_URL}/o-nama`,
  },
}

export default function ONamaPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-warm-900">🌸 O nama</h1>
        <p className="text-blush-700 font-serif italic mt-1">
          Ljiljana &mdash; mala Chogan prodavnica
        </p>
      </div>

      <div className="w-64 sm:w-80 mx-auto rounded-2xl overflow-hidden shadow-lg mb-10">
        <Image
          src="/onama.jpg"
          alt="Ljiljana - Chogan prodavnica"
          width={1008}
          height={996}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="bg-white/60 border border-warm-200 rounded-2xl px-6 py-10 sm:px-10 space-y-6 text-warm-700 leading-relaxed">
        <h2 className="font-serif text-xl sm:text-2xl text-warm-900">
          Dobro došli u Ljiljaninu malu Chogan prodavnicu
        </h2>

        <p>
          Ja sam <strong className="text-warm-900">Ljiljana</strong>, i ovu malu online
          prodavnicu stvaram sa mnogo ljubavi prema lepim mirisima, nezi, wellnessu i brizi o
          sebi. 💜
        </p>

        <p>
          Kroz godine sam naučila koliko su važne{' '}
          <strong className="text-warm-900">male svakodnevne navike</strong> koje nam pomažu da se
          osećamo lepo i zadovoljno. Ljubav prema <strong className="text-warm-900">jogi</strong>,
          koju dugo praktikujem, dodatno me je podstakla da istražujem proizvode koji se mogu
          jednostavno uklopiti u svakodnevni život.
        </p>

        <p>
          U mojoj ponudi možete pronaći{' '}
          <strong className="text-warm-900">
            Chogan parfeme, kozmetiku, proizvode za negu, suplemente i prirodna ulja
          </strong>
          .
        </p>

        <p>
          Želim da{' '}
          <strong className="text-warm-900">Ljiljanina mala Chogan prodavnica</strong> bude mesto
          gde možete da pronađete nešto za sebe, da se informišete o proizvodima i da mi se
          slobodno obratite za pomoć pri izboru. 🌿
        </p>

        <p>
          Ne želim samo da ponudim proizvod &ndash; želim da podelim svoju priču, iskustvo i
          ljubav prema{' '}
          <strong className="text-warm-900">brizi o sebi u svakom životnom dobu</strong>.
        </p>

        <h2 className="font-serif text-xl sm:text-2xl text-warm-900 pt-2">
          💝 Hvala što ste ovde!
        </h2>

        <p>
          Vaše poverenje mi mnogo znači. Uživajte u istraživanju moje male prodavnice i pronađite{' '}
          <strong className="text-warm-900">
            ono što će vaš svakodnevni ritual učiniti lepšim.
          </strong>
        </p>

        <p className="text-right font-serif text-xl text-blush-700 pt-2">
          Ljiljana 🌷
          <br />
          <span className="text-base italic text-warm-500">
            Ljiljanina mala Chogan prodavnica
          </span>
          <br />
          <span className="text-base text-warm-700">
            Miris, nega i briga o sebi &ndash; sa ljubavlju. 💜
          </span>
        </p>
      </div>
    </main>
  )
}
