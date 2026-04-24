const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="row align-items-center g-5 lead">
          <div className="col-lg-7">
            <span className="section-label">Welcome to Ultimate Health</span>
            <h2>Primary care that feels personal again.</h2>

            <p>
              We’re so glad you’re here. At Ultimate Health, we believe going to the
              doctor should be simple, affordable, and personal. That’s why we do
              things differently.
            </p>

            <p>
              As a Direct Primary Care practice, you get care when you need it —
              without the long waits, surprise bills, or rushed visits.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="welcome-card">
              <h4>What you can expect</h4>
              <ul>
                <li>Longer, unrushed visits</li>
                <li>Direct access to your provider</li>
                <li>No copays or surprise bills</li>
                <li>Care for individuals, families, and businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;