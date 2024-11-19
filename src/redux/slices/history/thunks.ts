import { getFeedsApi, getOrdersApi } from '../../../utils/burger-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFeeds = createAsyncThunk(
  'feed/getAll',
  async () => await getFeedsApi()
);

export const fetchUserOrdersHistory = createAsyncThunk(
  'feed/getUserHistory',
  async () => await getOrdersApi()
);
