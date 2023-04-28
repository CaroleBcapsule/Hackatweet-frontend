import styles from "../styles/SignIn.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../reducers/user";

function SignIn() {
  const dispatch = useDispatch();
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
        }
      });
  };

  return (
    <div className={styles.popUpContainer}>
      ceci est mon composant sign in attention
      <div>
        <input
          type="text"
          placeholder="Username"
          id="signInUsername"
          onChange={(e) => setSignInUsername(e.target.value)}
          value={signInUsername}
        />
        <input
          type="text"
          placeholder="Password"
          id="signInPassword"
          onChange={(e) => setSignInPassword(e.target.value)}
          value={signInPassword}
        />
        <button type="button" onClick={() => handleConnection()}>
          <Link href="./home">Sign In</Link>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
