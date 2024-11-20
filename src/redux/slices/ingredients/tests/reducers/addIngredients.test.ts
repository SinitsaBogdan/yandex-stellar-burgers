import { test } from '@jest/globals';
import slice, { addIngredients, initialState } from '../../ingredientsSlice';
import newItem from '../newIngridient.json';

const initial = JSON.parse(JSON.stringify(initialState)) as typeof initialState;

test('[ addIngredients ] - Проверка редюссера.', () => {
  const newState = slice(initial, addIngredients([newItem]));
  const { ingredients } = newState;
  expect(ingredients).toEqual([newItem]);
});
