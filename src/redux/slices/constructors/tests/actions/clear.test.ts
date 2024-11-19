import { test } from '@jest/globals';
import slice, { initialState } from '../../constructorItemSlice';
import { clear } from '../../constructorItemSlice';
import data from '../ingridients.json';

const initial = JSON.parse(JSON.stringify(initialState)) as typeof initialState;
initial.ingredients = data;

test('[ clear ] - Проверка редюссера.', () => {
  const newState = slice(initial, clear());
  const { ingredients } = newState;
  expect(ingredients).toEqual([]);
});
