/* eslint-disable no-useless-escape */
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import ButtonFill from '../Components/UI/ButtonFill';
import Checkbox from '../Components/UI/Checkbox';
import Input from '../Components/UI/Input';
import InputFile from '../Components/UI/InputFile';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import LoginwithGoogle from '../Shared/LoginwithGoogle';
import PhotoUpload from '../Utils/PhotoUpload/PhotoUpload';
import Toast from '../Utils/Toast/Toast';
const signupInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
  terms: false,
};
const errorInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
  terms: false,
};
const Signup = () => {
  const [signup, setSignup] = useState({ ...signupInit });
  const [error, setError] = useState({ ...errorInit });
  const { signupWithEmailPassword, updateUserProfile, setForceUP } = useAuth();
  const navigate = useNavigate();
  const [photoStatus, setPhotoStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const axios = useAxios();

  // handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignup((prevObj) => ({
      ...prevObj,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError((prevError) => ({
      ...prevError,
      [name]: type === 'checkbox' ? false : '',
    }));
  };
  // handle photo upload change
  const photoUpload = (e) => {
    const imageName = e.target.files[0].name.slice(0, -4);
    signup.photoUrl = imageName;
    error.photoUrl = '';
    setPhotoStatus(imageName);
  };

  // handle form submit create user using email password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, photoUrl, password, confirmPassword, terms } = signup;
    {
      // name error check
      if (!name) {
        return setError((errorObj) => ({
          ...errorObj,
          name: 'Name is Require!',
        }));
      } else if (name.length < 3) {
        return setError((errorObj) => ({
          ...errorObj,
          name: 'Name Must be 3 Charecters!',
        }));
      }
      // email error check
      if (!email) {
        return setError((errorObj) => ({
          ...errorObj,
          email: 'Email is Require!',
        }));
      } else if (
        !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
          email
        )
      ) {
        return setError((errorObj) => ({
          ...errorObj,
          email: 'Enter your valid email!',
        }));
      }
      // photo check
      if (!photoUrl) {
        return setError((errorObj) => ({
          ...errorObj,
          photoUrl: 'Photo Url is Require!',
        }));
      }
      // password check
      if (!password) {
        return setError((prevError) => ({
          ...prevError,
          password: 'Password is required !',
        }));
      } else if (!/[A-Z]/.test(password)) {
        return setError((prevError) => ({
          ...prevError,
          password: 'must have a capital letter',
        }));
      } else if (!/[a-z]/.test(password)) {
        return setError((prevError) => ({
          ...prevError,
          password: 'must have a small letter',
        }));
      } else if (!/[^a-zA-Z0-9\s]/.test(password)) {
        return setError((prevError) => ({
          ...prevError,
          password: 'must have a special Cherecter',
        }));
      } else if (!/\d+/.test(password)) {
        return setError((prevError) => ({
          ...prevError,
          password: 'must have a number',
        }));
      } else if (password.length < 6) {
        return setError((prevError) => ({
          ...prevError,
          password: 'password must 6 charecters',
        }));
      }
      // check confirm password
      if (password !== confirmPassword) {
        setError((prevError) => ({
          ...prevError,
          confirmPassword: 'Password not matched !',
        }));
        return;
      }
      // check terms
      if (!terms) {
        Toast('Checked terms and condition', 'warning');
        return;
      }
    }
    try {
      setIsLoading(true);
      //upload image
      const imageData = await PhotoUpload(e.target.photoUrl.files[0]);

      const res = await signupWithEmailPassword(email, password);
      if (res.user) {
        await updateUserProfile(name, imageData);
        axios.post('/jwt/create', { email: res?.user?.email });
        axios.post('/user/create', {
          name: res?.user?.displayName,
          email: res?.user?.email,
        });
        setForceUP({ name: name, photo: imageData });
        Toast('Account create successfully.', 'success');
        navigate('/');
      }
    } catch (error) {
      Toast('There was an error !', 'error');
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='min-h-screen bg-white dark:bg-gray-900'>
      <main className='w-full max-w-md mx-auto p-6 '>
        <div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 relative'>
          <div className='p-4 sm:p-7'>
            <div className='text-center'>
              <Link to={'/'}>
                <span className='absolute -right-0 -top-0 w-10 h-10 bg-slate-100 text-sun-900 rounded-tr-xl rounded-bl-xl flex justify-center items-center text-2xl cursor-pointer transition-all hover:bg-slate-200 active:bg-slate-300'>
                  <RxCross2 />
                </span>
              </Link>
              <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                Sign Up
              </h1>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                Have an account already?{' '}
                <Link
                  className='text-[#FC7081] decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  to='/login'
                >
                  Login here
                </Link>
              </p>
            </div>

            <div className='mt-5'>
              <LoginwithGoogle />

              <div className='py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600'>
                Or
              </div>

              {/* <!-- Form --> */}
              <form onSubmit={handleSubmit}>
                <div className='grid gap-y-4'>
                  <Input
                    displayName='Full Name'
                    type='text'
                    id={'name'}
                    name='name'
                    placeholder={'Jhon Dou'}
                    value={signup.name}
                    error={error.name}
                    onChange={handleInputChange}
                  />
                  <Input
                    displayName='Email address'
                    type='email'
                    id={'email'}
                    name='email'
                    placeholder={'example@gmail.com'}
                    value={signup.email}
                    error={error.email}
                    onChange={handleInputChange}
                  />
                  <InputFile
                    displayName={
                      photoStatus ? photoStatus : 'Upload your photo'
                    }
                    type='file'
                    id={'photoUrl'}
                    name='photoUrl'
                    error={error.photoUrl}
                    onChange={photoUpload}
                  />
                  <Input
                    displayName='Password'
                    type='password'
                    id={'password'}
                    name='password'
                    placeholder={'s909j*(^&'}
                    value={signup.password}
                    error={error.password}
                    onChange={handleInputChange}
                  />
                  <Input
                    displayName='Confirm Password'
                    type='password'
                    id={'confirmPassword'}
                    name='confirmPassword'
                    placeholder={'s909j*(^&'}
                    value={signup.confirmPassword}
                    error={error.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <Checkbox
                    displayName={'I agree all terms & condition'}
                    id='terms'
                    type='checkbox'
                    name='terms'
                    value={signup.terms}
                    onChange={handleInputChange}
                  />
                  <ButtonFill
                    displayName={isLoading ? 'Creating...' : 'Sign Up'}
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

export default Signup;
