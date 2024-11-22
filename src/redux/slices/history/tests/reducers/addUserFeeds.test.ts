import { test } from '@jest/globals';
import slice, { initialState, addUserFeeds } from '../../historySlice';
import response from '../order.json';

const initial = JSON.parse(JSON.stringify(initialState)) as typeof initialState;

test('[ addUserFeeds ] - Проверка редюссера.', () => {
  const newState = slice(initial, addUserFeeds([response]));
  const { history } = newState;
  expect(history).toEqual([response]);
});
