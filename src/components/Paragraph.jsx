
const Paragraph = ({ children, className = "" }) => {
  return (
    <p className={`container text-center leading-relaxed text-gray-700 mb-4 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;