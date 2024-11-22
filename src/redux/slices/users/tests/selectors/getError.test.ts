import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../userSlice';
import { selectError } from '../../userSlice';

test('[ getError ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      user: slice
    }
  });

  const response = selectError(store.getState());

  expect(response).toEqual('');
});
