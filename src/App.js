import React from "react";
import "./App.css";

import {Switch, Route} from "react-router-dom";

import HomePage from "./Pages/Homepage/Homepage.Component";
import ShopPage from "./Pages/Shop/Shop.Component";
import Header from "./Components/Header/Header.Component";
import SignInAndSignUpPage from "./Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.Component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
