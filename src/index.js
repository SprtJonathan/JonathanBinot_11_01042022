import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Lodging from "./pages/Lodging";

import PageNotFound from "./pages/404Page";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Lodging">
        <Lodging />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/404">
        <PageNotFound />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
