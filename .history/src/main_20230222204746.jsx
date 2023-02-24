import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { LeadProvider } from "./context/LeadContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          theme: {
            primary: "#4aed88",
          },
        },
      }}
    ></Toaster>
    <Router>
      <LeadProvider>
        <AuthProvider>
          
          <App />
        </AuthProvider>
      </LeadProvider>
    </Router>
    </>
);
