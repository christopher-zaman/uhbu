import React from 'react';

function HomepageTestimonials({ reviews = [] }) {
  const formatName = (name) => {
    if (!name) return 'Member';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0];
    return `${parts[0]} ${parts[parts.length - 1][0]}.`;
  };

  return (
    <section className="homepage-testimonials py-5">
      <div className="container">

        {/* Header */}
        <div className="text-center mx-auto homepage-testimonials-header">
          <span className="homepage-testimonials-eyebrow">Patient Stories</span>
          <h2 className="homepage-testimonials-title">What Members Are Saying</h2>
          <p className="homepage-testimonials-subtitle">
            Real experiences from patients who wanted more access, more answers,
            and a provider who truly listens.
          </p>
        </div>
    
        <a
        href="https://www.google.com/search?q=ultimate+health+dpc+leesburg+reviews"
        target="_blank"
        rel="noreferrer"
        className="google-rating-badge text-center mt-3 text-decoration-none"
        >
        <div className="google-rating-inner">
            <span className="google-logo">G</span>
            <div className="google-rating-text">
            <strong>4.9</strong>
            <span className="stars">★★★★★</span>
            <span className="review-count">(100+ Google Reviews)</span>
            </div>
        </div>
        </a>
        {/* Carousel */}
        <div
          id="testimonialCarousel"
          className="carousel slide mt-4"
          data-bs-ride="carousel"
          data-bs-interval="6000"
        >
          <div className="carousel-inner">

            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="d-flex justify-content-center">
                  <div className="homepage-testimonial-card">
                    <img
                        src={review.image}
                    />
                    <div className="homepage-testimonial-stars">
                      ★★★★★
                    </div>

                    <p className="homepage-testimonial-text">
                      “{review.text}”
                    </p>

                    <div className="homepage-testimonial-meta">
                      <strong>
                        — {formatName(review.name)}, Leesburg, FL
                      </strong>
                      <div className="homepage-testimonial-context">
                        {review.tag === 'dpc'
                          ? 'Direct Primary Care Member'
                          : 'Google Review'}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <a
            href="https://app.elationemr.com/book/UltimateHealthDPC"
            className="btn btn-pink-transparent rounded-pill px-4"
            target="_blank"
            rel="noreferrer"
          >
            Schedule Your Visit
          </a>
        </div>

      </div>
    </section>
  );
}

export default HomepageTestimonials;