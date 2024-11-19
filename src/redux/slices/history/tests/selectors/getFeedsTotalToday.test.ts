import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../historySlice';
import { getFeedsTotalToday } from '../../historySlice';

test('[ getFeedsTotalToday ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      history: slice
    }
  });

  const response = getFeedsTotalToday(store.getState());

  expect(response).toEqual(0);
});
