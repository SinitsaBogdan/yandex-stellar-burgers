import { test } from '@jest/globals';
import slice, { clearOrderData, initialState } from '../../orderSlice';
import data from '../order.json';

const initial = JSON.parse(JSON.stringify(initialState)) as typeof initialState;
initial.orderData = data;

test('[ clearOrderData ] - Проверка редюссера.', () => {
  const newState = slice(initial, clearOrderData());
  const { orderData } = newState;
  expect(orderData).toBeNull();
});
