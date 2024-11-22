import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../constructorItemSlice';
import { getBun } from '../../constructorItemSlice';

test('[ getBun ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      item: slice
    }
  });

  const response = getBun(store.getState());

  expect(response).toEqual(null);
});
