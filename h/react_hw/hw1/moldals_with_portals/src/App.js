import React from "react";
import { Button, Container } from "semantic-ui-react";

import Modal from "./Containers/Modal/Modal";
import "./App.scss";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstFired: false,
      secondFired: false,
      showModal: false
    };
  }

  openFirstModal = () => {
    this.setState({
      firstFired: !this.state.firstFired,
      secondFired: false,
      showModal: true
    });
  };

  openSecondModal = () => {
    this.setState({
      secondFired: !this.state.secondFired,
      firstFired: false,
      showModal: true
    });
  };

  modalToggler = event => {
    let target = event.target;

    this.setState({
      showModal: false
    });
  };

  render() {
    const { firstFired, secondFired, showModal } = this.state;
    console.log("app", this.state);
    return (
      <>
        <Button className="red btn" onClick={() => this.openFirstModal()}>
          First
        </Button>
        <Button className="blue btn" onClick={() => this.openSecondModal()}>
          Second
        </Button>

        {firstFired && showModal ? (
          <Modal
            header="Do you want to live forever?"
            text="Sounds pathetic, but some people will like that"
            action={this.modalToggler}
          />
        ) : null}
        {secondFired && showModal ? (
          <Modal
            header="Quit existential crisis?"
            text="... and start live forver"
            action={this.modalToggler}
          />
        ) : null}
      </>
    );
  }
}

export default App;
