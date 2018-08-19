import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import logo from './images/chereye_logo.jpg';
import './App.css';

import { Calculator, Receipt, Total } from './containers';

const App = () => (
  <div className="App">
    <Container>
      <Row className="Logo">
        <Col>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className="Header">
        <Col>
          <h2>ตารางคำนวณราคา</h2>
        </Col>
      </Row>
      <Row className="Form">
        <Col>
          <Calculator />
        </Col>
      </Row>
      <Row className="Form">
        <Col>
          <Receipt />
        </Col>
      </Row>
      <Row className="Total">
        <Col>
          <Total />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
