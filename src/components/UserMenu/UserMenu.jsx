import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";

export function UserMenu() {
    const {name} = useSelector(selectUser)
    const dispatch = useDispatch();

  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}
