import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "@/contexts/ThemeProvider.jsx";
import App from "./App.jsx";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
