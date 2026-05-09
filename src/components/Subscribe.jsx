import React, { useRef } from 'react';
import '../assets/css/Subscribe.css';

function Subscribe() {
  const form = useRef();

  console.log("Subscribe frontend submit fired");
  const sendSubscription = async (e) => {
  e.preventDefault();

  const fd = new FormData(form.current);

  const payload = {
    email: fd.get('subscriber_email') || '',
    source: 'subscribe-section',
  };

  try {
    const response = await fetch('/api/subscribe', {
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

    alert('Thank you for subscribing!');

    form.current.reset();

  } catch (err) {
    console.error('Subscription error:', err);

    alert(
      err?.message || 'Failed to subscribe. Please try again later.'
    );
  }

};

  return (
    <section className="subscribe-section text-white">
      <div className="container py-5">
        <div className="row align-items-center justify-content-between g-4">

          {/* Left Text */}
          <div className="col-lg-3 text-lg-start text-center">
            <h2 className="fw-bold">
              <span className="highlight">Let’s Stay</span> <br />
              <span className="text-white">Connected</span>
            </h2>
            <div className="wave-underline mt-2"></div>
          </div>

          {/* Divider */}
          <div className="col-lg-1 d-none d-lg-block text-center">
            <div className="vr mx-auto" style={{ height: '80px', borderLeft: '2px dashed white' }}></div>
          </div>

          {/* Email Form */}
          <div className="col-lg-8 text-center text-lg-start">
            <p className="mb-3 lead">Join our email list to stay up to date on services and events.</p>
            <form
              ref={form}
              onSubmit={sendSubscription}
              className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2"
            >
              <input
                type="email"
                name="subscriber_email"
                placeholder="Your Email"
                className="form-control email-input"
                required
              />
              <button type="submit" className="btn btn-light text-primary-blue fw-semibold px-4">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;