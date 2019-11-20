// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import React, { useState } from "react";
import "./App.css";
import { numbers, specials, operators } from "./data";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";

// STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
// Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
// Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
// the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
// Don't forget to pass the functions (and any additional data needed) to the components as props

let hasClicked = false;
let afterEquals = false;
let firstClick = false;
let prevNumber;
let mathType;
function App() {
  const [numberState, setNumberState] = useState(numbers);
  const [specialState, setSpecialState] = useState(specials);
  const [operatorState, setOperatorState] = useState(operators);
  const [displayNumber, setDisplayNumber] = useState("0");

  function addNumber(event) {
    if (displayNumber === "0" || afterEquals || firstClick) {
      setDisplayNumber(event.target.value);
      afterEquals = false;
      firstClick = false;
    } else {
      setDisplayNumber(displayNumber.concat(event.target.value));
    }
  }

  function doOperators(event) {
    let prevNumberInt = Number(prevNumber);
    let displayNumberInt = Number(displayNumber);
    let total;
    if (hasClicked) {
      console.log("im true");
      console.log(mathType);
      if (event.target.value !== "=") {
        return;
      } else {
        switch (mathType) {
          case "-":
            total = (prevNumberInt - displayNumberInt).toString().substr(0, 6);
            break;
          case "+":
            total = (prevNumberInt + displayNumberInt).toString().substr(0, 6);
            break;
          case "*":
            total = (prevNumberInt * displayNumberInt).toString().substr(0, 6);
            break;
          case "/":
            total = (prevNumberInt / displayNumberInt).toString().substr(0, 6);
            break;
          case "%":
            total = (prevNumberInt % displayNumberInt).toString().substr(0, 6);
            break;
          default:
        }
        setDisplayNumber(total);
        hasClicked = false;
        afterEquals = true;
      }
    } else {
      prevNumber = displayNumber;
      hasClicked = true;
      firstClick = true;
      mathType = event.target.value;
      console.log(event.target.value);
    }
  }

  function doSpecialStates(event) {
    switch (event.target.value) {
      case "%":
        prevNumber = displayNumber;
        hasClicked = true;
        firstClick = true;
        mathType = event.target.value;
        break;
      case "+/-":
        setDisplayNumber((Number(displayNumber) * -1).toString());
        break;
      case "C":
        prevNumber = 0;
        setDisplayNumber("0");
        hasClicked = false;
        firstClick = false;
        mathType = null;
        break;

      default:
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display number={displayNumber} />
        <div className="buttons">
          <div className="leftside">
            <Specials
              specialState={specialState}
              setSpecialState={setSpecialState}
              onClick={event => doSpecialStates(event)}
            />
            <Numbers
              numberState={numberState}
              setNumberState={setNumberState}
              onClick={event => addNumber(event)}
            />
          </div>
          <div className="rightside">
            <Operators
              operatorState={operatorState}
              setOperatorState={setOperatorState}
              onClick={event => doOperators(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
