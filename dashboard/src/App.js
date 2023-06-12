import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  return (
    <div>
      {/* <Layout /> */}
      <Router>
        <Switch>
          {/* <Route exact path="/" component={LoginPage} /> */}
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/logout" component={LoginPage} />
          <Route exact path="/" component={Layout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
