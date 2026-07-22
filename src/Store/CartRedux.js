import { createSlice } from "@reduxjs/toolkit";

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
        state.Items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          image: newItem.image,
        });
      }
      state.totalQuantity += 1;
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
      }
    },
    clearCart(state) {
      state.Items = [];
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
