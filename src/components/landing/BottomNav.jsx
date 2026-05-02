
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
            <img src="./logo.png" alt="Booklynk Logo" />
          </div>
          <div className="logo-text-wrapper">
            <span className="brand-name">Book Lynk</span>
            <span className="brand-tagline">BUSINESS SERVICES</span>
          </div>
        </div>

        {/* Improved Navigation Menu */}
        <div className="nav-menu">
          <div className="nav-col-wrapper">
            <div className="nav-col">
              <a href="#solutions" onClick={() => setActiveTab("landing")} className="nav-link-item">Solutions</a>
              <a href="#how-it-works" onClick={() => setActiveTab("landing")} className="nav-link-item">Process</a>
              <a href="#pricing" onClick={() => setActiveTab("landing")} className="nav-link-item">Pricing</a>
            </div>
            
            <div className="nav-divider"></div>

            <div className="nav-col">
              <a href="#privacy" onClick={() => { setActiveTab("privacy"); window.scrollTo(0, 0); }} 
                 className={`nav-link-item ${activeTab === "privacy" ? "active-link" : ""}`}>Privacy</a>
              <a href="#refund" onClick={() => { setActiveTab("refund"); window.scrollTo(0, 0); }} 
                 className={`nav-link-item ${activeTab === "refund" ? "active-link" : ""}`}>Refunds</a>
            </div>
          </div>
        </div>

        

      </div>
    </nav>
  );
};

export default BottomNav;