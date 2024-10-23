import { createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';

type TConstructorItemState = {
  bun: {
    price: number;
  };
  ingredients: TIngredient[];
};

const initialState: TConstructorItemState = {
  bun: {
    price: 0
  },
  ingredients: []
};

const slice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setBun(state, action) {
      state.bun = action.payload;
    },
    setIngredients(state, action) {
      state.ingredients = action.payload;
    }
  },
  selectors: {
    getBun: (state) => state.bun,
    getIngredients: (state) => state.ingredients
  }
});

export const { setBun, setIngredients } = slice.actions;
export const { getBun, getIngredients } = slice.selectors;
export default slice.reducer;
