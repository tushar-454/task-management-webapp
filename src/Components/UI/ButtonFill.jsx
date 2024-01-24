const ButtonFill = ({ displayName, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-froly-500 text-white hover:bg-froly-600 active:bg-froly-700 disabled:bg-froly-200 disabled:text-froly-800 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      >
        {displayName}
      </button>
    </div>
  );
};

export default ButtonFill;
