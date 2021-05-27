import React from "react";
import ReactDOM from "react-dom";
//component file
import TodoContainer from "./functionBased/components/TodoContainer";
import "./functionBased/App.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
