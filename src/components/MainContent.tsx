import { LanguageProvider } from '../context/LanguageContext';
import Hero from './Hero';
import Skills from './Skills';
import Work from './Work';
import Journey from './Journey';
import Contact from './Contact';
import Navigation from './Navigation';
import ScrollToTop from './ScrollToTop';
import Scene3D from './Scene3D';
import SmoothScroll from './SmoothScroll';

export default function MainContent() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <Scene3D />
        <Navigation />
        <main>
          <Hero />
          <Work />
          <Journey />
          <Skills />
          <Contact />
        </main>
        <ScrollToTop />
      </SmoothScroll>
    </LanguageProvider>
  );
}
