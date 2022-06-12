import { createSlice } from "@reduxjs/toolkit";

import { ProductsData } from "../FakeData";

export const productSlice = createSlice({
  name: "users",
  initialState: { value: ProductsData },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export const { addProduct, deleteUser, updateUsername } = productSlice.actions;
export default productSlice.reducer;
