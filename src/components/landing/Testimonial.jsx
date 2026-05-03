const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      achievement: "₹1 Lakh/mo Revenue",
      text: "I started with zero online presence and honestly wasn’t sure what to expect. After joining Launch Your Empire for just ₹30,000, everything changed. Within 2 months, I started getting consistent clients.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Arjun Mehta",
      achievement: "Consistent ₹3L/mo",
      text: "Investing ₹30,000 here was the best decision I made for my business. They didn’t just give services—they gave a complete roadmap. From branding to lead generation, everything was handled.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Rahul Verma",
      achievement: "Scaled in 90 Days",
      text: "I was stuck at ₹20–30k per month before this. After joining Launch Your Empire, I scaled to ₹3 lakh/month in less than 90 days. The strategies are practical and results-driven.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Siddharth Nair",
      achievement: "₹10L/mo Milestone",
      text: "For just ₹30,000, I got more value than I ever got from expensive agencies. They helped me build a proper system that generates leads daily. Now my income has crossed ₹10L/month consistently.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ananya Iyer",
      achievement: "₹40L/mo Success",
      text: "I had no clarity on how to grow online. This program gave me direction, structure, and execution support. Within a few months, my business scaled to over ₹40 lakh per month. It’s a proven system.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sameer Khan",
      achievement: "Quick Result",
      text: "₹30,000 investment → ₹3L/month business. Best decision ever.",
      image: "https://images.unsplash.com/photo-1539571696357-5aa69c17a67c?auto=format&fit=crop&w=150&q=80",
      isHighlight: true
    },
    {
      name: "Vikram Singh",
      achievement: "Life-Changing",
      text: "I was skeptical at first, but I decided to take the risk with ₹30,000. The team guided me step-by-step. Fast forward to today, I’m earning more than ₹15 lakh every month. This completely changed my life.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Karan Bajaj",
      achievement: "Support & Growth",
      text: "What I liked most is the support system. They don’t leave you halfway. With their help, I scaled from almost nothing to ₹5L+/month. If you’re serious, this is a no-brainer.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="lye-container">
      <style>{`
        .lye-container {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-color: #fcfdfe;
          padding: 60px 20px;
          color: #0f172a;
        }

        .guide-section {
          max-width: 1200px;
          margin: 0 auto 60px auto;
        }

        .guide-header h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .guide-header p {
          color: #64748b;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }

        .video-wrapper {
          max-width: 900px;
          margin: 0 auto 80px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.06);
          border: 1px solid #f1f5f9;
          background: #000;
          padding: 12px;
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* Maintains 16:9 Aspect Ratio */
          height: 0;
          border-radius: 16px;
          overflow: hidden;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        /* Testimonial Grid */
        .lye-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .lye-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .lye-card:hover {
          border-color: #2563eb;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.05);
        }

        .lye-card.highlight {
          background-color: #2563eb;
          color: white;
          border: none;
          justify-content: center;
          text-align: center;
        }

        .lye-profile {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .lye-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          margin-right: 15px;
          border: 2px solid #f1f5f9;
          object-fit: cover;
        }

        .lye-info h4 {
          margin: 0;
          font-weight: 700;
          font-size: 1.1rem;
          color: #0f172a;
        }

        .lye-info p {
          margin: 0;
          font-size: 0.8rem;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
        }

        .highlight .lye-info p {
          color: #bfdbfe;
        }

        .lye-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #475569;
          font-style: italic;
        }

        .highlight .lye-text {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .guide-header h2 { font-size: 1.8rem; }
          .lye-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero Dropshipping Section */}
      <section className="guide-section">
        <div className="guide-header">
          <h2>Dropshipping Business Model</h2>
          <p>Learn how the complete model operates and initiate your online roadmap today</p>
        </div>

        <div className="video-wrapper">
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/z1H9lv8IjBM" 
              title="Dropshipping Model Guide" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <div className="lye-grid">
        {testimonials.map((t, index) => (
          <div key={index} className={`lye-card ${t.isHighlight ? 'highlight' : ''}`}>
            {!t.isHighlight && (
              <div className="lye-profile">
                <img src={t.image} alt={t.name} className="lye-avatar" />
                <div className="lye-info">
                  <h4>{t.name}</h4>
                  <p>{t.achievement}</p>
                </div>
              </div>
            )}
            <p className="lye-text">“{t.text}”</p>
            {t.isHighlight && <p style={{ marginTop: '15px', fontWeight: 'bold', opacity: 0.9 }}>— {t.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;