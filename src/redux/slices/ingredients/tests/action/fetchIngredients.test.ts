import { test, describe } from '@jest/globals';
import slice, { initialState } from '../../ingredientsSlice';
import { fetchIngredients } from '../../thunks';

describe('[ fetchIngredients ] - Проверка асинхронного события.', () => {
  const initial = JSON.parse(
    JSON.stringify(initialState)
  ) as typeof initialState;

  test('fetchIngredients - pending', () => {
    const referenceState = JSON.parse(
      JSON.stringify(initialState)
    ) as typeof initialState;
    referenceState.isLoading = true;
    const actualState = slice({ ...initial }, fetchIngredients.pending('.'));
    expect(actualState).toEqual(referenceState);
  });
  test('fetchIngredients - rejected', () => {
    const referenceState = JSON.parse(
      JSON.stringify(initialState)
    ) as typeof initialState;
    referenceState.error = 'Тестовая ошибка';
    const actualState = slice(
      { ...initial, error: 'Тестовая ошибка' },
      fetchIngredients.rejected(null, '')
    );
    expect(actualState).toEqual(referenceState);
  });
  test('fetchIngredients - fulfilled', () => {
    const referenceState = JSON.parse(
      JSON.stringify(initialState)
    ) as typeof initialState;
    const actualState = slice(
      { ...initial },
      fetchIngredients.fulfilled([], '')
    );
    expect(actualState).toEqual(referenceState);
  });
});
