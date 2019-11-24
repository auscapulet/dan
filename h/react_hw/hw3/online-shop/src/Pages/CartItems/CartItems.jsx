import React from "react";
import ItemPreview from "../../Components/ItemPreview/ItemPreview";

function CartItemsList(props) {
  const itemsList = props.location.state;
  console.log(props.location.state);
  return (
    <div>
      {itemsList.map((item, index) => (
        <ItemPreview
          key={index}
          price={item.price}
          name={item.name}
          url={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default CartItemsList;
