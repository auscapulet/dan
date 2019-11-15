import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ActionButton from "../../components/button/action-button";
import { Close } from "@fortawesome/free-solid-svg-icons";

import "./modal.scss";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: true };
  }

  closeModal = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  agreedAnswer = () => {
    alert("SURE");
  };

  refusedAnswer = () => {
    alert("as you want");
  };

  render() {
    const { text, className, action, header } = this.props;
    const { isOpened, closeModal } = this.state;
    // const element = <FontAwesomeIcon icon={close} />;
    console.log("modal", this.state);
    return (
      <div className="">
        {isOpened ? (
          <div
            className={`${className} modal`}
            onClick={() => this.closeModal()}
          >
            <div className="modal-content">
              <ActionButton
                className="close"
                text="X"
                action={this.closeModal}
              />
              <h2>{header}</h2>
              <p>{text}</p>
              <ActionButton
                text="yes"
                className="agree"
                action={this.agreedAnswer}
              />
              <ActionButton
                text="no"
                className="disagree"
                action={this.refusedAnswer}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
