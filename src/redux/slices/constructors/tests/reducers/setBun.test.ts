import { test } from '@jest/globals';
import slice, { initialState } from '../../constructorItemSlice';
import { setBun } from '../../constructorItemSlice';
import newItem from '../newIngridient.json';

const initial = JSON.parse(JSON.stringify(initialState)) as typeof initialState;

test('[ setBun ] - Проверка редюссера.', () => {
  const newState = slice(initial, setBun(newItem));
  const { bun } = newState;
  expect(bun).toEqual(newItem);
});
