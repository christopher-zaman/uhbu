import React from 'react';

const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`text-2xl font-semibold text-center mt-5 ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;  