import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./components/ErrorPage";
import FetchNews from "./components/FetchNews";
import FetchProducts from "./components/FetchProducts";
import FetchAbout from "./components/FetchAbout";

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sobre",
    element: <FetchAbout />,
  },
  {
    path: "/produtos",
    element: <FetchProducts />,
  },
  {
    path: "/noticias",
    element: <FetchNews />,
  },
]);
*/

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route path="noticias" element={<FetchNews />} />
          <Route path="produtos" element={<FetchProducts />} />
          <Route path="sobre" element={<FetchAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
