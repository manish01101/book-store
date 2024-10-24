import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    // action
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item Added to Cart",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Item already exists",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item removed successfully!",
        showConfirmButton: false,
        timer: 1000,
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cart cleared successfully!",
        showConfirmButton: false,
        timer: 1000,
      });
    },
  },
});

// export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
