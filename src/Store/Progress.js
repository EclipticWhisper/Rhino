import { createSlice, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartRedux";
const progressState = { progress: "" };

const progressSlice = createSlice({
  name: "progress", // fixed typo
  initialState: progressState,
  reducers: {
    showCart(state) {
      state.progress = "cart";
    },
    closeCart(state) {
      state.progress = "";
    },
    showCheckOut(state) {
      state.progress = "checkout";
    },
    closeCheckout(state) {
      state.progress = "";
    },
  },
});
const store = configureStore({
  reducer: {
    progress: progressSlice.reducer, // improved for future scalability,
    cart: cartSlice.reducer,
  },
});

export const progressActions = progressSlice.actions;
export default store;
