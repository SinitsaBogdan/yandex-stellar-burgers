import { test } from '@jest/globals';
import data from '../order.json';
import slice, { initialState, setOrderData } from '../../orderSlice';

const initial = JSON.parse(JSON.stringify(initialState)) as typeof initialState;

test('[ setOrderData ] - Проверка редюссера.', () => {
  const newState = slice(initial, setOrderData(data));
  const { orderData } = newState;
  expect(orderData).not.toBeNull();
});
