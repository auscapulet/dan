import React from "react";
import CardsContainer from "./Containers/CardsContainer/CardsContainer";
import "bootstrap/dist/css/bootstrap.min.css";

const test = [{ 1: "test" }];
localStorage.setItem("Cards", JSON.stringify(test));

// state with all cards == contains info for Fav

function App() {
  return (
    <div className="App">
      <CardsContainer />
    </div>
  );
}

export default App;
