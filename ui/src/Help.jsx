import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  NavItem, Glyphicon, Modal, Button, Tooltip, OverlayTrigger,
} from 'react-bootstrap';

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  render() {
    const { showing } = this.state;
    return (
      <React.Fragment>
        <NavItem onClick={this.showModal}>
          <OverlayTrigger
            placement="left"
            delayShow={1000}
            overlay={<Tooltip id="codehelp">Complete Code</Tooltip>}
          >
            <Glyphicon glyph="glyphicon glyphicon-book" />
          </OverlayTrigger>
        </NavItem>
        <Modal keyboard show={showing} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title> Product Inventory </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Product List API v1.0</h4>
            <p>
              For Complete Code Please refer
              <a href="https://github.com/sanimishra/assignment6/" target="_blank" rel="noopener noreferrer"> Click Here</a>
            </p>
            <h3>Topics Covered</h3>
            <ul>
              <li>What is Mern</li>
              <li>React Components</li>
              <li>React state</li>
              <li>Express and GraphQl</li>
              <li> MongoDB</li>
              <li>Architecture and ESLInt</li>
              <li>Modularization and Webpack</li>
              <li>React Router</li>
              <li>React Forms</li>
              <li>React bootstrap</li>
              <li>Server Rendering</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="link" onClick={this.hideModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
export default withRouter(Help);
