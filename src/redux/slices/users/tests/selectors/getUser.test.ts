import { test, describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from "../../userSlice";
import { selectUser } from "../../userSlice";

test('[ getUser ] - Проверка селлектора.', () => {
    const store = configureStore({
        reducer: {
            user: userSlice
        },
    });

    const response = selectUser(store.getState());

    expect(response).toEqual(
        {
            email: '',
            name: ''
        }
    )
})