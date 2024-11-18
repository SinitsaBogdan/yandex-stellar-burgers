import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import orderSlice from "../../orderSlice";
import { getOrderRequest } from "../../orderSlice";

test('[ getOrderRequest ] - Проверка селлектора.', () => {
    const store = configureStore({
        reducer: {
            order: orderSlice
        },
    });

    const response = getOrderRequest(store.getState());

    expect(response).toEqual(false)
})