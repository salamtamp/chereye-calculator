import React, { Component } from 'react';
import {
  Form,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';

class FormReceipt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const orders = this.props.orders;
    let body = (
      <Row style={{ paddingTop: 15, textAlign: 'center' }}>
        <Col xs={12}>
          - ยังไม่มีรายการ -
        </Col>
      </Row>
    );

    if (orders.length > 0) {
      body = orders.map(order => {
        return (
          <Row key={order.id} style={{ paddingTop: 15, textAlign: 'center' }}>
            <Col xs={6} style={{ textAlign: 'left' }}>
              <Label><b>{ order.name }</b></Label>
            </Col>
            <Col xs={3}>
              <Label><b>{ order.amount }</b></Label>
            </Col>
            <Col xs={3}>
              <Label><b>{ (order.price * order.amount).toLocaleString() }</b></Label>
            </Col>
          </Row>
        );
      });
    }

    return (
      <Form>
        <Row key={0} style={{ textAlign: 'center' }}>
          <Col xs={6}>
            <Label><b>รายการ</b></Label>
          </Col>
          <Col xs={3}>
            <Label><b>จำนวน</b></Label>
          </Col>
          <Col xs={3}>
            <Label><b>รวมราคา</b></Label>
          </Col>
        </Row>
        { body }
      </Form>
    )
  }
}

export default FormReceipt;
