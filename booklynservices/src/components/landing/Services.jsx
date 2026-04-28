
import { ShieldCheck, Zap, Layout } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="service-card">
    <div className="service-icon-box">
      <Icon size={28} />
    </div>
    <h4 className="service-card-title">{title}</h4>
    <p className="service-card-desc">{desc}</p>
  </div>
);

const Services = () => (
  <section id="solutions" className="services-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="services-header">
        <h2 className="services-subtitle">Our Services</h2>
        <h3 className="services-main-title">Engineered for Success</h3>
      </div>
      <div className="services-grid">
        <ServiceCard 
          icon={ShieldCheck} 
          title="Robust Security" 
          desc="Enterprise-grade infrastructure ensuring every transaction is safe, secured, and compliant." 
        />
        <ServiceCard 
          icon={Zap} 
          title="Single-Click Integration" 
          desc="Zero-code required. Sync your store with the world's largest suppliers in seconds." 
        />
        <ServiceCard 
          icon={Layout} 
          title="Effortless Onboarding" 
          desc="Minimal documentation and a streamlined process to get you live faster than anyone else." 
        />
      </div>
    </div>
  </section>
);

export default Services;