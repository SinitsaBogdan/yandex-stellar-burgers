import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

import userSlice from './slices/users/userSlice';
import orderSlice from './slices/orders/orderSlice';
import historySlice from './slices/history/historySlice';
import ingredientsSlice from './slices/ingredients/ingredientsSlice';
import constructorItemSlice from './slices/constructors/constructorItemSlice';

const rootReducer = combineReducers({
  user: userSlice,
  item: constructorItemSlice,
  order: orderSlice,
  history: historySlice,
  ingredients: ingredientsSlice
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
