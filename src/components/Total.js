import React from 'react';
import {
  Row,
} from 'reactstrap';

import Number from '../utils/Number';

const rowStyle = {
  paddingTop: 15,
  textAlign: 'center'
};

const Total = ({ total }) => (
  <Row style={rowStyle}>
    <h4>
      รวมเป็นเงิน:
      <b>{ Number.format(total) } บาท</b>
    </h4>
  </Row>
);

export default Total;
