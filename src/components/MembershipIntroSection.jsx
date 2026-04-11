import React from 'react';
import Divider from './Divider';

function MembershipIntroSection() {
  return (
    <section className="about section about-us-bg lead">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-xl-center gy-5">
          <div
            className="col-xl-7 content"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-uppercase">How Membership Works</h2>

            <Divider
              centered={false}
              aos="fade-right"
              aosDelay="100"
              aosDuration="1000"
              customClass="custom-fade-right"
            />

            <div>
              <p><strong>Healthcare with a simpler, more personal approach.</strong></p>

              <p>
                At Ultimate Health Direct Primary Care, membership is designed
                to make getting care easier, clearer, and more personal.
              </p>

              <p>
                Instead of feeling rushed or lost in a traditional healthcare
                system, members have a direct relationship with their provider
                and a care experience built around access, communication, and
                long-term wellness.
              </p>

              <p>
                If you are ready to move forward now, you can book your
                consultation today. If you would rather ask questions first,
                you can request more information using the form below.
              </p>

              <p className="mb-3">
                This page is here to help you understand the model and choose
                the next step that feels right for you.
              </p>
            </div>
          </div>

          <div
            className="col-xl-5"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="p-4 rounded shadow-sm bg-white h-100">
              <h3 className="mb-3">Why Patients Like Membership Care</h3>
              <ul className="mb-0 ps-3">
                <li className="mb-2">More personalized visits</li>
                <li className="mb-2">Better access to your provider</li>
                <li className="mb-2">Less rushed appointments</li>
                <li className="mb-2">A stronger provider-patient relationship</li>
                <li className="mb-0">A simplified healthcare experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembershipIntroSection;