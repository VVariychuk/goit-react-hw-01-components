/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css'

export default function FriendListItem ({ avatar, name, isOnline }) {
    return (
    <li className={styles.item}>
            <span className={isOnline? styles.online : styles.offline}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className="name">{ name}</p>
    </li> 
    )
 }


FriendListItem.PropTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
