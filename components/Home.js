//import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LastTweets from './LastTweets';
//import Tweets from './Tweets';
//import Trends from './Trends';

function Home() {
  //const user = useSelector((state) => state.user.value);

   //récupération des tweets de tous les utilisateurs

   const [allTweets, setAllTweets] = useState([]);

   useEffect(() => {
      //  if (!user.token) {
      //      return;
      //  }
           fetch(`http://localhost:3000/tweets/${user.token}`)
             .then(response => response.json())
             .then(data => {
               setAllTweets(data.tweets);
             });
         }, []);
   
    const Lasttweets = allTweets.map((data, i) => {
    return <LastTweets key={i} {...data} />;
     });


  return (
    <div>
    
      <h1>home</h1>
{LastTweets}
      
    </div>
  );
}

export default Home;
