import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

const CardModal = props => {
  const { buttonLabel, className, addToCart, item } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" onClick={toggle} size="lg">
        {buttonLabel}
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
              addToCart(item);
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
