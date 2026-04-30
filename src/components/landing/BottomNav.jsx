
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-container">
        
        {/* Logo Section */}
        <div className="nav-logo-group">
          <div className="logo-square">
            <img src="../public/logo.png" alt="Book Lynk Logo" />
          </div>
          <div className="logo-text-wrapper">
            <span className="brand-name">Book Lynk</span>
            <span className="brand-tagline">BUSINESS SERVICES</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-menu">
          <a href="#solutions" className="nav-link-item">Solutions</a>
          <a href="#how-it-works" className="nav-link-item">Process</a>
          <a href="#pricing" className="nav-link-item">Pricing</a>
        </div>

        {/* Action Button */}
        <div className="nav-cta-wrapper">
          <button className="btn-start-now">Start Now</button>
        </div>

      </div>
    </nav>
  );
};

export default BottomNav;