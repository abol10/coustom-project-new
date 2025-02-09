// services/supabaseLikesApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Like {
  id: number;
  product_id: number;
  user_id: string;  
  created_at: string; 
  product_name:string;
  product_caption:string;
  product_price:string;
  product_img:string;
}
const SupabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ieXhucXRxaWRvaHJ5eXpxbmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTY5NDMsImV4cCI6MjA1MTEzMjk0M30.GCXlBXMxM69SNgb128y7TKPo3UvtjOGj9QsfvTiVDZg";


export const supabaseLikesApi = createApi({
  reducerPath: 'supabaseLikesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://obyxnqtqidohryyzqncd.supabase.co/rest/v1/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${SupabaseKey}`);
      headers.set('apikey', SupabaseKey);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLikes: builder.query<Like[], void>({
      query: () => 'likes', // نام جدول لایک‌ها در Supabase
    }),
  }),
});

export const { useGetLikesQuery } = supabaseLikesApi;
