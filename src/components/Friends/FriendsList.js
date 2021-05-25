/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem'
import styles from './FriendsList.module.css'

export default function FriendsList ({friends}) {
  return (
    <ul className={styles.friendsList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendsListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
          )
         )
        }
    </ul>
  ) 
};

FriendsList.PropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,    
}