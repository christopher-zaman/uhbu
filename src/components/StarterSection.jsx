import React from 'react';

const StarterSection = ({ image, title, subtitle }) => {
    return(
        <>
       {/* Starter Section Section */}
        <section id="starter-section" 
                 className="starter-section section">
        <img src={image} alt={title} />
        {/* Section Title */}
        <div className="container section-title" 
             data-aos="fade-up">
            <h2>Starter Section</h2>
            <div>
                <span className="description-title">{title}</span>
            </div>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up">
            <p>{subtitle}</p>
        </div>

        </section>
        {/* /Starter Section Section */}
        </>
    );
}
export default StarterSection;