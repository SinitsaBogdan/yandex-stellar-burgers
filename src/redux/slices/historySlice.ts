import { getFeedsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type THistoryState = {
  isLoading: boolean;
  feeds: {
    orders: TOrder[];
    total: number;
    totalToday: number;
  };
};

const initialState: THistoryState = {
  isLoading: false,
  feeds: {
    orders: [],
    total: 0,
    totalToday: 0
  }
};

const slice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  selectors: {
    getFeeds: (state) => state.feeds,
    getOrders: (state) => state.feeds.orders,
    getTotal: (state) => state.feeds.total,
    getTotalToday: (state) => state.feeds.totalToday
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeeds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFeeds.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchFeeds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.feeds = action.payload;
      });
  }
});

export const fetchFeeds = createAsyncThunk(
  'feed/getAll',
  async () => await getFeedsApi()
);

export const {} = slice.actions;
export const { getOrders, getTotal, getTotalToday, getFeeds } = slice.selectors;
export default slice.reducer;
