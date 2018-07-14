import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

class Total extends Component {
  render() {
    const price = this.props.price;

    return (
      <Row>
        <Col xs={12}>
          <h4>รวมเป็นเงิน: <b>{ price.toLocaleString() } บาท</b></h4>
        </Col>
      </Row>
    )
  }
}

export default Total;
