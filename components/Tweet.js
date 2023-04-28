import styles from "../styles/Tweet.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweetToDatabase } from "../reducers/tweet";

function Tweet(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [numberCharOfTweet, setNumberCharOfTweet] = useState([]);

  const handleTweetPost = () => {
    if (!user.token) {
      return;
    }

    fetch(`http://localhost:3000/tweets/newTweet/${user.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: numberCharOfTweet }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(addTweetToDatabase(numberCharOfTweet));
          setNumberCharOfTweet([]);
        }
      });
  };

  return (
    <>
      <div className={styles.row}>
        <input
          maxLength="250"
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
