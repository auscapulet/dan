import React from "react";

import Good from "../../Components/Card/Card";
import SHOP_DATA from "../../shop.data";

import { Container, CardColumns } from "reactstrap";

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
    let arr = this.state;

    const favItemChecker = (obj, val) => {
      return Object.entries(obj).find(i => i[1] === val);
    };
    console.log(favItemChecker(arr, idx));

    if (favItemChecker(arr, idx)) {
      let favItemsList = [...this.state.favItems];
      favItemsList.splice(idx, 1);
      this.setState({ favItems: favItemsList });
    } else {
      this.setState(prevState => ({
        favItems: [...prevState.favItems, item]
      }));
    }
  };

  addToFav = item => {
    this.setState(prevState => ({
      favItems: [...prevState.favItems, item]
    }));
  };

  addToCart = item => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, item]
    }));
  };

  removeFormFav = item => {
    let arr = [...this.state.favItems];
    let idx = item.id;
    if (idx !== -1) {
      arr.splice(idx, 1);
      this.setState({ favItems: arr });
    }
  };

  render() {
    const { items } = this.state;
    console.log(this.state.favItems);

    return (
      <>
        <Container className="mt-5">
          <CardColumns>
            {items.map(item => (
              <Good
                key={item.id}
                item={item}
                addToFav={this.addToFav}
                addToCart={this.addToCart}
                removeFormFav={this.removeFormFav}
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
