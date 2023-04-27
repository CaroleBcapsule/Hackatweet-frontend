import styles from "../styles/Home.module.css";
//import styles from "../styles/Login.module.css";
import React from "react";
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
    <div>
    <div className={styles.homeContainer}>
      <div className={styles.leftElement}>
        <FontAwesomeIcon icon={faTwitter} className={styles.iconTwitter}/>
        <FontAwesomeIcon icon={faUserAstronaut} className={styles.iconAstronaut}/>
        <span>gauche</span>
        <button>logout</button>
      </div>

      <div className={styles.centerElement}>
        <div className={styles.tweetsContainer}>composant tweet</div>
        <div className={styles.lastTweetsContainer}>composant lastTweets</div>
      </div>

      <div className={styles.rightElement}>
        <div className={styles.trendsContainer} >Composant trends</div>
      </div>
      
      </div>
      </div>
    
  );
}

export default Home;
