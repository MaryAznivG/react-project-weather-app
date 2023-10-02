import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/aznivgalstyan/"
            rel="noopener noreferrer"
          >
            Azniv Mary Galstyan
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/MaryAznivG/react-project-Weather-app"
            rel="noopener noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
