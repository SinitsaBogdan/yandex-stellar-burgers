import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../historySlice';
import { getFeeds } from '../../historySlice';

test('[ getFeeds ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      history: slice
    }
  });

  const response = getFeeds(store.getState());

  expect(response).toEqual({
    orders: [],
    total: 0,
    totalToday: 0
  });
});
