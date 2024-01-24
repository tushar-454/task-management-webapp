import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/root';
import Home from '../Page/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/user.json'),
      },
    ],
  },
]);

export default routes;
