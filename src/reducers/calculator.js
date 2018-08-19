import {
  UPDATE_PRICE,
  UPDATE_AMOUNT,
  UPDATE_TOTAL,
  UPDATE_ORDER,
} from '../actions/types';

const initialState = {
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
  ],
  orders: [],
  total: 0,
};

const calculatorReducer = (state = initialState, action) => {
  console.log('calculatorReducer');
  console.log('action:', action);

  if (action.type === 'UPDATE_PRICE') {
    const { menus } = state;
    const { id, price } = action.payload;
    const newMenus = menus.map(menu => {
      return menu.id === id ? { ...menu, price: Number(price) }: menu;
    });

    return {
      ...state,
      menus: newMenus,
    };
  } else if (action.type === 'UPDATE_ORDER') {
    const { menus } = state;
    const orders = menus.filter(menu => {
      return menu.amount > 0;
    });

    return {
      ...state,
      orders,
    };
  } else if (action.type === 'UPDATE_TOTAL') {
    const { orders } = state;
    const total = orders.reduce((sum, menu) => {
      return sum + (menu.price * menu.amount);
    }, 0);

    return {
      ...state,
      total,
    };
  } else if (action.type === 'UPDATE_AMOUNT') {
    const { menus } = state;
    const { id, amount } = action.payload;
    const newMenus = menus.map(menu => {
      return menu.id === id ? { ...menu, amount: Number(amount) }: menu;
    });

    return {
      ...state,
      menus: newMenus,
    };
  } else {
    return state;
  }
};

export default calculatorReducer;
