import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import TextArea from "./components/textarea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <TextArea />
      </header>
    </div>
  );
}

export default App;
