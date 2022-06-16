import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages";
import "antd/dist/antd.css";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
