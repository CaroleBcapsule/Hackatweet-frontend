import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut, faTwitter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LastTweets from "./LastTweets";
//import Tweets from './Tweets';
//import Trends from './Trends';

function Home() {
  const user = useSelector((state) => state.user.value);

  //récupération des tweets de tous les utilisateurs
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    if (!user.token) {
      return;
    }
    fetch(`http://localhost:3000/tweets/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setAllTweets(allTweets);
      });
  }, []);

  const tousTweets = allTweets.map((data, i) => {
    return <LastTweets key={i} {...data} />;
  });

  return (
    <div classname={styles.homeContainer}>
      <div>
        <FontAwesomeIcon icon={faTwitter} className={styles.iconTwitter} />
        <FontAwesomeIcon
          icon={faUserAstronaut}
          className={styles.iconAstronaut}
        />
        <span>gauche</span>
        <button>logout</button>
      </div>

      <div>
        <div>composant tweet</div>
        <div className={styles.lastTweetscontainer}>composant lastTweets</div>
      </div>

      <div>
        <div>Composant trends</div>
      </div>
    </div>
  );
}

export default Home;
