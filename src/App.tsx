import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Rooms } from '@/components/Rooms';
import { Amenities } from '@/components/Amenities';
import { Experiences } from '@/components/Experiences';
import { Explore } from '@/components/Explore';
import { GuestInfo } from '@/components/GuestInfo';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingSocialLinks } from '@/components/FloatingSocialLinks';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ivory">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Experiences />
        <Explore />
        <GuestInfo />
        <Contact />
      </main>
      <Footer />
      <FloatingSocialLinks />
    </div>
  );
}

export default App;
