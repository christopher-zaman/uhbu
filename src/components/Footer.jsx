import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top lead">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 footer-about"
            itemScope
            itemType="http://schema.org/MedicalOrganization"
          >
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename text-white" itemProp="name">
                Ultimate Health DPC
              </span>
            </a>

            <div
  className="footer-contact pt-3 footer-links"
  itemScope
  itemType="http://schema.org/LocalBusiness"
>
  <meta itemProp="url" content="https://ultimatehealthdpc.com/" />
  <span itemProp="name" className="d-none">Ultimate Health DPC</span>

  <ul>
    <li>
      <strong>Phone:</strong>{'\u00A0'}
      <a
        href="tel:+13529016582"
        className="p-tel"
        itemProp="telephone"
      >
        352-901-6582
      </a>
    </li>

    <li>
      <strong>Email:</strong>{'\u00A0'}
      <a
        href="mailto:ultimatehealthdpc@gmail.com"
        className="u-email"
        itemProp="email"
      >
       ultimatehealthdpc@gmail.com
      </a>
    </li>

    <li itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
      <a
        href="https://g.page/AmandaNeilNP?share"
        target="_blank"
        rel="noopener noreferrer"
        className="p-adr h-adr d-inline-block"
      >
        <i className="bi bi-geo-alt me-1"></i>
        <span itemProp="streetAddress">733 North 3rd Street</span>,{' '}
        <span itemProp="addressLocality">Leesburg</span>,{' '}
        <span itemProp="addressRegion">FL</span>{' '}
        <span itemProp="postalCode">34748</span>
      </a>
    </li>
  </ul>
</div>


            <div className="social-links d-flex mt-4">
              <a 
              href="https://www.instagram.com/ultimatehealthdpc"
              className="social-icon"
              aria-label="Instagram profile for Amanda Gaskin" 
              target="_blank" 
              rel="noopener noreferrer"
              >
              <i className="bi bi-instagram" />
                
              </a>

              <a 
              href="https://www.linkedin.com/in/amanda-neil-msn-aprn-2b2238202"
              className="social-icon"
              aria-label="LinkedIn profile for Amanda Gaskin" 
              target="_blank" 
              rel="noopener noreferrer"
              >
              <i className="bi bi-linkedin" />
              </a>

              <a 
              href="https://www.tiktok.com/@ultimatehealthdpc" 
              className="social-icon"
              aria-label="TikTok profile for Amanda Gaskin" 
              target="_blank" 
              rel="noopener noreferrer"
              >
              <i className="bi bi-tiktok"></i>
              </a>

            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h3>Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="meet-us">About us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h3>Services</h3>
            <ul>
              <li><a href="weight-loss">Weight Loss</a></li>
              <li><a href="hormone-replacement-therapy">Hormone Therapy</a></li>
              <li><a href="peptide-therapy">Peptide Therapy</a></li>
              <li><a href="sexual-wellness-treatments">Sexual Wellness</a></li>
              <li><a href="primary-care">Primary Care</a></li>
              <li><a href="skin-pen">Aesthetics</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-about">
              <h3>Hours</h3>
            <div className="footer-contact">
              <ul className="list-unstyled" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="Ultimate Health DPC" />
                <li itemProp="openingHours" content="Mo 00:00-23:59">Monday: Open 24 Hours</li>
                <li itemProp="openingHours" content="Tu 00:00-23:59">Tuesday: Open 24 Hours</li>
                <li itemProp="openingHours" content="We 00:00-23:59">Wednesday: Open 24 Hours</li>
                <li itemProp="openingHours" content="Th 00:00-23:59">Thursday: Open 24 Hours</li>
                <li itemProp="openingHours" content="Fr 00:00-23:59">Friday: Open 24 Hours</li>
                <li itemProp="openingHours" content="Sa 00:00-23:59">Saturday: Open 24 Hours</li>
                <li itemProp="openingHours" content="Su Closed">Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{' '}
          <strong className="px-1 sitename">Ultimate Health DPC</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
