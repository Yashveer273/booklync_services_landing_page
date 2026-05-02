import { useEffect } from 'react';
import { ArrowLeft, Lock, Eye, FileText, UserCheck } from 'lucide-react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  // Scrolls to top when the page opens in a new tab
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page-wrapper">
      {/* Header / Navigation bar */}
      <nav className="privacy-nav">
        <div className="privacy-nav-container">
          <a href="/" className="back-link">
            <ArrowLeft size={18} />
            <span>Back</span>
          </a>
        </div>
      </nav>

      {/* Content Container */}
      <main className="privacy-content-container">
        <header className="privacy-header">
          <div className="badge">Legal Document</div>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="last-updated">Last Updated: May 1, 2026</p>
        </header>

        <section className="intro-card">
          <p>
            <strong>Book Lynk Services</strong> ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, process, store, and disclose your personal data when you visit our website, use our dropshipping platform, or interact with our digital business services.
          </p>
          <p className="consent-text">
            By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <div className="legal-sections">
          
          {/* Section 1 */}
          <div className="legal-block">
            <div className="block-title-wrapper">
              <Eye className="block-icon" size={24} />
              <h2>1. Data We Collect</h2>
            </div>
            <p>We collect information necessary to deliver our digital infrastructure and support your business operations. This includes:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and identity/business details.</li>
              <li><strong>Business Information:</strong> Store setup preferences, API keys for third-party integrations, and inventory configurations.</li>
              <li><strong>Financial Data:</strong> Payment details (processed securely via our RBI-compliant payment gateway partners).</li>
              <li><strong>Technical Data:</strong> IP address, browser type, usage patterns, and device information collected via essential analytics and cookies.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="legal-block">
            <div className="block-title-wrapper">
              <FileText className="block-icon" size={24} />
              <h2>2. Purpose of Data Processing</h2>
            </div>
            <p>In accordance with the principle of data minimization, we only process your personal data for clear, lawful purposes:</p>
            <ul>
              <li><strong>Service Provision:</strong> Creating and maintaining your e-commerce store, managing automated product sourcing, and configuring custom platform integrations.</li>
              <li><strong>Customer Support:</strong> Resolving live-chat inquiries, addressing ticket requests, and offering technical troubleshooting.</li>
              <li><strong>Billing & Payments:</strong> Processing your setup fees, recurring monthly subscriptions, and issuing digital invoices.</li>
              <li><strong>Security:</strong> Preventing unauthorized access, protecting user data, and maintaining security frameworks.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="legal-block">
            <div className="block-title-wrapper">
              <Lock className="block-icon" size={24} />
              <h2>3. Storage and Data Retention</h2>
            </div>
            <p>
              Your personal data is stored securely using industry-standard technical and physical safeguards. We retain your information only for as long as it is required to fulfill the specific operational purposes for which it was collected, or as mandated by applicable financial or IT laws in India. 
            </p>
            <p>
              Once the purpose has been met or the account is terminated, your personal data will be deleted or anonymized in accordance with legal requirements.
            </p>
          </div>

          {/* Section 4 */}
          <div className="legal-block">
            <div className="block-title-wrapper">
              <UserCheck className="block-icon" size={24} />
              <h2>4. Your Rights as a Data Principal</h2>
            </div>
            <p>Under Indian privacy frameworks, you hold clear rights over your data. You can exercise these rights by contacting our support channels:</p>
            <ul>
              <li><strong>Right to Access & Review:</strong> Request details of the data held about you.</li>
              <li><strong>Right to Correction & Erasure:</strong> Correct inaccuracies or request complete deletion of your records.</li>
              <li><strong>Right to Withdraw Consent:</strong> Opt-out or withdraw prior permissions at any time (this may limit your service access).</li>
              <li><strong>Right to Nominate:</strong> Nominate another person to exercise your data rights in the event of death or incapacity.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="legal-block grievance-box">
            <h2>5. Grievance Officer</h2>
            <p>To address any questions, feedback, or grievances regarding our data handling policies, you may contact our designated Grievance Officer directly:</p>
            <div className="grievance-details">
              <p><strong>Designation:</strong> Data Protection & Grievance Officer</p>
              <p><strong>Company:</strong> Book Lynk Services</p>
              <p><strong>Email:</strong> hello@booklynkservices.com</p>
              <p><strong>Resolution Timeline:</strong> Inquiries are addressed within 30 days of receipt.</p>
            </div>
          </div>

        </div>
      </main>

      <footer className="privacy-footer">
        <p>&copy; 2026 Book Lynk Services Pvt Ltd. — Your Business Solution. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;