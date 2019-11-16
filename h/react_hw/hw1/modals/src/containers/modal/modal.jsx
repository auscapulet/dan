import React from "react";

import ActionButton from "../../components/button/action-button";

import "./modal.scss";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: true };
  }

  closeModal = event => {
    let target = event.target;
    console.log(target.tagName);
    if (target.tagName !== "DIV") {
      this.setState(state => {
        return {
          isOpened: !state.isOpened
        };
      });
    }
  };

  agreedAnswer = () => {
    alert("Sure");
  };

  refusedAnswer = () => {
    alert("As you want");
  };

  render() {
    const { text, header } = this.props;
    const { isOpened } = this.state;

    return (
      <>
        {isOpened ? (
          <section className="modal" onClick={this.closeModal}>
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-header-text">{header}</h2>
                <ActionButton
                  className="close"
                  text="X"
                  onClick={() => this.closeModal()}
                />
              </div>
              <div>
                <div className="modal-text">{text}</div>
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
          </section>
        ) : null}
      </>
    );
  }
}
