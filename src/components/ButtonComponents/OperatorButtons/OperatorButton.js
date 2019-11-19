import React from "react";

const OperatorButton = ( character, value, onClick ) => {
  return (
    /* Display a button element rendering the data being passed down from the parent container on props */
  <button value = { value } onClick = { onClick } > {character } </button>
  );
};

export default OperatorButton;