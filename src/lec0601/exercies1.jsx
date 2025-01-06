// 1. create a react pure functional component
// that will take 2 numbers and print
// Additional, Subtraction, Multiplication, Division of those numbers
import { useState } from "react";
const Exercies1 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const num1Parsed = parseFloat(num1);
  const num2Parsed = parseFloat(num2);
  const add = num1Parsed + num2Parsed;
  const subtract = num1Parsed - num2Parsed;
  const multiply = num1Parsed * num2Parsed;
  const divide = num2Parsed !== 0 ? num1Parsed / num2Parsed : 'Cannot divide by zero';

  return (
    <div>
      <div>
        <label>Number 1:</label>
        <input 
          type="number" 
          value={num1} 
          onChange={(e)=> setNum1(e.target.value)} 
          placeholder="Enter first number" 
        />
      </div>
      <div>
        <label>Number 2:</label>
        <input 
          type="number" 
          value={num2} 
          onChange={(e)=> setNum2(e.target.value)} 
          placeholder="Enter second number" 
        />
      </div>
      <div>
        <h2>Results:</h2>
        <p></p>
        <p>Addition: {add}</p>
        <p>Subtraction: {subtract}</p>
        <p>Multiplication: {multiply}</p>
        <p>Division: {divide}</p>
      </div>
    </div>
  );
};

export default Exercies1;