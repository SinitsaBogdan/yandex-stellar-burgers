import { test } from '@jest/globals';
import slice, {
  initialState,
  setIngredients
} from '../../constructorItemSlice';
import data from '../ingridients.json';
import newItem from '../newIngridient.json';

const initial = JSON.parse(JSON.stringify(initialState)) as typeof initialState;
initial.ingredients = data;

test('[ setIngredients ] - Проверка редюссера.', () => {
  const newState = slice(initial, setIngredients([newItem]));
  const { ingredients } = newState;
  expect(ingredients).toEqual([newItem]);
});
