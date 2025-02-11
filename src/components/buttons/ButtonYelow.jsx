import React from "react";
import "./ButtonYellow.css"; // Asegúrate de que la ruta sea correcta

const ButtonYellow = ({
  text,
  onClick,
  className,
  disabled,
  bgColor = "bg-yellow-500", 
  hoverColor = "hover:bg-yellow-600", 
  textColor = "text-white", 
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} ${hoverColor} px-4 py-2 rounded-lg ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonYellow;
