const Video = ({ src, type = "youtube", className = "" }) => {
  if (type === "youtube") {
    return (
      <div className="container my-4">
        <div
          className="ratio ratio-16x9 mx-auto"
          style={{ maxWidth: '960px' }} // Safe to use
        >
          <iframe
            src={src}
            title="Embedded YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`w-100 h-100 rounded ${className}`}
          />
        </div>
      </div>
    );
  }

  return (
    <video
      src={src}
      className={`w-100 mx-auto rounded ${className}`}
      autoPlay
      loop
      muted
      playsInline
      controls
      style={{ maxWidth: '960px', display: 'block' }}
    />
  );
};

export default Video;
