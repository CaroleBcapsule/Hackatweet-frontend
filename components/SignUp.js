import styles from "../styles/SignUp.module.css";
import Link from "next/link";
import Home from "./Home";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
function SignUp() {
  const dispatch = useDispatch();
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstName,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(login({ username: signUpUsername, token: data.token }));
          setFirstName("");
          setSignUpUsername("");
          setSignUpPassword("");
        }
      });
  };
  return (
    <div className={styles.popUpContainer}>
      ceci est mon composant signup
      <div>
        <input
          type="text"
          placeholder="Firstname"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Username"
          id="signUpUsername"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
        />
        <input
          type="text"
          placeholder="Password"
          id="signUpPassword"
          onChange={(e) => setSignUpPassword(e.target.value)}
          value={signUpPassword}
        />
        <button type="button" onClick={() => handleRegister()}>
          <Link href="./home">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
