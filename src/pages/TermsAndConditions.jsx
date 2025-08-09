import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import banner from '../assets/banners/contact-banner.png';

import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

function TermsAndConditions() {
  const seo = usePageSEO();

  return (
    <>
      <SEO {...seo} />
      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Terms and Conditions"
        subtitle=""
        textColor="rgba(1, 3, 112, 0.75)"
      />

      <section className="container my-5" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'left' }}>
          <p className="lead" style={{ fontWeight: 'bold', marginBottom: '2rem' }}>
            Effective Date: August 9, 2025
          </p>

          <p className="lead">
            By opting in to receive SMS messages from Ultimate Health Direct Primary Care (“we,”
            “us,” “our”), you agree to the following terms:
          </p>

          <h3 className="h5 mt-4">1. SMS Messaging Service</h3>
          <p className="lead">
            By providing my phone number, I consent to receive SMS text messages from Ultimate
            Health Direct Primary Care for appointment reminders, marketing messages, and general
            two-way communication. Msg frequency varies. Msg&amp;data rates may apply. Reply HELP
            for support. Reply STOP to opt out.
          </p>

          <h3 className="h5 mt-4">2. Message Frequency</h3>
          <p className="lead">
            You will receive up to 4 messages per month unless otherwise specified.
          </p>

          <h3 className="h5 mt-4">3. Message and Data Rates</h3>
          <p className="lead">
            Message and data rates may apply based on your mobile carrier’s terms.
          </p>

          <h3 className="h5 mt-4">4. Privacy Policy</h3>
          <p className="lead">
            Your information will be handled in accordance with our{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
          </p>

          <h3 className="h5 mt-4">5. Opt-Out Instructions</h3>
          <p className="lead">
            You can opt out at any time by replying <strong>“STOP”</strong> to any SMS message.
            Reply <strong>“HELP”</strong> for support. You may also contact us directly at:
          </p>
          <address className="lead mb-0">
            Ultimate Health Direct Primary Care<br />
            733 North 3rd Street, Leesburg, FL 34748<br />
            Phone: 352-901-6582<br />
            Email: <a href="mailto:ultimatehealthdpc@gmail.com">ultimatehealthdpc@gmail.com</a>
          </address>

          <h3 className="h5 mt-4">6. Liability</h3>
          <p className="lead">
            We are not responsible for any charges, errors, or delays in SMS delivery caused by your
            carrier or third-party service providers.
          </p>

          <p className="lead mt-4">
            By opting in, you confirm that you are the owner or authorized user of the phone number
            provided and that you are at least 18 years old.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TermsAndConditions;
