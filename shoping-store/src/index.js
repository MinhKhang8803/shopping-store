import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="bottom-left"
      autoClose={5000} 
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>,
  document.getElementById("root"),
);
