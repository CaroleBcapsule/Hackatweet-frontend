import styles from "../styles/Tweet.module.css";
import { useState } from "react";

function Tweet(props) {
  const [numberCharOfTweet, setNumberCharOfTweet] = useState([]);

  const handleTweetPost = () => {
    fetch("http://localhost:3000/tweets/newTweet/:token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        //         if (data.result) {
        //           dispatch(login({ username: signUpUsername, token: data.token }));
        //           setSignUpUsername("");
        //           setSignUpPassword("");
        //         }
      });
  };

  return (
    <>
      <div className={styles.row}>
        <input
          maxlength="250"
          type="text"
          placeholder="Type your tweet"
          onChange={(e) => setNumberCharOfTweet(e.target.value)}
          value={numberCharOfTweet}
        />
        <button type="button" onClick={() => handleTweetPost()}>
          Tweet
        </button>
        {numberCharOfTweet.length}/250
      </div>
    </>
  );
}
export default Tweet;
