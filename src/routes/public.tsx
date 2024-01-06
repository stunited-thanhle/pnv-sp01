import PublicLayout from '@app/components/templates/PublicLayout';
import Login from '@app/pages/Auth/Login';

const routes = [
  {
    element: <PublicLayout />,
    children: [{ path: 'login', element: <Login /> }],
  },
];

export default routes;
