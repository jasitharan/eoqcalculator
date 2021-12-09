import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const { transactions } = useContext(GlobalContext);
  const [type, setType] = useState('');
  // const today = new Date().toISOString().substr(0,10);
  const [date, setDate] = useState('');
  let [units, setUnits] = useState(0);
  let [uprice, setUprice] = useState(0);
  let value = useState(0);
  const balanceUnits = transactions.map(transaction => transaction.units);
  const balanceValue = transactions.map(transaction => transaction.value);
  const newbalanceUnits = balanceUnits.reduce((acc, item) => (acc += item), 0);
  const newbalanceValue = balanceValue.reduce((acc, item) => (acc += item), 0);

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();
    let newTransaction;
    let newWacBalanceUnits;
    let newWacBalanceValue;
    let newWacUnitPrice;

    // () => setValue(units*uprice);
    if(type === "sub") {
      units = (-1)*units;
      newWacBalanceUnits = newbalanceUnits + parseInt(units);
      newWacUnitPrice = (newbalanceValue/newbalanceUnits).toFixed(2);
      newWacBalanceValue = (newWacBalanceUnits*newWacUnitPrice).toFixed(2);
      let transactionOutValue = (units*newWacUnitPrice).toFixed(2);

      newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        type,
        date,
        units: +units,
        uprice: +newWacUnitPrice,
        value: +transactionOutValue,
        wacunits: +newWacBalanceUnits,
        wacuprice: +newWacUnitPrice,
        wacvalue: +newWacBalanceValue
      }
    } else {
      value = units*uprice;
      newWacBalanceUnits = newbalanceUnits + parseInt(units);
      newWacBalanceValue = (newbalanceValue + parseFloat(value)).toFixed(2);
      newWacUnitPrice = (newWacBalanceValue/newWacBalanceUnits).toFixed(2);

      newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        type,
        date,
        units: +units,
        uprice: +uprice,
        value: +value,
        wacunits: +newWacBalanceUnits,
        wacuprice: +newWacUnitPrice,
        wacvalue: +newWacBalanceValue
      }
    }

    console.log(newTransaction);
    addTransaction(newTransaction);
  }

  return (
    <>
       <h3>Add new transaction of Inventory</h3>
      <form onSubmit={onSubmit}>
      <div>Select a transaction type</div>
        <div className="form-control type">
          <input type="radio" id="radioPurchase" name="type" value={type} onClick={() => {setType('add'); }} />
          <label htmlFor="radioPurchase">Purchase</label>
          <input type="radio" id="radioSell" name="type" value={type} onClick={() => setType('sub')} />
          <label htmlFor="radioSell">Used</label>
          <input type="radio" id="radioBalance" name="type" value={type} onClick={() => setType('add')} />
          <label htmlFor="radioBalance">Balance</label> 
        </div>

        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Quantity</label>
          <input name="amount" type="number" value={units} onChange={(e) => setUnits(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control unit-price" style={{display: type ==='sub' ? 'none':'block'}}>
          <label htmlFor="amount">Unit Price</label>
          <input name="amount" type="number" value={uprice} onChange={(e) => setUprice(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add inventory transaction</button>
      </form>
    </>
  )
}
