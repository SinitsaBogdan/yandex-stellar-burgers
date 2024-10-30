import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';

type TIngredientsState = {
  isLoading: boolean;
  ingredients: TIngredient[];
};

const initialState: TIngredientsState = {
  isLoading: false,
  ingredients: []
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

export const fetchIngredients = createAsyncThunk(
  'ingredients/getAll',
  async () => await getIngredientsApi()
);

export const { addIngredients } = slice.actions;
export const { getIngredients, getLoading } = slice.selectors;
export default slice.reducer;
