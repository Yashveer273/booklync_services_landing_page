import Hero from './components/landing/Hero';
import Services from './components/landing/Services';
import Pricing from './components/landing/Pricing';
import BottomNav from './components/landing/BottomNav';
import GlobalScale from './components/landing/GlobalScale';
import Process from './components/landing/Process';
function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <GlobalScale />
      <Process />
      {/* Add GlobalScale & Process similarly */}
      <Pricing />
      <BottomNav />
    </div>
  );
}

export default LandingPage;