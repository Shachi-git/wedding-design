'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { wedding, GalleryItem } from '@/data/wedding'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const links = [
    ['Our Story', '/story'],
    ['Details', '/details'],
    ['Schedule', '/schedule'],
    ['Gallery', '/gallery'],
    ['FAQ', '/faq'],
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node

      if (navRef.current && !navRef.current.contains(target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex min-h-[78px] items-center justify-between px-[clamp(22px,6vw,88px)] py-5 text-[#f7f0e7] transition-all duration-350 max-[700px]:min-h-[68px] max-[700px]:px-5 max-[700px]:py-[18px] ${scrolled ? 'border-b border-white/20 bg-[rgba(182,154,107,0.76)] text-[#fffaf2] shadow-[0_8px_30px_rgba(35,29,23,0.08)] backdrop-blur-[14px] backdrop-saturate-[110%] max-[700px]:bg-[rgba(182,154,107,0.8)]' : 'border-b border-transparent bg-transparent'}`}>
      <Link href="/" className="font-display text-[clamp(18px,2vw,23px)] font-normal tracking-[-0.03em]" onClick={() => setOpen(false)}>
        Emma <i>&amp;</i> Daniel
      </Link>

      <nav
        ref={navRef}
        className={`flex items-center gap-[29px] text-[10px] uppercase tracking-[0.15em] max-[700px]:fixed max-[700px]:right-0 max-[700px]:top-0 max-[700px]:z-[2] max-[700px]:h-svh max-[700px]:w-[min(82vw,200px)] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-[22px] max-[700px]:bg-[rgba(48,44,39,0.97)] max-[700px]:px-[30px] max-[700px]:pb-[30px] max-[700px]:pt-[95px] max-[700px]:text-[#f7f0e7] ${open ? 'max-[700px]:flex' : 'max-[700px]:hidden'}`}
      >
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}

        <Link
          className="border border-white/55 px-[17px] py-[11px] max-[700px]:mt-[5px]"
          href="/rsvp"
          onClick={() => setOpen(false)}
        >
          RSVP
        </Link>
      </nav>

      <button
        className="relative z-[3] hidden border-0 bg-transparent text-inherit max-[700px]:block"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="grid grid-cols-3 gap-[30px] bg-[#25221e] px-[clamp(24px,8vw,120px)] py-[70px] text-[#ded3c3] max-[700px]:grid-cols-2 max-[700px]:px-6 max-[700px]:py-[55px]">
      <div>
        <p className="mb-[18px] mt-0 font-display text-[clamp(18px,2vw,23px)] font-normal tracking-[-0.03em] text-[#f2e9dc]">
          Emma <i className="text-champagne not-italic">&amp;</i> Daniel
        </p>
        <p className="my-[7px] text-[12px] text-[#a99d8d]">{wedding.date}</p>
        <p className="my-[7px] text-[12px] text-[#a99d8d]">
          {wedding.venue} · {wedding.city}
        </p>
      </div>

      <div className="flex flex-wrap content-start gap-x-[25px] gap-y-3 text-[10px] uppercase tracking-[0.12em] max-[700px]:grid">
        {[
          ['Story', '/story'],
          ['Details', '/details'],
          ['Schedule', '/schedule'],
          ['Gallery', '/gallery'],
          ['RSVP', '/rsvp'],
          ['FAQ', '/faq'],
        ].map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </div>

      <small className="self-end justify-self-end text-[10px] text-[#9e9385] max-[700px]:col-span-full max-[700px]:justify-self-start">© 2026 Emma &amp; Daniel</small>
    </footer>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string
  title: string
  intro?: string
}) {
  return (
    <section
      className="relative flex min-h-[72svh] items-end overflow-hidden bg-cover bg-center px-[clamp(24px,10vw,160px)] pb-[105px] pt-[190px] text-[#f8f1e7] max-[700px]:min-h-[66svh] max-[700px]:px-6 max-[700px]:pb-[75px] max-[700px]:pt-[145px]"
      style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,23,20,0.32),rgba(30,25,20,0.7)),linear-gradient(90deg,rgba(25,23,20,0.25),transparent_65%)]" />
      <div className="relative z-[1]">
        <p className="mb-[22px] text-[10px] uppercase tracking-[0.24em] text-[#ddc393]">{eyebrow || 'Emma & Daniel · 18.10.26'}</p>
        <h1 className="m-0 max-w-[1000px] font-display text-[clamp(57px,9vw,125px)] font-normal leading-[0.88] tracking-[-0.07em] max-[700px]:text-[clamp(54px,16vw,80px)]">{title}</h1>
        {intro && <p className="mt-[35px] max-w-[500px] font-display text-[17px] leading-[1.65] text-[#e6dbcb] max-[700px]:text-[15px]">{intro}</p>}
      </div>
    </section>
  )
}

