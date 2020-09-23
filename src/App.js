import React from "react";
import "./App.css";
import Header from "./componentes/Header";
import Home from "./componentes/Home";

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
