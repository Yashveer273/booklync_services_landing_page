import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pricing-header">
          <h3 className="pricing-main-title">Booklynk Solution Packages</h3>
          <p className="pricing-subtitle">Select your entry point to a digital empire.</p>
        </div>

        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="price-card starter-card">
            <div className="card-top">
              <h4 className="tier-name">Starter</h4>
              <div className="price-box">
                <span className="currency">₹</span>
                <span className="amount">30,000</span>
              </div>
              <p className="setup-fee">₹26,003 Setup Fee</p>
              <p className="monthly-fee">+ ₹3,997.00 Monthly</p>
            </div>
            <ul className="feature-list">
              <li><Check size={18} /> E-Commerce Store</li>
              <li><Check size={18} /> Products Sourcing (300/mo)</li>
              <li><Check size={18} /> Global Payment Solutions</li>
              <li><Check size={18} /> Support 24/7 Livechat</li>
            </ul>
            <button className="btn-outline">Get Started</button>
          </div>

          {/* Silver Plan (Featured - Yearly) */}
          <div className="price-card silver-card featured">
            <div className="growth-tag">Growth Choice</div>
            <div className="card-top">
              <h4 className="tier-name">Silver</h4>
              <div className="price-box">
                <span className="currency">₹</span>
                <span className="amount">61,976</span>
                <span className="old-price">₹73,967</span>
              </div>
              <p className="setup-fee">₹26,003 Setup Fee</p>
              <p className="monthly-fee">
                ₹2,997.75/mo billed yearly <span className="save-badge">Save 25%</span>
              </p>
            </div>
            <ul className="feature-list">
              <li><Check size={18} /> Everything in Starter</li>
              <li><Check size={18} /> Premium Themes</li>
              <li><Check size={18} /> Custom Branding</li>
              <li><Check size={18} /> Winning Products List</li>
            </ul>
            <button className="btn-white">Select Silver</button>
          </div>

          {/* Gold Plan (4 Years) */}
          <div className="price-card gold-card">
            <div className="card-top">
              <h4 className="tier-name">Gold</h4>
              <div className="price-box">
                <span className="currency">₹</span>
                <span className="amount">1,12,338</span>
              </div>
              <p className="setup-fee">₹26,003 Setup Fee</p>
              <p className="monthly-fee">
                ₹2,398.20/mo billed for 4 years <span className="save-badge-green">Save 40%</span>
              </p>
            </div>
            <ul className="feature-list">
              <li><Check size={18} /> All Silver Features</li>
              <li><Check size={18} /> Products Bundle</li>
              <li><Check size={18} /> Virtual Warehouse</li>
              <li><Check size={18} /> Digital Products Suite</li>
            </ul>
            <button className="btn-blue">Go Pro Gold</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;