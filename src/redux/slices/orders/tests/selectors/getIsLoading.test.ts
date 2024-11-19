import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../orderSlice';
import { getIsLoading } from '../../orderSlice';

test('[ getIsLoading ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      order: slice
    }
  });

  const response = getIsLoading(store.getState());

  expect(response).toEqual(false);
});
