import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ImageContextProvider } from "./Context/Appcontext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ImageContextProvider>
    <App />
  </ImageContextProvider>
);
