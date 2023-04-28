import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faHeart, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/lastTweets.module.css';

function LastTweets(props) {

  const [heartCount, setHeartCount] = useState(0);

  const handleLikeTweet = () => {
    setHeartCount(heartCount + 1);
  };
  let heartIconStyle = { 'cursor': 'pointer' };
  if (heartCount > 0) {
    heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  }

  
  return (
    
      <div className={styles.tweetContainer}>
        <div>
        <span><FontAwesomeIcon icon={faUserAstronaut} className="avatar"/></span>
          <span className={styles.name}>{props.username}</span>
          <p className={styles.description}>{props.date}</p>
        </div>
        <div className={styles.textContainer}>
          <span className={styles.content}>({props.content})</span>
          </div>
          <div>
          <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" />({heartCount})</span>
          <span><FontAwesomeIcon icon={faTrashCan} onClick={() => handleTrashTweet()} style={trashIconStyle} className="trash" /></span>
        </div>
      </div>
    
  );
}

export default LastTweets;



