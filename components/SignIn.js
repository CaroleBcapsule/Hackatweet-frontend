import styles from "../styles/SignIn.module.css";
import Link from "next/link";

function SignIn() {
  return (
    <div className={styles.popUpContainer}>
      ceci est mon composant sign in attention
      <div>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button type="button">
          <Link href="./home">Sign In</Link>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
