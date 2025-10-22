import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Doctors from '@/components/sections/Doctors';
import Reviews from '@/components/sections/Reviews';
import Gallery from '@/components/sections/Gallery';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
