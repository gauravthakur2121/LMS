import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import { authApi } from "@/features/api/authApi";

export const appstore = configureStore({
    reducer: {
        user: rootReducer,
        [authApi.reducerPath]: authApi.reducer, // Make sure to include the API reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});