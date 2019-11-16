import React from "react";
import { Button, Icon, Container } from "semantic-ui-react";

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

  modalToggler = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    console.log("app state", this.state);
    const { firstFired, secondFired, showModal } = this.state;
    return (
      <Container>
        <Button className="red btn" onClick={() => this.openFirstModal()}>
          First
        </Button>
        <Button className="blue btn" onClick={() => this.openSecondModal()}>
          Second
        </Button>

        {firstFired && showModal ? (
          <Modal>
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-header-text">Title of frist modal</h2>
                  <Button icon onClick={() => this.modalToggler()}>
                    <Icon name="close" />
                  </Button>
                </div>
                <p className="modal-text">Text of fist modal</p>
                <div className="button-container">
                  <Button>Yes</Button>
                  <Button>NO</Button>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
        {secondFired && showModal ? (
          <Modal>
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-header-text">Title of second modal</h2>
                  <Button onClick={() => this.modalToggler()}>X</Button>
                </div>
                <p className="modal-text">Text of second modal</p>
                <div className="button-container">
                  <Button>Yes</Button>
                  <Button>NO</Button>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </Container>
    );
  }
}

export default App;
