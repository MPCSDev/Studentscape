import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="h-screen w-screen bg-neutral-900">
      <App />
    </div>
  </React.StrictMode>
);

