import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import renameReducer from "../features/rename/renameSlice";


export const store = configureStore({
    reducer: {
        counter : counterReducer,
        rename : renameReducer
    },
})
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch