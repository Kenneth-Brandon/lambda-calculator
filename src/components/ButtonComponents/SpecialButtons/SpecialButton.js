import React from "react";

const SpecialButton = (charachter, onClick) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button value={ charachter } onClick={ onClick }>{ charachter }</button>
    </>
  );
};

export default SpecialButton;