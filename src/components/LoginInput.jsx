import React from "react";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <form className="form__login">
      <input
        type="text"
        placeholder="Email or Phone Number"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <button
        class="login"
        type="button"
        onClick={() => login({ email, password })}
      >
        Log In
      </button>
      <button class="create-account">
        <Link to="/register"> Create New Account</Link>
      </button>
    </form>
  );
}
