import { createSlice } from "@reduxjs/toolkit";
import { StoreState } from ".";

const USER_NAME_LOCALSTORAGE_NAME = 'USER_NAME_LOCALSTORAGE_NAME';

const user = createSlice({
  name: 'user',
  initialState: {
    name: window.localStorage.getItem(USER_NAME_LOCALSTORAGE_NAME),
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
      window.localStorage.setItem(USER_NAME_LOCALSTORAGE_NAME, action.payload);
    }
  }
});

export const { setUser } = user.actions;

export const userName = (state: StoreState) => state.user.name;

export { user };