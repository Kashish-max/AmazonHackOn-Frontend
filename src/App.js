import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Authentication from "./pages/authentication";
import Dashboard from "./pages/dashboard";
  
function App() {
  return (
    <BrowserRouter>
      <Route component={Authentication} exact path="/" />
      <Route component={Dashboard} exact path="/dashboard" />
    </BrowserRouter>
  );
}

export default App;
