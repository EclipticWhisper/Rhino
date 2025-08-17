import { createSlice } from "@reduxjs/toolkit";

const cartState = { Items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingCartItemIndex = state.Items.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingCartItemIndex > -1) {
        state.Items[existingCartItemIndex].quantity += 1;
      } else {
        state.Items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingCartItemIndex = state.Items.findIndex(
        (item) => item.id === id
      );

      if (existingCartItemIndex > -1) {
        const existingItem = state.Items[existingCartItemIndex];

        if (existingItem.quantity === 1) {
          state.Items.splice(existingCartItemIndex, 1);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
    clearCart(state) {
      state.Items = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
