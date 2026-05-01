import "./BottomNav.css";

const BottomNav = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bottom-nav">
      <div className="nav-container">
        {/* Logo Section - Takes you back to landing */}
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

        {/* Navigation Menu */}
        <div className="nav-menu">
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

          {/* Privacy Policy Tab Switcher */}
          <a
            href="#privacy"
            onClick={() => {
              setActiveTab("privacy");
              window.scrollTo(0, 0); // Scroll to top when tab opens
            }}
            className={`nav-link-item tab-btn ${activeTab === "privacy" ? "active-link" : ""}`}
          >
            Privacy Policy
          </a>
          <a
            href="#refund"
            onClick={() => {
              setActiveTab("refund");
              window.scrollTo(0, 0); // Scroll to top when tab opens
            }}
            className={`nav-link-item tab-btn ${activeTab === "refund" ? "active-link" : ""}`}
          >
            Refund Policy
          </a>
        </div>

        {/* Action Button */}
        <div className="nav-cta-wrapper">
          <button
            href="#pricing"
            onClick={() => setActiveTab("landing")}
            className="btn-start-now"
          >
            Start Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
