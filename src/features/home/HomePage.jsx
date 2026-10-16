import './home.css'
import useReveal from './useReveal'
import { useLang } from '../../i18n/LanguageContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Tenders from './components/Tenders'
import Directory from './components/Directory'
import News from './components/News'
import Advertise from './components/Advertise'
import Contact from './components/Contact'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

export default function HomePage() {
  const { lang, t } = useLang()
  useReveal(lang)

  return (
    <div className="hb" id="top">
      <a className="hb-skip" href="#main">
        {t('nav.skip')}
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <Tenders />
        <About />
        <Directory />
        <News />
        <Advertise />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
