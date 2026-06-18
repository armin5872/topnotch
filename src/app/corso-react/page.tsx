import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Registration from './components/Registration'
import Features from './components/Features'
import Partners from './components/Partners'
import Benefits from './components/Benefits'
import CourseSummary from './components/CourseSummary'
import Seminar from './components/Seminar'
import EventBanner from './components/EventBanner'
import Takeaways from './components/Takeaways'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Registration />
      <Features />
      <Partners />
      <Benefits />
      <CourseSummary />
      <Seminar />
      <EventBanner />
      <Takeaways />
      <Subscribe />
      <Footer />
    </>
  )
}
