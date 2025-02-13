// services/supabaseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// تایپ داده‌های محصول
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  caption: string;
  material:string;
  search_terms:string;
  size:string;
  color:string;
  height:string;
  available:boolean;
  isGraphic:boolean;
}

// کلید Supabase
const SupabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ieXhucXRxaWRvaHJ5eXpxbmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTY5NDMsImV4cCI6MjA1MTEzMjk0M30.GCXlBXMxM69SNgb128y7TKPo3UvtjOGj9QsfvTiVDZg";

export const supabaseApi = createApi({
  reducerPath: 'supabaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://obyxnqtqidohryyzqncd.supabase.co/rest/v1/', // توجه: آدرس را بررسی کنید
    prepareHeaders: (headers) => {
      headers.set('Authorization',` Bearer ${SupabaseKey}`);
      headers.set('apikey', SupabaseKey);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'product', // نام جدول در Supabase
    }),
  }),
});

export const { useGetProductsQuery } = supabaseApi;