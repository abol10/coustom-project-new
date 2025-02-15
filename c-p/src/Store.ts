import { configureStore } from '@reduxjs/toolkit';
import { supabaseApi } from './service/Supabase';
import { supabaseLikesApi } from './components/ProductLike/ServerLikeProduct'; // import API جدید لایک‌ها
import { supabaseProfileApi } from './components/datebiseserverProfiledate'; // import API پروفایل

const store = configureStore({
  reducer: {
    // اتصال API‌ها به store
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    [supabaseLikesApi.reducerPath]: supabaseLikesApi.reducer, // اضافه کردن reducer لایک‌ها
    [supabaseProfileApi.reducerPath]: supabaseProfileApi.reducer, // اصلاح اشتباه و اضافه کردن reducer پروفایل
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(supabaseApi.middleware) // middleware برای supabaseApi
      .concat(supabaseLikesApi.middleware) // middleware برای supabaseLikesApi
      .concat(supabaseProfileApi.middleware), // اضافه کردن middleware برای supabaseProfileApi
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
