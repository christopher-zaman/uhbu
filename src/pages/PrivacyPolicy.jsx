import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import banner from '../assets/banners/contact-banner.png';

import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

function PrivacyPolicy() {
  const seo = usePageSEO();

  return (
    <>
      <SEO {...seo} />
      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Privacy Policy"
        subtitle=""
        textColor="rgba(1, 3, 112, 0.75)"
      />

      <section className="container my-5" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'left' }}>
          <p className="lead" style={{ fontWeight: 'bold', marginBottom: '2rem' }}>
            Effective Date: August 9, 2025
          </p>

          <p className="lead">
            Ultimate Health Direct Primary Care (“we,” “us,” “our”) respects your privacy and is
            committed to protecting your personal information. This Privacy Policy explains how we
            collect, use, and share information when you opt in to receive SMS messages from us.
          </p>

          <h3 className="h5 mt-4">Information We Collect</h3>
          <p className="lead">When you opt in to receive SMS messages, we collect:</p>
          <ul className="lead">
            <li>Your phone number</li>
            <li>Your consent to send SMS messages</li>
          </ul>

          <h3 className="h5 mt-4">How We Use Your Information</h3>
          <p className="lead">We use your information to:</p>
          <ul className="lead">
            <li>Send you the SMS messages you’ve opted in to receive</li>
            <li>
              Provide appointment reminders, updates, promotions, or other relevant content based
              on your preferences
            </li>
          </ul>

          <h3 className="h5 mt-4">Sharing Your Information</h3>
          <p className="lead">
            We do not share your phone number or SMS opt-in information with third parties for
            marketing purposes.
          </p>

          <h3 className="h5 mt-4">Your Rights</h3>
          <p className="lead">
            You can opt out of receiving SMS messages at any time by replying with{' '}
            <strong>“STOP”</strong> to any message we send you. You may also reply with{' '}
            <strong>“HELP”</strong> for assistance.
          </p>

          <h3 className="h5 mt-4">Data Security</h3>
          <p className="lead">
            We implement reasonable measures to protect your personal information from unauthorized
            access or disclosure.
          </p>

          <h3 className="h5 mt-4">Contact Us</h3>
          <p className="lead">
            If you have questions or concerns about our privacy practices, please contact us at:
          </p>
          <address className="lead mb-0">
            Ultimate Health Direct Primary Care<br />
            733 North 3rd Street, Leesburg, FL 34748<br />
            Phone: 352-901-6582<br />
            Email: <a href="mailto:ultimatehealthdpc@gmail.com">ultimatehealthdpc@gmail.com</a>
          </address>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
