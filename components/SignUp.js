import styles from "../styles/SignUp.module.css";

function SignUp() {
  return (
    <div className={styles.popUpContainer}>
      ceci est mon composant signup
      <div>
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
