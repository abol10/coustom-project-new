import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://obyxnqtqidohryyzqncd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ieXhucXRxaWRvaHJ5eXpxbmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTY5NDMsImV4cCI6MjA1MTEzMjk0M30.GCXlBXMxM69SNgb128y7TKPo3UvtjOGj9QsfvTiVDZg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// تعریف تایپ برای متد logout
interface LogoutResponse {
  message: string;
}

const logout = async (refreshToken: string): Promise<LogoutResponse> => {
  if (!refreshToken) {
    throw new Error('Refresh token is required');
  }

  try {
    // استفاده از متد signOut برای خروج از اکانت
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error('Failed to sign out');
    }

    return { message: 'Successfully logged out' };
  } catch (error: any) {
    throw new Error(`Error during logout: ${error.message}`);
  }
};

export { logout };
