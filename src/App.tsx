import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Methods } from "./methods/methods";

function App() {
  const methodObj = new Methods();
  methodObj.checkBalancingInParsedString();
  methodObj.evaluatePostfix('123*+5-');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Stack ADT using Linked List... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
