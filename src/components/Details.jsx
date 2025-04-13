import React from 'react';

function Details() {
    return(
        <>
        {/* Details Section */}
<section id="details" className="details section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Details</h2>
    <div><span>Check Our</span> <span className="description-title">Details</span></div>
  </div>{/* End Section Title */}
  <div className="container">
    <div className="row gy-4 align-items-center features-item">
      <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={100}>
        <img src="assets/img/details-1.png" className="img-fluid" alt />
      </div>
      <div className="col-md-7" data-aos="fade-up" data-aos-delay={100}>
        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li><i className="bi bi-check" /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><i className="bi bi-check" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><i className="bi bi-check" /> <span>Ullam est qui quos consequatur eos accusamus.</span></li>
        </ul>
      </div>
    </div>{/* Features Item */}
    <div className="row gy-4 align-items-center features-item">
      <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
        <img src="assets/img/details-2.png" className="img-fluid" alt />
      </div>
      <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay={200}>
        <h3>Corporis temporibus maiores provident</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>{/* Features Item */}
    <div className="row gy-4 align-items-center features-item">
      <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
        <img src="assets/img/details-3.png" className="img-fluid" alt />
      </div>
      <div className="col-md-7" data-aos="fade-up">
        <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
        <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
        <ul>
          <li><i className="bi bi-check" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><i className="bi bi-check" /><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><i className="bi bi-check" /> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
        </ul>
      </div>
    </div>{/* Features Item */}
    <div className="row gy-4 align-items-center features-item">
      <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
        <img src="assets/img/details-4.png" className="img-fluid" alt />
      </div>
      <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
        <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>{/* Features Item */}
  </div>
</section>{/* /Details Section */}

        </>
    ); 
}

export default Details;