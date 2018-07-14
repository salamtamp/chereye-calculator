import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import logo from './images/chereye_logo.jpg';
import './App.css';

import { FormCalculator, FormReceipt, Total } from './components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
      orders: [],
    };

    this.handleChangeTotal = this.handleChangeTotal.bind(this);
    this.handleChangeOrder = this.handleChangeOrder.bind(this);
  }

  handleChangeTotal(price) {
    this.setState({ price });
  }

  handleChangeOrder(orders) {
    this.setState({ orders });
  }

  render() {
    console.log('RENDER => app');
    const price = this.state.price;
    const orders = this.state.orders;

    return (
      <div className="App">
        <Container>
          <Row className="Logo">
            <Col xs={12}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="Header">
            <Col xs={12}>
              <h2>ตารางคำนวณราคา</h2>
            </Col>
          </Row>
          <Row className="Form">
            <Col xs={12}>
              <FormCalculator
                handleChangeTotal={this.handleChangeTotal}
                handleChangeOrder={this.handleChangeOrder}
              />
            </Col>
          </Row>
          <Row className="Form">
            <Col xs={12}>
              <FormReceipt
                orders={orders}
              />
            </Col>
          </Row>
          <Row className="Total">
            <Col xs={12}>
              <Total
                price={price}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
