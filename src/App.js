import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Authentication from "./pages/authentication";
  
function App() {
  return (
    <BrowserRouter>
      <Route component={Authentication} path="/" />
    </BrowserRouter>
  );
}

export default App;
