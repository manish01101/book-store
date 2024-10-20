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
          position: "top-end",
          icon: "success",
          title: "Prodect Added to Cart",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Item already exists",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
});

// export the actions
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
