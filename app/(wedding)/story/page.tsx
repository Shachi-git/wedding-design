import { PageHero, Reveal } from '@/components/wedding'
import { wedding } from '@/data/wedding'

export default function StoryPage() {
  return (
    <main>
      <PageHero
        title="Our Story"
        intro="A little bit of where we began, and the moments that brought us here."
      />

      <section className="bg-ivory">
        {wedding.storyChapters.map((chapter, index) => (
          <article
            className="grid min-h-[720px] grid-cols-2 max-[700px]:flex max-[700px]:min-h-0 max-[700px]:flex-col"
            key={chapter.date}
          >
            <div
              className={`min-h-[620px] bg-cover bg-center max-[700px]:min-h-[470px] ${index % 2 === 1 ? 'order-2 max-[700px]:order-0' : ''}`}
              style={{ backgroundImage: `url("${chapter.image}")` }}
              role="img"
              aria-label={chapter.alt}
            />

            <Reveal className="flex flex-col justify-center px-[clamp(24px,9vw,140px)] py-[clamp(55px,9vw,140px)] max-[700px]:px-6 max-[700px]:pb-[90px] max-[700px]:pt-[70px]">
              <p className="mb-[18px] font-display text-[clamp(50px,6vw,86px)] font-normal tracking-[-0.06em] text-champagne max-[700px]:text-[60px]">{chapter.date}</p>
              <p className="mb-[22px] text-[10px] uppercase tracking-[0.24em] text-champagne">Chapter {index + 1}</p>
              <h2 className="mb-[25px] max-w-[500px] font-display text-[clamp(40px,5vw,70px)] font-normal leading-[0.94] tracking-[-0.055em] max-[700px]:text-[46px]">{chapter.title}</h2>
              <p className="m-0 max-w-[460px] font-display text-[17px] leading-[1.85] text-taupe">{chapter.text}</p>
            </Reveal>
          </article>
        ))}
      </section>

      <section className="bg-dark px-6 py-[150px] text-center text-[#f1e8db]">
        <p className="mb-[22px] text-[10px] uppercase tracking-[0.24em] text-champagne">And now</p>
        <h2 className="m-0 font-display text-[clamp(48px,7vw,95px)] font-normal leading-[0.9] tracking-[-0.06em]">
          The next chapter
          <br />
          <i className="text-gold-soft">starts here.</i>
        </h2>
      </section>
    </main>
  )
}
