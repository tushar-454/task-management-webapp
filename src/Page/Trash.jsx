import { useQuery } from '@tanstack/react-query';
import TrashTaskCard from '../Components/TrashTaskCard';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';
import Toast from '../Utils/Toast/Toast';

const Trash = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    data: userTrashTasks,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['trashTask'],
    queryFn: async () => {
      const res = await axios.get(
        `/task/getSpecific/${user?.email}?property=trash&value=true`
      );
      return res.data;
    },
  });
  return (
    <div className='w-full mx-auto'>
      <DashBoardNavItemTitle displayName='Trash' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {isLoading ? (
          <span className='relative flex justify-center h-10 w-10'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-froly-400 dark:bg-sun-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-10 w-10 bg-froly-500 dark:bg-sun-500'></span>
          </span>
        ) : isError ? (
          <>{Toast('There was an error', 'error')}</>
        ) : !isLoading && userTrashTasks.length === 0 ? (
          <>
            <h1>No trash task in your list.</h1>
          </>
        ) : (
          userTrashTasks?.map((userTrashTask, index) => (
            <TrashTaskCard
              key={index}
              userTrashTask={userTrashTask}
              refetch={refetch}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Trash;
