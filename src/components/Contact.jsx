import React, { useRef, useState } from 'react';
import { trackGA4 } from "../utils/ga4";

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
  e.preventDefault();

  const fd = new FormData(form.current);

  const payload = {
    name: fd.get('name') || '',
    email: fd.get('email') || '',
    phone: fd.get('phone') || '',
    subject: fd.get('subject') || '',
    message: fd.get('message') || '',
    smsConsent: fd.get('smsConsent') === 'on',
    pageLocation: window.location.href,
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    let result = null;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error(`API returned non-JSON: ${text.slice(0, 160)}`);
    }

    if (!response.ok) {
      throw new Error(result?.error || 'Something went wrong.');
    }

    window.trackEvent?.("generate_lead", {
      form_id: "contact_page_form",
      form_name: "Contact – Ultimate Health DPC",
      page_location: window.location.href,
      lead_name: payload.name,
      lead_email: payload.email,
      lead_phone: payload.phone,
    });

    alert('Message sent successfully!');
    form.current.reset();
  } catch (err) {
    console.error('Contact form error:', err);
    alert(err?.message || 'Failed to send message. Please try again later.');
  }
};


  return (
    <section id="contact" className="contact section blue-gradient text-black">
      <div className="container section-title lead" data-aos="fade-up">
        <div>
          <span>Contact</span> <span className="description-title">Information</span>
        </div>

        <p className="mt-2 mb-0">
          Use the form below or contact us directly — we’re happy to help.
        </p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex lead" data-aos="fade-up" data-aos-delay={200}>
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>Address</h3>
                <p>733 North 3rd Street Leesburg FL 34748</p>
              </div>
            </div>

              <a
                href="tel:+13529016582"
                className="info-item d-flex text-decoration-none text-dark"
                data-aos="fade-up"
                data-aos-delay={300}
                onClick={() => {
                  const ok = trackGA4("phone_click", {
                    phone_number: "+13529016582",
                    position: "contact_page_info_block", // or "topbar"
                    page_path: window.location.pathname,
                  });

                  if (!ok) console.warn("GA4 not available (gtag/dataLayer missing)");
                }}
              >
                <i className="bi bi-telephone flex-shrink-0" />
                <div className="lead">
                  <h3>Call Us</h3>
                  <p>352-901-6582</p>
                </div>
              </a>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
              <i className="bi bi-envelope flex-shrink-0" />
              <div className="lead">
                <h3>Email Us</h3>
                <p>ultimatehealthdpc@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="php-email-form lead"
              data-aos="fade-up"
              data-aos-delay={200}
            >
            <p className="contact-form-reassurance small mb-3">
              Have questions first? That’s completely okay — we’ll help you find the right next step.
            </p>
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
                    placeholder="Subject (optional)"
                    
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
                      <a 
                      href="/privacy-policy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue"
                      >
                        privacy policy
                      </a>{' '}
                      and{' '}
                      <a 
                      href="/terms-and-conditions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue"
                      >
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
