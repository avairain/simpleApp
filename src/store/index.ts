import { configureStore } from "@reduxjs/toolkit";
import { user } from "./user";

const store = configureStore({
  reducer: {
    [user.name]: user.reducer
  }
});

export type StoreState = ReturnType<typeof store.getState>;
export { store };
