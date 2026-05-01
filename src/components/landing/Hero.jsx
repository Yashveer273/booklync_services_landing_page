import { ArrowRight, TrendingUp } from 'lucide-react';
import './Hero.css';

const Hero = () => (
  <header className="hero-container">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="hero-badge">
            <span className="live-dot">
              <span className="live-ping"></span>
              <span className="live-inner"></span>
            </span>
            Book Lynk Services Pvt Ltd. : Your Business Solution
          </div>
          <h1 className="hero-title">
            Launch Your Empire <br/>For Just <span className="text-blue-600">₹30,000</span>
          </h1>
          <p className="hero-subtitle">
            Stop dreaming about financial freedom and start building it. Booklynk provides the infrastructure for a global dropshipping business.
          </p>
          <div className="hero-actions-container">
  {/* Main CTA Button */}
  <a href="#pricing" className="btn-primary-hero">
    Start Business 
    <ArrowRight className="btn-icon" />
  </a>

  {/* Entrepreneur Count Badge */}
  <div className="entrepreneur-badge">
    <div className="avatar-stack">
      <img src="https://i.pravatar.cc/100?u=1" alt="User" className="avatar" />
      <img src="https://i.pravatar.cc/100?u=2" alt="User" className="avatar" />
      <img src="https://i.pravatar.cc/100?u=3" alt="User" className="avatar" />
    </div>
    <span className="count-text">12,000+ Entrepreneurs</span>
  </div>
</div>
        </div>
        <div className="lg:col-span-5 mt-20 lg:mt-0 relative">
          <div className="hero-image-card">
            <img src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000" alt="Dashboard" />
            <div className="floating-badge">
              <TrendingUp className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-blur-bg"></div>
  </header>
);

export default Hero;