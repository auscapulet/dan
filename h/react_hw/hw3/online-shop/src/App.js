import React from "react";
import CardsContainer from "./Containers/CardsContainer/CardsContainer";
import CartItemsList from "./Pages/CartItems/CartItems";
import FavItemsList from "./Pages/FavItems/FavItems";
import { Switch, Route } from "react-router-dom";

const test = [{ 1: "test" }];
localStorage.setItem("Cards", JSON.stringify(test));

// state with all cards == contains info for Fav

function App() {
  return (
    <Switch>
      <Route exact path="/" component={CardsContainer} />
      <Route path="/favitems" component={FavItemsList} />
      <Route path="/cartitems" component={CartItemsList} />
    </Switch>
  );
}

export default App;
