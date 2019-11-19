import React from "react";

const SpecialButton = ( character, onClick ) => {
  return (
      /* Display a button element rendering the data being passed down from the parent container on props */
  <button value = { character } onClick = { onClick } > { character } </button>
  );
};

export default SpecialButton;