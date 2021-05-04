import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homePage/HomePage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header></Header>
      <HashRouter basename={process.env.PUBLIC_URL}></HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route component={() => <div>404 Not found</div>} />
      </Switch>
    </div>
  );
}

export default App;
