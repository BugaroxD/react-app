import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import FetchNews from "./components/FetchNews";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="noticias" element={<FetchNews />}></Route>
        <Route path="sobre" element={<FetchNews />}></Route>
      </Route>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
