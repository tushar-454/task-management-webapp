import { BsListTask } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GrTask } from 'react-icons/gr';
import { MdAddTask, MdManageHistory } from 'react-icons/md';
import { PiCaretRightFill } from 'react-icons/pi';
import DashboardNavItem from './DashboardNavItem';
const dashboardNavItems = [
  {
    route: 'All Task',
    path: 'all-task',
    icon: <BsListTask />,
  },
  {
    route: 'Add a Task',
    path: 'add-task',
    icon: <MdAddTask />,
  },
  {
    route: 'Manage Task',
    path: 'manage-task',
    icon: <MdManageHistory />,
  },
  {
    route: 'Completed Task',
    path: 'completed-task',
    icon: <GrTask />,
  },
  {
    route: 'Trash',
    path: 'trash',
    icon: <FaRegTrashAlt />,
  },
];
const AsideItems = ({ isCollapse, setIsCollapse }) => {
  return (
    <aside className='relative z-30 bg-slate-50 dark:bg-slate-800'>
      <span
        onClick={() => setIsCollapse(!isCollapse)}
        className={`absolute -right-8 -top-1 block cursor-pointer lg:hidden ${
          isCollapse ? '!-right-4 rotate-180' : undefined
        }`}
      >
        <PiCaretRightFill className='text-sun-950 text-5xl' />
      </span>
      <div className='flex min-h-screen flex-col border-r'>
        {dashboardNavItems.map((navItem, index) => (
          <DashboardNavItem
            key={index}
            navItem={navItem}
            setIsCollapse={setIsCollapse}
          />
        ))}
      </div>
    </aside>
  );
};

export default AsideItems;
