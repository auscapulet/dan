import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CardModal = props => {
  const {
    buttonLabel,
    className,
    addToCart,
    item,
    removeFromCart,
    addedToCart
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" onClick={toggle} size="lg">
        {buttonLabel ? buttonLabel : <FontAwesomeIcon icon={faTrash} />}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Are you sure you want add this item to your card?
        </ModalHeader>

        <ModalFooter>
          <Button
            color="primary"
            onClick={e => {
              toggle();

              removeFromCart ? removeFromCart(item) : addedToCart(item); //addToCart

              // onClick={e => removeFromCart(item)}
            }}
          >
            Yes
          </Button>

          <Button color="secondary" onClick={toggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CardModal;
