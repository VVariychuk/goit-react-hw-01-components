/* eslint-disable react/no-typos */
import PropTypes from 'prop-types'


export default function TransactionListItem({type, amount, currency}) {
    return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
}

TransactionListItem.PropTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,  
}