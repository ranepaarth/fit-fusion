import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContextProvider } from "./context/DarkModeContext.jsx";
import { WorkoutContextProvider } from "./context/WorkoutContext.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </WorkoutContextProvider>
  </React.StrictMode>
);
