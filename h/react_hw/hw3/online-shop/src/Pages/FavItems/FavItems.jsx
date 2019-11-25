import React from "react";

import ItemPreview from "../../Components/ItemPreview/ItemPreview";
import { CardColumns } from "reactstrap";

function FavItemsList(props) {
  const itemsList = props.location.state;
  const removeFromFav = props.location.removeFromFav;
  console.log(removeFromFav);
  console.log(props);
  return (
    <CardColumns>
      {itemsList.map((item, index) => (
        <ItemPreview
          key={index}
          price={item.price}
          name={item.name}
          url={item.imageUrl}
          item={item}
          removeFromFav={removeFromFav}
        />
      ))}
    </CardColumns>
  );
}

export default FavItemsList;
