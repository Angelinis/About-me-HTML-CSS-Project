import {global, reset} from "./styles/index.js"

import App from "./App.jsx"

import React from "react"
import ReactDOM from "react-dom/client"
import { Global } from "@emotion/react"
import { BrowserRouter } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={reset}/>
    <Global styles = {global}/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
