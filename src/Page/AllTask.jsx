import { useQuery } from '@tanstack/react-query';
import { IoIosArrowForward } from 'react-icons/io';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';

const AllTask = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const {
    data: todoTask,
    isLoading: todoTaskLoad,
    refetch: todoRefetch,
  } = useQuery({
    queryKey: ['todoTask'],
    queryFn: async () => {
      const res = await axios.get(`/task/get/${user?.email}?status=todo`);
      return res.data;
    },
  });
  const {
    data: ongoingTask,
    isLoading: ongoingTaskLoad,
    refetch: ongoingRefetch,
  } = useQuery({
    queryKey: ['ongoingTask'],
    queryFn: async () => {
      const res = await axios.get(`/task/get/${user?.email}?status=ongoing`);
      return res.data;
    },
  });
  const {
    data: completedTask,
    isLoading: completedTaskLoad,
    refetch: completedRefetch,
  } = useQuery({
    queryKey: ['allTask'],
    queryFn: async () => {
      const res = await axios.get(`/task/get/${user?.email}?status=completed`);
      return res.data;
    },
  });

  const toOngoing = async (id) => {
    await axios.patch(`/task/status/${id}`, {
      status: 'ongoing',
      completedAt: new Date().toLocaleDateString(),
    });
    todoRefetch();
    ongoingRefetch();
    completedRefetch();
  };
  const toCompleted = async (id) => {
    await axios.patch(`/task/status/${id}`, {
      status: 'completed',
      completedAt: new Date().toLocaleDateString(),
    });
    todoRefetch();
    ongoingRefetch();
    completedRefetch();
  };

  return (
    <div className='w-full mx-auto'>
      <DashBoardNavItemTitle displayName='All Task' />
      <div className='flex flex-col lg:flex-row justify-center gap-5'>
        {/* todo full div start  */}
        <div className='w-full lg:1/3 border border-froly-500 dark:border-sun-200 p-6 rounded dark:bg-gray-800'>
          <h1 className='text-3xl font-extrabold underline underline-offset-8 dark:text-slate-50'>
            TODO
          </h1>
          {/* todo contain  */}
          <div className='todoContainer mt-5'>
            {/* single one todo item  */}
            {!todoTaskLoad &&
              todoTask.map((task, index) => (
                <div
                  key={index}
                  className='w-full border border-gray-400 dark:border-gray-200 p-2 rounded my-3 relative'
                  draggable='true'
                >
                  <span
                    onClick={() => toOngoing(task._id)}
                    className='absolute top-0 right-0 text-xl bg-slate-300 rounded-tr rounded-bl cursor-pointer'
                  >
                    <IoIosArrowForward />
                  </span>
                  <h1 className='font-bold dark:text-slate-200'>
                    {task.title.length > 23
                      ? `${task.title.slice(0, 22)}...`
                      : task.title}
                  </h1>
                  <p className='dark:text-slate-300'>
                    {task.description.length > 23
                      ? `${task.description.slice(0, 100)}...`
                      : task.description}
                  </p>
                  <p className='my-2 dark:text-slate-400'>{task.deadline}</p>
                  {task.priroty === 'low' && (
                    <p className='p-1 px-2 rounded bg-green-200 inline-block mr-3'>
                      Low
                    </p>
                  )}
                  {task.priroty === 'medium' && (
                    <p className='p-1 px-2 rounded bg-yellow-200 inline-block mr-3'>
                      Medium
                    </p>
                  )}
                  {task.priroty === 'high' && (
                    <p className='p-1 px-2 rounded bg-red-300 inline-block mr-3'>
                      High
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* todo full div end  */}
        {/* ongoing full div start  */}
        <div className='w-full lg:1/3 border border-froly-500 dark:border-sun-200 p-6 rounded dark:bg-gray-800'>
          <h1 className='text-3xl font-extrabold underline underline-offset-8 dark:text-slate-50'>
            On Going
          </h1>
          {/* todo contain  */}
          <div className='todoContainer mt-5'>
            {/* single one todo item  */}
            {!ongoingTaskLoad &&
              ongoingTask.map((task, index) => (
                <div
                  key={index}
                  className='w-full border border-gray-400 dark:border-gray-200 p-2 rounded my-3 relative'
                  draggable='true'
                >
                  <span
                    onClick={() => toCompleted(task._id)}
                    className='absolute top-0 right-0 text-xl bg-slate-300 rounded-tr rounded-bl cursor-pointer'
                  >
                    <IoIosArrowForward />
                  </span>
                  <h1 className='font-bold dark:text-slate-200'>
                    {task.title.length > 23
                      ? `${task.title.slice(0, 22)}...`
                      : task.title}
                  </h1>
                  <p className='dark:text-slate-300'>
                    {task.description.length > 23
                      ? `${task.description.slice(0, 100)}...`
                      : task.description}
                  </p>
                  <p className='my-2 dark:text-slate-400'>{task.deadline}</p>
                  {task.priroty === 'low' && (
                    <p className='p-1 px-2 rounded bg-green-200 inline-block mr-3'>
                      Low
                    </p>
                  )}
                  {task.priroty === 'medium' && (
                    <p className='p-1 px-2 rounded bg-yellow-200 inline-block mr-3'>
                      Medium
                    </p>
                  )}
                  {task.priroty === 'high' && (
                    <p className='p-1 px-2 rounded bg-red-300 inline-block mr-3'>
                      High
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* ongoing full div end  */}
        {/* completed full div start  */}
        <div className='w-full lg:1/3 border border-froly-500 dark:border-sun-200 p-6 rounded dark:bg-gray-800'>
          <h1 className='text-3xl font-extrabold underline underline-offset-8 dark:text-slate-50'>
            Completed
          </h1>
          {/* todo contain  */}
          <div className='todoContainer mt-5'>
            {/* single one todo item  */}
            {!completedTaskLoad &&
              completedTask.map((task, index) => (
                <div
                  key={index}
                  className='w-full border border-gray-400 dark:border-gray-200 p-2 rounded my-3'
                  draggable='true'
                >
                  <h1 className='font-bold dark:text-slate-200'>
                    {task.title.length > 23
                      ? `${task.title.slice(0, 22)}...`
                      : task.title}
                  </h1>
                  <p className='dark:text-slate-300'>
                    {task.title.length > 23
                      ? `${task.description.slice(0, 100)}...`
                      : task.description}
                  </p>
                  <p className='my-2 dark:text-slate-400'>{task.deadline}</p>
                  {task.priroty === 'low' && (
                    <p className='p-1 px-2 rounded bg-green-200 inline-block mr-3'>
                      Low
                    </p>
                  )}
                  {task.priroty === 'medium' && (
                    <p className='p-1 px-2 rounded bg-yellow-200 inline-block mr-3'>
                      Medium
                    </p>
                  )}
                  {task.priroty === 'high' && (
                    <p className='p-1 px-2 rounded bg-red-300 inline-block mr-3'>
                      High
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* completed full div end  */}
      </div>
    </div>
  );
};

export default AllTask;
