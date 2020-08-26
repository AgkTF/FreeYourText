import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="text-center">
      <header className=" bg-gray-600 min-h-screen flex flex-col justify-center items-center">
        <img src={logo} className="h-64 w-64 pointer-events-none" alt="logo" />
        <p className="text-lg text-white">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-300 hover:text-blue-100 font-semibold text-lg"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
