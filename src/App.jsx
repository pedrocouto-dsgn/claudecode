import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GridFocus from './components/GridFocus';
import PhilosophyShowcase from './components/PhilosophyShowcase';
import ProjectSpotlight from './components/ProjectSpotlight';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import StepsSection from './components/StepsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GridFocus />
        <PhilosophyShowcase />
        <ProjectSpotlight />
        <WhyWorkWithUs />
        <StepsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
