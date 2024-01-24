import { MdError } from 'react-icons/md';

const Input = ({
  displayName = 'displayName',
  id,
  isGroup = false,
  error,
  ...rest
}) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <label htmlFor={id} className='block text-sm mb-2 dark:text-white'>
          {displayName}
        </label>
        {isGroup && (
          <a
            className='text-sm text-froly-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='../examples/html/recover-account.html'
          >
            Forgot password?
          </a>
        )}
      </div>
      <div className='relative'>
        <input
          {...rest}
          id={id}
          className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
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

export default Input;
