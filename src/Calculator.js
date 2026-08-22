import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ];

  return (
    <div className="calculator">
      <input
        type="text"
        value={display}
        readOnly
        className="display"
      />

      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleClick(button)}
            className={button === "=" ? "equal" : ""}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;