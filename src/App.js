import React from 'react';
import Profile from './components/Profile/Profile';
import StatsList from './components/Statistics/StatsList';
import FriendsList from './components/Friends/FriendsList';
import TransactionList from './components/Transactions/TransactionList';
import { name, tag, location, avatar, stats } from './data/user.json';
import statsData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactions from './data/transactions.json';
import styles from './App.module.css'

const App = () => {
    return (
      <div className={styles.container}>
        <div>
         <Profile
            name={name}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
         />
        <StatsList title="Upload stats" statsData={statsData} />
        </div>
        
        <FriendsList friends={friendsData} />
        <TransactionList transactions={transactions} />
    </div>
        
    )
};

export default App;