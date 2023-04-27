//import styles from '../styles/Home.module.css';
import Head from "next/head";
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
    //  if (!user.token) {
    //      return;
    //  }
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
      <Head>
        <title>Hackatweet - Home</title>
      </Head>
      <div>composant tweet</div>
      <div>
        <div className={styles.container}>{tousTweets}</div>
      </div>
    </div>
  );
}

export default Home;
