import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Screen/Dashboard";
import Playground from "./Screen/Playground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        name: "INDEX",
        path: "",
        element: React.createElement(Dashboard),
      },
      {
        name: "PLAYGROUND",
        path: "/playground",
        element: React.createElement(Playground),
      },
      {
        path: "*",
        element: React.createElement(Dashboard),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();