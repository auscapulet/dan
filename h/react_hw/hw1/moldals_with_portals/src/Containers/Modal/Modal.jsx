import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  constructor() {
    super();

    this.element = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    const { header, text, action } = this.props;
    return createPortal(
      <section className="modal" onClick={action}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-header-text">{header}</h2>
            <button value="x" onClick={action}></button>
          </div>
          <p className="modal-text">{text}</p>
          <div className="button-container">
            <button>Yes</button>
            <button>NO</button>
          </div>
        </div>
      </section>,

      this.element
    );
  }
}
export default Modal;
