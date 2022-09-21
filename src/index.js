import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Chart as ChartJS } from "chart.js/auto";
import Login from "./components/login";
import Home from "./components/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