export function WeddingAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.28

    const play = () => {
      audio.muted = false
      audio.play().then(() => setMuted(false)).catch(() => setMuted(true))
    }

    const pause = () => {
      audio.pause()
      setMuted(true)
    }

    window.addEventListener('wedding:play', play)
    window.addEventListener('wedding:pause', pause)

    return () => {
      window.removeEventListener('wedding:play', play)
      window.removeEventListener('wedding:pause', pause)
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/audio/intro-ambient.wav"
      loop
      preload="auto"
      aria-hidden="true"
    />
  )
}

export function MusicControl({
  variant = 'default',
}: {
  variant?: 'default' | 'home'
}) {
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const handlePlay = () => {
      setMuted(false)
    }

    const handlePause = () => {
      setMuted(true)
    }

    window.addEventListener('wedding:play', handlePlay)
    window.addEventListener('wedding:pause', handlePause)

    return () => {
      window.removeEventListener('wedding:play', handlePlay)
      window.removeEventListener('wedding:pause', handlePause)
    }
  }, [])

  const toggle = () => {
    if (muted) {
      window.dispatchEvent(new Event('wedding:play'))
    } else {
      window.dispatchEvent(new Event('wedding:pause'))
    }
  }

  return (
    <button
      type="button"
      className="fixed bottom-[25px] right-7 z-[60] flex items-center gap-2 rounded-full border border-[rgba(182,154,107,0.7)] bg-[rgba(244,240,233,0.78)] px-4 py-2 text-sm text-ink backdrop-blur-[10px] hover:bg-[rgba(255,250,242,0.94)] max-[700px]:bottom-[18px] max-[700px]:right-[18px]"
      onClick={toggle}
      aria-label={muted ? 'Play music' : 'Pause music'}
      title={muted ? 'Play music' : 'Pause music'}
    >
      {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
    </button>
  )
}


