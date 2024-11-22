import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { deleteCookie, setCookie } from '../../../utils/cookie';
import {
  fetchLogin,
  fetchLogout,
  fetchRefreshTocken,
  fetchRegister,
  fetchUpdateUser,
  fetchUserCheck
} from './thunks';

type TUserState = {
  isAuth: boolean;
  user: TUser;
  error: string | undefined;
};

export const initialState: TUserState = {
  isAuth: false,
  user: {
    email: '',
    name: ''
  },
  error: ''
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  selectors: {
    selectError: (state) => state.error,
    selectIsAuth: (state) => state.isAuth,
    selectUser: (state) => state.user
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isAuth = false;
        state.error = '';
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.isAuth = false;
        state.error = action.error.message;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isAuth = action.payload.success;
        setCookie('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        state.user = action.payload.user;
        state.error = '';
      });
    builder
      .addCase(fetchUpdateUser.pending, (state) => {
        state.error = '';
      })
      .addCase(fetchUpdateUser.rejected, (state, action) => {
        state.error = String(action.error.message);
      })
      .addCase(fetchUpdateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error = '';
      });
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.error = '';
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.error = String(action.error.message);
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.isAuth = action.payload.success;
        setCookie('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        state.user = action.payload.user;
        state.error = '';
      });
    builder
      .addCase(fetchLogout.pending, (state) => {
        state.error = '';
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.error = String(action.error.message);
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.isAuth = false;
        state.user = {
          email: '',
          name: ''
        };
        state.error = '';
        localStorage.removeItem('refreshToken');
        deleteCookie('accessToken');
      });
    builder
      .addCase(fetchUserCheck.pending, (state) => {
        state.error = '';
      })
      .addCase(fetchUserCheck.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchUserCheck.fulfilled, (state, action) => {
        state.isAuth = true;
        state.error = '';
        state.user = action.payload.user;
      });
    builder
      .addCase(fetchRefreshTocken.pending, (state) => {
        state.error = '';
      })
      .addCase(fetchRefreshTocken.rejected, (state, action) => {
        state.error = action.error.message;
        deleteCookie('accessToken');
        localStorage.removeItem('refreshToken');
      })
      .addCase(fetchRefreshTocken.fulfilled, (state, action) => {
        setCookie('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      });
  }
});

export const {} = slice.actions;
export const { selectIsAuth, selectUser, selectError } = slice.selectors;
export default slice.reducer;
