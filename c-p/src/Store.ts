// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { supabaseApi } from './service/Supabase';

const store = configureStore({
  reducer: {
    // اتصال API به store
    [supabaseApi.reducerPath]: supabaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware), // اضافه کردن middleware برای cache و انجام query‌ها
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

