import React from 'react'
// import { numberWithCommas } from '../utils/format';

export const FinalBalance = () => {

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
        <input type="number" step="0.001" name="order_cost"placeholder="Please enter Order Cost" value={order_cost} onChange={e => setOrderCost(e.target.value)} />
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
