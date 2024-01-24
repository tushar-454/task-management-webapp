import { useQuery } from '@tanstack/react-query';
import ManageTaskCard from '../Components/ManageTaskCard';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';
import Toast from '../Utils/Toast/Toast';
const ManageTask = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    data: userTasks,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['userTask'],
    queryFn: async () => {
      const res = await axios.get(`/task/get/${user?.email}`);
      return res.data;
    },
  });
  const withoutCompletedTask =
    !isLoading && userTasks.filter((task) => task.status !== 'completed');
  return (
    <div className='mx-auto w-full'>
      <DashBoardNavItemTitle displayName='Manage Task' />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {isLoading ? (
          <span className='relative flex h-10 w-10 justify-center'>
            <span className='bg-froly-400 dark:bg-sun-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
            <span className='bg-froly-500 dark:bg-sun-500 relative inline-flex h-10 w-10 rounded-full'></span>
          </span>
        ) : isError ? (
          <>{Toast('There was an error', 'error')}</>
        ) : !isLoading && withoutCompletedTask.length === 0 ? (
          <>
            <h1>No active task in your list.</h1>
          </>
        ) : (
          withoutCompletedTask?.map((userTask, index) => (
            <ManageTaskCard key={index} userTask={userTask} refetch={refetch} />
          ))
        )}
      </div>
    </div>
  );
};

export default ManageTask;
