import { useState } from 'react';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import DashBoardNavItemTitle from '../Shared/DashBoardNavItemTitle';
import Toast from '../Utils/Toast/Toast';
import ButtonFill from './UI/ButtonFill';
import Input from './UI/Input';

const ManageTaskCard = ({ userTask, refetch }) => {
  const axios = useAxios();
  const { user } = useAuth();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const { _id, title, description, deadline } = userTask;
  const [updatableTask, setUpdatableTask] = useState(null);
  const [updatableTaskId, setUpdatableTaskId] = useState(null);
  // handle transfar task in trash
  const handleTaskTrash = async (id) => {
    try {
      const res = await axios.patch(`/task/trash/${id}`, {
        trashStatus: true,
      });
      if (res.data.message === 'success') {
        Toast('Task is trash now !', 'info');
        refetch();
      }
    } catch (error) {
      Toast('There was an error !', 'error');
    }
  };
  // handle update task
  const handleGetUpdatableTask = async (id) => {
    try {
      setShowUpdateForm(true);
      setUpdatableTaskId(id);
      const res = await axios.get(`/task/get/${user?.email}?id=${id}`);
      setUpdatableTask(res.data);
    } catch (error) {
      Toast('There was an error!', 'error');
    }
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priroty = form.priroty.value;
    try {
      setLoading(true);
      const res = await axios.put(`/task/update/${updatableTaskId}`, {
        title,
        description,
        deadline,
        priroty,
      });
      if (res.data.message === 'success') {
        Toast('Task Updated', 'success');
        setShowUpdateForm(false);
        refetch();
        form.reset();
      }
    } catch (error) {
      Toast('There was an error', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-sun-50 border-sun-500 flex flex-col rounded-md border-l-8 p-2'>
      <h1 className='text-2xl font-bold'>
        {title.length > 23 ? `${title.slice(0, 22)}...` : title}
      </h1>
      <p className='flex-grow text-xl'>
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </p>
      <p className='my-4'>
        <b>Deadline:-</b> {deadline}
      </p>
      <div className='flex gap-1'>
        <p
          onClick={() => handleGetUpdatableTask(_id)}
          className='mr-3 inline-block cursor-pointer rounded bg-blue-200 p-1 px-2 transition-all hover:bg-blue-300 active:bg-blue-400'
        >
          Update
        </p>
        <p
          onClick={() => handleTaskTrash(_id)}
          className='mr-3 inline-block cursor-pointer rounded bg-red-200 p-1 px-2 transition-all hover:bg-red-300 active:bg-red-400'
        >
          Trash
        </p>
      </div>
      {showUpdateForm && (
        <div className='fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] rounded-md border bg-white p-5 dark:bg-gray-800'>
          <div className='mx-auto w-full sm:w-[640px]'>
            <DashBoardNavItemTitle displayName='Update Task' />
            <form onSubmit={handleUpdateTask} className='space-y-5'>
              <Input
                displayName='Task Title'
                type='text'
                id={'title'}
                name={'title'}
                defaultValue={updatableTask?.title}
              />
              <Input
                displayName='Description'
                type='text'
                id={'description'}
                name={'description'}
                defaultValue={updatableTask?.description}
              />
              <Input
                displayName='Deadline'
                type='date'
                id={'deadline'}
                name={'deadline'}
                defaultValue={updatableTask?.deadline}
              />
              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor={'priroty'}
                    className='mb-2 block text-sm dark:text-white'
                  >
                    Priroty
                  </label>
                </div>
                <div className='relative'>
                  <select
                    id='priroty'
                    className='focus:border-sun-500 focus:ring-sun-500 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                  >
                    <option value=''>Set Task Priroty</option>
                    <option
                      value='low'
                      selected={updatableTask?.priroty === 'low' && true}
                    >
                      Low
                    </option>
                    <option
                      value='medium'
                      selected={updatableTask?.priroty === 'medium' && true}
                    >
                      Medium
                    </option>
                    <option
                      value='high'
                      selected={updatableTask?.priroty === 'high' && true}
                    >
                      High
                    </option>
                  </select>
                </div>
              </div>
              <ButtonFill
                type='submit'
                displayName={loading ? 'Updating...' : 'Update Task'}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTaskCard;
