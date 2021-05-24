/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem'

export default function FriendsList ({friends}) {
  return (
    <ul className="friend-list">
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