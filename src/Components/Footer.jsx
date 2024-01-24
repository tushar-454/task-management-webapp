import { FaSlack } from 'react-icons/fa';
import { IoLogoGithub, IoLogoGoogle, IoLogoTwitter } from 'react-icons/io';

import { Link, useLocation } from 'react-router-dom';
import Container from '../Shared/Container';

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      {!pathname.includes('dashboard') && (
        <footer className='bg-gray-100 dark:bg-gray-800'>
          <Container>
            {/* <!-- Grid --> */}
            <div className='py-10 text-center'>
              <div>
                <Link
                  className='flex-none text-2xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  to='/'
                  aria-label='Brand'
                >
                  Epoch Tasks
                </Link>
              </div>
              {/* <!-- Social Brands --> */}
              <div className='mt-3 flex justify-center gap-2 space-x-2'>
                <a className='footerSocialIcon' href='#'>
                  <IoLogoGoogle />
                </a>
                <a className='footerSocialIcon' href='#'>
                  <IoLogoTwitter />
                </a>
                <a className='footerSocialIcon' href='#'>
                  <IoLogoGithub />
                </a>
                <a className='footerSocialIcon' href='#'>
                  <FaSlack />
                </a>
              </div>
              {/* <!-- End Social Brands --> */}
              {/* <!-- End Col --> */}

              <div className='mt-3'>
                <p className='text-gray-500'>
                  We&apos;re part of your{' '}
                  <a
                    className='text-froly-600 hover:text-froly-700 dark:text-froly-500 dark:hover:text-froly-400 font-semibold'
                    href='#'
                  >
                    Time management
                  </a>{' '}
                  way.
                </p>
                <p className='text-gray-500'>
                  © Epoch Tasks. 2023 All rights reserved.
                </p>
              </div>
            </div>
            {/* <!-- End Grid --> */}
          </Container>
        </footer>
      )}
    </>
  );
};

export default Footer;
