import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './Store'; // import کردن store که قبلاً تعریف کردید

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}> {/* اتصال store به اپلیکیشن */}
    <App />
  </Provider>
);