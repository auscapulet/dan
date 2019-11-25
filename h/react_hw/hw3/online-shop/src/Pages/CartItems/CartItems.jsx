import React from "react";
import ItemPreview from "../../Components/ItemPreview/ItemPreview";

function CartItemsList(props) {
  const itemsList = props.location.state;
  const removeFromCart = props.location.removeFromCart;
  console.log(props);

  return (
    <div>
      {itemsList.map((item, index) => (
        <ItemPreview
          key={index}
          price={item.price}
          name={item.name}
          url={item.imageUrl}
          removeFromCart={removeFromCart}
          item={item}
        />
      ))}
    </div>
  );
}

export default CartItemsList;
