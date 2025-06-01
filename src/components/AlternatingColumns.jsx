import React from 'react';
import '../assets/css/AlternatingColumns.css';
import Divider from './Divider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar, faBolt, faDollarSign } from '@fortawesome/free-solid-svg-icons';




function AlternatingColumns({
  title = '',
  sectionId = '',
  items = []
}) {
  return (
    <section id={sectionId} className="alternating-columns section">
      <div className="container">
        {title && (
          <div className="text-center mb-5">
            <h2>{title}</h2>
            <Divider />
          </div>
        )}

        {Array.from({ length: Math.ceil(items.length / 2) }).map((_, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const rowItems = items.slice(rowIndex * 2, rowIndex * 2 + 2);

          return (
            <div className="row" key={rowIndex}>
              {rowItems.map((item, colIndex) => {
                const isColored = (colIndex === 0 && isEvenRow) || (colIndex === 1 && !isEvenRow);
                const aosType = isColored
                  ? colIndex === 0
                    ? 'fade-right'
                    : 'fade-left'
                  : '';

                return (
                  <div
                   className={`col-md-6 d-flex flex-column justify-content-start p-4 ${isColored ? 'colored-bg' : ''}`}
                    data-aos={aosType}
                    data-aos-delay="100"
                    key={colIndex}
                  >
                    <div className="d-flex align-items-start mb-3">
                      <img src={item.image} alt={item.title} className="icon-circle me-3" />
                      <h4 className="m-0">{item.title}</h4>
                    </div>
                    <p>{item.description}</p>
                    <ul className="list-unstyled">
                    {item.bullets.map((bullet, i) => (
                        <li key={i} className="d-flex align-items-start mb-2">
                        {bullet.icon && (
                            <FontAwesomeIcon icon={bullet.icon} className="me-2 mt-1 text-success" />
                        )}
                        <div>
                            <strong>{bullet.bold}</strong> {bullet.text}
                        </div>
                        </li>
                    ))}
                    </ul>


                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AlternatingColumns;
