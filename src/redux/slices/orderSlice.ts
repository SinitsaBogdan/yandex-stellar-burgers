import { getOrderByNumberApi, orderBurgerApi } from '@api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';

type TOrdersState = {
  isLoading: boolean;
  orderData: TOrder | null;
  orderRequest: boolean;
};

const initialState: TOrdersState = {
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

export const fetchOrderId = createAsyncThunk(
  'order/getId',
  async (number: string) => await getOrderByNumberApi(Number(number))
);

export const fetchCreateOrder = createAsyncThunk(
  'order/create',
  async (ingredients: string[]) => await orderBurgerApi(ingredients)
);

export const { setOrderData, clearOrderData } = slice.actions;
export const { getIsLoading, getOrderData, getOrderRequest } = slice.selectors;
export default slice.reducer;
