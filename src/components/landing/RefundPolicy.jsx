import { useEffect } from 'react';
import { ArrowLeft, XCircle, Globe, RefreshCcw } from 'lucide-react';
import './RefundPolicy.css';

const RefundPolicy = ({ setActiveTab }) => {
  // Automatically scrolls to top when the tab opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="refund-page-wrapper">
      {/* Navigation bar */}
      <nav className="refund-nav">
        <div className="refund-nav-container">
          <button onClick={() => setActiveTab('landing')} className="back-link-btn">
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        </div>
      </nav>

      {/* Content Container */}
      <main className="refund-content-container">
        <header className="refund-header">
          <div className="badge">Terms & Billing</div>
          <h1 className="refund-title">Refund Policy</h1>
          <p className="last-updated">Last Updated: May 1, 2026</p>
        </header>

        <section className="policy-intro-card">
          <p>
            At <strong>Book Lynk Services</strong>, we stand behind the quality of our e-commerce infrastructure, sourcing tools, and technical integrations. Because our services involve immediate digital setup, software deployment, and immediate resource allocation, we enforce a strict financial policy.
          </p>
        </section>

        <div className="legal-sections">
          
          {/* Section 1 */}
          <div className="legal-block">
            <div className="block-title-wrapper">
              <XCircle className="block-icon red-icon" size={24} />
              <h2>1. General No-Refund Standard</h2>
            </div>
            <p>
              All payments made to Book Lynk Services—including the upfront setup fee of ₹26,003 and any recurring monthly subscription charges—are <strong>strictly non-refundable</strong>. 
            </p>
            <p>
              Once resources have been allocated or digital assets have been generated for your business, we do not offer refunds, credits, or adjustments for changes of mind, store performance variations, or early account terminations.
            </p>
          </div>

          {/* Section 2 */}
          <div className="legal-block highlight-block">
            <div className="block-title-wrapper">
              <Globe className="block-icon" size={24} />
              <h2>2. The "Live Site" Guarantee & Exception</h2>
            </div>
            <p>
              A refund is **only** eligible under one specific condition: **if your e-commerce website is not delivered live.**
            </p>
            <p>
              If our technical team fails to deploy your customized store or make your digital commerce platform accessible on the live web due to a persistent backend failure on our part, you are entitled to a full return of the initial setup fee.
            </p>
            <ul>
              <li>This exception applies only if the site is not functional on a live domain within our agreed timeline.</li>
              <li>Refunds will not be issued if the delay or failure is caused by third-party domain DNS issues, incorrect user-submitted details, or payment gateway delays on the user's end.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="legal-block">
            <div className="block-title-wrapper">
              <RefreshCcw className="block-icon" size={24} />
              <h2>3. Requesting a Refund</h2>
            </div>
            <p>
              If you believe your service qualifies for the "Live Site" exception, you must submit a formal refund request to our billing department within **7 business days** of the missed delivery date:
            </p>
            <div className="contact-details-box">
              <p><strong>Email:</strong> hello@booklynkservices.com</p>
              <p><strong>Subject Line:</strong> Refund Claim - Store Setup Issue</p>
              <p><strong>Processing Time:</strong> Valid claims are reviewed and processed within 14 business days.</p>
            </div>
          </div>

        </div>
      </main>

      <footer className="refund-footer">
        <p>&copy; 2026 Book Lynk Services Pvt Ltd. — Your Business Solution. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RefundPolicy;