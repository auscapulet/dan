import React from "react";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

import "./ItemPreview.scss";

function ItemPreview(props) {
  const { name, url, price, removeFromCart, removeFromFav, item } = props;
  const imgStyle = {
    maxHeight: 256,
    maxWidth: 235
  };
  console.log(removeFromFav);
  return (
    <Card>
      <CardImg
        top
        width="10%"
        height="10%"
        src={`${url}`}
        alt="Card image cap"
        style={imgStyle}
      />
      <CardBody className="d-flex ">
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{price}$</CardSubtitle>
        <Button className="btn-md">
          <FontAwesomeIcon icon={faTrash} onClick={e => removeFromCart(item)} />
        </Button>
        <Button className="btn-md">
          <FontAwesomeIcon icon={faStar} onClick={e => removeFromFav(item)} />
        </Button>
      </CardBody>
    </Card>
  );
}

export default ItemPreview;
