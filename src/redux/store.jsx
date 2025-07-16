import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Ajusta la ruta según sea necesario

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});