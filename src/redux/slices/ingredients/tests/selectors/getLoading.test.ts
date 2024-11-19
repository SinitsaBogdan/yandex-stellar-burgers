import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../ingredientsSlice';
import { getLoading } from '../../ingredientsSlice';

test('[ getLoading ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      ingredients: slice
    }
  });

  const response = getLoading(store.getState());

  expect(response).toEqual(false);
});
