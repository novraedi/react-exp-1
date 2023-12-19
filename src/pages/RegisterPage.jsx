import "../styles/login.css";
import { useDispatch } from "react-redux";
import RegisterInput from "../components/RegisterInput";
import { asyncRegisterUser } from "../states/users/action";
import { useNavigate } from "react-router-dom";

export default function RegisterPage(params) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate("/");
  };

  return (
    <div class="content">
      <div class="flex-div">
        <div class="name-content">
          <h1 class="logo">ThreadHub</h1>
          <p>Connect with friends and the world around you on ThreadHub.</p>
        </div>
        <RegisterInput register={onRegister} />
      </div>
    </div>
  );
}
