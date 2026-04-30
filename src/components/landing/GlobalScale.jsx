
import { Globe, Award, DollarSign } from 'lucide-react';
import './GlobalScale.css';

const GlobalScale = () => {
  return (
    <section className="global-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="features-side">
            <h2 className="global-title">
              Scale Globally <br/>
              <span className="blue-text">With Booklynk Power</span>
            </h2>
            
            <div className="feature-stack">
              {/* Feature 1 */}
              <div className="feature-row">
                <div className="feature-icon-box">
                  <Globe size={22} />
                </div>
                <div className="feature-content">
                  <h5 className="feature-title">Inventory of 1 Million+ Products</h5>
                  <p className="feature-description">
                    Never worry about stock. Access a massive catalog of high-quality products.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature-row">
                <div className="feature-icon-box">
                  <Award size={22} />
                </div>
                <div className="feature-content">
                  <h5 className="feature-title">Best Quality Assurance</h5>
                  <p className="feature-description">
                    Vetted suppliers ensure your customers receive only the best quality.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature-row">
                <div className="feature-icon-box">
                  <DollarSign size={22} />
                </div>
                <div className="feature-content">
                  <h5 className="feature-title">Great Profit Margins</h5>
                  <p className="feature-description">
                    Direct-to-factory connections mean higher margins for your pocket.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Side */}
          <div className="stats-glass-card">
            <h4 className="stats-card-title">Business Simplified</h4>
            <p className="italic-quote">
              "We handle the technical complexities while you focus on scaling."
            </p>
            <div className="stats-grid">
              <div className="stat-box">
                <p className="stat-num">99%</p>
                <p className="stat-label">Automation</p>
              </div>
              <div className="stat-box">
                <p className="stat-num">Global</p>
                <p className="stat-label">Shipping</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalScale;