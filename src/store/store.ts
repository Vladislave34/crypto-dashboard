// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postApi } from '../services/CoinService.ts';
import coinReducer from "./reducers/coinSlice.ts"
// Комбінуємо ред'юсери
const rootReducer = combineReducers({
    coinReducer,
    [postApi.reducerPath]: postApi.reducer,
    // інші ред'юсери якщо є
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postApi.middleware),
    });
};

// Типізація
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];