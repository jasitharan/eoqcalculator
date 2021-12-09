import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
// import { numberWithCommas } from '../utils/format';

export const FinalBalance = () => {
  const { transactions } = useContext(GlobalContext);

  // const units = transactions.map(transaction => transaction.units);
  // const quantity = units
  //   .reduce((acc, item) => (acc += item), 0);
  //const wacunits = transactions.map(transaction => transaction.wacunits);
 // const quantity = wacunits.length === 0 ? 0:wacunits[wacunits.length -1];

 //const wacPrices = transactions.map(transaction => transaction.wacuprice);
  // const unitPrice = wacPrices.length === 0 ? 0:wacPrices[wacPrices.length -1];

  // const value = transactions.map(transaction => transaction.value);
  // const total = (value.reduce((acc, item) => (acc += item), 0)).toFixed(2);
// const wacBalance = transactions.map(transaction => transaction.wacvalue);
 // const balance = wacBalance.length === 0 ? 0:wacBalance[wacBalance.length -1];
  var eoq = 0;

  const [demand, setDemand] = React.useState("");
  const [holding_cost, setHoldingCost] = React.useState("");
  const [order_cost, setOrderCost] = React.useState("");

 
  const onSubmit = e => {
    e.preventDefault();
    eoq = Math.sqrt((2*demand*order_cost)/holding_cost);
    document.getElementById("eoq").innerText = eoq;
  }



  return (
  <>
<form onSubmit={onSubmit}>
        <input type="number" step="0.001" name="demand" placeholder="Please enter Demand" value={demand} onChange={e => setDemand(e.target.value)}/>
        <input type="number" step="0.001" name="holding_cost"placeholder="Please enter Holding Cost" value={holding_cost} onChange={e => setHoldingCost(e.target.value)} />
        <input type="number" step="0.001" name="holding_cost"placeholder="Please enter Order Cost" value={order_cost} onChange={e => setOrderCost(e.target.value)} />
        <button className="btn">Calculate</button>
  </form>

    <div className="inc-exp-container">
      <div>
        <h4>EOQ</h4>
        <p className="money" id='eoq'>{eoq}</p>
      </div>
    </div>

  </>
  )
}
