import styles from "../styles/Login.module.css";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "antd";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login() {
  const [isModalOpenSignUp, setIsModalOpenSignUp] = useState(false);
  const [isModalOpenSignIn, setIsModalOpenSignIn] = useState(false);
  const showModalSignUp = () => {
    setIsModalOpenSignUp(true);
  };
  const handleOkSignUp = () => {
    setIsModalOpenSignUp(false);
  };
  const handleCancelSignUp = () => {
    setIsModalOpenSignUp(false);
  };

  const showModalSigIn = () => {
    setIsModalOpenSignIn(true);
  };

  const handleOkSignIn = () => {
    setIsModalOpenSignIn(false);
  };
  const handleCancelSignIn = () => {
    setIsModalOpenSignIn(false);
  };
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
            <Button
              className={styles.buttonSignUp}
              type="primary"
              onClick={showModalSignUp}
            >
              Sign Up Now
            </Button>
            <Modal
              title="Sign Up"
              open={isModalOpenSignUp}
              onOk={handleOkSignUp}
              onCancel={handleCancelSignUp}
              footer={null}
            >
              <SignUp />
            </Modal>
          </div>

          <div>
            <p>Already have an account ?</p>
            <div>
              <Button
                className={styles.buttonSignIn}
                type="primary"
                onClick={showModalSigIn}
              >
                Sign in
              </Button>
              <Modal
                title="Sign In"
                open={isModalOpenSignIn}
                onOk={handleOkSignIn}
                onCancel={handleCancelSignIn}
                footer={null}
              >
                <SignIn />
              </Modal>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
