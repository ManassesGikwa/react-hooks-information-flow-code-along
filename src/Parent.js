// Parent.js

import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  // Generate a random color using the randomColorGenerator utility
  const randomColor = getRandomColor();

  // Initialize state for the background color of the parent div
  const [color, setColor] = useState(randomColor); // initial value for color state

  // Function to handle color change in the parent component
  function handleChangeColor() {
    // Generate a new random color for the parent
    const newRandomColor = getRandomColor();

    // Update the state for the parent component's color
    setColor(newRandomColor); // update color state to a new value
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* Render two Child components, passing the handleChangeColor function as a prop */}
      <Child onChangeColor={handleChangeColor} />
      <Child onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
