'use client'

import { useRef } from 'react'

import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import Guide from '@/components/pages/Guide'
import Introduction from '@/components/pages/Introduction'
import RoadMap from '@/components/pages/RoadMap'

export default function Home() {
  const introductionRef = useRef<HTMLDivElement>(null)
  const guideRef = useRef<HTMLDivElement>(null)
  const roadmapRef = useRef<HTMLDivElement>(null)
  return (
    <main>
      <Header
        introductionRef={introductionRef}
        guideRef={guideRef}
        roadmapRef={roadmapRef}
      />
      <Introduction introductionRef={introductionRef} />
      <Guide guideRef={guideRef} />
      <RoadMap roadmapRef={roadmapRef} />
      <Footer />
    </main>
  )
}
