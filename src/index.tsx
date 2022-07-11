import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import App from "./routes/App";
import Login from "./routes/Login";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
