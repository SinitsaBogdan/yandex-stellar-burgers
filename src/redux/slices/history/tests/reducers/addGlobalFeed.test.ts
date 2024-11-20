import { test } from '@jest/globals';
import slice, { initialState, addGlobalFeed } from '../../historySlice';
import response from '../feedsResponse.json';

const initial = JSON.parse(JSON.stringify(initialState)) as typeof initialState;

test('[ addGlobalFeed ] - Проверка редюссера.', () => {
  const newState = slice(initial, addGlobalFeed(response));
  const { feeds } = newState;
  expect(feeds).toEqual(response);
});
