import React from "react";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Row,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./ItemPreview.scss";

function ItemPreview(props) {
  const { name, url, price } = props;
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
        <Button className="btn-md">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </CardBody>
    </Card>
  );
}

export default ItemPreview;
