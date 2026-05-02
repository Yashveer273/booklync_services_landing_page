import { Send } from 'lucide-react';
import './BottomNav.css';

const BottomNav = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bottom-nav">
      <div className="nav-container">
        
        {/* Logo Section */}
        <div
          className="nav-logo-group"
          onClick={() => setActiveTab("landing")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo-square">
            <img src="../public/logo.png" alt="Booklynk Logo" />
          </div>
          <div className="logo-text-wrapper">
            <span className="brand-name">Book Lynk Pvt Ltd.</span>
            <span className="brand-tagline">BUSINESS SERVICES</span>
          </div>
        </div>

        {/* Two-Column Navigation Menu for Mobile / Standard flex for PC */}
        <div className="nav-menu">
          {/* Column 1: Core Navigation */}
          <div className="nav-col core-links">
            <a
              href="#solutions"
              onClick={() => setActiveTab("landing")}
              className={`nav-link-item ${activeTab === "landing" ? "active-link" : ""}`}
            >
              Solutions
            </a>
            <a
              href="#how-it-works"
              onClick={() => setActiveTab("landing")}
              className={`nav-link-item ${activeTab === "landing" ? "active-link" : ""}`}
            >
              Process
            </a>
            <a
              href="#pricing"
              onClick={() => setActiveTab("landing")}
              className={`nav-link-item ${activeTab === "landing" ? "active-link" : ""}`}
            >
              Pricing
            </a>
          </div>

          {/* Column 2: Policies */}
          <div className="nav-col policy-links">
            <a
              href="#privacy"
              onClick={() => {
                setActiveTab("privacy");
                window.scrollTo(0, 0);
              }}
              className={`nav-link-item tab-btn ${activeTab === "privacy" ? "active-link" : ""}`}
            >
              Privacy Policy
            </a>
            <a
              href="#refund"
              onClick={() => {
                setActiveTab("refund");
                window.scrollTo(0, 0);
              }}
              className={`nav-link-item tab-btn ${activeTab === "refund" ? "active-link" : ""}`}
            >
              Refund Policy
            </a>
          </div>
        </div>

        {/* Action Button */}
        <div className="nav-cta-wrapper">
          <button
            onClick={() => setActiveTab("landing")}
            className="btn-start-now"
          >
            <span className="btn-text">Start Now</span>
            <span className="btn-mobile-icon"><Send size={16} /></span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default BottomNav;