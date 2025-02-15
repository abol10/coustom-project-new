import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Profile {
  user_id: string;
  profile_image_url: string;
}

const SupabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ieXhucXRxaWRvaHJ5eXpxbmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTY5NDMsImV4cCI6MjA1MTEzMjk0M30.GCXlBXMxM69SNgb128y7TKPo3UvtjOGj9QsfvTiVDZg";

export const supabaseProfileApi = createApi({
  reducerPath: 'supabaseProfileApi',
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
    getProfile: builder.query<Profile, string>({
      query: (userId) => `profiles?user_id=eq.${userId}`, // فیلتر بر اساس user_id
    }),
  }),
});

export const { useGetProfileQuery } = supabaseProfileApi;
