import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Authentication from "./pages/authentication";
import Dashboard from "./pages/dashboard";
import { isAuthenticated } from "./middlewares/isUserAuthenticated";
  
function App() {
  return (
    <BrowserRouter>
      <Route component={Authentication} exact path={["/signup","/login"]} />
      <Route component={Dashboard} exact path="/dashboard" />
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/dashboard" /> : <Authentication />}
      </Route>
    </BrowserRouter>
  );
}

export default App;
