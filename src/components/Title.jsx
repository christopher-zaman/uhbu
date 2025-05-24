import React from 'react';

function Title({
    centerTitle = true,
    showHeading = false, 
    introText = "Check Our", 
    highlightText = "Details",
    headingText = "headingText"
}
) {
    return(
        <>
        <section id="details" className="details section">
        {/* Section Title */}
        <div className={`container section-title ${centerTitle ? 'text-center' : ''}`} data-aos="fade-up">
            {showHeading && <h2>{headingText}</h2>}
            <div><span>{introText}</span> <span className="description-title">{highlightText}</span></div>
        </div>
        </section>
        </>
    );
}

export default Title;