import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import Number from '../utils/Number';

const rowStyle = {
  paddingTop: 10,
  textAlign: 'center',
};

const colStyle = {
  textAlign: 'center',
};

const Total = ({ total }) => (
  <Row style={rowStyle}>
    <Col style={colStyle}>
      <h4>
        รวมเป็นเงิน: <b>{ Number.format(total) } บาท</b>
      </h4>
    </Col>
  </Row>
);

export default Total;
