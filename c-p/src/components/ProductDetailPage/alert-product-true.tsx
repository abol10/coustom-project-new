import Swal from 'sweetalert2';

export const showSuccess = (message: string) => {
  Swal.fire({
    title: 'موفقیت!',
    text: message,
    icon: 'success',
    position: 'top',
    toast: true,
    showConfirmButton: false,
    timer: 2000,
    customClass: {
      popup: 'success-popup',
      title: 'success-title',
    },
    didOpen: () => {
      const popup = Swal.getPopup();
      if (popup) {
        const title = popup.querySelector('.success-title') as HTMLElement;
        const text = popup.querySelector('.swal2-html-container') as HTMLElement;

        if (title) {
          title.style.fontSize = '14px';
          title.style.fontWeight = 'bold';
        }

        if (text) {
          text.style.fontSize = '12px';
          text.style.lineHeight = '1.5';
        }

        popup.style.textAlign = 'right';
        popup.style.direction = 'rtl';
      }
    }
  });
};
