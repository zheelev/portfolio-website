'use client';

import React from 'react';

const PhoneLink = () => {
  const phoneNumber = '+359 87 22 22 222';

  const handleClick = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        alert('Phone number copied to clipboard!');
      })
      .catch((err) => {
        console.error('Copy error:', err);
      });
  };

  return (
    <a href={`tel:${phoneNumber}`} onClick={handleClick}>
      {phoneNumber}
    </a>
  );
};

export default PhoneLink;
