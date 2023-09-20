import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
import { ExitIcon, UserContainer, UserTitle } from "./UserMenu.styled";
import Button from 'react-bootstrap/Button';


export function UserMenu() {
    const {name} = useSelector(selectUser)
    const dispatch = useDispatch();

  return (
    <UserContainer>
      <UserTitle>Welcome, {name}</UserTitle>
      <Button variant="link" onClick={() => dispatch(logOut())}><ExitIcon/></Button>
    </UserContainer>
  );
}
