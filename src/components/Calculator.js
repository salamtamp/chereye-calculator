import React from 'react';
import {
  Form,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';

const rowStyle = {
  paddingTop: 15,
  textAlign: 'center',
};

const priceStyle = {
  minWidth: 70,
};

const amountStyle = {
  minWidth: 70,
  textAlign: 'center',
};

const Calculator = (props) => {
  const { menus, updatePrice, updateAmount } = props;
  const tableHead = (
    <Row key={0} style={rowStyle}>
      <Col xs={6}>
        <Label><b>รายการ</b></Label>
      </Col>
      <Col xs={3}>
        <Label><b>ราคาส่ง</b></Label>
      </Col>
      <Col xs={3}>
        <Label><b>จำนวน</b></Label>
      </Col>
    </Row>
  );

  const tableBody = (menus) => {
    return menus.map(({ id, name, price, amount }) => (
      <Row key={id} style={rowStyle}>
        <Col xs={6}>
          <Label>{ name }</Label>
        </Col>
        <Col xs={3} style={priceStyle}>
          <Input
            type="number"
            id={`price_${id}`}
            name="price"
            placeholder="ราคา"
            value={ price }
            onChange={ e => updatePrice(id, e.target.value) }
          />
        </Col>
        <Col xs={3} style={amountStyle}>
          <Input
            type="number"
            id={`amount_${id}`}
            name="amount"
            placeholder="จำนวน"
            value={ amount || '' }
            onChange={ e => updateAmount(id, e.target.value) }
          />
        </Col>
      </Row>
    ));
  };

  return (
    <Form>
      { tableHead }
      { menus && tableBody(menus) }
    </Form>
  );
}

export default Calculator;
