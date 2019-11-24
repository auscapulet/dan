import React from "react";
import { Container, CardColumns, Button } from "reactstrap";
import { Link } from "react-router-dom";

import Good from "../../Components/Card/Card";
import SHOP_DATA from "../../shop.data";

class CardsContainer extends React.Component {
  constructor() {
    super();

    this.state = { items: [], favItems: [], cartItems: [] };
  }

  componentDidMount() {
    this.setState({ items: SHOP_DATA });
  }

  favItemToggler = item => {
    let idx = item.id;
    let arr = this.state.favItems;
    console.log(arr);
    function findItem(arr, idx) {
      console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === idx) {
          console.log("BANG");
          const found = arr[i].id;

          const before = arr.slice(0, found);
          const after = arr.slice(found + 1);
          const newFavList = [...before, ...after];
          this.state({ favItems: newFavList });
          console.log("removed");
        } else {
          console.log();
          this.state(prevState => ({
            favItems: [...prevState.favItems, item]
          }));
        }
      }
    }
    findItem(idx, arr);
  };

  addToFav = item => {
    this.setState(prevState => ({
      favItems: [...prevState.favItems, item]
    }));
  };

  addToCart = item => {
    console.log(item.name);
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, item]
    }));
  };

  removeFromFav = item => {
    let id = item.id;
    let arr = this.state.favItems;
    console.log(id);

    console.log("STATE", arr);

    function findObj(id) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          console.log("BANG");
          return arr[i].id;
        }
      }
    }
    const idx = findObj(id);
    const before = arr.slice(0, idx);
    console.log("before", before);
    const after = arr.slice(idx + 1);
    console.log("LATER", arr);
    console.log(idx + 1);
    console.log("after", after);
    const newFavList = [...before, ...after];
    console.log("NEW STATE", newFavList);
    return newFavList;
    // this.setState({ favItemsList: newFavList });

    // const favItemChecker = (obj, item) => {
    //   const findedVal = obj.find(item => item.id === item.id);
    //   console.log(findedVal);
    // };
  };

  render() {
    const { items } = this.state;
    console.log(this.state.favItems);
    console.log(this.state.cartItems);
    return (
      <>
        <Container className="mt-5">
          <Button>
            <Link to={{ pathname: "cartitems", state: this.state.cartItems }}>
              Cart items
            </Link>
          </Button>
          <Button>
            <Link to={{ pathname: "favitems", state: this.state.favItems }}>
              Favourite items
            </Link>
          </Button>
          <CardColumns>
            {items.map(item => (
              <Good
                key={item.id}
                item={item}
                addToFav={this.addToFav}
                addToCart={this.addToCart}
                removeFromFav={this.removeFromFav}
                favItemToggler={this.favItemToggler}
              />
            ))}
          </CardColumns>
        </Container>
      </>
    );
  }
}

export default CardsContainer;
