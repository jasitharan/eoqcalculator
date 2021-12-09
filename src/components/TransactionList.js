import React, { useContext, useEffect } from 'react'
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <p>All prices are in Rupees (Rs.)</p>
      <ul className="list">
      <li>
          <span><span style={{color:'#2ecc71',marginRight:'8px'}}>&#9632;</span>Purchased</span>
          <span><span style={{color:'#c0392b',marginRight:'8px',marginLeft:'20px'}}>&#9632;</span>Issued</span>
          <span></span>
          <span></span>
          <span></span>
          <span>Balance</span>
          <span></span>
        </li>
        <li>
          <span>Date</span>
          <span>Quantity</span> 
          <span>Unit Price</span>
          <span>Value</span>
          <span>Quantity</span> 
          <span>Unit Price</span> 
          <span>Value</span>
        </li>
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}
