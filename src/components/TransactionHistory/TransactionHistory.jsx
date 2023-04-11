import PropTypes from 'prop-types';

export const TransactionHistory = ({dataTransac}) =>{
  return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {dataTransac.map(({id, type, amount, currency}) => (
      <tr key = {id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ))}
  </tbody>
</table>
  )
}

TransactionHistory.prototype = {
  dataTransac: PropTypes.arrayOf(
    PropTypes.shape([
      {
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      },
    ]) 
  )
}