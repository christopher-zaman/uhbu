import React from 'react';

function Team() {
    return(
        <>
        {/* Team Section */}
<section id="team" className="team section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Team</h2>
    <div><span>Check Our</span> <span className="description-title">Team</span></div>
  </div>{/* End Section Title */}
  <div className="container">
    <div className="row gy-5">
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
        <div className="member">
          <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt /></div>
          <div className="member-info">
            <h4>Walter White</h4>
            <span>Chief Executive Officer</span>
            <div className="social">
              <a href><i className="bi bi-twitter-x" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
        <div className="member">
          <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt /></div>
          <div className="member-info">
            <h4>Sarah Jhonson</h4>
            <span>Product Manager</span>
            <div className="social">
              <a href><i className="bi bi-twitter-x" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
        <div className="member">
          <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt /></div>
          <div className="member-info">
            <h4>William Anderson</h4>
            <span>CTO</span>
            <div className="social">
              <a href><i className="bi bi-twitter-x" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}
    </div>
  </div>
</section>{/* /Team Section */}

        </>
    );
}

export default Team;