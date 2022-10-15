import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/root";

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
    <Root />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