export function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(
        0,
        new Date('2026-10-18T16:00:00+08:00').getTime() - Date.now(),
      )

      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60,
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mt-[75px] flex justify-center gap-[clamp(25px,6vw,75px)] max-[700px]:mt-[55px] max-[700px]:gap-[18px]" aria-label="Wedding countdown">
      {Object.entries(time).map(([key, value]) => (
        <div className="grid gap-1.5" key={key}>
          <strong className="font-display text-[31px] font-normal max-[700px]:text-2xl">{String(value).padStart(2, '0')}</strong>
          <span className="text-[9px] uppercase tracking-[0.15em] text-taupe max-[700px]:text-[7px]">
            {key === 'd'
              ? 'days'
              : key === 'h'
                ? 'hours'
                : key === 'm'
                  ? 'minutes'
                  : 'seconds'}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`animate-rise ${className}`}>{children}</div>
}

export function Timeline({
  items,
  schedule = false,
}: {
  items: readonly (readonly [string, string])[]
  schedule?: boolean
}) {
  return (
    <div className={`ml-auto ${schedule ? 'max-w-[850px]' : 'max-w-[760px]'}`}>
      {items.map(([time, label]) => (
        <div className="grid min-h-[95px] grid-cols-[150px_1fr] max-[700px]:grid-cols-[82px_1fr]" key={time}>
          <span className="pt-1 font-display text-[13px] text-champagne">{time}</span>
          <div className="relative border-l border-white/25 pb-[55px] pl-[45px] max-[700px]:pl-[25px]">
            <i className="absolute left-[-5px] top-1 size-[9px] rounded-full border border-champagne bg-dark" />
            <h3 className={`m-0 font-display text-[27px] font-normal max-[700px]:text-[23px] ${schedule ? 'text-[31px] max-[700px]:text-[23px]' : ''}`}>{label}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null)

  const item: GalleryItem | null =
    selected === null ? null : wedding.gallery[selected]

  const move = (dir: number) =>
    setSelected(
      (selected === null
        ? 0
        : (selected + dir + wedding.gallery.length) %
          wedding.gallery.length),
    )

  const descriptions = [
    'A quiet moment before the celebration begins.',
    'Two hearts, one beautiful beginning.',
    'The little moments that make the day unforgettable.',
    'Surrounded by the people we love most.',
    'A celebration filled with laughter and joy.',
    'Forever starts with moments like these.',
  ]

  const titles = [
    'Before the “I Do”',
    'Just Us',
    'Little Moments',
    'With Our Loved Ones',
    'The Celebration',
    'Forever Begins',
  ]

  return (
    <>
      <div className="grid grid-cols-12 gap-5 max-[700px]:gap-4 max-[480px]:flex max-[480px]:flex-col">
        {wedding.gallery.map(([alt, src, size], i) => (
          <button
            className={`group relative block min-h-[420px] w-full overflow-hidden border-0 bg-paper p-0 text-left ${size === 'wide' ? 'col-span-7 min-h-[620px] max-[700px]:col-span-2 max-[700px]:min-h-[560px]' : size === 'landscape' ? 'col-span-5' : 'col-span-4 min-h-[360px]'} max-[700px]:min-h-[420px] max-[480px]:min-h-[420px]`}
            key={src}
            onClick={() => setSelected(i)}
            aria-label={`Open ${alt}`}
          >
            <img className="absolute inset-0 block size-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] group-hover:saturate-[0.9]" src={src} alt={alt} loading="lazy" />

            <div className="absolute inset-0 flex items-end bg-[linear-gradient(to_top,rgba(25,21,18,0.92)_0%,rgba(25,21,18,0.58)_38%,rgba(25,21,18,0.08)_75%)] p-[34px] transition-colors group-hover:bg-[linear-gradient(to_top,rgba(25,21,18,0.94)_0%,rgba(25,21,18,0.62)_42%,rgba(25,21,18,0.12)_78%)] max-[700px]:p-5">
              <div className="relative grid w-full grid-cols-[auto_1fr_auto] items-end gap-5 text-white max-[700px]:grid-cols-[auto_1fr] max-[700px]:gap-3">
                <span className="self-start pt-[5px] font-display text-[10px] font-normal tracking-[0.16em] text-white/65">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3 className="m-0 mb-2 font-display text-[clamp(25px,2.5vw,37px)] font-normal leading-[1.05] tracking-[-0.035em] max-[700px]:text-2xl">{titles[i % titles.length]}</h3>
                  <p className="m-0 max-w-[400px] font-display text-[13px] leading-[1.65] tracking-[0.01em] text-white/78 max-[700px]:max-w-[250px] max-[700px]:text-[10px]">{descriptions[i % descriptions.length]}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {item && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-[rgba(25,22,19,0.96)]"
          role="dialog"
          aria-modal="true"
          aria-label={item[0]}
        >
          <button
            className="absolute right-[30px] top-[25px] border-0 bg-transparent text-white"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X />
          </button>

          <button
            className="absolute left-[25px] border-0 bg-transparent text-white max-[700px]:left-2"
            onClick={() => move(-1)}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          <img className="max-h-[78vh] max-w-[82vw] object-contain max-[700px]:max-w-[88vw]" src={item[1]} alt={item[0]} />

          <button
            className="absolute right-[25px] border-0 bg-transparent text-white max-[700px]:right-2"
            onClick={() => move(1)}
            aria-label="Next"
          >
            <ChevronRight />
          </button>

          <p className="absolute bottom-[25px] font-display text-[15px] italic text-[#cdbda7]">{item[0]}</p>
        </div>
      )}
    </>
  )
}

export function RSVPForm() {
  const [sent, setSent] = useState(false)
  const [guests, setGuests] = useState('1')

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  const handleGuests = (value: string) => {
    setGuests(value.replace(/\D/g, ''))
  }

  if (sent) {
    return (
      <div className="py-[70px] text-center">
        <span className="mx-auto mb-[25px] grid size-[60px] place-items-center rounded-full border border-champagne text-[22px] text-champagne">✓</span>
        <h2 className="font-display text-[60px] font-normal tracking-[-0.06em]">Thank you.</h2>
        <p className="font-display text-[17px] text-taupe">Emma &amp; Daniel can&apos;t wait to celebrate with you.</p>
      </div>
    )
  }

  return (
    <form className="grid gap-7" onSubmit={submit}>
      <label className="grid gap-2.5 text-[10px] uppercase tracking-[0.15em] text-taupe">
        Full name
        <input className="w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 font-display text-[17px] text-ink outline-0" required name="name" autoComplete="name" />
      </label>

      <label className="grid gap-2.5 text-[10px] uppercase tracking-[0.15em] text-taupe">
        Will you be attending?
        <select className="w-full cursor-pointer border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 font-display text-[15px] text-ink outline-0" required name="attendance" defaultValue="">
          <option value="" disabled>
            Please select
          </option>
          <option>Joyfully accepts</option>
          <option>Regretfully declines</option>
        </select>
      </label>

      <label className="grid gap-2.5 text-[10px] uppercase tracking-[0.15em] text-taupe">
        Number of guests
        <input
          className="w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 font-display text-[17px] text-ink outline-0"
          required
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="guests"
          value={guests}
          onChange={(e) => handleGuests(e.target.value)}
          aria-describedby="guest-help"
        />
        <span id="guest-help" className="-mt-1 text-[9px] normal-case tracking-[0.06em] text-taupe">
          Enter a number only.
        </span>
      </label>

      <label className="grid gap-2.5 text-[10px] uppercase tracking-[0.15em] text-taupe">
        Message
        <textarea className="w-full resize-y border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 font-display text-[17px] text-ink outline-0" name="message" rows={4} />
      </label>

      <button className="w-max border-0 bg-dark px-5 py-[14px] text-[10px] uppercase tracking-[0.15em] text-[#f5ecdf]" type="submit">
        Send RSVP <span>↗</span>
      </button>
    </form>
  )
}

export function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div>
      {wedding.faqs.map(([question, answer], i) => (
        <div
          className="border-t border-[var(--line)] last:border-b"
          key={question}
        >
          <button
            className="flex w-full items-center justify-between gap-6 border-0 bg-transparent px-0 py-[22px] text-left font-display text-[16px] font-normal leading-[1.4] text-ink"
            onClick={() => setActive(active === i ? null : i)}
            aria-expanded={active === i}
          >
            <span>{question}</span>
            <ChevronDown className={`w-[17px] shrink-0 transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`} />
          </button>
          {active === i && <p className="mb-[23px] mt-[-2px] max-w-[650px] font-display text-[15px] leading-[1.8] text-taupe">{answer}</p>}
        </div>
      ))}
    </div>
  )
}


export function IntroAnimation({ onEnter }: { onEnter: () => void }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShow(false)
      onEnter()
    }, 10000)

    return () => window.clearTimeout(id)
  }, [onEnter])

  const enter = () => {
    // Music starts only when the user clicks Enter Invitation
    window.dispatchEvent(new Event('wedding:play'))

    setShow(false)
    onEnter()
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#211f1b] bg-[radial-gradient(circle_at_50%_45%,rgba(182,154,107,0.14),transparent_32%)] text-[#eee5d8]">
      <div className="pointer-events-none absolute left-[8%] top-[18%] size-[35vw] rounded-full bg-[rgba(182,154,107,0.08)] blur-[60px] animate-glow-drift" />

      <div className="pointer-events-none absolute bottom-[8%] right-[10%] size-[30vw] rounded-full bg-[rgba(244,240,233,0.055)] blur-[60px] animate-glow-drift-reverse" />

      <div
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute top-[-40px] left-[var(--left)] size-[9px] rounded-[80%_20%_80%_20%] border border-[rgba(230,211,181,0.32)] bg-[rgba(222,195,153,0.13)] opacity-0 blur-[0.2px] animate-petal-fall"
            style={
              {
                '--delay': `${(i % 6) * 0.55}s`,
                '--left': `${(i * 17) % 100}%`,
                '--duration': `${6 + (i % 5)}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-[3] w-[min(90vw,900px)] text-center animate-intro-rise">
        <div className="mb-[30px] flex items-center justify-center gap-[15px] text-gold-soft">
          <span className="h-px w-[70px] bg-[linear-gradient(90deg,transparent,rgba(216,186,136,0.7))]" />

          <b className="text-base font-normal animate-twinkle">
            ✦
          </b>

          <span className="h-px w-[70px] bg-[linear-gradient(90deg,rgba(216,186,136,0.7),transparent)]" />
        </div>

        <p className="mb-[25px] text-[10px] uppercase tracking-[0.34em] text-[#cdbb9f] animate-fade-up">
          You are invited
        </p>

        <h1 className="m-0 font-display text-[clamp(60px,10vw,120px)] font-normal leading-[0.8] tracking-[-0.08em] text-[#f4eadb] animate-title-reveal">
          Emma <i>&amp;</i> Daniel
        </h1>

        <div className="mt-[35px] flex justify-center gap-[25px] text-[10px] uppercase tracking-[0.2em] text-[#bbae9b] animate-fade-up max-[700px]:flex-col max-[700px]:gap-2.5">
          <span>{wedding.date}</span>

          <span>
            {wedding.venue} · {wedding.city}
          </span>
        </div>

        <p className="mt-[34px] font-display text-[17px] italic text-[#d8c9b5] animate-fade-up max-[700px]:text-[15px]">
          A day worth remembering.
        </p>

        <button
          type="button"
          onClick={enter}
          className="mt-[42px] border border-[rgba(216,186,136,0.65)] bg-[rgba(216,186,136,0.08)] px-[30px] py-[14px] text-[10px] uppercase tracking-[0.22em] text-[#e4d3b8] transition-all duration-300 hover:bg-[rgba(216,186,136,0.18)] hover:text-white"
        >
          Enter Invitation
        </button>
      </div>
    </div>
  )
}