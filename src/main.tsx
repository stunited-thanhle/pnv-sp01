import i18n from '@config/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { SpinLoading } from '@atoms';
import '@config/axios';
import 'antd/dist/antd.css';
import './index.css';
import './main.scss';
import store from './redux/store';
import router from './router';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Suspense fallback={<SpinLoading />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </I18nextProvider>
  </QueryClientProvider>,
);
