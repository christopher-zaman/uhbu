import React from 'react';
import '../assets/css/ApproachMissionVision.css'; // Create this CSS file for styling
function ApproachMissionVision() {
  return (
    <section className="approach-section py-5">
      <div className="container">
        <div className="row align-items-center gx-5">
          {/* Left Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold text-uppercase">Our Approach</h2>
            <p>
            At Ultimate Health DPC, our approach is simple: we treat people, not problems.
            We take time to listen, build real relationships, and understand the whole you—not just your symptoms. By cutting out the middlemen, we bring healthcare back to what it should be: personal, affordable, and focused on wellness over sick visits.
            </p>
            <p>
               Our care is relationship-based, not volume-based. That means longer appointments, direct access to your provider, and a trusted partnership that puts your health first.
 
            </p>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="mission-card mb-4 p-4 rounded">
              <h4 className="fw-bold text-uppercase">Our Mission</h4>
              <p className="mb-0">
                Our mission is to empower every person we serve with access to high-quality, compassionate care that’s rooted in trust, transparency, and respect. We are committed to creating a space where patients feel heard, valued, and supported in every stage of life.
              </p>
              <p>
                We exist to bridge the gap in healthcare access for individuals, families, and small businesses—offering solutions that make a real difference in everyday lives.
              </p>
            </div>
            <div className="vision-card p-4 rounded">
              <h4 className="fw-bold text-uppercase">Our Vision</h4>
              <p className="mb-0">
                We envision a future where Direct Primary Care is the standard—not the exception.
                A healthcare system where patients feel seen, providers feel fulfilled, and communities grow stronger through connection and care.
              </p>
              <p>
                At Ultimate Health DPC, we are leading that movement—one patient, one provider, one community at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproachMissionVision;
