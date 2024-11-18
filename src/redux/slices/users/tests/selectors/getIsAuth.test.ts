import { test } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from "../../userSlice";
import { selectIsAuth } from "../../userSlice";

test('[ getIsAuth ] - Проверка селлектора.', () => {
    const store = configureStore({
        reducer: {
            user: userSlice
        },
    });

    const response = selectIsAuth(store.getState());

    expect(response).toEqual(false)
})