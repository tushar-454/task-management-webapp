import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ButtonFill from '../Components/UI/ButtonFill';
import Checkbox from '../Components/UI/Checkbox';
import Input from '../Components/UI/Input';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import LoginwithGoogle from '../Shared/LoginwithGoogle';
import Toast from '../Utils/Toast/Toast';

const loginInit = {
  email: '',
  password: '',
};
const errorInit = {
  email: '',
  password: '',
};

const Login = () => {
  const [login, setLogin] = useState({ ...loginInit });
  const [error, setError] = useState({ ...errorInit });
  const [loading, setLoading] = useState(false);
  const { loginWithEmailPass } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  const { state } = useLocation();
  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevObj) => ({ ...prevObj, [name]: value }));
    setError((prevObj) => ({ ...prevObj, [name]: '' }));
  };
  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    if (!email || !password) {
      return Toast('All field must required!', 'info');
    }
    try {
      setLoading(true);
      const res = await loginWithEmailPass(email, password);
      const user = res.user;
      if (user) {
        axios.post('/jwt/create', { email: user?.email });
        navigate(state || '/');
        Toast('Login successfull !', 'success');
      }
    } catch (error) {
      Toast('There was an error !', 'error');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className='min-h-screen bg-white dark:bg-gray-900'>
      <main className='mx-auto w-full max-w-md p-6 '>
        <div className='relative mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800'>
          <div className='p-4 sm:p-7'>
            <div className='text-center'>
              <Link to={'/'}>
                <span className='text-sun-900 absolute -right-0 -top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-bl-xl rounded-tr-xl bg-slate-100 text-2xl transition-all hover:bg-slate-200 active:bg-slate-300'>
                  <RxCross2 />
                </span>
              </Link>

              <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                Sign in
              </h1>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                Don&apos;t have an account yet?{' '}
                <Link
                  className='font-medium text-[#FC7081] decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  to='/signup'
                >
                  Sign up here
                </Link>
              </p>
            </div>

            <div className='mt-5'>
              <LoginwithGoogle />

              <div className='flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600'>
                Or
              </div>

              {/* <!-- Form --> */}
              <form onSubmit={handleLogin}>
                <div className='grid gap-y-4'>
                  <Input
                    displayName='Email address'
                    type='email'
                    id={'email'}
                    name='email'
                    placeholder={'example@gmail.com'}
                    value={login.email}
                    error={error.email}
                    onChange={handleInputChange}
                  />
                  <Input
                    displayName='Password'
                    type='password'
                    id={'password'}
                    name='password'
                    placeholder={'s909j*(^&'}
                    value={login.password}
                    error={error.password}
                    onChange={handleInputChange}
                  />
                  <Checkbox
                    displayName={'Remember Me'}
                    id='remember-me'
                    type='checkbox'
                    name='remember-me'
                  />
                  <ButtonFill
                    displayName={loading ? 'Sign In ...' : 'Sign In'}
                  />
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
