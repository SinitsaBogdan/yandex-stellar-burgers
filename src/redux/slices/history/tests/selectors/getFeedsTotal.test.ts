import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../historySlice';
import { getFeedsTotal } from '../../historySlice';

test('[ getFeedsTotal ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      history: slice
    }
  });

  const response = getFeedsTotal(store.getState());

  expect(response).toEqual(0);
});
