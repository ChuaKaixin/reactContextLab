import React from "react";
import "./App.css";

const App = () => {
  return [
    <header className="header" key="header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>,
    <main key="main">Todolist</main>
  ];
};

export default App;
