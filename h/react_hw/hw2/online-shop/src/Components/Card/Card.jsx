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
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Card.scss";

class Good extends React.Component {
  constructor() {
    super();

    this.state = {
      isFav: false,
      isOpened: false
    };
  }

  toggleFav() {
    this.setState({ isFav: !this.state.isFav });
  }

  toggleModal() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const { name, price, imageUrl } = this.props;
    const { isFav } = this.state;
    return (
      <Card sm="6" xs="12" mt="2" outline color="secondary">
        <CardImg src={`${imageUrl}`} className="card-image" />
        <CardBody>
          <div className="card-headers">
            <CardTitle className="font-weight-bolder title mb-4">
              {name}
            </CardTitle>
            <CardText className="good-price p-1"> {`${price}$`}</CardText>
          </div>
          <ButtonGroup size="lg">
            <CardModal buttonLabel={"Add to card"} />
            <Button
              size="xs"
              className={isFav ? "fav ml-1" : "ml-1"}
              onClick={() => this.toggleFav()}
            >
              <FontAwesomeIcon icon={faStar} />
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    );
  }
}

export default Good;
