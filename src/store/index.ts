import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./slices";

const rootReducer = combineReducers({
  dataReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export const store = setupStore();

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType['dispatch'];