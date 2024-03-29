import { CallToActionSection } from './components/CallToActionSection';
import { FeatureSection } from './components/FeatureSection';
import { FooterSection } from './components/FooterSection';
import { HeroSection } from './components/HeroSection';
import Navbar from './components/Navbar';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FooterSection />
    </>
  );
}
