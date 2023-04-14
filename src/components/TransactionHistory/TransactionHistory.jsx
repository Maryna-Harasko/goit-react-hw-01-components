import PropTypes from 'prop-types';
import { Table, TableHead, TableBody, Th, TRows, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({dataTransac}) =>{
  return (
    <Table>
  <TableHead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </TableHead>

  <TableBody>
    {dataTransac.map(({id, type, amount, currency}) => (
      <TRows key = {id}>
        <Td>{type}</Td>
        <Td>{amount}</Td>
        <Td>{currency}</Td>
      </TRows>
    ))}
  </TableBody>
</Table>
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