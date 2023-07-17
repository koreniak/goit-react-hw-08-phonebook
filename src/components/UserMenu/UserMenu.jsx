import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { BootstrapButton, MenuContainer, Email } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <MenuContainer>
      <Email>{user.email}</Email>
      <BootstrapButton variant="contained" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BootstrapButton>
    </MenuContainer>
  );
};

export default UserMenu
