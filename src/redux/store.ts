import { configureStore } from "@reduxjs/toolkit"
import userSessionReducer from "./slices/userSessionSlice"

export const store = configureStore({
    reducer: {
        userSession: userSessionReducer,
    },
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
