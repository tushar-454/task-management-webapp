import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Shared/Header';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
