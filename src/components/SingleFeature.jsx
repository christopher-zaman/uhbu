import React from 'react';

function SingleFeature({video}) {
    return(
        <>
        <section id="details" className="details section">
        <div className="container">
        <div className="row gy-4 align-items-center features-item">
            
            <div className="col-md-7" data-aos="fade-up" data-aos-delay={100}>
                <h3>Our Sexual Wellness Treatments.</h3>
                <p className="fst-italic">
                We offer a variety of evidence-based, non-invasive and minimally invasive treatments to help restore function, comfort, and confidence.
                </p>
                <ul>
                <li><i className="bi bi-check" /><span> 🌸 InMode Empower Platform</span></li>
                <li><i className="bi bi-check" /> <span>🌸 ALMA FemiLift</span></li>
                <li><i className="bi bi-check" /> <span>💉 The O-Shot®</span></li>
                <li><i className="bi bi-check" /> <span>💨 Oxytocin Nasal Spray & Tablets</span></li>
                <li><i className="bi bi-check" /> <span>💉 PT-141 Peptide Therapy</span></li>
                <li><i className="bi bi-check" /> <span>✨ Non-Surgical Labiaplasty</span></li>
                <li><i className="bi bi-check" /> <span>✨ Mons Pubis Reduction</span></li>
                <li><i className="bi bi-check" /> <span>✨ Labia Plumping with HA Filler + PRP</span></li>
                <li><i className="bi bi-check" /> <span>💥 ALMA Duo ED Treatment</span></li>
                <li><i className="bi bi-check" /> <span>💉 P-Shot (Priapus Shot®)</span></li>
                <li><i className="bi bi-check" /> <span>💊 Oral ED Medications</span></li>
                <li><i className="bi bi-check" /> <span>💉 Tri-Mix Injection Therapy</span></li>
                <li><i className="bi bi-check" /> <span>💉 PT-141 Peptide Therapy</span></li>
                </ul>
            </div>
            <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={100}>
                {video ? (
                    <video className="img-fluid" controls muted loop playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ): ( 
                <img src="assets/img/details-1.png" className="img-fluid" alt />
                )}
            </div>
        </div>{/* Features Item */}
        </div>
        </section>
        </>
    );
}

export default SingleFeature;