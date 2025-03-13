import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './AuthNav.module.css';
const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};
export default AuthNav;
