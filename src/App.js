import React from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import logo from './images/chereye_logo.jpg';
import './App.css';

import { Calculator, Receipt, Total } from './containers';

const App = () => (
  <div className="App">
    <Container>
      <Row className="Logo">
        <img src={logo} className="App-logo" alt="logo" />
      </Row>
    </Container>
    <Container>
      <Row className="Header">
        <h2>ตารางคำนวณราคา</h2>
      </Row>
      <Row className="Form">
        <Calculator />
      </Row>
      <Row className="Form">
        <Receipt />
      </Row>
      <Row className="Total">
        <Total />
      </Row>
    </Container>
  </div>
);

export default App;
