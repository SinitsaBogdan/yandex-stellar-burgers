import { getOrderByNumberApi, orderBurgerApi } from '../../../utils/burger-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrderId = createAsyncThunk(
  'order/getId',
  async (number: string) => await getOrderByNumberApi(Number(number))
);

export const fetchCreateOrder = createAsyncThunk(
  'order/create',
  async (ingredients: string[]) => await orderBurgerApi(ingredients)
);
