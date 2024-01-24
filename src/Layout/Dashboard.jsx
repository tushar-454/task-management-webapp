import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AsideItems from '../Components/AsideItems';

const Dashboard = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <section>
      <div className='relative flex'>
        <div
          className={`absolute w-[240px] ${
            isCollapse ? 'left-0' : '-left-60'
          } transition-all lg:relative lg:left-0`}
        >
          <AsideItems isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        </div>
        <div className='min-h-screen flex-grow bg-white p-8 dark:bg-slate-700'>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
