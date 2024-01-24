import { MdError } from 'react-icons/md';

const InputFile = ({ displayName = 'displayName', id, error, ...rest }) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <label
          htmlFor={id}
          className='mb-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border cursor-pointer text-center focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:border-gray-700 dark:focus:ring-gray-600'
        >
          {displayName}
        </label>
      </div>
      <div className='relative'>
        <input
          {...rest}
          id={id}
          className='hidden py-3 px-4 w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
        />
        {error && (
          <div className='absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3'>
            <MdError className='text-red-500 text-2xl' />
          </div>
        )}
      </div>
      {error && (
        <p className='text-xs text-red-600 mt-2' id='password-error'>
          {error}
        </p>
      )}
    </div>
  );
};

export default InputFile;
