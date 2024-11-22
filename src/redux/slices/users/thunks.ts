import {
  getUserApi,
  loginUserApi,
  logoutApi,
  refreshToken,
  registerUserApi,
  TLoginData,
  TRegisterData,
  updateUserApi
} from '../../../utils/burger-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLogin = createAsyncThunk(
  'user/login',
  async (data: TLoginData) => await loginUserApi(data)
);

export const fetchUpdateUser = createAsyncThunk(
  'user/update',
  async (data: TRegisterData) => await updateUserApi(data)
);

export const fetchLogout = createAsyncThunk(
  'user/logaut',
  async () => await logoutApi()
);

export const fetchRegister = createAsyncThunk(
  'user/register',
  async (data: TRegisterData) => await registerUserApi(data)
);

export const fetchUserCheck = createAsyncThunk(
  'user/check',
  async () => await getUserApi()
);

export const fetchRefreshTocken = createAsyncThunk(
  'user/refresh',
  async () => await refreshToken()
);
