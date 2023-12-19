import LoginInput from "../components/LoginInput";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";

export default function LoginPage(params) {
  const dispatch = useDispatch();
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };
  return (
    <div class="content">
      <div class="flex-div">
        <div class="name-content">
          <h1 class="logo">ThreadHub</h1>
          <p>Connect with friends and the world around you on ThreadHub.</p>
        </div>
        <LoginInput login={onLogin} />
      </div>
    </div>
  );
}
