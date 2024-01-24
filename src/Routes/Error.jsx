import ButtonOutline from '../Components/UI/ButtonOutline';
import error from '../assets/image/error.svg';
const Error = () => {
  return (
    <section className='min-h-screen bg-white dark:bg-gray-800'>
      <div className='flex flex-col items-center justify-center'>
        <img src={error} className='w-2/5' />
        <ButtonOutline displayName='Go Home' path='/' />
      </div>
    </section>
  );
};

export default Error;
