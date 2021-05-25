/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import TransactionListItem from './TransactionListItem';
import styles from './TransactionList.module.css'

export default function TransactionList({transactions}) {
return (
<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {transactions.map(({ id, type, amount, currency }) => (
      <TransactionListItem
        key={id}
        type={type}
        amount={amount}
        currency={currency}
      />
    ))}
  </tbody>
</table>
)
}

TransactionList.PropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,    
}