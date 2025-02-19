import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

interface CartState {
  items: Product[];
}

// 📌 تابع برای دریافت سبد خرید از localStorage
const loadCartFromLocalStorage = (): Product[] => {
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

// 📌 تابع برای ذخیره سبد خرید در localStorage
const saveCartToLocalStorage = (items: Product[]) => {
  try {
    localStorage.setItem('cart', JSON.stringify(items));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

// 📌 مقدار اولیه سبد خرید را از localStorage بگیریم
const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.count += action.payload.count;
      } else {
        state.items.push(action.payload);
      }
      saveCartToLocalStorage(state.items); // ذخیره در localStorage
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      const product = state.items.find(item => item.id === action.payload);
      if(product)
        product.count==0;
      saveCartToLocalStorage(state.items);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        product.count += 1;
      }
      saveCartToLocalStorage(state.items);
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find(item => item.id === action.payload);
      if (product && product.count > 1) {
        product.count -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
