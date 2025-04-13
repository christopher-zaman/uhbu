import React, { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';

function Features() {
    useEffect(() => {
        new PureCounter();
      }, []);

    return(
        <>
        {/* Features Section */}
<section id="features" className="features section">
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="features-item">
          <i className="bi bi-eye" style={{color: '#ffbb2c'}} />
          <h3><a href className="stretched-link">Lorem Ipsum</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={200}>
        <div className="features-item">
          <i className="bi bi-infinity" style={{color: '#5578ff'}} />
          <h3><a href className="stretched-link">Dolor Sitema</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={300}>
        <div className="features-item">
          <i className="bi bi-mortarboard" style={{color: '#e80368'}} />
          <h3><a href className="stretched-link">Sed perspiciatis</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={400}>
        <div className="features-item">
          <i className="bi bi-nut" style={{color: '#e361ff'}} />
          <h3><a href className="stretched-link">Magni Dolores</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={500}>
        <div className="features-item">
          <i className="bi bi-shuffle" style={{color: '#47aeff'}} />
          <h3><a href className="stretched-link">Nemo Enim</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={600}>
        <div className="features-item">
          <i className="bi bi-star" style={{color: '#ffa76e'}} />
          <h3><a href className="stretched-link">Eiusmod Tempor</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={700}>
        <div className="features-item">
          <i className="bi bi-x-diamond" style={{color: '#11dbcf'}} />
          <h3><a href className="stretched-link">Midela Teren</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={800}>
        <div className="features-item">
          <i className="bi bi-camera-video" style={{color: '#4233ff'}} />
          <h3><a href className="stretched-link">Pira Neve</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={900}>
        <div className="features-item">
          <i className="bi bi-command" style={{color: '#b2904f'}} />
          <h3><a href className="stretched-link">Dirada Pack</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1000}>
        <div className="features-item">
          <i className="bi bi-dribbble" style={{color: '#b20969'}} />
          <h3><a href className="stretched-link">Moton Ideal</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1100}>
        <div className="features-item">
          <i className="bi bi-activity" style={{color: '#ff5828'}} />
          <h3><a href className="stretched-link">Verdo Park</a></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay={1200}>
        <div className="features-item">
          <i className="bi bi-brightness-high" style={{color: '#29cc61'}} />
          <h3><a href className="stretched-link">Flavor Nivelanda</a></h3>
        </div>
      </div>{/* End Feature Item */}
    </div>
  </div>
</section>{/* /Features Section */}

{/* Stats Section */}
<section id="stats" className="stats section light-background">
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row gy-4">
      <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
        <i className="bi bi-emoji-smile" />
        <div className="stats-item">
          <span 
          data-purecounter-start={0} 
          data-purecounter-end={232} 
          data-purecounter-duration={1} 
          className="purecounter" 
          />
          <p>Happy Clients</p>
        </div>
      </div>{/* End Stats Item */}
      <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
        <i className="bi bi-journal-richtext" />
        <div className="stats-item">
          <span 
          data-purecounter-start={0} 
          data-purecounter-end={521} 
          data-purecounter-duration={1} 
          className="purecounter" 
          />
          <p>Projects</p>
        </div>
      </div>{/* End Stats Item */}
      <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
        <i className="bi bi-headset" />
        <div className="stats-item">
          <span 
          data-purecounter-start={0} 
          data-purecounter-end={1463} 
          data-purecounter-duration={1} 
          className="purecounter" 
          />
          <p>Hours Of Support</p>
        </div>
      </div>{/* End Stats Item */}
      <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
        <i className="bi bi-people" />
        <div className="stats-item">
          <span 
          data-purecounter-start={0} 
          data-purecounter-end={15} 
          data-purecounter-duration={1} 
          className="purecounter" 
          />
          <p>Hard Workers</p>
        </div>
      </div>{/* End Stats Item */}
    </div>
  </div>
</section>{/* /Stats Section */}
        </>
    );
}

export default Features;