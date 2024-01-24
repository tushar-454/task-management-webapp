import { NavLink } from 'react-router-dom';

const DashboardNavItem = ({ setIsCollapse, navItem }) => {
  return (
    <NavLink
      onClick={() => setIsCollapse(false)}
      className={`hover:text-froly-600 hover:bg-froly-50 dark:hover:text-froly-500 flex items-center gap-x-3 whitespace-nowrap p-4 text-lg font-medium text-gray-500 transition-all dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-700 ${({
        isActive,
      }) => (isActive ? 'activeDashboardItem' : undefined)}`}
      to={navItem.path}
    >
      {navItem.icon}
      {navItem.route}
    </NavLink>
  );
};

export default DashboardNavItem;
