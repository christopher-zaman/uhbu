import React from 'react';

function SingleFeature({
    video, 
    image, 
    firstTitle, 
    secondTitle, 
    firstText, 
    fallBackText, 
    secondText, 
    singleList = []
}) 
{
    return(
        <>
        <section id="details" className="details section">
        <div className="container">
        <div className="row gy-4 align-items-center features-item">
            <div className="col-md-7" data-aos="fade-up" data-aos-delay={100}>
                <h3>{firstTitle}</h3>
                <p className="fst-italic">
                {firstText}
                </p>
                <p className="fst-italic">
                {secondText}
                </p>
                {singleList.length > 0 ? (
                <ul>
                {singleList.map((item, index) => (
                <li key={index}>
                  <i className="bi bi-check" /> <span>{item}</span>
                  <h3>{item.title}</h3>
                </li>
                ))}

                </ul>
                ):(
                    <p className="fst-italic">{fallBackText}</p>
                )}
                <h3>{secondTitle}</h3>
                
            </div>
            <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={100}>
                {video ? (
                    <video className="img-fluid" controls muted loop playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ): ( 
                <img src={image} className="img-fluid" alt />
                )}
            </div>
        </div>{/* Features Item */}
        </div>
        </section>
        </>
    );
}

export default SingleFeature;