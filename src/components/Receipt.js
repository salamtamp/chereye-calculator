import React from 'react';
import {
  Label,
  Row,
  Col,
} from 'reactstrap';

import Number from '../utils/Number';

const rowStyle = {
  paddingTop: 15,
  textAlign: 'center'
};

const Receipt = ({ orders }) => {
  const noOrder = (
    <Row style={rowStyle}>
      - ยังไม่มีรายการ -
    </Row>
  );

  const haveOrder = (orders) => {
    return orders.map(({ id, name, amount, price }) => (
      <Row key={id} style={rowStyle}>
        <Col xs={6} style={{ textAlign: 'left' }}>
          <Label><b>{ name }</b></Label>
        </Col>
        <Col xs={3}>
          <Label><b>{ amount }</b></Label>
        </Col>
        <Col xs={3}>
          <Label><b>{ Number.format(price * amount) }</b></Label>
        </Col>
      </Row>
    ));
  }

  return orders && orders.length > 0 ? haveOrder(orders) : noOrder;
};

export default Receipt;
