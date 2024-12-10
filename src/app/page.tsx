import Footer from '@/app/components/layouts/Footer'
import Guide from '@/app/components/pages/Guide'
import Introduction from '@/app/components/pages/Introduction'
import RoadMap from '@/app/components/pages/RoadMap'

export default function Home() {
  return (
    <main>
      <Introduction />
      <Guide />
      <RoadMap />
      <Footer />
    </main>
  )
}
