function FeatureImageSection({ image, title }) {
  return (
    <section
      className="feature-image-section"
      style={{ backgroundImage: `url(${image})` }}
      aria-label={title}
    />
  );
}

export default FeatureImageSection;