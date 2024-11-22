import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../orderSlice';
import { getOrderRequest } from '../../orderSlice';

test('[ getOrderRequest ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      order: slice
    }
  });

  const response = getOrderRequest(store.getState());

  expect(response).toEqual(false);
});
