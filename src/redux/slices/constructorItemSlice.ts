import { createSlice } from '@reduxjs/toolkit';
import { TIngredient, TOrder } from '@utils-types';

type TConstructorItemState = {
  bun: TIngredient | null;
  ingredients: TIngredient[];
  orderRequest: boolean;
  orderModalData: TOrder | null;
};

const initialState: TConstructorItemState = {
  bun: null,
  ingredients: [],
  orderRequest: false,
  orderModalData: null
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
    },
    setIngredient(state, action) {
      state.ingredients = [...state.ingredients, action.payload];
    }
  },
  selectors: {
    getBun: (state) => state.bun,
    getIngredients: (state) => state.ingredients,
    getOrderRequest: (state) => state.orderRequest,
    getOrderModalData: (state) => state.orderModalData
  }
});

export const { setBun, setIngredients, setIngredient } = slice.actions;
export const { getBun, getIngredients, getOrderRequest, getOrderModalData } =
  slice.selectors;
export default slice.reducer;
