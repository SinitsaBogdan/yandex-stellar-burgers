import { TFeedsResponse } from '../../../utils/burger-api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';
import { fetchFeeds, fetchUserOrdersHistory } from './thunks';

type THistoryState = {
  isLoading: boolean;
  feeds: {
    orders: TOrder[];
    total: number;
    totalToday: number;
  };
  history: TOrder[];
};

export const initialState: THistoryState = {
  isLoading: false,
  feeds: {
    orders: [],
    total: 0,
    totalToday: 0
  },
  history: []
};

const slice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addGlobalFeed: {
      reducer: (state, { payload }: PayloadAction<TFeedsResponse>) => {
        state.feeds = payload;
      },
      prepare: (response: TFeedsResponse) => ({
        payload: {
          ...response,
          orders: response.orders.map((item) => {
            item.uniqueId = uuidv4();
            return item;
          })
        }
      })
    },
    addUserFeeds: {
      reducer: (state, { payload }: PayloadAction<TOrder[]>) => {
        state.history = payload;
      },
      prepare: (items: TOrder[]) => ({
        payload: items.map((item) => {
          item.uniqueId = uuidv4();
          return item;
        })
      })
    }
  },
  selectors: {
    getHistory: (state) => state.history,
    getFeeds: (state) => state.feeds,
    getFeedsOrders: (state) => state.feeds.orders,
    getFeedsTotal: (state) => state.feeds.total,
    getFeedsTotalToday: (state) => state.feeds.totalToday
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeeds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFeeds.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchFeeds.fulfilled, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(fetchUserOrdersHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserOrdersHistory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchUserOrdersHistory.fulfilled, (state) => {
        state.isLoading = false;
      });
  }
});

export const { addGlobalFeed, addUserFeeds } = slice.actions;
export const {
  getHistory,
  getFeedsOrders,
  getFeedsTotal,
  getFeedsTotalToday,
  getFeeds
} = slice.selectors;
export default slice.reducer;
