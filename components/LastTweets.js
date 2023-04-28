import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faHeart, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/lastTweets.module.css';
import Moment from 'react-moment';

function LastTweets(props) {

  const [heartCount, setHeartCount] = useState(0);

  const handleLikeTweet = () => {
    setHeartCount(heartCount + 1);
  };
  let heartIconStyle = { 'cursor': 'pointer' };
  if (heartCount > 0) {
    heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  }
  
//
  //startOf('hour').fromNow()
  return (
    <div>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetInfo}>
        <span><FontAwesomeIcon icon={faUserAstronaut} className="avatar"/></span>
          <span className={styles.name}>{props.author}</span>
          <Moment startOf={props.date} />
          
        </div>
        <div className={styles.textContainer}>
          <span className={styles.content}>{props.content}</span>
          </div>
          <div className={styles.iconsContainer}>
          <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" />{heartCount}</span>
          <span><FontAwesomeIcon icon={faTrashCan} onClick={() => handleTrashTweet()} className="trash" /></span>
        </div>
      </div>
    </div>
    
  
  );
}

export default LastTweets;



