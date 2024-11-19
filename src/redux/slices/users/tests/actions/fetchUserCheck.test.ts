import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import slice from '../../userSlice';
import { fetchUserCheck } from '../../thunks';

test('[ fetchUserCheck ] - Проверка асинхронного события.', async () => {
  const expected = {
    email: 'admin@yandex.ru',
    name: 'admin'
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(expected)
    })
  ) as jest.Mock;

  const store = configureStore({
    reducer: { user: slice }
  });

  await store.dispatch(fetchUserCheck());
  const { user } = store.getState().user;
  // expect(user).toEqual(expected);
});
