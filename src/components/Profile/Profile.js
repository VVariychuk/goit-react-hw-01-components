import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';
import styles from './Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>        
           <img src={avatar}
                  alt="Аватар пользователя"
                  className={styles.avatar}
                  width="120"
              
            />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="s.location">{location}</p>
      </div>
        <ul className={styles.stats}>
          <li className={styles.statsItm}>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li className={styles.statsItm}>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li className={styles.statsItm}>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      
    </div>
  );
}

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,  
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};