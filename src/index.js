import React from 'react'
import ReactDOM from 'react-dom'
//component file
import TodoContainer from './functionBased/components/TodoContainer'
import "./functionBased/App.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
<<<<<<< HEAD
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <TodoContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
=======
    <BrowserRouter>
        <TodoContainer />
    </BrowserRouter>,
    document.getElementById("root")
)
>>>>>>> 9760fd0e00d56132dc55679f49b671c95ff2b6ec
