import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {},
  userEntry: false,
  payment: false,
  shippingCost: 0,
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart[action.payload]
        ? state.cart[action.payload]++
        : (state.cart[action.payload] = 1);
      return;
    },
    deleteFromCart: (state, action) => {
      if (state.cart[action.payload] === 1) {
        delete state.cart[action.payload];
        return;
      }
      state.cart[action.payload] -= 1;
    },
    showUserEntryPage: (state, action) => {
      state.userEntry = action.payload;
      return;
    },
    showPayment: (state, action) => {
      state.payment = action.payload;
      return;
    },
    goBackDev: (state) => {
      state.payment = false;
      return;
    },
    addShipping: (state, action) => {
      state.shippingCost = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  showUserEntryPage,
  showPayment,
  goBackDev,
  addShipping,
} = cartReducer.actions;

export default cartReducer.reducer;
