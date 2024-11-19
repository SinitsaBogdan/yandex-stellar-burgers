import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';
import { fetchCreateOrder, fetchOrderId } from './thunks';

type TOrdersState = {
  isLoading: boolean;
  orderData: TOrder | null;
  orderRequest: boolean;
};

export const initialState: TOrdersState = {
  isLoading: false,
  orderData: null,
  orderRequest: false
};

const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderData: {
      reducer: (state, { payload }: PayloadAction<TOrder>) => {
        state.orderData = payload;
      },
      prepare: (item: TOrder) => ({
        payload: { ...item, uniqueId: uuidv4() }
      })
    },
    clearOrderData: (state) => {
      state.orderData = null;
    }
  },
  selectors: {
    getIsLoading: (state) => state.isLoading,
    getOrderData: (state) => state.orderData,
    getOrderRequest: (state) => state.orderRequest
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
    builder
      .addCase(fetchCreateOrder.pending, (state) => {
        state.orderRequest = true;
      })
      .addCase(fetchCreateOrder.rejected, (state) => {
        state.orderRequest = false;
      })
      .addCase(fetchCreateOrder.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderData = action.payload.order;
      });
  }
});

export const { setOrderData, clearOrderData } = slice.actions;
export const { getIsLoading, getOrderData, getOrderRequest } = slice.selectors;
export default slice.reducer;
