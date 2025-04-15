"use client";

import React from 'react';

const MailtoCopyButton = () => {
  const email = 'john_doe@gmail.com';

  const handleClick = (e) => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Copy error:", err);
      });
  };

  return (
    <a href={`mailto:${email}`} onClick={handleClick}>
      {email}
    </a>
  );
};

export default MailtoCopyButton;
