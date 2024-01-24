const CompletedTaskCard = ({ completedTask }) => {
  const { title, description, deadline, priroty } = completedTask;
  return (
    <div className='flex flex-col rounded-md border-l-8 border-green-500 bg-green-100 p-2'>
      <h1 className='text-2xl font-bold'>
        {' '}
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
      <div>
        {priroty === 'low' && (
          <p className='mr-3 inline-block rounded bg-green-200 p-1 px-2'>Low</p>
        )}
        {priroty === 'medium' && (
          <p className='mr-3 inline-block rounded bg-yellow-200 p-1 px-2'>
            Medium
          </p>
        )}
        {priroty === 'high' && (
          <p className='mr-3 inline-block rounded bg-red-300 p-1 px-2'>High</p>
        )}
      </div>
    </div>
  );
};

export default CompletedTaskCard;
