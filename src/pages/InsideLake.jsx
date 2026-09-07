import { useEffect } from "react";
import "../assets/css/InsideLake.css";

const BOOKING_URL =
  "https://app.elationemr.com/book/UltimateHealthDPC?appointment_types=867431419609193";

function InsideLake() {
  useEffect(() => {
    document.title =
      "Women's Hormone Consultation | Ultimate Health Direct Primary Care";
  }, []);

  const handleBookingClick = () => {
    if (typeof window.trackEvent === "function") {
      window.trackEvent("hormone_consult_booking_click", {
        campaign: "insidelake",
        location: "leesburg",
        appointment_type: "female_hormone_consult",
        appointment_value: 175,
      });
    }
  };

  return (
    <main className="inside-lake-page">
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 text-center">
            <p className="inside-lake-eyebrow mb-3">
              Ultimate Health Direct Primary Care
            </p>

            <h1 className="inside-lake-title mb-3">
              Could It Be Perimenopause?
            </h1>

            <p className="inside-lake-symptoms mb-4">
              Weight Gain • Fatigue • Poor Sleep • Low Libido
            </p>

            <p className="lead inside-lake-intro mx-auto mb-5">
              Hormonal changes can affect how you feel, sleep, manage your
              weight, and experience everyday life. At Ultimate Health Direct
              Primary Care, we take the time to understand your symptoms and
              help determine what may be contributing to them.
            </p>

            <div className="inside-lake-offer mx-auto mb-4">
              <p className="inside-lake-offer-label mb-1">
                Hormone Consultation
              </p>

              <p className="inside-lake-price mb-4">$175</p>

              <a
                href={BOOKING_URL}
                onClick={handleBookingClick}
                className="btn btn-get-started inside-lake-book-button"
              >
                Schedule Your Consultation
              </a>
            </div>

            <div className="inside-lake-location">
              <p className="fw-semibold mb-1">
                Ultimate Health Direct Primary Care
              </p>
              <p className="mb-1">733 North 3rd Street</p>
              <p className="mb-1">Leesburg, FL 34748</p>
              <p className="mb-0">(352) 901-6582</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InsideLake;