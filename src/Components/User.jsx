const User = ({ user }) => {
  const { image, name, type } = user;
  return (
    <div className='text-center text-gray-500'>
      <img
        className='mx-auto mb-4 h-36 w-36 rounded-full'
        src={image}
        alt={name}
      />
      <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
        {name}
      </h3>
      <p>{type}</p>
    </div>
  );
};
export default User;
