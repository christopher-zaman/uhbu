import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Alicia Ghigliotty",
    rating: 5,
    text: "Absolutely wonderful experience. Amanda has the best bedside manner and truly cares about her patients. You can tell she takes the time to listen and make you feel comfortable. Her spa is beautiful and professional as well. I highly recommend her if you’re looking for someone you can trust with your care.",
    time: "4 weeks ago",
    image: "/assets/img/testimonials/testimonials-1-1.png",
    tag: "dpc",
  },
  {
    id: 2,
    name: "Jonas Shepard",
    rating: 5,
    text: "From the phone call to schedule an appointment to the check-in, to the pre-test vitals, and ultimately to the visit, I was thoroughly impressed. Amanda Gaskin or doc as I’m referring to her was absolutely amazing. Not only her positive attitude and great sense of humor impressed me but combined with her medical knowledge and her creative thought, past primary care mysteries are being solved or at least attempted to be solved rather than bandaged. After my appointment I told everyone that’s in the area that I care about, a testimony and advised them to do themselves and their health a favor and join this innovative program. Thank you Ultimate Health staff.",
    time: "Google Review",
    image: "/assets/img/testimonials/testimonial-2-1.png",
    tag: "general",
  },
  {
    id: 3,
    name: "Kaitlyn",
    rating: 5,
    text: "I had an amazing experience with Amanda and her entire staff. She takes the time to truly listen to all of my concerns and makes sure everything is explained clearly. May also took such great care of me. She was so kind and made the whole visit feel comfortable from start to finish. Everyone in the office was welcoming and compassionate. I’m so grateful to have found Amanda and her practice and highly recommend them to anyone who wants a doctor who genuinely cares and doesn’t rush you.",
    time: "Google Review",
    image: "/assets/img/testimonials/k.png",
    tag: "dpc",
  },
  {
    id: 4,
    name: "Lynn",
    rating: 5,
    text: "Amanda is the absolute best. With being the best doctor around, she also has the best staff. Greatest hidden gem in all of Lake County. She actually cares and the staff does too. They are all supportive of men and women health. Best relationship with a doctor I have ever had.",
    time: "Google Review",
    image: "/assets/img/testimonials/testimonials-3.jpg",
    tag: "general",
  },
  {
    id: 5,
    name: "Felicia",
    rating: 5,
    text: "Since becoming an Ultimate Health Direct Primary Care patient, I have received outstanding healthcare. Amanda and her care team go above the traditional call of duty. When I needed ultimate healthcare, they answered the call on numerous accounts. In addition, I can almost always count on top-notch care and professionalism. Equally, I am blessed to have unlimited access to Ultimate Health Direct Primary Care 24/7, literally.",
    time: "Google Review",
    image: "/assets/img/testimonials/testimonials-1.webp",
    tag: "general",
  },
  {
    id: 6,
    name: "Shelton",
    rating: 5,
    text: "On two occasions, many hours after the traditional operating hours of most healthcare providers, I needed after-hours healthcare. I contacted Amanda, and despite the time of the call, Amanda answered immediately. It was evident to me that Amanda cares more about her patients’ personal health needs than traditional operating hours.",
    time: "Google Review",
    image: "/assets/img/testimonials/testimonials-2.webp",
    tag: "general",
  },
  {
    id: 7,
    name: "Kate",
    rating: 5,
    text: "If you need a caring, genuine, skilled primary healthcare provider, I highly recommend Amanda and the entire care team at Ultimate Health Direct Primary Care. Thank you a million times for your loving care and outstanding service. I am grateful and blessed to be in your care.",
    time: "Google Review",
    image: "/assets/img/testimonials/testimonials-3.webp",
    tag: "general",
  },
  {
    id: 8,
    name: "DeAnnA",
    rating: 5,
    text: "I could not explain how Amanda has changed my life. I realized that life isn't over at my age, it's just beginning. She has been a friend, a doctor, and a very good listener. I love her team. I'm glad I've found her.",
    time: "Google Review",
    image: "/assets/img/testimonials/testimonials-2.jpg",
    tag: "general",
  },
  {
    id: 9,
    name: "James Floyd",
    rating: 5,
    text: "Amanda at Ultimate Health Direct Primary Care, is one of the most Friendly, Compassionate ladies I have ever met. She is like a bursting ball of energy. She is the most professional, kind, and smart, and knowledgeable nurse practitioners I have ever met. You are not just a number, your an important patient. We LOVE her and her business. 5 STARS ALWAYS",
    time: "Google Review",
    image: "/assets/img/testimonials/j.png",
    tag: "dpc",
  },
{
    id: 10,
    name: "Djhemson Anneaud",
    rating: 5,
    text: "The services I received at Ultimate Health Direct Primary Care were amazing. Nurse practitioner Amanda was knowledgeable, sensitive, and informative. I immediately felt at ease, and felt confident in receiving expert medical care. The staff was friendly, and extremely welcoming. I walked out very impressed with the overwhelming experience. HIGHLY recommend.",
    time: "Google Review",
    image: "/assets/img/testimonials/dj.png",
    tag: "dpc",
  },
  {
    id: 11,
    name: "Cindy Arias",
    rating: 5,
    text: "I have a monthly subscription to this nurse practitioner & her practice, UHDCP Amanda Gaskin MSN, APRN and her staff are fabulous! Contact them to learn of the many benefits they offer!",
    time: "Google Review",
    image: "/assets/img/testimonials/c.png",
    tag: "dpc",
  },
];

function Testimonials({ filterType, className = '' }) {
  const filteredReviews = reviews.filter(
    (review) => !filterType || review.tag === filterType
  );
  return (
    <section id="testimonials" className={`testimonials section lead ${className}`}>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {reviews
            .filter((review) => !filterType || review.tag === filterType)
            .map((review) => (
            <SwiperSlide key={review.id}>
              <div className="testimonial-item">
                <img
                  src={review.image}
                  className="testimonial-img"
                  alt={`${review.name} review`}
                  width="88"
                  height="88"
                />

                <h3>{review.name}</h3>

                {review.time && <h4>{review.time}</h4>}

                <div className="stars">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <i key={index} className="bi bi-star-fill" />
                  ))}
                </div>

                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>{review.text}</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;