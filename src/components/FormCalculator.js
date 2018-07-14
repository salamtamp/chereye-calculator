import React, { Component } from 'react';
import {
  Form,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';

class FormCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [
        {
          id: 1,
          name: 'เนยสด (80g)',
          price: 33,
          amount: 0,
        },
        {
          id: 2,
          name: 'เม็ดมะม่วง (80g)',
          price: 38,
          amount: 0,
        },
        {
          id: 3,
          name: 'ลูกเกด (80g)',
          price: 38,
          amount: 0,
        },
        {
          id: 4,
          name: 'เม็ดมะม่วง (4ชิ้น)',
          price: 15,
          amount: 0,
        },
        {
          id: 5,
          name: 'ลูกเกด (4ชิ้น)',
          price: 15,
          amount: 0,
        },
        {
          id: 6,
          name: 'ขนมหอยแครง',
          price: 40,
          amount: 0,
        },
        {
          id: 7,
          name: 'คอนเฟลก',
          price: 40,
          amount: 0,
        },
        {
          id: 8,
          name: 'บราวนี่',
          price: 35,
          amount: 0,
        },
        {
          id: 9,
          name: 'ลูกชุบ',
          price: 40,
          amount: 0,
        },
      ]
    };

    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }

  handleChangeAmount(event) {
    const temp = this.state.menus;
    const menus = temp.map(menu => {
      return `amount_${menu.id}` === event.target.id ? { ...menu, amount: event.target.value } : menu;
    })

    this.setState({ menus }, () => { this.calculatePrice(); });
  }

  handleChangePrice(event) {
    const temp = this.state.menus;
    const menus = temp.map(menu => {
      return `price_${menu.id}` === event.target.id ? { ...menu, price: event.target.value } : menu;
    })

    this.setState({ menus }, () => { this.calculatePrice(); });
  }

  handleChangeTotal(price) {
    this.props.handleChangeTotal(price);
  }

  handleChangeOrder(orders) {
    this.props.handleChangeOrder(orders);
  }

  calculatePrice() {
    const menus = this.state.menus;
    const price = menus.reduce((sum, menu) => sum + (menu.price * menu.amount), 0);
    const orders = menus.filter(menu => menu.amount > 0);

    this.handleChangeTotal(price);
    this.handleChangeOrder(orders);
  }

  render() {
    const menus = this.state.menus;
    const body = menus.map(menu => {
      return (
        <Row key={menu.id} style={{ paddingTop: 15 }}>
          <Col xs={6}>
            <Label>{ menu.name }</Label>
          </Col>
          <Col xs={3} style={{ minWidth: 70 }}>
            <Input
              type="number"
              id={`price_${menu.id}`}
              name="price"
              placeholder="ราคา"
              value={ menu.price }
              onChange={this.handleChangePrice}
            />
          </Col>
          <Col xs={3} style={{ minWidth: 70, textAlign: 'center' }}>
            <Input
              type="number"
              id={`amount_${menu.id}`}
              name="amount"
              placeholder="จำนวน"
              value={ menu.amount || '' }
              onChange={this.handleChangeAmount}
            />
          </Col>
        </Row>
      );
    });

    return (
      <Form>
        <Row key={0} style={{ textAlign: 'center' }}>
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
        { body }
      </Form>
    )
  }
}

export default FormCalculator;
