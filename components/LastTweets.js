import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faHeart, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
//import styles from '../styles/globals.css';

function LastTweets(props) {

    //récupération des tweets de tous les utilisateurs

    const [allTweets, setAllTweets] = useState(0);
useEffect(() => {
    if (!user.token) {
        return;
    }
        fetch(`http://localhost:3000/tweets/${user.token}`)
          .then(response => response.json())
          .then(data => {
            setAllTweets(data.tweets);
          });
      }, []);




    
  
  return (
    <div className={styles.container}>
      <div className={styles.tweetContainer}>
        <div>
        <span><FontAwesomeIcon icon={faUserAstronaut} className="avatar"/></span>
          <span className={styles.name}>{props.username}</span>
          <p className={styles.description}>{props.date}</p>
        </div>
        <div className={styles.textContainer}>
          <span className={styles.content}>({props.content})</span>
          
          <span><FontAwesomeIcon icon={faHeart} onClick={() => heart()} style={heartIconStyle} className="like" /></span>
          <span><FontAwesomeIcon icon={faTrashCan} onClick={() => handleWatchMovie()} style={trashIconStyle} className="trash" /></span>
        </div>
      </div>
    </div>
  );
}

export default LastTweets;



