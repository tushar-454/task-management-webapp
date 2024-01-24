import { NavLink } from 'react-router-dom';

const NavItem = ({ setNavShow, navItem }) => {
  return (
    <NavLink
      onClick={() => setNavShow(false)}
      className={`hover:text-froly-600 dark:hover:text-froly-500 flex items-center gap-x-2 font-medium text-gray-500 transition-all dark:border-gray-700 dark:text-gray-400 sm:my-6 sm:border-s sm:border-gray-300 sm:ps-6 ${({
        isActive,
      }) => (isActive ? 'active' : undefined)}`}
      to={navItem.path}
    >
      {navItem.icon}
      {navItem.route}
    </NavLink>
  );
};

export default NavItem;
