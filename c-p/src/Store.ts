import { configureStore } from '@reduxjs/toolkit';
import { supabaseApi } from './service/Supabase';
import { supabaseLikesApi } from './components/ProductLike/ServerLikeProduct'; 
import { supabaseProfileApi } from './components/datebiseserverProfiledate'; 
import cartReducer from './components/kamz';  // ریداکسر سبد خرید


const store = configureStore({
  reducer: {
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    [supabaseLikesApi.reducerPath]: supabaseLikesApi.reducer,
    [supabaseProfileApi.reducerPath]: supabaseProfileApi.reducer,
    cart: cartReducer,  // ریداکسر سبد خرید
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(supabaseApi.middleware)
      .concat(supabaseLikesApi.middleware)
      .concat(supabaseProfileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
