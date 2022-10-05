import React from "react";
import { BrowserRouter } from "react-router-dom";

// Routes
import Router from "./routes";

// Styles
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
