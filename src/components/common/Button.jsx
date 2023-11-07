import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text ,link}) => {
  return (
    <Link to={link}>
      <div className="flex">
        <button className="bg-text-color  hover:opacity-50  p-3 px-7 rounded-lg text-[#f6f5f8]">
          <strong>{text}</strong>
        </button>
      </div>
    </Link>
  );
};

export default Button;
