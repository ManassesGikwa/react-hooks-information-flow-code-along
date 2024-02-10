// Child.js

import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  // Function to handle click event and change color using the onChangeColor prop
  function handleClick() {
    // Generate a new random color for the child
    const newColor = getRandomColor();

    // Call the parent's onChangeColor function to update both parent and child colors
    onChangeColor(newColor);
  }

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
