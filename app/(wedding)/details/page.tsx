import { PageHero } from '@/components/wedding'
import { wedding } from '@/data/wedding'

export default function DetailsPage() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <PageHero
        title="Wedding Details"
        intro="Everything you need to know for the day."
      />

      {/* Venue */}
      <section className="grid w-full min-w-0 grid-cols-2 items-center gap-[10vw] px-[clamp(24px,10vw,160px)] py-[clamp(85px,11vw,160px)] max-[700px]:block max-[700px]:px-0 max-[700px]:py-[75px]">
        <div className="w-full min-w-0 min-h-[650px] bg-[url('https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center max-[700px]:min-h-[430px]" />

        <div className="min-w-0 max-[700px]:px-6 max-[700px]:pt-[50px]">
          <p className="mb-[22px] text-[10px] uppercase tracking-[0.24em] text-champagne">
            The venue
          </p>

          <h2 className="m-0 mb-5 max-w-full break-words font-display text-[clamp(42px,5vw,75px)] font-normal leading-[0.95] tracking-[-0.05em]">
            {wedding.venue}
          </h2>

          <p className="font-display text-[17px] leading-[1.8] text-taupe">
            {wedding.address}
            <br />
            {wedding.city}
          </p>

          <a
            className="mt-7 inline-block max-w-full border-b border-champagne pb-[7px] text-[10px] uppercase tracking-[0.16em] text-[#8d7048]"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps ↗
          </a>
        </div>
      </section>

      {/* Wedding Information */}
      <section className="grid w-full min-w-0 grid-cols-4 gap-[35px] bg-paper px-[clamp(24px,10vw,160px)] py-[clamp(85px,11vw,160px)] max-[900px]:grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:gap-0 max-[700px]:px-6 max-[700px]:py-[75px]">
        {[
          ['Ceremony', wedding.ceremony],
          ['Reception', wedding.reception],
          ['Dress code', wedding.dressCode],
          ['Parking', 'Complimentary parking available'],
        ].map(([label, value]) => (
          <div
            key={label}
            className="min-w-0 max-[700px]:border-b max-[700px]:border-[#d8d0c5] max-[700px]:py-8 first:max-[700px]:pt-0 last:max-[700px]:border-b-0"
          >
            <p className="mb-[22px] text-[10px] uppercase tracking-[0.24em] text-champagne">
              {label}
            </p>

            <h3 className="m-0 mb-[13px] break-words font-display text-[26px] font-normal leading-[1.2]">
              {value}
            </h3>

            <p className="break-words text-[13px] leading-[1.6] text-taupe">
              {label === 'Ceremony' || label === 'Reception'
                ? `${wedding.venue} · ${wedding.city}`
                : ''}
            </p>
          </div>
        ))}
      </section>

      {/* Note */}
      <p className="m-0 w-full px-6 py-[clamp(85px,11vw,160px)] text-center font-display text-[18px] italic leading-[1.7] text-taupe max-[700px]:py-[75px]">
        Please arrive 20–30 minutes before the ceremony so we can begin on
        time.
      </p>
    </main>
  )
}