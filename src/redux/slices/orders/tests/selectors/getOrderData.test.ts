import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../orderSlice';
import { getOrderData } from '../../orderSlice';

test('[ getOrderData ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      order: slice
    }
  });

  const response = getOrderData(store.getState());

  expect(response).toEqual(null);
});
