import { Navigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div>
        <section className='min-h-screen bg-white dark:bg-gray-900'>
          <main className='w-full max-w-md mx-auto p-6 '>
            <div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-4 sm:p-7'>
                <div className='text-center'>
                  <h1 className='w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto'></h1>
                  <p className='w-full h-8 my-5 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto'></p>
                </div>

                <div className='mt-5'>
                  <div className='w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto'></div>
                  <form>
                    <div className='grid gap-y-4'>
                      <p className='w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded-full'></p>
                      <p className='w-full h-10 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto'></p>
                      <p className='w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded-full'></p>
                      <p className='w-full h-10 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto'></p>
                      <button className='w-full h-12 my-4 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto'></button>
                    </div>
                    <p className='w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto'></p>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    );
  }
  if (user) {
    return <Navigate to={'/'} />;
  }
  return children;
};

export default PublicRoute;
