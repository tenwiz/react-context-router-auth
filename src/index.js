import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import SignIn from "./SignIn";
import Hello from "./Hello";
import ProtectedRoute from "./ProtectedRoute";

const App = () => (
  <Router>
    <AuthProvider>
      <Switch>
        <ProtectedRoute path="/hello" component={Hello} />
        <Route path="/" component={SignIn} />
      </Switch>
    </AuthProvider>
  </Router>
);

render(<App />, document.getElementById("root"));
