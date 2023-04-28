import styles from "../styles/home.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut, faTwitter } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LastTweets from "./LastTweets";
import Tweet from "./Tweet";
//import Trends from './Trends';

function Home() {
  const user = useSelector((state) => state.user.value);

  //récupération des tweets de tous les utilisateurs
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    // if (!user.token) {
      
    //   return;
    // }
    fetch(`http://localhost:3000/tweets/tweets/${user.token}`)
      .then((response) => response.json())
      .then(data => {
        console.log(data.allTweets)
        setAllTweets(data.allTweets);
      });
  }, []);

 


  const tousTweets = allTweets.map((data, i) => {
    return <LastTweets key={i} {...data} />;
  });

  // suppression d'un tweet par l'utilisateur
  //const [deleteTweet, setDeleteTweet] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3000/tweets/deleteTweet/${user.token}/${_id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDeleteTweet(deleteTweet);
  //     });
  // }, []);

  return (
    <div>
      <div className={styles.homeContainer}>
        <div className={styles.leftElement}>
          <img
            className={styles.logoTwitter}
            src="tweeterLogo.png"
            alt="logo Twitter"
          />
          <div className={styles.logoutContainer}>
            <FontAwesomeIcon icon={faUserAstronaut} className={styles.iconAstronaut}/>
            <span>username</span>
            <button>logout</button>
          </div>
        </div>

        <div className={styles.centerElement}>
          <div className={styles.tweetsContainer}>
            <Tweet />
          </div>
          <div className={styles.lastTweetsContainer}>{tousTweets}</div>
        </div>

        <div className={styles.rightElement}>
          <div className={styles.trendsContainer}>Composant trends</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
