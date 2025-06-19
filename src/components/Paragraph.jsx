
const Paragraph = ({ children, className = "", ...rest }) => {
  return (
    <p className={`container text-center leading-relaxed text-gray-700 mb-4 ${className}`}
    {...rest}
    >
      {children}
    </p>
  );
};

export default Paragraph;