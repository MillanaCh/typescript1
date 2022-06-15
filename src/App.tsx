import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Millana</h1>
        <Card width="260px" height="260px"></Card>
      </header>
    </div>
  );
}

export default App;
