import React from "react";

import ActionButton from "../../components/button/action-button";

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
    alert("Sure");
  };

  refusedAnswer = () => {
    alert("As you want");
  };

  render() {
    const { text, className, header } = this.props;
    const { isOpened } = this.state;

    console.log("modal", this.state);
    return (
      <div className="">
        {isOpened ? (
          <div
            className={`${className} modal`}
            onClick={() => this.closeModal()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-header-text">{header}</h2>
                <ActionButton
                  className="close"
                  text="X"
                  action={this.closeModal}
                />
              </div>
              <p className="modal-text">{text}</p>
              <div className="button-container">
                <ActionButton
                  text="Yes"
                  className="dialog-btn"
                  action={this.agreedAnswer}
                />
                <ActionButton
                  text="No"
                  className="dialog-btn"
                  action={this.refusedAnswer}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
