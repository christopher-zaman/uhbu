import React from 'react';
import '../assets/css/CenteredVideoSection.css'; // optional for background styling

function CenteredVideoSection({ videoId }) {
  return (
    <section className="video-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-100 h-100 border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CenteredVideoSection;
