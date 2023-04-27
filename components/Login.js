import styles from "../styles/Login.module.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import SignUp from "./SignUp";

function Login() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.indexLogo}>
          <FontAwesomeIcon icon={faTwitter} flip="both" size="2xl" />
        </div>
        <div classeName={styles.container}>
          <div>
            <h1>See what's happening</h1>
            <h2>Join Hackatweet today</h2>
          </div>
          <div>
            <button type="button" className={styles.buttonSignUp}>
              Sign Up
            </button>
            <p>Already have an account ?</p>
            <button type="button" className={styles.buttonSignIn}>
              Sign in
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
