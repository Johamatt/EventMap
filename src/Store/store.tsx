import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
});

// thunk doesnt work, make custom?

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
