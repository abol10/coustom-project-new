import Swal from 'sweetalert2';

// تابع نمایش ارور
export const showError = (message: string) => {
  Swal.fire({
    title: 'خطا!',
    text: message,  // استفاده از text به طور مستقیم
    icon: 'error',
    position: 'top',  // تنظیم موقعیت به top
    toast: true,
    showConfirmButton: false,
    timer: 2000,
    customClass: {
      popup: 'error-popup',  // استایل برای پنجره پیغام
      title: 'error-title',  // استایل برای عنوان
    },
    didOpen: () => {
      const popup = Swal.getPopup();
      if (popup) {
        const title = popup.querySelector('.error-title') as HTMLElement;
        const text = popup.querySelector('.swal2-html-container') as HTMLElement;

        // استایل‌دهی به عنوان
        if (title) {
          title.style.fontSize = '14px';
          title.style.fontWeight = 'bold';
        }

        // استایل‌دهی به متن
        if (text) {
          text.style.fontSize = '10px';
          text.style.lineHeight = '1.5';
        }

        // استایل‌های عمومی برای پنجره
        popup.style.textAlign = 'right';  // راست‌چین کردن پنجره
        popup.style.direction = 'rtl';  // راست‌چین کردن متن‌ها
      }
    }
  });
};
