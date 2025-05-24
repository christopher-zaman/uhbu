import React from 'react';

function InfoSplitSection({
  paragraph,
  leftColumnTitle,
  rightColumnTitle,
  listItems = [],
  leftAnimation = "fade-right",
  rightAnimation = "fade-left",
//   dark = false
}) {

//   const backgroundColor = dark ? "#3c93b0" : "#f8f9fa";
//   const textColor = dark ? "#ffffff" : "transparent";
// style={{ backgroundColor, color: textColor }}
  return (
    <section className="info-split-section py-5 d-md-flex align-items-stretch">
      <div className="container">
        <div className="row align-items-stretch gx-0 h-100" >
          {/* Left Column */}
          <div className="col-md-6 h-100" data-aos={leftAnimation}>
          <div className="column-block left-column p-4 w-100 d-flex align-items-center">
          <h5 className="fw-bold mb-3">{leftColumnTitle}</h5>
            <p>{paragraph}</p>
          </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 h-100" data-aos={rightAnimation}>
            <div className="column-block right-column p-4 w-100 d-flex flex-column justify-content-center">
            <h5 className="fw-bold mb-3">{rightColumnTitle}</h5>
            <ul className="list-unstyled mb-0">
              {listItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-chevron-right me-2"></i> {item}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSplitSection;
