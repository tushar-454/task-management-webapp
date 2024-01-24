import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard';
import Root from '../Layout/Root';
import AddTask from '../Page/AddTask';
import AllTask from '../Page/AllTask';
import CompletedTask from '../Page/CompletedTask';
import Home from '../Page/Home';
import Login from '../Page/Login';
import ManageTask from '../Page/ManageTask';
import Profile from '../Page/Profile';
import Signup from '../Page/SIgnup';
import Trash from '../Page/Trash';
import Error from './Error';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/user.json'),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <AllTask />,
          },
          {
            path: 'all-task',
            element: <AllTask />,
          },
          {
            path: 'add-task',
            element: <AddTask />,
          },
          {
            path: 'manage-task',
            element: <ManageTask />,
          },
          {
            path: 'completed-task',
            element: <CompletedTask />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
]);

export default routes;
