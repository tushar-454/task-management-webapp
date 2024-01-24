import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { CiDark } from 'react-icons/ci';
import { IoHomeOutline, IoMenuOutline } from 'react-icons/io5';
import { MdDarkMode, MdOutlineDashboard } from 'react-icons/md';
import { PiSignOutBold } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { SiKnowledgebase } from 'react-icons/si';
import { SlUserFemale } from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';
import NavItem from '../Components/NavItem';
import useAuth from '../Hook/useAuth';
import logo from '../assets/icon/logo.webp';
import Container from './Container';

const navItems = [
  {
    route: 'Home',
    path: '/',
    icon: <IoHomeOutline />,
  },
  {
    route: 'About',
    path: '/about',
    icon: <SiKnowledgebase />,
  },
  {
    route: 'Dashboard',
    path: '/dashboard',
    icon: <MdOutlineDashboard />,
  },
];

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme'));
  const { user, logOutAccount, forceUP } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
    logOutAccount();
  };
  useEffect(() => {
    if (
      darkMode === null &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList = 'dark';
      return;
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList = 'light';
    }
    if (darkMode === 'light') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList = 'light';
      return;
    }
    if (darkMode === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList = 'dark';
      return;
    }
  }, [darkMode]);
  return (
    <header className='topPriority flex w-full flex-wrap border-b border-gray-200 bg-white py-3 text-sm transition-all dark:border-gray-700 dark:bg-gray-800 sm:flex-nowrap sm:py-0'>
      <Container>
        <nav
          className='relative mx-auto w-full max-w-7xl sm:flex sm:items-center sm:justify-between '
          aria-label='Global'
        >
          <div className='flex items-center justify-between'>
            <Link className='flex-none' to='/'>
              <img src={logo} className='w-16' />
            </Link>
            <div className='sm:hidden'>
              <button
                onClick={() => setNavShow(!navShow)}
                type='button'
                className='flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              >
                {navShow ? <RxCross2 /> : <IoMenuOutline />}
              </button>
            </div>
          </div>
          <div
            className={`absolute z-50 w-full grow basis-full origin-top scale-y-0 !bg-white px-4 pb-4 transition-all duration-300 dark:!bg-gray-800 sm:relative sm:block sm:scale-100 sm:px-0 sm:pb-0 ${
              navShow ? 'scale-y-100' : undefined
            }`}
          >
            <div className='mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0'>
              {navItems.map((navIteminfo, index) => (
                <NavItem
                  key={index}
                  navItem={navIteminfo}
                  setNavShow={setNavShow}
                />
              ))}
              {user ? (
                <>
                  {' '}
                  <p
                    onClick={() => setDropdown(!dropdown)}
                    className='hover:text-froly-600 dark:hover:text-froly-600 flex cursor-pointer items-center gap-x-2 font-medium text-gray-500 transition-all dark:border-gray-700 dark:text-gray-400'
                  >
                    <img
                      src={user?.photoURL || forceUP.photo}
                      alt='user'
                      className='h-12 w-12 rounded-full object-cover'
                    />
                    {user?.displayName || forceUP.name}
                  </p>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    className={`absolute right-0 top-12 z-50 origin-top-right transition ${
                      dropdown ? 'scale-100' : 'scale-0'
                    } my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700`}
                  >
                    <ul className='py-2' aria-labelledby='user-menu-button'>
                      <li className='cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'>
                        <Link
                          onClick={() => {
                            setNavShow(false);
                            setDropdown(false);
                          }}
                          to={'profile'}
                          className='flex items-center gap-2'
                        >
                          Profile <CgProfile />
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          setDarkMode(
                            darkMode === null
                              ? 'light'
                              : darkMode === 'light'
                                ? 'dark'
                                : 'light',
                          );
                          setDropdown(!dropdown);
                          setNavShow(false);
                        }}
                        className='flex cursor-pointer items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        {darkMode === 'dark' ? (
                          <span className='flex items-center gap-2'>
                            Lightmode <CiDark />
                          </span>
                        ) : (
                          <span className='flex items-center gap-2'>
                            Darkmode <MdDarkMode />
                          </span>
                        )}
                      </li>
                      <li
                        onClick={() => {
                          handleLogout();
                          setDropdown(false);
                          setNavShow(false);
                        }}
                        className='flex cursor-pointer items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Sign out <PiSignOutBold />
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  className='hover:text-froly-600 dark:hover:text-froly-600 flex items-center gap-x-2 font-medium text-gray-500 transition-all dark:border-gray-700 dark:text-gray-400 sm:my-6 sm:border-e sm:border-s sm:border-gray-300 sm:pe-6 sm:ps-6'
                  to='/login'
                >
                  <SlUserFemale />
                  Log in
                </Link>
              )}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
