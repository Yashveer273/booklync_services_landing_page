import { useEffect } from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
const Api_URL =  'https://backend.booklynkservices.com';
  const handlePayment = async (planName, planAmount) => {
    try {
      // 1. Prompt user for their name from the UI
      const userName = prompt("Please enter your bank account name to proceed with the payment:");
      if (!userName || userName.trim() === "") {
        alert("Bank account name is required to process the order.");
        return;
      }

      // 2. Create the raw order on the backend
      const response = await fetch(`${Api_URL}/api/payments/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: planAmount }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Server responded with ${response.status}`);
      }

      const orderData = await response.json();

      if (!orderData.success) {
        alert('Error creating order from server');
        return;
      }

      // 3. Configure and launch the checkout modal
      const options = {
        key: 'rzp_live_SkoBM00LnHE6Je',
        amount: orderData.amount,
        currency: 'INR',
        name: 'Booklynk Services',
        description: `${planName} Package Subscription`,
        order_id: orderData.orderId,
        handler: async function (paymentResponse) {
          try {
            const verifyResponse = await fetch(`${Api_URL}/api/payments/verify`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userName: userName.trim(), // Sent directly from the frontend
                amount: planAmount,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_signature: paymentResponse.razorpay_signature,
              }),
            });

            const verifyResult = await verifyResponse.json();

            if (verifyResult.success) {
              alert(`🎉 Success! Your ${planName} package is now activated.`);
            } else {
              alert('⚠️ Verification failed. Please contact support.');
            }
          } catch (err) {
            console.error('Verification request failed:', err);
            alert('Verification request failed. Your payment was successful.');
          }
        },
        prefill: {
          name: userName.trim(),
        },
        theme: {
          color: '#2563eb',
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();

    } catch (error) {
      console.error('Payment Initialization Error:', error.message);
      alert(`Could not initiate payment: ${error.message}`);
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
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
            <button className="btn-outline" onClick={() => handlePayment('Starter', 30000)}>
              Get Started
            </button>
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
            <button className="btn-white" onClick={() => handlePayment('Silver', 61976)}>
              Select Silver
            </button>
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
                ₹2,398.20/mo billed for 3 years <span className="save-badge-green">Save 40%</span>
              </p>
            </div>
            <ul className="feature-list">
              <li><Check size={18} /> All Silver Features</li>
              <li><Check size={18} /> Products Bundle</li>
              <li><Check size={18} /> Virtual Warehouse</li>
              <li><Check size={18} /> Digital Products Suite</li>
            </ul>
            <button className="btn-blue" onClick={() => handlePayment('Gold', 112338)}>
              Go Pro Gold
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;