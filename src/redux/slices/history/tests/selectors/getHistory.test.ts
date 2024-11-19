import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../historySlice';
import { getHistory } from '../../historySlice';

test('[ getHistory ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      history: slice
    }
  });

  const response = getHistory(store.getState());

  expect(response).toEqual([]);
});
