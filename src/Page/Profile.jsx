import { FaCircleCheck } from 'react-icons/fa6';
import ButtonFill from '../Components/UI/ButtonFill';
import useAuth from '../Hook/useAuth';
import Container from '../Shared/Container';
import Toast from '../Utils/Toast/Toast';

const Profile = () => {
  const { user } = useAuth();
  return (
    <section className='bg-white dark:bg-gray-700'>
      <Container>
        <div className='flex flex-col gap-1 items-center py-10 min-h-screen'>
          <div>
            <img
              src={user?.photoURL}
              alt='profile photo'
              className='w-32 h-32 object-cover border-2 border-transparent ring-4 ring-froly-600 rounded-full mb-5'
            />
          </div>
          <h1 className='text-3xl font-bold relative dark:text-slate-50'>
            {user?.displayName}{' '}
            {user?.emailVerified && (
              <>
                <span className='absolute top-0 -right-6 cursor-pointer group'>
                  <FaCircleCheck className='text-xl text-blue-600' />
                </span>
                <span
                  className='absolute left-[7.5rem] -top-10 text-sm whitespace-nowrap p-1 rounded bg-gray-500/80 text-white invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100
            '
                >
                  Email Verified
                </span>
              </>
            )}
          </h1>
          <p className='text-xl font-semibold dark:text-slate-100'>
            {user?.email}
          </p>
          <p className='text-lg font-semibold dark:text-slate-200'>
            {user?.uid}
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-5 mt-5'>
            <ButtonFill
              displayName={'Change my Photo'}
              onClick={() => Toast('Feature upcomming', 'info')}
            />
            <ButtonFill
              displayName={'Update my Email'}
              onClick={() => Toast('Feature upcomming', 'info')}
            />
            <ButtonFill
              displayName={'Reset my Password'}
              onClick={() => Toast('Feature upcomming', 'info')}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Profile;
