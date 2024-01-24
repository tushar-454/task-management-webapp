import { useLoaderData } from 'react-router-dom';
import Banner from '../Components/Banner';
import UserTheApp from '../Components/UserTheApp';
const Home = () => {
  const user = useLoaderData();
  return (
    <>
      <Banner />
      <UserTheApp users={user} />
    </>
  );
};

export default Home;
