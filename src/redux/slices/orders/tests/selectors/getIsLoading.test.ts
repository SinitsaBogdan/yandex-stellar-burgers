import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import orderSlice from "../../orderSlice";
import { getIsLoading } from "../../orderSlice";

test('[ getIsLoading ] - Проверка селлектора.', () => {
    const store = configureStore({
        reducer: {
            order: orderSlice
        },
    });

    const response = getIsLoading(store.getState());

    expect(response).toEqual(false)
})