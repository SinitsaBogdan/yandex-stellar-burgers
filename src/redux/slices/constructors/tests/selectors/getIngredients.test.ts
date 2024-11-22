import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../constructorItemSlice';
import { getIngredients } from '../../constructorItemSlice';

test('[ getIngredients ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      item: slice
    }
  });

  const response = getIngredients(store.getState());

  expect(response).toEqual([]);
});
