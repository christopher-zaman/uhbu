import React from 'react';
import { FiPhone } from 'react-icons/fi';

export default function PhoneChip({
  tel = '+13529016582',
  display = 'Schedule a Free Meet-and-Greet',
  inline = true,           // true = no extra padding/margin; false = chip style
  className = '',
  ariaLabel = 'Call Ultimate Health DPC'
}) {
  const base = inline
    ? 'phone-inline'
    : 'phone-chip';

  return (
    <a
      href={`tel:${tel}`}
      className={`${base} ${className}`}
      aria-label={`${ariaLabel} at ${display}`}
    >
      <FiPhone size={22} />
      <span className=""> {display}</span>
    </a>
  );
}
