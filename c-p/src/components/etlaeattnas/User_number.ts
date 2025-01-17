// authOperations.ts
import { createClient, AuthResponse, User, Session } from '@supabase/supabase-js';

// ایجاد ارتباط با پروژه Supabase
const supabase = createClient(
  'https://obyxnqtqidohryyzqncd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ieXhucXRxaWRvaHJ5eXpxbmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTY5NDMsImV4cCI6MjA1MTEzMjk0M30.GCXlBXMxM69SNgb128y7TKPo3UvtjOGj9QsfvTiVDZg'
);

// اصلاح نوع بازگشتی تابع handleSignUp
export const handleSignUpNumber = async (
    number: string, 
    numberMe: string, 
    codepost: string, 
    addrescode: string
): Promise<{ error?: string, user?: User | null, session?: Session | null }> => {
  // ارسال درخواست ثبت‌نام به Supabase
  const { data, error }: AuthResponse = await supabase.auth.signUp({
    email: `${number}@example.com`, // تبدیل شماره تلفن به ایمیل (در صورت نیاز)
    password: "temporaryPassword123", // می‌توانید یک پسورد موقت ایجاد کنید
    options: {
      data: {
        numberMe: numberMe,  // ذخیره شماره تلفن اضافه
        code_post: codepost,  // ذخیره کد پستی
        addres_Code: addrescode, // ذخیره آدرس
      }
    }
  });

  if (error) {
    return { error: error.message }; 
  }

  // بازگرداندن داده‌های کاربر و سشن در صورت موفقیت
  return { user: data?.user ?? null, session: data?.session ?? null };
};
