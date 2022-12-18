import { configureStore } from '@reduxjs/toolkit';
import storage from './storage.js';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer.js';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const selectCart = (state) => state.cart;
export const selectPayment = (state) => state.payment;
export const selectShipping = (state) => state.shippingCost;
export const selectUserEntry = (state) => state.userEntry;
export const selectTotalPrice = (state) => state.price;

export const persistor = persistStore(store);
