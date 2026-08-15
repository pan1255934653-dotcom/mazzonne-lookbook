import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import Overview from '@/sections/Overview'
import Workflow from '@/sections/Workflow'
import Compare from '@/sections/Compare'
import Advantages from '@/sections/Advantages'
import Gallery from '@/sections/Gallery'
import VideoSection from '@/sections/VideoSection'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Overview />
      <Workflow />
      <Compare />
      <Advantages />
      <Gallery />
      <VideoSection />
      <Footer />
    </main>
  )
}
