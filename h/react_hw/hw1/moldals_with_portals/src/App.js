import React from "react";

import Modal from "./Containers/Modal/Modal";
import "./App.scss";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstFired: false,
      secondFired: false,
      isOpened: false
    };
  }

  openFirstModal = () => {
    this.setState(prevState => ({
      firstFired: !prevState.firstFired,
      isOpened: true
    }));
  };

  openSecondModal = () => {
    this.setState(prevState => ({
      secondFired: !prevState.secondFired,
      isOpened: true
    }));
  };

  closeModal = event => {
    let target = event.target;
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
    return (
      <>
        <button className="red btn" onClick={this.openFirstModal}>
          First
        </button>
        <button className="blue btn" onClick={this.openSecondModal}>
          Second
        </button>

        {firstFired && isOpened ? (
          <Modal
            header="Do you want to live forever?"
            text="Sounds pathetic, but some people will like that"
            action={this.closeModal}
          />
        ) : null}
        {secondFired && isOpened ? (
          <Modal
            header="Quit existential crisis?"
            text="... and start live forver"
            action={this.closeModal}
          />
        ) : null}
      </>
    );
  }
}

export default App;
