import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from "../../userSlice";
import { selectError } from "../../userSlice";

test('[ getError ] - Проверка селлектора.', () => {
    const store = configureStore({
        reducer: {
            user: userSlice
        },
    });

    const response = selectError(store.getState());

    expect(response).toEqual('')
})