import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.units < 0 ? 'minus' : 'plus'}>
     <span className="date">{transaction.date.toString().split("T")[0]}</span>
      <span>{numberWithCommas(Math.abs(transaction.units))}</span>
      <span>{numberWithCommas(transaction.uprice)}</span>
      <span>{numberWithCommas(Math.abs(transaction.value))}</span>
      <span>{numberWithCommas(transaction.wacunits)}</span>
      <span>{numberWithCommas(transaction.wacuprice)}</span>
      <span>{numberWithCommas(transaction.wacvalue)}</span>
      <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}
