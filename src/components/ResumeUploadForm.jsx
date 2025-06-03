import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ResumeUploadForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_RESUME,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Resume submitted successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          alert('Failed to send. Please try again.');
        }
      );
  };

  return (
    <section id="resume" className="contact section contact-bg">
      <div className="container section-title" data-aos="fade-up">
        <div>
          <span>Resume</span> <span className="description-title">Submission</span>
        </div>
      </div>

      <div className="container" data-aos="fade" data-aos-delay={100}>
        <div className="row gy-4 justify-content-center">
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
                    name="user_name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    rows="4"
                    className="form-control"
                    placeholder="Cover Letter or Message (optional)"
                  ></textarea>
                </div>
                <div className="col-12">
                    <p className="small text-muted mb-1">
                        <strong>Need help?</strong> Upload your resume to <a href="https://drive.google.com" target="_blank" rel="noreferrer">Google Drive</a> or <a href="https://dropbox.com" target="_blank" rel="noreferrer">Dropbox</a> and paste a shareable link below.
                    </p>
                  <input
                    type="url"
                    name="resume_link"
                    className="form-control"
                    placeholder="Paste Google Drive / Dropbox resume link"
                    required
                  />
                  <small className="text-muted d-block mt-1">
                    Please ensure the file link is publicly shareable.
                  </small>
                </div>
                

                <div className="col-md-12 text-center mt-3">
                  <button type="submit">Submit Resume</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeUploadForm;
