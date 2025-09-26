import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Añadir producto al carrito (si ya existe, no lo duplica)
    addToCart(state, action) {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    // Eliminar producto del carrito
   deleteFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

    // Incrementar cantidad
    incrementQuantity(state, action) {
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },

    // Decrementar cantidad (mínimo 1)
    decrementQuantity(state, action) {
      return state.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },

    clearCart: () => {
      return []; // devuelve un array vacío
    },
  },
});

// Exportar acciones
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity,clearCart } = cartSlice.actions;

// Exportar reducer
export default cartSlice.reducer;