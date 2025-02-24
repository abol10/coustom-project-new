import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from './Login/serverLogin'; // فرض کنید supabaseClient پیکربندی شده است

// این Thunk مسئول ارسال به Supabase است
export const updateCartItemCountAsync = createAsyncThunk(
    'cart/updateCartItemCount',
    async (data: { productId: number; count: number; userId: string }, thunkAPI) => {
        const { productId, count, userId } = data;
        try {
            const { data: result, error } = await supabase
                .from('cart') // نام جدول رو بررسی کن که درست باشه
                .upsert([
                    { 
                        user_id: userId, 
                        product_id: productId, 
                        count 
                    }
                ], { onConflict: 'user_id,product_id' }); // برای جلوگیری از تکراری شدن
            if (error) throw error;

            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

