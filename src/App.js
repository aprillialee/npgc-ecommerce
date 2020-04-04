import React from "react";
import "./App.css";

import {Switch, Route} from "react-router-dom";

import HomePage from "./Pages/Homepage/Homepage.Component";
import ShopPage from "./Pages/Shop/Shop.Component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
