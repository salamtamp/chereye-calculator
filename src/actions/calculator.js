import {
  UPDATE_PRICE,
  UPDATE_TOTAL,
  UPDATE_AMOUNT,
  UPDATE_ORDER,
} from './types';

const updatePrice = (id, price) => ({
  type: UPDATE_PRICE,
  payload: { id, price },
});

const updateAmount = (id, amount) => ({
  type: UPDATE_AMOUNT,
  payload: { id, amount },
});

const updateTotal = () => ({
  type: UPDATE_TOTAL,
});

const updateOrder = () => ({
  type: UPDATE_ORDER,
});

export {
  updatePrice,
  updateTotal,
  updateAmount,
  updateOrder,
};
