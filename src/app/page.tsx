'use client'

import { useRef } from 'react'

import Footer from '@/app/components/layouts/Footer'
import Header from '@/app/components/layouts/Header'
import Guide from '@/app/components/pages/Guide'
import Introduction from '@/app/components/pages/Introduction'
import RoadMap from '@/app/components/pages/RoadMap'

export default function Home() {
  const introductionRef = useRef<HTMLDivElement>(null)
  const guideRef = useRef<HTMLDivElement>(null)

  return (
    <main>
      <Header introductionRef={introductionRef} guideRef={guideRef} />
      <Introduction introductionRef={introductionRef} />
      <Guide guideRef={guideRef} />
      <RoadMap />
      <Footer />
    </main>
  )
}
