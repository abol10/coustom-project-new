// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://obyxnqtqidohryyzqncd.supabase.co'; // آدرس پروژه Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ieXhucXRxaWRvaHJ5eXpxbmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTY5NDMsImV4cCI6MjA1MTEzMjk0M30.GCXlBXMxM69SNgb128y7TKPo3UvtjOGj9QsfvTiVDZg'; // کلید عمومی پروژه Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
