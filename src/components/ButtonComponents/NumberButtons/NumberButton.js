import React from "react";

const NumberButton = (number, onClick) => {
  return (
    <> 
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button value = { number } className={(number === '0') ? 'tenth' : ''} onClick = { onClick } >{ number }</button>
    </>
  );
};

export default NumberButton;