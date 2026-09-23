'use client'

import { useCallback, useState } from 'react'
import { Footer, IntroAnimation, MusicControl, Navbar, WeddingAudio } from '@/components/wedding'

export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [entered, setEntered] = useState(false)
  const enter = useCallback(() => setEntered(true), [])

  return (
    <>
      {!entered && <IntroAnimation onEnter={enter} />}
      <div className={!entered ? 'hidden' : undefined}>
        <Navbar />
        <WeddingAudio />
        <MusicControl />
        {children}
        <Footer />
      </div>
    </>
  )
}