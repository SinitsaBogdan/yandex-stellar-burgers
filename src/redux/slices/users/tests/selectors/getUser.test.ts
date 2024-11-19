import { test, describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../userSlice';
import { selectUser } from '../../userSlice';

test('[ getUser ] - Проверка селлектора.', () => {
  const store = configureStore({
    reducer: {
      user: slice
    }
  });

  const response = selectUser(store.getState());

  expect(response).toEqual({
    email: '',
    name: ''
  });
});
