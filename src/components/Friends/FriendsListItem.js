/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';

export default function FriendListItem ({ avatar, name, isOnline }) {
    return (
    <li class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{ name}</p>
    </li> 
    )
 }


FriendListItem.PropTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
