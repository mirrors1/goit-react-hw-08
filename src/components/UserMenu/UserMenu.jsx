import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import { Button } from '../Button/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <Button className={s.btn} type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;
