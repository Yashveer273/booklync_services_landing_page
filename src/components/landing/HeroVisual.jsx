import React from "react";
import * as Icons from "lucide-react"; // safer import

const HeroVisual = () => {
  return (
    <div className="hero-visual-stack">
      <style>{`
        .hero-visual-stack {
          position: relative;
          
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .bg-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
        }
        .blob-1 { width: 300px; height: 300px; background: rgba(37, 99, 235, 0.1); top: 10%; right: 10%; }
        .blob-2 { width: 250px; height: 250px; background: rgba(99, 102, 241, 0.08); bottom: 10%; left: 10%; }

        .image-formation {
          position: relative;
          z-index: 2;
          width: 80%;
          height: 450px;
        }

        .main-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 32px;
          box-shadow: 0 30px 60px -12px rgba(15, 23, 42, 0.2);
          border: 8px solid white;
        }

        .side-photo {
          position: absolute;
          width: 200px;
          height: 200px;
          bottom: -40px;
          right: -30px;
          border-radius: 24px;
          border: 6px solid white;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          z-index: 5;
          object-fit: cover;
        }

        .floating-widget {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 16px;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          border: 1px solid rgba(255,255,255,0.5);
          z-index: 10;
          animation: float 6s ease-in-out infinite;
        }

        .growth-card {
          top: 20px;
          left: -40px;
          width: 190px;
        }

        .leads-card {
          bottom: 40px;
          left: -60px;
          background: #0f172a;
          color: white;
          width: 220px;
          animation-delay: -3s;
        }

        .stats-bubble {
          top: -20px;
          right: 40px;
          background: #2563eb;
          color: white;
          padding: 10px 20px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 0.85rem;
          box-shadow: 0 10px 20px rgba(37,99,235,0.3);
          position: absolute;
          z-index: 10;
        }

        .mouse-cursor {
          position: absolute;
          top: 45%;
          right: 20%;
          z-index: 15;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          animation: cursorMove 8s infinite ease-in-out;
        }

        .cursor-label {
          background: #2563eb;
          color: white;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 700;
        }

      

       

        .icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        @media (max-width: 1024px) {
          .image-formation { width: 90%; height: 350px; }
          .side-photo { width: 140px; height: 140px; right: 0; }
          .growth-card { left: 0; top: -30px; }
          .leads-card { left: 0; bottom: -20px; }
        }
      `}</style>

      <div className="bg-element blob-1"></div>
      <div className="bg-element blob-2"></div>

      <div className="image-formation">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
          alt="Professional Team"
          className="main-photo"
        />

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Collaboration"
          className="side-photo"
        />

        {/* Growth */}
      </div>
    </div>
  );
};

export default HeroVisual;
