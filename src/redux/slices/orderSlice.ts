import { getOrderByNumberApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type TOrdersState = {
  isLoading: boolean;
  orderData: TOrder | null;
};

const initialState: TOrdersState = {
  isLoading: false,
  orderData: null
};

const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  selectors: {
    getIsLoading: (state) => state.isLoading,
    getOrderData: (state) => state.orderData
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrderId.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchOrderId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderData = action.payload.orders[0];
      });
  }
});

export const fetchOrderId = createAsyncThunk(
  'feed/getOrderId',
  async (number: string) => await getOrderByNumberApi(Number(number))
);

export const {} = slice.actions;
export const { getIsLoading, getOrderData } = slice.selectors;
export default slice.reducer;
