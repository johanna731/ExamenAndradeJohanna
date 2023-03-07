import React from "react";

export const Card = (props) => {
  return (
    <div>
      <h3>
        {props.nombre} {props.apellido}
      </h3>
    </div>
  );
};
