import { Link } from 'react-router-dom';

const ButtonOutline = ({ path = 'path', displayName = 'displayName' }) => {
  return (
    <div className='my-5 inline-block'>
      <Link
        to={path}
        className='text-froly-500 border-froly-900 hover:bg-froly-100 active:bg-froly-200 rounded border-2 bg-white px-5 py-3 text-lg font-medium outline-none transition-all'
      >
        {displayName}
      </Link>
    </div>
  );
};

export default ButtonOutline;
