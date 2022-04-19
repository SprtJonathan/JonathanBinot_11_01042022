import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Lodging from "./pages/Lodging";

import PageNotFound from "./pages/404Page";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lodging">
          <Lodging />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
