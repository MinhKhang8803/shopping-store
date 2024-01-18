// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="bottom-left"
      autoClose={5000} // Adjust the autoClose duration as needed
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>,
  document.getElementById("root")
);
