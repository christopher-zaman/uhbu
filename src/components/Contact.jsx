import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
  e.preventDefault();

  // Guard: make sure env vars exist
  const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!SERVICE || !TEMPLATE || !PUBLIC) {
    console.error('EmailJS env vars missing:', { SERVICE, TEMPLATE, PUBLIC });
    alert('Email settings are not configured. Please try again later.');
    return;
  }

  try {
    const result = await emailjs.sendForm(SERVICE, TEMPLATE, form.current, PUBLIC);
    console.log('Email sent:', result); // { status: 200, text: 'OK' }

    // 🔹 GA4 lead event
    const fd = new FormData(form.current);
    const name = fd.get("name");
    const email = fd.get("email");
    const phone = fd.get("phone");

    window.trackEvent?.("generate_lead", {
      form_id: "contact_page_form",
      form_name: "Contact – Ultimate Health DPC",
      page_location: window.location.href,
      lead_name: name || "",
      lead_email: email || "",
      lead_phone: phone || "",
    });

    alert('Message sent successfully!');
    form.current.reset();
  } catch (err) {
    // log everything useful
    console.error('EmailJS error:', err, {
      status: err?.status,
      text: err?.text,
      message: err?.message,
      name: err?.name,
    });

    alert(
      `Failed to send message. ${
        err?.text || err?.message || 'Please try again later.'
      }`
    );
  }
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

{/* chatgpt 12/6 */}
            {/* <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>352-901-6582</p>
              </div>
            </div> */}

            {/* Make this entire row a tel: link */}
              <a
                href="tel:+13529016582"
                className="info-item d-flex text-decoration-none text-dark"
                data-aos="fade-up"
                data-aos-delay={300}
                onClick={() => {
                console.log("Contact page Call Us clicked");
                if (!window.trackEvent) {
                  console.warn("trackEvent is NOT defined");
                } else {
                  window.trackEvent("phone_click", {
                    phone_number: "+13529016582",
                    position: "contact_page_info_block",
                    page_location: window.location.href,
                  });
                }
              }}
              >
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>352-901-6582</p>
                </div>
              </a>


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
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div className="col-md-6">
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

                {/* New checkbox & disclaimer */}
                <div className="col-md-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="smsConsent"
                      name="smsConsent"
                      required
                    />
                    <label className="form-check-label" htmlFor="smsConsent">
                      By providing my phone number, I consent to receive SMS text messages from
                      Ultimate Health Direct Primary Care for appointment reminders, marketing
                      messages, and general two-way communication. Msg frequency varies.
                      Msg&amp;data rates may apply. Reply HELP for support. Reply STOP to opt out.
                      Refer to our{' '}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                        privacy policy
                      </a>{' '}
                      and{' '}
                      <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                        terms and conditions
                      </a>{' '}
                      for more information.
                    </label>
                  </div>
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
