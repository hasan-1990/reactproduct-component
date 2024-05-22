import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Book from "./component/book";
import About from "./component/About";
import { BrowserRouter , Route , Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} ></Route>
        <Route path="/Book" element={<Book />} ></Route>
        <Route path="/About" element={<About />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);