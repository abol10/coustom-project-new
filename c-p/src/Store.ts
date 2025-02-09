// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { supabaseApi } from './service/Supabase';
import { supabaseLikesApi } from './components/ProductLike/ServerLikeProduct'; // import API جدید لایک‌ها

const store = configureStore({
  reducer: {
    // اتصال API‌ها به store
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    [supabaseLikesApi.reducerPath]: supabaseLikesApi.reducer, // اضافه کردن reducer لایک‌ها
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(supabaseApi.middleware) // middleware برای supabaseApi
      .concat(supabaseLikesApi.middleware), // middleware برای supabaseLikesApi
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
