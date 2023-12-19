import React from "react";
import useInput from "../hooks/useInput";

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <form className="form__login">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <input
        type="text"
        placeholder="Email or Phone Number"
        value={email}
        onChange={onEmailChange}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <button
        class="login"
        type="button"
        onClick={() => register({ name, email, password })}
      >
        Register
      </button>
    </form>
  );
}
