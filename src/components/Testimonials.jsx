import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section dark-background">
      {/* <img src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="Testimonials" /> */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
        <SwiperSlide>
  <div className="testimonial-item">
    <img src="assets/img/testimonials/testimonials-1.webp" className="testimonial-img" alt="Client Review" />
    <h3>Felicia</h3>
    <div className="stars">
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    </div>
    <p>
      <i className="bi bi-quote quote-icon-left" />
      <span>
        Since becoming an Ultimate Health Direct Primary Care patient, I have received outstanding healthcare. Amanda and her care team (Nadia and Sara) go above the traditional call of duty. When I needed ultimate healthcare, they answered the call on numerous accounts. In addition, I can almost always count on top-notch care and professionalism from Amanda, Nadia, and Sara. Equally, I am blessed to have unlimited access to Ultimate Health Direct Primary Care 24/7, literally.
      </span>
      <i className="bi bi-quote quote-icon-right" />
    </p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-item">
    <img src="assets/img/testimonials/testimonials-2.webp" className="testimonial-img" alt="Client Review" />
    <h3>Shelton</h3>
    <div className="stars">
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    </div>
    <p>
      <i className="bi bi-quote quote-icon-left" />
      <span>
        On two occasions, many hours after the traditional operating hours of most healthcare providers, I was a bit under the weather due to unexpected illnesses and needed after-hours healthcare. I contacted Amanda, and, despite the time of the call, Amanda answered immediately. Kindly note that it was a few hours after midnight. It was evident to me, as I hope it is to you, that Amanda cares more about her patients’ personal health needs than traditional operating hours. During one of these incidents, Amanda went above the call of traditional operating hours and met me at her healthcare facility before 8:00 am to attend to my health needs.
      </span>
      <i className="bi bi-quote quote-icon-right" />
    </p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-item">
    <img src="assets/img/testimonials/testimonials-3.webp" className="testimonial-img" alt="Client Review" />
    <h3>Kate</h3>
    <div className="stars">
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    </div>
    <p>
      <i className="bi bi-quote quote-icon-left" />
      <span>
        If you need a caring, genuine, skilled primary healthcare provider, I highly recommend Amanda and the entire care team at Ultimate Health Direct Primary Care. Amanda, Nadia, and Sara, “thank you, a million times” for your loving care and outstanding service. I am grateful and blessed to be in your care.
      </span>
      <i className="bi bi-quote quote-icon-right" />
    </p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-item">
    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="Client Review" />
    <h3>Lynn</h3>
    <div className="stars">
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    </div>
    <p>
      <i className="bi bi-quote quote-icon-left" />
      <span>
        Amanda is the absolute best. With being the best doctor around, she also has the best staff. Greatest hidden gem in all of Lake County. She actually cares and the staff does too. They are all supportive of men and women health. Best relationship with a doctor I have ever had.
      </span>
      <i className="bi bi-quote quote-icon-right" />
    </p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="testimonial-item">
    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="Client Review" />
    <h3>DeAnnA</h3>
    <div className="stars">
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
    </div>
    <p>
      <i className="bi bi-quote quote-icon-left" />
      <span>
        I could not explain how Amanda has changed my life.  I realized that life isn't over at my age it's just beginning. Lol  she has been a friend a doctor and a very listener. I love her team. I'm glad I've found her. I wouldn't give her up for nothing.
      </span>
      <i className="bi bi-quote quote-icon-right" />
    </p>
  </div>
</SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
