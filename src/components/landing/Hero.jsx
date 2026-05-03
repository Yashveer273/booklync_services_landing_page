import { ArrowRight,  } from 'lucide-react';
import './Hero.css';
import HeroVisual from './HeroVisual';

const Hero = () => (
  <header className="hero-container">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="hero-grid">
        
        {/* Left Content Column */}
        <div className="hero-content-left">
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

        {/* Right Dashboard Image Column */}
       <HeroVisual/>

      </div>
    </div>
    <div className="hero-blur-bg"></div>
  </header>
);

export default Hero;