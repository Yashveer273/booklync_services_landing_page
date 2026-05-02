import { useState } from 'react';
import Hero from './components/landing/Hero';
import GlobalScale from './components/landing/GlobalScale';
import Process from './components/landing/Process';
import Pricing from './components/landing/Pricing';
import PrivacyPolicy from './components/landing/PrivacyPolicy';
import BottomNav from './components/landing/BottomNav';
import RefundPolicy from './components/landing/RefundPolicy';
import Services from './components/landing/Services';

function App() {
  // Use state to track which tab is active: 'landing', 'privacy', or 'refund'
  const [activeTab, setActiveTab] = useState('landing');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 antialiased">
      {activeTab === 'landing' ? (
        <main className="pb-24">
          <Hero />
          <Services />
          <GlobalScale />
          <Process />
          <Pricing />
        </main>
      ) : activeTab === 'privacy' ? (
        <main className="pb-24">
          <PrivacyPolicy setActiveTab={setActiveTab} />
        </main>
      ) : activeTab === 'refund' ? (
        <main className="pb-24">
          <RefundPolicy setActiveTab={setActiveTab} />
        </main>
      ) : null}

      {/* Pass down activeTab and the function to change it to the BottomNav */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;