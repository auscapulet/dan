import React, { useState, useEffect } from "react";
import { Container, CardColumns, Button } from "reactstrap";
import { Link } from "react-router-dom";

import Good from "../../Components/Card/Card";
import SHOP_DATA from "../../shop.data";

function CardsContainer() {
  const [items, setItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let items = [];
    const upatedItems = SHOP_DATA.forEach(
      item => (
        (item.isFav = false), (item.isAddedToCart = false), items.push(item)
      )
    );
    setItems(items);
  }, []);

  function addToFav(item) {
    setFavItems([items]);
  }

  function addToFav(item) {
    setFavItems([items]);
  }
  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function removeFromCart(item) {
    const list = cartItems.filter(el => el.id !== item.id);
    setCartItems(list);
  }

  function removeFromFav(item) {
    const list = favItems.filter(el => el.id !== item.id);
    setFavItems(list);
  }

  console.log("ITEMS", items);
  return (
    <>
      <Container className="mt-5">
        <Button>
          <Link
            to={{
              pathname: "cartitems",
              state: items //  cartItems     removeFromCart
            }}
          >
            Cart items
          </Link>
        </Button>
        <Button>
          <Link
            to={{
              pathname: "favitems",
              state: items //favItems, removeFromFav
            }}
          >
            Favourite items
          </Link>
        </Button>
        <CardColumns>
          {items.map(item => (
            <Good
              key={item.id}
              item={item}
              // addToFav={addToFav}
              // addToCart={addToCart}
              removeFromFav={removeFromFav}
            />
          ))}
        </CardColumns>
      </Container>
    </>
  );
}

export default CardsContainer;
