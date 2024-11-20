import { test } from '@jest/globals';
import slice, { initialState, setIngredient } from '../../constructorItemSlice';
import data from '../ingridients.json';
import newItem from '../newIngridient.json';

const initial = JSON.parse(JSON.stringify(initialState)) as typeof initialState;
initial.ingredients = data;

test('[ setIngredient ] - Проверка редюссера.', () => {
  const newState = slice(initial, setIngredient(newItem));
  const { ingredients } = newState;
  expect(ingredients).toEqual([...data, newItem]);
});
