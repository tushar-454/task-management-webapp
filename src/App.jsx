import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import routes from './Routes/routes';
const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </QueryClientProvider>
      <Toaster />
    </>
  );
};

export default App;
