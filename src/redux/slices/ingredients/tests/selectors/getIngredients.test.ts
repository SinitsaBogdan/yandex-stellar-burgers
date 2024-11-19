import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../ingredientsSlice';
import { getIngredients } from '../../ingredientsSlice';

test('[ getIngredients ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      ingredients: slice
    }
  });

  const response = getIngredients(store.getState());

  expect(response).toEqual([]);
});
