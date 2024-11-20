import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';
import { fetchIngredients } from './thunks';

type TIngredientsState = {
  isLoading: boolean;
  ingredients: TIngredient[];
  error: string;
};

export const initialState: TIngredientsState = {
  isLoading: false,
  ingredients: [],
  error: ''
};

const slice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredients: {
      reducer: (state, { payload }: PayloadAction<TIngredient[]>) => {
        state.ingredients = payload;
      },
      prepare: (items: TIngredient[]) => ({
        payload: items.map((item) => {
          item.uniqueId = uuidv4();
          return item;
        })
      })
    }
  },
  selectors: {
    getIngredients: (state) => state.ingredients,
    getLoading: (state) => state.isLoading
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  }
});

export const { addIngredients } = slice.actions;
export const { getIngredients, getLoading } = slice.selectors;
export default slice.reducer;
