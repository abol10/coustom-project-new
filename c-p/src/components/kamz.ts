import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from './Login/serverLogin'; // پیکربندی Supabase

interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
  user_id: string;
}

interface CartState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// ✅ خواندن سبد خرید از LocalStorage برای نگه داشتن داده‌های هر کاربر بعد از رفرش صفحه
const loadCartFromLocalStorage = (): Product[] => {
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

// ✅ ذخیره سبد خرید در LocalStorage
const saveCartToLocalStorage = (items: Product[]) => {
  try {
    localStorage.setItem('cart', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
  status: 'idle',
  error: null,
};

// ✅ این متد مقدار سبد خرید کاربر را از Supabase آپدیت می‌کند
export const updateCartItemCountAsync = createAsyncThunk(
  'cart/updateCartItemCount',
  async (data: { productId: number, count: number, userId: string }) => {
    const { productId, count, userId } = data;
    try {
      const { data: result, error } = await supabase
        .from('cart')
        .upsert([{ user_id: userId, product_id: productId, count }]);
      if (error) throw error;
      return result;
    } catch (error) {
      throw error;
    }
  }
);

// ✅ Slice سبد خرید
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
      
        // ذخیره تغییرات در localStorage
        saveCartToLocalStorage(state.items);
      },
      
      removeFromCart: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      
        // ذخیره تغییرات در localStorage
        saveCartToLocalStorage(state.items);
      },
      
      incrementQuantity: (state, action: PayloadAction<number>) => {
        const product = state.items.find(item => item.id === action.payload);
        if (product) {
          product.count += 1;
        }
      
        // ذخیره تغییرات در localStorage
        console.log('productInCartRedux', product?.count);
        saveCartToLocalStorage(state.items);
      },
      
      decrementQuantity: (state, action: PayloadAction<number>) => {
        const product = state.items.find(item => item.id === action.payload);
        if (product && product.count > 1) {
          product.count -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
        console.log('productInCartRedux', product?.count);
        // ذخیره تغییرات در localStorage
        saveCartToLocalStorage(state.items);
      },
      

    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },

    // ✅ `setCart` برای ست کردن سبد خرید بعد از لاگین از Supabase
    setCart: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      saveCartToLocalStorage(state.items);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateCartItemCountAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartItemCountAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(updateCartItemCountAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update cart item count';
      });
  },
});

// ✅ خروجی اکشن‌ها برای استفاده در کامپوننت‌ها
export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
  clearCart,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
