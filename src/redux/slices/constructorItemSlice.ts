import { createSlice } from '@reduxjs/toolkit';
import { TIngredient, TOrder } from '@utils-types';

type TConstructorItemState = {
  bun: {
    _id: string;
    price: number;
  };
  ingredients: TIngredient[];
  orderRequest: boolean;
  orderModalData: TOrder | null;
};

const initialState: TConstructorItemState = {
  bun: {
    _id: '',
    price: 0
  },
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
    }
  },
  selectors: {
    getBun: (state) => state.bun,
    getIngredients: (state) => state.ingredients,
    getOrderRequest: (state) => state.orderRequest,
    getOrderModalData: (state) => state.orderModalData
  }
});

export const { setBun, setIngredients } = slice.actions;
export const { getBun, getIngredients, getOrderRequest, getOrderModalData } =
  slice.selectors;
export default slice.reducer;
