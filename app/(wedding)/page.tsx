'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import { Countdown, Reveal } from '@/components/wedding'
import { wedding } from '@/data/wedding'

const sectionPadding = 'px-[clamp(24px,10vw,160px)] py-[clamp(85px,11vw,160px)]'
const eyebrow = 'mb-[22px] text-[10px] uppercase tracking-[0.24em] text-champagne'
const heading = 'm-0 mb-[30px] font-display text-[clamp(44px,6.8vw,90px)] font-normal leading-[0.92] tracking-[-0.06em]'
const linkStyle = 'mt-7 inline-block w-max border-b border-champagne pb-[7px] text-[10px] uppercase tracking-[0.16em] text-[#8d7048]'

export default function Home() {
  const [entered, setEntered] = useState(false)
  const enter = useCallback(() => setEntered(true), [])

  return (
    <>
      <main>
      <section className="relative grid min-h-svh place-items-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,23,20,0.34),rgba(30,25,20,0.62))]" />
        <div className="relative z-[1] text-center text-[#f8f3eb]">
          <p className={eyebrow}>Together with their families</p>
          <h1 className="m-0 font-display text-[clamp(74px,12vw,170px)] font-normal leading-[0.76] tracking-[-0.08em] max-[700px]:text-[clamp(68px,20vw,110px)]">
            Emma <i className="text-gold-soft not-italic text-[0.55em]">&amp;</i>
            <br />
            Daniel
          </h1>
          <p className="my-[38px] mb-3 text-[12px] uppercase tracking-[0.3em] text-[#e2c89a] max-[700px]:text-[9px]">{wedding.date}</p>
          <p className="text-[11px] uppercase tracking-[0.2em]">{wedding.venue} · {wedding.city}</p>
        </div>
        <span className="absolute bottom-[27px] left-1/2 z-[1] -translate-x-1/2 text-[10px] uppercase tracking-[0.18em] text-[#f2e9dc]">Scroll to explore ↓</span>
      </section>

      <section className={`${sectionPadding} text-center`}>
        <Reveal>
          <p className={eyebrow}>With joy in our hearts</p>
          <h2 className={heading}>We invite you to<br /><i className="text-[#a88755]">celebrate with us.</i></h2>
          <p className="mx-auto max-w-[440px] font-display text-[16px] leading-[1.8] text-taupe">Two paths, one beautiful beginning. We cannot wait to share this unforgettable day with the people who make our lives whole.</p>
          <Countdown />
        </Reveal>
      </section>

      <section className="grid grid-cols-2 px-[clamp(24px,10vw,160px)] max-[700px]:flex max-[700px]:flex-col">
        <div className="min-h-[620px] bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center max-[700px]:min-h-[430px]" />
        <div className="flex flex-col justify-center bg-paper p-[10vw] max-[700px]:w-full max-[700px]:bg-transparent max-[700px]:px-0 max-[700px]:py-[75px]">
          <p className={eyebrow}>Our story</p>
          <h2 className={heading}>Six years of<br /><i className="text-[#a88755]">becoming.</i></h2>
          <p className="max-w-[270px] font-display text-[16px] leading-[1.7] text-taupe">From a simple coffee to a life slowly built together.</p>
          <Link href="/story" className={linkStyle}>Read our story <span>↗</span></Link>
        </div>
      </section>

      <section className="grid grid-cols-2 px-[clamp(24px,10vw,160px)] max-[700px]:flex max-[700px]:flex-col">
        <div className="min-h-[620px] bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center max-[700px]:min-h-[430px]" />
        <div className="flex flex-col justify-center bg-paper p-[10vw] max-[700px]:w-full max-[700px]:bg-transparent max-[700px]:px-0 max-[700px]:py-[75px]">
          <p className={eyebrow}>The celebration</p>
          <h2 className={heading}>Save the<br /><i className="text-[#a88755]">date.</i></h2>
          <p className="max-w-[270px] font-display text-[16px] leading-[1.7] text-taupe">{wedding.venue}, {wedding.city}<br />Ceremony at {wedding.ceremony}</p>
          <Link href="/details" className={linkStyle}>Wedding details <span>↗</span></Link>
        </div>
      </section>

      <section className={`${sectionPadding} bg-[#dad1c3] bg-[url('https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-blend-soft-light text-center`}>
        <p className={eyebrow}>A few of our favorite moments</p>
        <h2 className={heading}>Life, in little<br /><i className="text-[#a88755]">frames.</i></h2>
        <Link href="/gallery" className="inline-block border border-current px-5 py-[14px] text-[10px] uppercase tracking-[0.15em]">View gallery</Link>
      </section>

      <section className={`${sectionPadding} bg-dark text-center text-[#f4eadc]`}>
        <p className={eyebrow}>We hope you can join us</p>
        <h2 className={heading}>Will you<br /><i className="text-gold-soft">join us?</i></h2>
        <Link href="/rsvp" className="inline-block border border-current px-5 py-[14px] text-[10px] uppercase tracking-[0.15em]">Please RSVP <span>↗</span></Link>
      </section>
      </main>
    </>
  )
}
