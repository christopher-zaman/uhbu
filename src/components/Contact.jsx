import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('Email error:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="contact section contact-bg">
      <div className="container section-title" data-aos="fade-up">
        <div>
          <span>Contact</span> <span className="description-title">Information</span>
        </div>
      </div>

      <div className="container" data-aos="fade" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>Address</h3>
                <p>733 North 3rd Street Leesburg FL 34748</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>352-901-6582</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>ultimatehealthdpc@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    rows="6"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
