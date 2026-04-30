import { MousePointer, Cpu, Package, Truck } from 'lucide-react';
import './Process.css';

const Process = () => {
  return (
    <section id="how-it-works" className="process-section">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="process-title">How Does Dropshipping Work?</h3>
        <p className="process-subtitle">The low-risk, high-reward business model for the 21st century.</p>
        
        <div className="process-grid">
          <div className="step-card">
            <div className="step-icon"><MousePointer size={32} /></div>
            <span className="step-number">01</span>
            <h5>Customer Orders</h5>
            <p>Buyer buys from your branded store.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"><Cpu size={32} /></div>
            <span className="step-number">02</span>
            <h5>Auto-Forward</h5>
            <p>Order goes to the supplier automatically.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"><Package size={32} /></div>
            <span className="step-number">03</span>
            <h5>Supplier Preps</h5>
            <p>Supplier handles picking & packing.</p>
          </div>
          <div className="step-card">
            <div className="step-icon"><Truck size={32} /></div>
            <span className="step-number">04</span>
            <h5>Direct Delivery</h5>
            <p>Product reaches customer globally.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;