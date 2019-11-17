import React from "react";

import Modal from "./containers/modal/modal";
import ActionButton from "./components/button/action-button";

import "./app.scss";

class App extends React.Component {
  state = {
    firstFired: false,
    secondFired: false,
    isOpened: false
  };

  openFirstModal = () => {
    this.setState(prevState => ({
      firstFired: !prevState.firstFired,
      // secondFired: false,
      isOpened: true
    }));
  };

  openSecondModal = () => {
    this.setState(prevState => ({
      secondFired: !prevState.secondFired,
      // firstFired: false,
      isOpened: true
    }));
  };

  closeModal = event => {
    let target = event.target;
    console.log(target.tagName);
    if (target.tagName !== "DIV") {
      this.setState(state => {
        return {
          isOpened: false
        };
      });
    }
  };

  render() {
    const { firstFired, secondFired, isOpened } = this.state;
    console.log(this.state);
    return (
      <>
        <div className="buttons-container">
          <ActionButton
            className="red opener-btn"
            action={this.openFirstModal}
            text="Open first modal"
          />
          <ActionButton
            className="blue opener-btn"
            action={this.openSecondModal}
            text="Open second modal"
          />
        </div>
        {firstFired && isOpened ? (
          <Modal
            text="Sounds pathetic, but some people will like that"
            className="first-modal"
            action={this.closeModal}
            header="Do you want to live forever?"
          />
        ) : null}
        {secondFired && isOpened ? (
          <Modal
            text="... and start live forver"
            className="second-modal"
            action={this.closeModal}
            header="Quit existential crisis?"
          />
        ) : null}
      </>
    );
  }
}

export default App;
