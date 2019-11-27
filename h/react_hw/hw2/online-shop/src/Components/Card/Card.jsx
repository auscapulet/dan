import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup
} from "reactstrap";

import CardModal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./Card.scss";

class Good extends React.Component {
  constructor() {
    super();

    this.state = {
      isFav: false,
      isOpened: false
    };
  }

  toggleFav(e) {
    this.setState({ isFav: !this.state.isFav });
    const favItem = this.props.item;
    localStorage.setItem("Card", favItem);
  }

  toggleModal() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const { name, price, imageUrl, id } = this.props.item;
    const { isFav } = this.state;
    const { addToFav, addToCart, item, removeFromFav } = this.props;

    return (
      <Card sm="6" xs="12" mt="2" id={id} outline color="secondary">
        <CardImg src={`${imageUrl}`} className="card-image" />
        <CardBody>
          <div className="card-headers">
            <CardTitle className="font-weight-bolder title mb-4">
              {name}
            </CardTitle>
            <CardText className="good-price p-1"> {`${price}$`}</CardText>
          </div>
          <ButtonGroup size="lg">
            <CardModal
              buttonLabel={"Add to card"}
              addToCart={addToCart}
              item={item}
            />
            <Button
              size="xs"
              className={isFav ? "fav ml-1" : "ml-1"}
              onClick={e => {
                this.toggleFav(e);
                addToFav(item);
              }}
            >
              <FontAwesomeIcon icon={faStar} />
            </Button>
            <Button onClick={e => removeFromFav(item)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    );
  }
}

export default Good;
