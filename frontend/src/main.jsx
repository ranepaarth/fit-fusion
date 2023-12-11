import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import { DarkModeContextProvider } from "./context/DarkModeContext.jsx";
import RefContextProvider from "./context/RefContext.jsx";
import { WorkoutContextProvider } from "./context/WorkoutContext.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <RefContextProvider>
          <DarkModeContextProvider>
            <App />
          </DarkModeContextProvider>
        </RefContextProvider>
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
