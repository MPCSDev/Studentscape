import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <div className="h-screen w-screen bg-neutral-900">
        <App />
      </div>
    </HashRouter>
  </React.StrictMode>
);
