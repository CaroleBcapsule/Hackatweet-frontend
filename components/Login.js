import styles from "../styles/Login.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Button, Modal } from "antd";
import { useState } from "react";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
              onClick={showModal}
            >
              Sign Up
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <SignUp />
            </Modal>

            <p>Already have an account ?</p>
            <Button
              className={styles.buttonSignIn}
              type="primary"
              onClick={showModal}
            >
              Sign in
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <SignIn />
            </Modal>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
