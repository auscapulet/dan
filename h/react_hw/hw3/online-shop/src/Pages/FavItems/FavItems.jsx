import React from "react";

import ItemPreview from "../../Components/ItemPreview/ItemPreview";
import { Container, CardColumns, Button, Row } from "reactstrap";

function FavItemsList(props) {
  const itemsList = props.location.state;
  console.log(props.location.state);
  return (
    <CardColumns>
      {itemsList.map((item, index) => (
        <ItemPreview
          key={index}
          price={item.price}
          name={item.name}
          url={item.imageUrl}
        />
      ))}
    </CardColumns>
  );
}

export default FavItemsList;
