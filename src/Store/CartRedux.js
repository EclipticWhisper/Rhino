import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if available
const storedCart = JSON.parse(localStorage.getItem("cart")) || { Items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: storedCart,
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

      state.totalQuantity += 1;
      localStorage.setItem("cart", JSON.stringify(state)); // save after update
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

        state.totalQuantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state)); // save after update
      }
    },

    clearCart(state) {
      state.Items = [];
      state.totalQuantity = 0;
      localStorage.setItem("cart", JSON.stringify(state)); // reset in storage
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
