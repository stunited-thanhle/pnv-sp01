/* eslint-disable react-refresh/only-export-components */
import EmployeeCreate from '@app/pages/Employee/EmployeeCreate/EmployeeCreate';
import ApplicationList from '@app/pages/Employee/EmployeeList/EmployeeList';
import { lazy } from 'react';

const PrivateLayout = lazy(
  () => import('@app/components/templates/PrivateLayout'),
);

interface Route {
  element: JSX.Element;
  children?: Route[];
  path?: string;
}

const routes = [
  {
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: <div>dashboard</div>,
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            element: <ApplicationList />,
          },
          {
            path: 'create',
            element: <EmployeeCreate />,
          },
          {
            path: ':id',
            element: <div>detail</div>,
          },
        ],
      },
    ],
  } as Route,
];

export default routes;
