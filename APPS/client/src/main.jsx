import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // imporing bootstrap css
import "react-toastify/dist/ReactToastify.css"; // importing toastify css

import { ToastContainer } from "react-toastify"; // imporing container for showing the toast message

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
