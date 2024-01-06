import { createBrowserRouter, Outlet } from 'react-router-dom';

import privateRoutes from '@app/routes/private';
import publicRoutes from '@app/routes/public';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <div>NotFound</div>,
    children: [...publicRoutes, ...privateRoutes],
  },
]);

export default router;
