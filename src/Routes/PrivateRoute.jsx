import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  if (loading && pathname === '/profile') {
    return (
      <>
        <div className='flex min-h-screen flex-col items-center gap-1 bg-white py-10 dark:bg-gray-700'>
          <div>
            <p className='mb-5 h-32 w-32 rounded-full border-2 border-transparent object-cover ring-4 ring-gray-300 dark:bg-gray-600'></p>
          </div>
          <p className='h-10 w-[200px] rounded-full bg-gray-300 dark:bg-gray-600'></p>
          <p className='h-5 w-[260px] rounded-full bg-gray-300 dark:bg-gray-600'></p>
          <p className='h-5 w-[290px] rounded-full bg-gray-300 dark:bg-gray-600'></p>
          <div className='mt-5 flex flex-col items-center justify-center gap-5 sm:flex-row'>
            <div>
              <button className='h-[46px] w-[169px] rounded-lg border-transparent bg-gray-300 px-4 py-3 dark:bg-gray-600'></button>
            </div>
            <div>
              <button className='h-[46px] w-[169px] rounded-lg border-transparent bg-gray-300 px-4 py-3 dark:bg-gray-600'></button>
            </div>
            <div>
              <button className='h-[46px] w-[169px] rounded-lg border-transparent bg-gray-300 px-4 py-3 dark:bg-gray-600'></button>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (loading) {
    return (
      <>
        <div className='flex min-h-screen bg-white dark:bg-gray-800'>
          <div className='hidden w-[240px] border-r p-1 lg:block'>
            <p className='mx-auto my-2 h-12 w-full rounded-lg bg-gray-300 dark:bg-gray-700'></p>
            <p className='mx-auto my-2 h-12 w-full rounded-lg bg-gray-300 dark:bg-gray-700'></p>
            <p className='mx-auto my-2 h-12 w-full rounded-lg bg-gray-300 dark:bg-gray-700'></p>
            <p className='mx-auto my-2 h-12 w-full rounded-lg bg-gray-300 dark:bg-gray-700'></p>
            <p className='mx-auto my-2 h-12 w-full rounded-lg bg-gray-300 dark:bg-gray-700'></p>
            <p className='mx-auto my-2 h-12 w-full rounded-lg bg-gray-300 dark:bg-gray-700'></p>
            <p className='mx-auto my-2 h-12 w-full rounded-lg bg-gray-300 dark:bg-gray-700'></p>
          </div>
          <div className='flex-grow p-4'>
            <p className='mx-auto my-5 h-12 w-[340px] rounded-lg bg-gray-300 dark:bg-gray-700'></p>
            <div className='flex flex-col items-center justify-between gap-10 lg:flex-row'>
              <div className='h-40 w-full rounded-lg bg-gray-300 dark:bg-gray-700 lg:w-1/3'></div>
              <div className='h-40 w-full rounded-lg bg-gray-300 dark:bg-gray-700 lg:w-1/3'></div>
              <div className='h-40 w-full rounded-lg bg-gray-300 dark:bg-gray-700 lg:w-1/3'></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (!user) {
    return <Navigate to={'/login'} />;
  }
  return children;
};

export default PrivateRoute;
