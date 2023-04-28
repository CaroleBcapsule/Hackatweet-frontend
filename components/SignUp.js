import styles from "../styles/SignUp.module.css";
import Link from "next/link";
import Home from "./Home";
function SignUp() {
  return (
    <div className={styles.popUpContainer}>
      ceci est mon composant signup
      <div>
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button type="button">
          <Link href="./home">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
