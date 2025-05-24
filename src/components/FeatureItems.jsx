import React from 'react';

function FeatureItems({ items = [], middleTitle, topTitle }) {
  const topFeatures = items.slice(0, 2);
  const bottomFeatures = items.slice(2);

  return (
    <section id="features" className="features section">
      <div className="container">
        <h2 className="text-center mb-4">{topTitle}</h2>

        {/* First row: 2 columns */}
        <div className="row gy-4 justify-content-center mb-4">
          {topFeatures.map((item, index) => (
            <div
              key={index}
              className="col-lg-5 col-md-6 h-100"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="features-item text-center">
                <i className={`bi ${item.icon} feature-icon`} style={{ color: item.color }} />
                <h3>{item.title}</h3>
                {item.subtext && <p className="text-muted small mt-2">{item.subtext}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Section title between */}
        <h2 className="text-center mb-4">{middleTitle}</h2>

        {/* Second row: 3 columns */}
        <div className="row gy-4">
          {bottomFeatures.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 h-100"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="features-item text-center">
                <i className={`bi ${item.icon} feature-icon`} style={{ color: item.color }} />
                <h3>{item.title}</h3>
                {item.subtext && <p className="text-muted small mt-2">{item.subtext}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureItems;
