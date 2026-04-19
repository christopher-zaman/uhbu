import React, { useState } from 'react';
import Divider from './Divider';

function MembershipLeadForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContactMethod: '',
    interestType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: '', message: '' });

  try {
    const response = await fetch('/api/membership-leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        source: 'membership-page',
      }),
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

    setStatus({
      type: 'success',
      message: 'Thank you. Your request was submitted successfully.',
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredContactMethod: '',
      interestType: '',
      message: '',
    });
  } catch (error) {
    setStatus({
      type: 'danger',
      message: error.message || 'There was a problem submitting the form.',
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="contact section">
      <div className="container section-title pb-0" data-aos="fade-up">
        <h2 className="membership-process text-center">Request Membership Information</h2>
        <p className="lead text-center">Fill out the form below and our team can reach out to you.</p>

      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="php-email-form">
              {status.message && (
                <div className={`alert alert-${status.type}`} role="alert">
                  {status.message}
                </div>
              )}

              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <select
                    name="preferredContactMethod"
                    className="form-control"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Preferred Contact Method</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="text">Text</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <select
                    name="interestType"
                    className="form-control"
                    value={formData.interestType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Interested For</option>
                    <option value="myself">Myself</option>
                    <option value="family">Family</option>
                    <option value="child">Child</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Questions or comments"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 text-center lead">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Request Information'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembershipLeadForm;