<<<<<<< HEAD
# Simple-Calculator---React-Project
# Ex04 Simple Calculator - React Project
## Date:22-08-2026
## Name : vaishnavi.d
## Reg No : 212224220118

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  <ul><li>npx create-react-app simple-calculator</li>
  <li>cd simple-calculator</li>
  <li>npm start</li></ul>

### STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.js and modify it.

### STEP 7
Start the development server.
  npm start

### STEP 8
Open http://localhost:3000/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.

## PROGRAM
app.js
```
import React from "react";
import Calculator from "./Calculator";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Simple Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
```
calculator.js
```
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
```
calculator.css
```
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #ff6b6b, #6c5ce7, #00cec9);
  min-height: 100vh;
}

h1 {
  color: white;
  padding-top: 25px;
  font-size: 35px;
  text-shadow: 2px 2px 5px #333;
}

.calculator {
  width: 320px;
  margin: 30px auto;
  padding: 25px;
  background: linear-gradient(145deg, #2d3436, #636e72);
  border-radius: 25px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}

.display {
  width: 100%;
  height: 70px;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: bold;
  text-align: right;
  color: #2d3436;
  background: #ffeaa7;
  border: 4px solid #fdcb6e;
  border-radius: 15px;
  outline: none;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

button {
  height: 60px;
  font-size: 22px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background: linear-gradient(145deg, #0984e3, #6c5ce7);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
}

button:hover {
  transform: scale(1.08);
  background: linear-gradient(145deg, #e84393, #fd79a8);
}

button:active {
  transform: scale(0.95);
}

button:nth-child(4),
button:nth-child(8),
button:nth-child(12),
button:nth-child(16) {
  background: linear-gradient(145deg, #e17055, #d63031);
}

button:nth-child(4):hover,
button:nth-child(8):hover,
button:nth-child(12):hover,
button:nth-child(16):hover {
  background: linear-gradient(145deg, #ff7675, #e84393);
}

button:nth-child(14) {
  background: linear-gradient(145deg, #00b894, #00cec9);
}

.equal {
  background: linear-gradient(145deg, #00b894, #55efc4) !important;
  color: #2d3436;
}

.equal:hover {
  background: linear-gradient(145deg, #ffeaa7, #fdcb6e) !important;
}
```

## OUTPUT
![alt text](<Screenshot (169).png>)

## RESULT
The program for developing a simple calculator in React.js is executed successfully.
=======
# Simple-Calculator---React-Project
>>>>>>> ff8cecabe80ffc84d86ec03dae488c4bde9bb6b5
