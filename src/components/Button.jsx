import React from "react";
import "../styles/Button.css"; // Ensure you have styling for the button

const Button = ({ text, className }) => {
  return (
    <button className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;

