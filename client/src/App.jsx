import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
};

export default App;
