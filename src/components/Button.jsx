import React from "react";

function Button(props) {
  const variantes = [" bg-blue-900 ", " bg-orange-400 "];
  const color = variantes[props.variante];
  return (
    <button
      className={`${color} text-white py-2 px-4 rounded-md`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
