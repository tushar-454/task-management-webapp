const Container = ({ children }) => {
  return (
    <div className='mx-auto w-full px-4 md:w-11/12 lg:w-4/5 lg:px-0 xl:max-w-7xl'>
      {children}
    </div>
  );
};

export default Container;
