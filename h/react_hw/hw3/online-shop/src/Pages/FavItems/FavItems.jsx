import React from "react";

import ItemPreview from "../../Components/ItemPreview/ItemPreview";
import { CardColumns } from "reactstrap";

function FavItemsList(props) {
  const itemsList = props.location.state;
  // const removeFromFav = props.location.removeFromFav;
  console.log("FAV ITEMSLIST", itemsList);
  return (
    <p>kekeke</p>
    //   // <CardColumns>
    //   //   {itemsList.filter(
    //   //     (item, index) => el => el.isFav === true,
    //   //     <ItemPreview
    //   //       key={index}
    //   //       price={item.price}
    //   //       name={item.name}
    //   //       url={item.imageUrl}
    //   //       item={item}
    //   //       removeFromFav={removeFromFav}
    //   //     />
    //   //   )}
    //   // </CardColumns>
  );
}

export default FavItemsList;
