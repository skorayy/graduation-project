import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  return (
    <div>
      <button 
      onClick={props.onClick}
      className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button
