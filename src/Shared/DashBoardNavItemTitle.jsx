const DashBoardNavItemTitle = ({ displayName = 'Display Name' }) => {
  return (
    <div className='mb-10'>
      <h1 className='from-sun-500 to-froly-500 text-stroke mx-auto bg-gradient-to-tr bg-clip-text text-center text-5xl font-black text-transparent'>
        {displayName}
      </h1>
    </div>
  );
};

export default DashBoardNavItemTitle;
