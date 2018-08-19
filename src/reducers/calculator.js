import {
  UPDATE_PRICE,
  UPDATE_TOTAL,
  UPDATE_AMOUNT,
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
  if (action.type === 'UPDATE_PRICE') {
    const { menus } = state;
    const { id, price } = action.payload;
    const newMenus = menus.map(menu => {
      return menu.id === id ? { ...menu, price }: menu;
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
