import { configureStore } from "@reduxjs/toolkit"; //Import package to manage store in the toolkit
import counterReducer from '../features/counter/counter-slice' //importing the reducers which is the counterSlice.reducers in the counter-slice.ts
import {apiSlice} from '../features/dogs/dogs-api-slice'
//configuring all the store whith argument of reducer and importing all the reducers

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;