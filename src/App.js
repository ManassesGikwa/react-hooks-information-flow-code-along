// App.js

import React from "react";
import "./App.css"; // Importing the styles for the App component
import Parent from "./Parent"; // Importing the Parent component

function App() {
  return (
    <div className="App">
      {/* Render the Parent component, which in turn renders Child components */}
      <Parent />
    </div>
  );
}

export default App;
