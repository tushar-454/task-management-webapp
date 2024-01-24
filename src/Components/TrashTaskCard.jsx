import useAxios from '../Hook/useAxios';
import Toast from '../Utils/Toast/Toast';

const TrashTaskCard = ({ userTrashTask, refetch }) => {
  const { _id, title, description, deadline } = userTrashTask;
  const axios = useAxios();
  // handle transfar task from trash
  const handleRestoreTask = async (id) => {
    try {
      const res = await axios.patch(`/task/trash/${id}`, {
        trashStatus: false,
      });
      if (res.data.message === 'success') {
        Toast('Task is restore now !', 'info');
        refetch();
      }
    } catch (error) {
      Toast('There was an error !', 'error');
    }
  };
  // handle delete task permanently
  const handleDeleteTask = async (id) => {
    try {
      const res = await axios.delete(`/task/remove/${id}`);
      if (res.data.message === 'success') {
        Toast('Task is permanently deleted !', 'info');
        refetch();
      }
    } catch (error) {
      Toast('There was an error !', 'error');
    }
  };

  return (
    <div className='flex flex-col p-2 bg-froly-50 border-l-8 rounded-md border-red-500'>
      <h1 className='text-2xl font-bold'>
        {title.length > 23 ? `${title.slice(0, 22)}...` : title}
      </h1>
      <p className='text-xl flex-grow'>
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </p>
      <p className='my-4'>
        <b>Deadline:-</b> {deadline}
      </p>
      <div className='flex gap-1'>
        <p
          onClick={() => handleRestoreTask(_id)}
          className='p-1 px-2 rounded bg-green-200 inline-block mr-3 cursor-pointer transition-all hover:bg-green-300 active:bg-green-400'
        >
          Restore
        </p>
        <p
          onClick={() => handleDeleteTask(_id)}
          className='p-1 px-2 rounded bg-red-200 inline-block mr-3 cursor-pointer transition-all hover:bg-red-300 active:bg-red-400'
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default TrashTaskCard;
