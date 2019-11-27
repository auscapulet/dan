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

import Modal from "../../Components/Modal/Modal";

import "./ItemPreview.scss";

function ItemPreview(props) {
  const { name, url, price, removeFromCart, removeFromFav, item } = props;
  const imgStyle = {
    maxHeight: 256,
    maxWidth: 235
  };

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
        <Modal className="btn-md" removeFromCart={removeFromCart} />
        <Button className="btn-md">
          <FontAwesomeIcon icon={faStar} onClick={e => removeFromFav(item)} />
        </Button>
      </CardBody>
    </Card>
  );
}

export default ItemPreview;
