import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdError } from 'react-icons/md';
import ButtonFill from '../Components/UI/ButtonFill';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';
import Toast from '../Utils/Toast/Toast';

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const { user } = useAuth();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const taskInfo = { ...data, email: user?.email };
      const res = await axios.post('/task/add', taskInfo);
      if (res.data.message === 'success') {
        Toast('Add a task successfully.', 'success');
        reset();
      }
    } catch (error) {
      Toast('There was an error!', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full xl:w-[1024px] mx-auto'>
      <DashBoardNavItemTitle displayName='Add a Task' />
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <div>
          <div className='flex justify-between items-center'>
            <label
              htmlFor={'title'}
              className='block text-sm mb-2 dark:text-white'
            >
              Task Title
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              {...register('title', { required: 'Title is required' })}
              className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            />
            {errors.title && (
              <div className='absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3'>
                <MdError className='text-red-500 text-2xl' />
              </div>
            )}
          </div>
          {errors.title && (
            <p className='text-xs text-red-600 mt-2' id='password-error'>
              {errors.title.message}
            </p>
          )}
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <label
              htmlFor={'description'}
              className='block text-sm mb-2 dark:text-white'
            >
              Description
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              {...register('description', {
                required: 'Description is required',
              })}
              className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            />
            {errors.description && (
              <div className='absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3'>
                <MdError className='text-red-500 text-2xl' />
              </div>
            )}
          </div>
          {errors.description && (
            <p className='text-xs text-red-600 mt-2' id='password-error'>
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <label
              htmlFor={'deadline'}
              className='block text-sm mb-2 dark:text-white'
            >
              Deadline
            </label>
          </div>
          <div className='relative'>
            <input
              type='date'
              {...register('deadline', { required: 'Deadline is required' })}
              className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            />
            {errors.deadline && (
              <div className='absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3'>
                <MdError className='text-red-500 text-2xl' />
              </div>
            )}
          </div>
          {errors.deadline && (
            <p className='text-xs text-red-600 mt-2' id='password-error'>
              {errors.deadline.message}
            </p>
          )}
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <label
              htmlFor={'priroty'}
              className='block text-sm mb-2 dark:text-white'
            >
              Priroty
            </label>
          </div>
          <div className='relative'>
            <select
              {...register('priroty', { required: 'Priroty is required' })}
              className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
            >
              <option value=''>Set Task Priroty</option>
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>
            {errors.priroty && (
              <div className='absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3'>
                <MdError className='text-red-500 text-2xl' />
              </div>
            )}
          </div>
          {errors.priroty && (
            <p className='text-xs text-red-600 mt-2' id='password-error'>
              {errors.priroty.message}
            </p>
          )}
        </div>
        <ButtonFill
          type='submit'
          displayName={loading ? 'Creating...' : 'Add Task'}
        />
      </form>
    </div>
  );
};

export default AddTask;
